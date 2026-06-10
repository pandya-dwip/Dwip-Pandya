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
  // Activate momentum smooth scroll
  useLenis();
  
  // Register magnetic elements
  useMagnetic();

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
    </div>
  );
}
