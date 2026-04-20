import React from 'react';
import { Outlet } from 'react-router-dom';
import { BottomNavBar } from '@/components/ui/bottom-nav-bar';

const Layout = () => {
    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 flex flex-col transition-colors duration-300">
            <div className="flex-grow">
                <Outlet />
            </div>
            <BottomNavBar />
            <footer className="w-full py-8 text-center border-t border-border bg-background z-10 relative mb-20 md:mb-0 transition-colors duration-300">
                <p className="text-muted-foreground text-xs uppercase tracking-[0.2em] font-light">
                    &copy; 2025 Oshadha Jayaweera. All Rights Reserved
                </p>
            </footer>
        </div>
    );
};

export default Layout;