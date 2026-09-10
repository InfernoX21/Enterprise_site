import React, { createContext, useContext, useEffect, useState } from 'react';

export interface NavigationContextType {
  currentPath: string;
  navigate: (path: string, options?: { scrollToId?: string; demoInterest?: string }) => void;
  selectedDemoInterest: string;
  setSelectedDemoInterest: (interest: string) => void;
  isQuickJumpOpen: boolean;
  setIsQuickJumpOpen: (open: boolean) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });
  const [selectedDemoInterest, setSelectedDemoInterest] = useState<string>('ARKA');
  const [isQuickJumpOpen, setIsQuickJumpOpen] = useState<boolean>(false);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Keyboard shortcut Cmd+K / Ctrl+K for quick jump
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsQuickJumpOpen(prev => !prev);
      } else if (e.key === 'Escape' && isQuickJumpOpen) {
        setIsQuickJumpOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isQuickJumpOpen]);

  const navigate = (path: string, options?: { scrollToId?: string; demoInterest?: string }) => {
    if (options?.demoInterest) {
      setSelectedDemoInterest(options.demoInterest);
    }

    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      
      if (!options?.scrollToId) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }

    if (options?.scrollToId) {
      setTimeout(() => {
        const el = document.getElementById(options.scrollToId!);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  return (
    <NavigationContext.Provider
      value={{
        currentPath,
        navigate,
        selectedDemoInterest,
        setSelectedDemoInterest,
        isQuickJumpOpen,
        setIsQuickJumpOpen
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = (): NavigationContextType => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
