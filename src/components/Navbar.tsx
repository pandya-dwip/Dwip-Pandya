import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Initialize theme
  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark') || 
                   (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const nextDark = !darkMode;
    setDarkMode(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Shrink navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section via intersection observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -50% 0px', // Focus on middle-top of screen
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    navItems.forEach((item) => {
      const el = document.getElementById(item.href.substring(1));
      if (el) observer.observe(el);
    });

    return () => {
      navItems.forEach((item) => {
        const el = document.getElementById(item.href.substring(1));
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const lenis = (window as any).lenis;
      if (lenis) {
        // lenis scroll is smooth and handles scroll offsets
        lenis.scrollTo(element, { offset: -90 });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setActiveSection(targetId);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 md:px-12 flex justify-between items-center">
        {/* Logo / Name */}
        <motion.a 
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg font-bold tracking-tight text-brand-text cursor-pointer flex items-center gap-2"
        >
          <span className="h-2 w-2 rounded-full bg-brand-primary animate-pulse" />
          DWIP PANDYA
          <span className="text-xs font-mono font-normal opacity-50 px-1.5 py-0.5 rounded border border-brand-border bg-brand-surface/40 hidden sm:inline-block">SDET</span>
        </motion.a>

        {/* Desktop Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className={`hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-500 glass-nav ${
            scrolled ? 'scale-95 shadow-lg border-brand-border/80' : 'border-transparent'
          }`}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300 rounded-full select-none ${
                  isActive ? 'text-brand-text' : 'text-brand-text-muted hover:text-brand-text'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activePill"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="absolute inset-0 bg-brand-surface rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-brand-border/60 z-[-1]"
                  />
                )}
                {item.name}
              </a>
            );
          })}
        </motion.nav>

        {/* Right Side Options: Theme Toggle & Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Light/Dark Toggle */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={toggleDarkMode}
            className="magnetic p-2.5 rounded-full border border-brand-border hover:bg-brand-surface/80 text-brand-text transition-all duration-300 relative overflow-hidden"
            aria-label="Toggle light/dark mode"
          >
            <motion.div
              animate={{ rotate: darkMode ? 180 : 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {darkMode ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-slate-700" />}
            </motion.div>
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-full border border-brand-border text-brand-text hover:bg-brand-surface/80 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="absolute top-20 left-6 right-6 p-6 rounded-2xl glass-panel border border-brand-border shadow-2xl flex flex-col gap-4 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-4 py-3 rounded-xl text-base font-semibold tracking-wide transition-colors duration-300 ${
                      isActive 
                        ? 'bg-brand-primary/10 text-brand-primary' 
                        : 'text-brand-text hover:bg-brand-surface'
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
