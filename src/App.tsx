import React from 'react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { QuickJumpModal } from './components/common/QuickJumpModal';
import { SpatialBackdrop } from './components/common/SpatialBackdrop';

// Pages
import { HomePage } from './pages/HomePage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { ProductsListPage } from './pages/ProductsListPage';
import { PlatformPage } from './pages/PlatformPage';
import { TechnologyPage } from './pages/TechnologyPage';
import { ApplicationsPage } from './pages/ApplicationsPage';
import { ResearchPage } from './pages/ResearchPage';
import { CompanyPage } from './pages/CompanyPage';
import { DemoPage } from './pages/DemoPage';
import { AuthPage, AccountPage } from './pages/AuthPages';

const AppContent: React.FC = () => {
  const { currentPath } = useNavigation();

  const renderRoute = () => {
    if (currentPath === '/signin') return <AuthPage mode='signin' />;
    if (currentPath === '/signup') return <AuthPage mode='signup' />;
    if (currentPath === '/account' || currentPath.startsWith('/account/')) return <AccountPage />;

    if (currentPath === '/' || currentPath === '') {
      return <HomePage />;
    }

    if (currentPath.startsWith('/products/')) {
      const slug = currentPath.replace('/products/', '');
      return <ProductDetailPage slug={slug} />;
    }

    if (currentPath === '/products') {
      return <ProductsListPage />;
    }

    if (currentPath === '/platform') {
      return <PlatformPage />;
    }

    if (currentPath === '/technology') {
      return <TechnologyPage />;
    }

    if (currentPath === '/applications') {
      return <ApplicationsPage />;
    }

    if (currentPath === '/research') {
      return <ResearchPage />;
    }

    if (currentPath === '/company') {
      return <CompanyPage />;
    }

    if (currentPath === '/demo' || currentPath === '/contact') {
      return <DemoPage />;
    }

    // Default fallback
    return <HomePage />;
  };

  return (
    <div className="arka-shell min-h-screen flex flex-col bg-[#050505] text-white selection:bg-white selection:text-black">
      <SpatialBackdrop />
      <Header />
      <main className="relative z-10 flex-1">
        {renderRoute()}
      </main>
      <Footer />
      <QuickJumpModal />
    </div>
  );
};

export default function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
}

