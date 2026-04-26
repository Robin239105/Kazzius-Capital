import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logoImg from '@/assets/a4053edf-271a-407b-9e47-48a310d3bbd2.png';

const NAV_ITEMS = [
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled ? 'bg-background/95 backdrop-blur-xl shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-6">
          <Link to="/" className="flex items-center group">
            <img
              src={logoImg}
              alt="Kazzius Capital"
              className="h-[5rem] md:h-[6.25rem] w-auto"
              style={{ mixBlendMode: 'multiply' }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-10">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-xs tracking-widest uppercase transition-colors duration-500 hover:text-accent ${
                  location.pathname === item.path ? 'text-accent' : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}

            <div className="flex items-center gap-4 ml-4 border-l border-border/50 pl-6 lg:pl-8">
              <Link
                to="/login"
                className="text-xs tracking-widest uppercase px-6 h-[38px] flex items-center justify-center border border-brand-purple text-brand-purple rounded-sm transition-all duration-300 hover:bg-brand-purple hover:text-white"
              >
                Login
              </Link>
              
              <div className="relative group overflow-hidden border border-brand-purple rounded-sm h-[38px] w-[200px] flex items-center justify-center transition-all duration-300 hover:bg-brand-purple hover:text-white cursor-default text-brand-purple">
                <span className="absolute transition-all duration-300 transform group-hover:-translate-y-12 text-xs tracking-widest uppercase">Sign Up</span>
                <div className="absolute flex items-center justify-center gap-2 transition-all duration-300 transform translate-y-12 group-hover:translate-y-0 text-[10px] tracking-wider uppercase w-full">
                  <a href="https://kazziuscapital.numito.com/onboarding" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">Corporate</a>
                  <span>/</span>
                  <a href="https://kazziuscapital.numito.com/onboarding" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">Individual</a>
                </div>
              </div>
            </div>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-foreground"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Hairline */}
        <div className={`hairline transition-opacity duration-700 ${scrolled ? 'opacity-100' : 'opacity-0'}`} />
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-12"
          >
            {NAV_ITEMS.map((item, i) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
              >
                <Link
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`font-heading text-3xl tracking-widest uppercase transition-colors duration-500 hover:text-accent ${
                    location.pathname === item.path ? 'text-accent' : 'text-foreground'
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: NAV_ITEMS.length * 0.1 + 0.2, duration: 0.5 }}
              className="flex flex-col items-center gap-8 mt-4 pt-8 border-t border-border/50 w-2/3 max-w-xs"
            >
              <Link
                to="/login"
                onClick={() => setMobileOpen(false)}
                className="w-full flex items-center justify-center text-sm tracking-widest uppercase px-8 py-4 border border-brand-purple text-brand-purple rounded-sm transition-all duration-300 hover:bg-brand-purple hover:text-white"
              >
                Login
              </Link>
              
              <div className="relative group overflow-hidden border border-brand-purple rounded-sm h-[52px] w-full flex items-center justify-center transition-all duration-300 hover:bg-brand-purple hover:text-white cursor-pointer text-brand-purple">
                <span className="absolute transition-all duration-300 transform group-hover:-translate-y-16 text-sm tracking-widest uppercase">Sign Up</span>
                <div className="absolute flex items-center justify-center gap-4 transition-all duration-300 transform translate-y-16 group-hover:translate-y-0 text-xs tracking-wider uppercase w-full">
                  <a href="https://kazziuscapital.numito.com/onboarding" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors" onClick={() => setMobileOpen(false)}>Corporate</a>
                  <span>/</span>
                  <a href="https://kazziuscapital.numito.com/onboarding" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors" onClick={() => setMobileOpen(false)}>Individual</a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
