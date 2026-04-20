
"use client";

import { useState, useEffect, startTransition } from "react";
import { motion, LayoutGroup } from "framer-motion";
import {
  Home,
  User,
  Briefcase,
  BookOpen,
  Mail,
  Sun,
  Moon
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "@/components/theme-provider";

// Mapping navigation items for the portfolio
const navItems = [
  { label: "Home", icon: Home, path: "/", sectionId: "hero" },
  { label: "About", icon: User, path: "/about" },
  { label: "Work", icon: Briefcase, path: "/work" },
  { label: "Blog", icon: BookOpen, path: "/blog" },
  { label: "Contact", icon: Mail, path: "/contact" },
];

type BottomNavBarProps = {
  className?: string;
  defaultIndex?: number;
  stickyBottom?: boolean;
};

export function BottomNavBar({
  className,
  stickyBottom = true, 
}: BottomNavBarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);
  const { theme, setTheme } = useTheme();

  // Sync active index with current route/hash
  useEffect(() => {
      // Determine active index based on path or hash
      const pathname = location.pathname;
      const index = navItems.findIndex(item => item.path === pathname);
      // Only update if index is valid and different to avoid redundant renders
      if (index !== -1 && index !== activeIndex) {
        setActiveIndex(index);
      }
  }, [location, activeIndex]);

  const handleNavigation = (index: number) => {
    // Immediately set active index for responsive UI feedback
    setActiveIndex(index);
    const item = navItems[index];

    if (item.sectionId && location.pathname === "/") {
        // Handle Home anchor scrolling if on home page
        const element = document.getElementById(item.sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    } else {
        // Handle Page Routing with startTransition to avoid UI freezing
        startTransition(() => {
            navigate(item.path!);
        });
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      role="navigation"
      aria-label="Main Navigation"
      className={cn(
        "bg-background/80 backdrop-blur-xl border border-border rounded-full flex items-center justify-between shadow-2xl shadow-black/10",
        "h-16 px-2", // Reduced height to h-16 (64px)
        "gap-2", 
        "min-w-fit", // Fit content
        stickyBottom && "fixed inset-x-0 top-6 mx-auto z-50 w-fit",
        className,
      )}
    >
      <LayoutGroup>
        {navItems.map((item, idx) => {
          const Icon = item.icon;
          const isActive = activeIndex === idx;

          return (
            <motion.button
              layout
              key={item.label}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "relative flex items-center justify-center rounded-full transition-colors duration-300",
                "h-10 px-4 min-w-[44px]", // Consistent sizing
                isActive
                  ? "bg-foreground text-background"
                  : "bg-transparent text-muted-foreground hover:text-foreground hover:bg-foreground/10"
              )}
              onClick={() => handleNavigation(idx)}
              aria-label={item.label}
              type="button"
            >
              <Icon
                size={20}
                strokeWidth={2}
                className="z-10 relative"
              />

              <motion.div
                initial={false}
                animate={{
                  width: isActive ? "auto" : 0,
                  opacity: isActive ? 1 : 0,
                  marginLeft: isActive ? 8 : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
                className="overflow-hidden flex items-center"
              >
                {isActive && (
                  <motion.span
                    layout
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    className="text-sm font-medium whitespace-nowrap pr-1"
                  >
                    {item.label}
                  </motion.span>
                )}
              </motion.div>
            </motion.button>
          );
        })}
      </LayoutGroup>

      {/* Theme Toggle Separator */}
      <div className="h-6 w-px bg-border mx-1" />

      {/* Theme Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center justify-center rounded-full transition-colors duration-300 h-10 w-10 text-muted-foreground hover:text-foreground hover:bg-foreground/10"
        onClick={toggleTheme}
        aria-label="Toggle Theme"
        type="button"
      >
        <motion.div
          initial={false}
          animate={{ rotate: theme === "dark" ? 0 : 180 }}
          transition={{ duration: 0.3 }}
        >
          {theme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
        </motion.div>
      </motion.button>

    </motion.nav>
  );
}

export default BottomNavBar;
