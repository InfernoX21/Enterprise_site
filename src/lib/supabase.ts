import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isAuthConfigured = Boolean(url && anonKey);

// A placeholder client is never used for requests: it lets the public site render
// a clear configuration state without exposing any credentials in source code.
export const supabase = createClient(
  url || 'https://not-configured.supabase.co',
  anonKey || 'not-configured',
  { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true } },
);
