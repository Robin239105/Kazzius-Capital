import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

export default function SiteLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Suspense fallback={
          <div className="flex-grow flex items-center justify-center py-32">
            <div className="w-6 h-6 border-2 border-muted-foreground/20 border-t-accent rounded-full animate-spin"></div>
          </div>
        }>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
