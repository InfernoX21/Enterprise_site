import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { User } from '@supabase/supabase-js';
import { isAuthConfigured, supabase } from '../lib/supabase';

export type Profile = { full_name: string; email: string; phone: string | null; country: string | null; organization: string | null; role: string | null; job_title: string | null; avatar_url: string | null; created_at?: string };
type OtpDestination = { kind: 'email' | 'phone'; value: string; display: string };
type AuthContextValue = {
  user: User | null; profile: Profile | null; loading: boolean; configured: boolean; otpDestination: OtpDestination | null;
  requestOtp: (destination: OtpDestination, metadata?: Record<string, string>) => Promise<void>;
  verifyOtp: (code: string) => Promise<void>; signInWithGoogle: () => Promise<void>; signOut: () => Promise<void>;
  updateProfile: (changes: Partial<Profile>) => Promise<void>; setOtpDestination: (destination: OtpDestination | null) => void;
  signOutOthers: () => Promise<void>; deleteAccount: () => Promise<void>;
};
const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const profileFromUser = (user: User): Profile => ({
  full_name: user.user_metadata.full_name || user.user_metadata.name || '', email: user.email || '',
  phone: user.phone || null, country: user.user_metadata.country || null, organization: user.user_metadata.organization || null,
  role: user.user_metadata.role || null, job_title: user.user_metadata.job_title || null, avatar_url: user.user_metadata.avatar_url || null,
  created_at: user.created_at,
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null); const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true); const [otpDestination, setOtpDestination] = useState<OtpDestination | null>(null);
  const loadProfile = useCallback(async (nextUser: User | null) => {
    setUser(nextUser);
    if (!nextUser) { setProfile(null); return; }
    const fallback = profileFromUser(nextUser);
    const { data } = await supabase.from('profiles').select('*').eq('id', nextUser.id).maybeSingle();
    setProfile(data ? { ...fallback, ...data } : fallback);
  }, []);
  useEffect(() => {
    if (!isAuthConfigured) { setLoading(false); return; }
    supabase.auth.getUser().then(({ data }) => { loadProfile(data.user); setLoading(false); });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => { loadProfile(session?.user ?? null); setLoading(false); });
    return () => subscription.unsubscribe();
  }, [loadProfile]);
  const requestOtp = async (destination: OtpDestination, metadata: Record<string, string> = {}) => {
    if (!isAuthConfigured) throw new Error('Authentication has not been configured for this deployment.');
    const options = destination.kind === 'email' ? { emailRedirectTo: `${window.location.origin}/account`, data: metadata } : { data: metadata };
    const { error } = destination.kind === 'email' ? await supabase.auth.signInWithOtp({ email: destination.value, options }) : await supabase.auth.signInWithOtp({ phone: destination.value, options });
    if (error) throw error; setOtpDestination(destination);
  };
  const verifyOtp = async (code: string) => {
    if (!otpDestination) throw new Error('Your verification session has expired. Start again.');
    const { error } = await supabase.auth.verifyOtp(otpDestination.kind === 'email' ? { email: otpDestination.value, token: code, type: 'email' } : { phone: otpDestination.value, token: code, type: 'sms' });
    if (error) throw error;
  };
  const signInWithGoogle = async () => {
    if (!isAuthConfigured) throw new Error('Google authentication has not been configured for this deployment.');
    const { error } = await supabase.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: `${window.location.origin}/account` } }); if (error) throw error;
  };
  const signOut = async () => { const { error } = await supabase.auth.signOut(); if (error) throw error; };
  const updateProfile = async (changes: Partial<Profile>) => {
    if (!user) throw new Error('Sign in to update your profile.');
    const { error } = await supabase.from('profiles').upsert({ id: user.id, ...changes, updated_at: new Date().toISOString() }); if (error) throw error;
    setProfile(current => current ? { ...current, ...changes } : null);
  };
  const signOutOthers = async () => { const { error } = await supabase.auth.signOut({ scope: 'others' }); if (error) throw error; };
  const deleteAccount = async () => { const { error } = await supabase.functions.invoke('delete-account'); if (error) throw new Error('Account deletion is unavailable. Please contact ARKA support.'); await signOut(); };
  const value = useMemo(() => ({ user, profile, loading, configured: isAuthConfigured, otpDestination, requestOtp, verifyOtp, signInWithGoogle, signOut, updateProfile, setOtpDestination, signOutOthers, deleteAccount }), [user, profile, loading, otpDestination]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export const useAuth = () => { const value = useContext(AuthContext); if (!value) throw new Error('useAuth must be used within AuthProvider'); return value; };

