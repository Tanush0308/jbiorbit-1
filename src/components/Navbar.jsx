import React, { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Sun, Moon, LogOut, Coins } from 'lucide-react';
import { RouteContext } from '../App';
import { useAppContext } from '../context/AppContext';
import MegaMenu from './MegaMenu';

const navLinks = [
  { name: 'Platform', hasDropdown: true },
  { name: 'Solutions', hasDropdown: true },
  { name: 'Resources', hasDropdown: true },
  { name: 'Company', hasDropdown: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  
  const { setRoute, setIsAuthModalOpen } = useContext(RouteContext) || {};
  const { theme, toggleTheme, user, logout, tokens } = useAppContext();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleProfileClick = () => {
    if (user) {
      // Go to correct dashboard based on role
      switch(user.role) {
        case 'Student': setRoute('dashboard_student'); break;
        case 'Entrepreneur / MSME': setRoute('dashboard_entrepreneur'); break;
        case 'Enterprise': setRoute('dashboard_enterprise'); break;
        case 'Mentor / JBI Alliance Partner': setRoute('dashboard_mentor'); break;
        case 'JBI Team / Super Admin': setRoute('dashboard_admin'); break;
        default: setRoute('dashboard_student');
      }
    } else {
      setIsAuthModalOpen(true);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b ${
        scrolled
          ? 'py-4 glass-panel shadow-sm border-brand-border dark:border-brand-dark-border'
          : 'py-7 glass-panel shadow-sm border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setRoute && setRoute('landing')}>
          <div className="w-10 h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="4" fill="url(#logoGrad)" />
              <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(45 12 12)" stroke="url(#logoGrad)" strokeWidth="2"/>
              <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-45 12 12)" stroke="url(#logoGrad)" strokeWidth="2"/>
              <defs>
                <linearGradient id="logoGrad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#075A9D" />
                  <stop offset="1" stopColor="#4C88B8" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="font-heading font-extrabold text-xl tracking-tight text-brand-primary-900 dark:text-white">
            JBI <span className="text-gradient">Orbit</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div 
          className="hidden lg:flex items-center gap-1 h-full"
          onMouseLeave={() => setHoveredItem(null)}
        >
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative px-4 py-2 cursor-pointer group h-full flex items-center"
              onMouseEnter={() => setHoveredItem(link.name)}
              onClick={() => {
                if (link.name === 'Company' && setRoute) setRoute('about');
                if (link.name === 'Platform' && setRoute) setRoute('landing');
              }}
            >
              <div className="flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                {link.name}
                {link.hasDropdown && (
                  <ChevronDown size={14} className="opacity-50 group-hover:opacity-100 group-hover:rotate-180 transition-transform duration-300" />
                )}
              </div>
              
              {/* Animated Underline */}
              <AnimatePresence>
                {hoveredItem === link.name && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-primary-500 rounded-full mx-4"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                )}
              </AnimatePresence>
            </div>
          ))}
          
          {/* Mega Menu Overlay */}
          <div className="absolute left-0 right-0 top-full">
            <MegaMenu 
              activeMenu={hoveredItem} 
              onMouseEnter={() => {}} 
              onMouseLeave={() => setHoveredItem(null)} 
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme} 
            className="hidden p-2 rounded-full hover:bg-slate-50 dark:hover:bg-slate-50 text-slate-600 dark:text-slate-600 transition-colors"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          {user ? (
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-primary-500/10 text-brand-primary-500 text-sm font-bold border border-brand-primary-500/20" title="Your Token Balance">
                <Coins size={16} />
                <span>{tokens}</span>
              </div>
              <button 
                onClick={handleProfileClick}
                className="hidden md:flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white hover:text-brand-primary-500 dark:hover:text-brand-primary-500 transition-colors"
              >
                {user.role} Dashboard
              </button>
              <button 
                onClick={logout}
                className="p-2 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20 text-red-500 transition-colors"
                title="Logout"
              >
                <LogOut size={18} />
              </button>
            </div>
          ) : (
            <button 
              onClick={handleProfileClick}
              className="hidden md:flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-slate-200 hover:text-brand-primary-500 dark:hover:text-brand-primary-400 transition-colors"
            >
              Profile / Login
            </button>
          )}

          <button 
            onClick={handleProfileClick}
            className="px-5 py-2.5 rounded-full bg-brand-primary-500 text-white text-sm font-semibold hover:scale-105 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            Launch Platform
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </motion.nav>
  );
}
