import React, { useState } from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { ArkaLogo } from './ArkaLogo';
import { Search, Menu, X, ArrowRight, User, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const Header: React.FC = () => {
  const { currentPath, navigate, setIsQuickJumpOpen } = useNavigation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const { user, profile, signOut } = useAuth();

  const navItems = [
    { label: 'PLATFORM', path: '/platform' },
    { label: 'PRODUCTS', path: '/products' },
    { label: 'TECHNOLOGY', path: '/technology' },
    { label: 'APPLICATIONS', path: '/applications' },
    { label: 'RESEARCH', path: '/research' },
    { label: 'COMPANY', path: '/company' }
  ];

  const handleNavClick = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    if (path === '/products') {
      return currentPath.startsWith('/products');
    }
    return currentPath === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/72 backdrop-blur-xl border-b border-white/10 transition-colors duration-200 shadow-[0_10px_28px_rgba(0,0,0,0.16)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          id="nav-logo-btn"
          onClick={() => handleNavClick('/')}
          className="focus:outline-hidden group cursor-pointer text-left"
          aria-label="ARKA Home"
        >
          <ArkaLogo variant="compact" />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => {
            const active = isActive(item.path);
            return (
              <button
                key={item.path}
                id={`nav-link-${item.label.toLowerCase()}`}
                onClick={() => handleNavClick(item.path)}
                className={`text-[11px] font-mono-tech uppercase tracking-[0.2em] transition-colors py-1 relative cursor-pointer ${
                  active ? 'text-white font-medium' : 'text-neutral-400 hover:text-white'
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#d96b2b] rounded-full shadow-[0_0_10px_rgba(217,107,43,0.5)]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Quick Search Shortcut button */}
          <button
            id="nav-search-trigger"
            onClick={() => setIsQuickJumpOpen(true)}
            className="flex items-center gap-2 px-2.5 py-1.5 rounded-xs border border-white/10 text-neutral-400 hover:text-white hover:border-white/30 text-[11px] font-mono-tech transition-colors cursor-pointer bg-white/5"
            title="Press Cmd+K or Ctrl+K to search"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="text-[10px] text-neutral-400">SEARCH</span>
            <kbd className="text-[9px] px-1 py-0.2 bg-white/10 border border-white/10 rounded-xs text-neutral-300">
              âŒ˜K
            </kbd>
          </button>

          <div className="relative">
            {user ? <button onClick={() => setAccountOpen(!accountOpen)} className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/8 text-xs font-medium" aria-label="Open account menu">{(profile?.full_name || user.email || 'A').slice(0,1).toUpperCase()}</button> : <button onClick={() => handleNavClick('/signin')} className="text-[11px] font-mono-tech tracking-[.15em] text-neutral-300 hover:text-white">SIGN IN</button>}
            {user && accountOpen && <div className="absolute right-0 top-10 w-64 border border-white/15 bg-[#0b0e12]/95 p-3 shadow-2xl backdrop-blur-xl"><div className="border-b border-white/10 px-2 pb-3"><p className="text-sm text-white">{profile?.full_name || 'ARKA operator'}</p><p className="mt-1 truncate text-xs text-neutral-500">{profile?.email || user.email}</p></div><div className="pt-2 text-xs font-mono-tech"><button onClick={() => {handleNavClick('/account/profile');setAccountOpen(false)}} className="block w-full px-2 py-2 text-left text-neutral-300 hover:bg-white/7 hover:text-white">VIEW PROFILE</button><button onClick={() => {handleNavClick('/account/security');setAccountOpen(false)}} className="block w-full px-2 py-2 text-left text-neutral-300 hover:bg-white/7 hover:text-white">SECURITY</button><button onClick={() => signOut().then(()=>handleNavClick('/'))} className="mt-1 flex w-full items-center gap-2 border-t border-white/10 px-2 pt-3 text-left text-neutral-400 hover:text-white"><LogOut size={13}/> SIGN OUT</button></div></div>}
          </div>          {/* Request Demo CTA */}
          <button
            id="nav-request-demo-btn"
            onClick={() => handleNavClick('/demo')}
            className={`px-3.5 py-1.5 text-[11px] uppercase tracking-[0.16em] font-mono-tech transition-all cursor-pointer rounded-xs flex items-center gap-1.5 ${
              currentPath === '/demo'
                ? 'bg-white text-black font-semibold'
                : 'bg-white text-black hover:bg-neutral-100 hover:-translate-y-px'
            }`}
          >
            <span>REQUEST DEMO</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            id="mobile-search-btn"
            onClick={() => setIsQuickJumpOpen(true)}
            className="p-2 text-neutral-400 hover:text-white focus:outline-hidden"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-300 hover:text-white focus:outline-hidden cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-white/10 bg-[#070707] px-5 py-6 space-y-4 animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`text-left text-xs font-mono-tech tracking-[0.2em] py-2 border-b border-white/5 flex items-center justify-between ${
                    active ? 'text-white font-medium pl-2 border-l-2 border-white' : 'text-neutral-400'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-3 h-3 opacity-60" />
                </button>
              );
            })}
          </div>

          <div className="pt-3">
            <button
              onClick={() => handleNavClick('/demo')}
              className="w-full py-2.5 bg-white text-black text-center text-xs font-mono-tech uppercase tracking-[0.2em] font-semibold rounded-xs"
            >
              REQUEST DEMO
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

