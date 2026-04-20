import React, { useEffect } from 'react';
import { BrowserRouter, HashRouter, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import { AppRouter } from '@/router/AppRouter';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Detect if we are in production or preview environment
const isProductionDomain = () => {
  if (typeof window === 'undefined') return false;
  // Check if current hostname is the production domain
  return window.location.hostname.includes('oshadha.me');
};

export default function App() {
  const isProduction = isProductionDomain();
  
  // Use BrowserRouter only in production (oshadha.me) to get clean URLs like /about.
  // Use HashRouter in preview environments to ensure the app loads correctly and avoids "No routes matched" errors due to dynamic subpaths.
  const Router = isProduction ? BrowserRouter : HashRouter;

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme-v2">
        <Router>
          <ScrollToTop />
          <AppRouter />
        </Router>
    </ThemeProvider>
  );
}