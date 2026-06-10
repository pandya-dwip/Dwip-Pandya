import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import useLenis from './hooks/useLenis';
import useMagnetic from './hooks/useMagnetic';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Activate momentum smooth scroll
  useLenis();
  
  // Register magnetic elements
  useMagnetic();

  // Scroll listener to toggle showScrollTop button
  useEffect(() => {
    const handleScroll = () => {
      // Show button once scrolled past hero section (approx 350px)
      setShowScrollTop(window.scrollY > 350);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackToTop = () => {
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.scrollTo('#home');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-brand-bg text-brand-text transition-colors duration-300">
      {/* Cinematic Grain/Noise Overlay */}
      <div className="noise-overlay" />

      {/* Floating Header */}
      <Navbar />

      {/* Structured Sections */}
      <main className="w-full flex flex-col">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer Details */}
      <Footer />

      {/* Floating Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={handleBackToTop}
            className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-brand-surface/80 backdrop-blur-md text-brand-text-muted hover:text-brand-primary border border-brand-border/80 hover:border-brand-primary/50 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:shadow-[0_0_25px_rgba(59,130,246,0.25)] transition-all duration-300 flex items-center justify-center cursor-pointer group"
            aria-label="Back to top"
          >
            <motion.div
              variants={{
                hover: { y: -3 }
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 12 }}
            >
              <ArrowUp size={18} />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
