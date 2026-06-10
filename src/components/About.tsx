import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Shield, Bug, Database, Layers, Terminal, Award } from 'lucide-react';

interface Stat {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const stats: Stat[] = [
  { value: 1200, suffix: '+', label: 'Automated Tests', description: 'Written and maintained specs' },
  { value: 35, suffix: 's', label: 'Regression Duration', description: 'Manual 10m cycles automated to 35s' },
  { value: 4, suffix: 'x', label: 'Parallel Acceleration', description: 'Test suite run speedup' },
  // { value: 30, suffix: '%', label: 'Query Optimization', description: 'Viaansh backend latency speedup' },
];

function Counter({ value, suffix, duration = 1.5 }: { value: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const isFloat = !Number.isInteger(value);
    
    // Total steps based on 60fps
    const totalFrames = Math.round(duration * 60);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease out quadratic
      const easeProgress = progress * (2 - progress);
      const current = start + (end - start) * easeProgress;

      if (frame >= totalFrames) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(isFloat ? Math.round(current * 10) / 10 : Math.round(current));
      }
    }, 1000 / 60);

    return () => clearInterval(counter);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-mono text-4xl sm:text-5xl font-black tracking-tight text-brand-text">
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center py-24 px-6 md:px-12 bg-brand-surface/25 overflow-hidden"
    >
      {/* Background glow orb */}
      <div className="absolute w-[35vw] h-[35vw] rounded-full bg-teal-500/5 dark:bg-teal-600/5 glow-blob top-1/2 left-10 pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-150px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
        >
          {/* Left Column: Big Philosophy Typography */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-brand-primary" />
              <span className="text-xs font-mono font-bold tracking-widest text-brand-primary uppercase">About & Summary</span>
            </motion.div>

            <motion.h2 
              variants={itemVariants}
              className="text-4xl sm:text-5xl font-black tracking-tight text-brand-text mb-8 leading-[1.15]"
            >
              Building Resilient Systems <br />
              Through Continuous Assurance.
            </motion.h2>

            <motion.div variants={itemVariants} className="space-y-6 text-brand-text-muted text-base sm:text-lg leading-relaxed">
              <p>
                I am an **SDET / QA Automation Engineer** with a backend development background in Laravel and PHP. I specialize in building production-grade, POM-based web and mobile automation frameworks in Playwright and Flutter.
              </p>
              <p>
                Leveraging API validation and continuous integration flows, my core focus is to eliminate manual pipelines, boost runtime performance, and ensure end-to-end engineering reliability.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Key QA Pillars and Stats Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {/* Stat Counters */}
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-panel border border-brand-border/60 rounded-2xl p-6 flex flex-col justify-between items-start hover:border-brand-text/20 transition-colors duration-300"
              >
                <div className="flex justify-between items-center w-full mb-4">
                  <Counter value={stat.value} suffix={stat.suffix} />
                  <span className="p-2.5 rounded-xl bg-brand-primary/5 text-brand-primary">
                    {index === 0 && <Shield size={18} />}
                    {index === 1 && <Target size={18} />}
                    {index === 2 && <Bug size={18} />}
                    {index === 3 && <Database size={18} />}
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-brand-text mb-1 tracking-wide">{stat.label}</h3>
                  <p className="text-xs text-brand-text-muted leading-relaxed">{stat.description}</p>
                </div>
              </motion.div>
            ))}

            {/* Core Competencies badges */}
            <motion.div
              variants={itemVariants}
              className="sm:col-span-2 glass-panel border border-brand-border/60 rounded-2xl p-6 relative overflow-hidden bg-gradient-to-br from-brand-surface to-brand-primary/5"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                <Terminal size={120} />
              </div>
              <h3 className="text-sm font-bold font-mono text-brand-primary mb-3 uppercase tracking-widest flex items-center gap-2">
                <Layers size={14} /> Core Competency Focus
              </h3>
              <p className="text-sm text-brand-text-muted leading-relaxed mb-4 text-left">
                Developing modern, modular test frameworks utilizing Playwright for cross-browser, parallel execution and Flutter integration_test suites for mobile application verification.
              </p>
              <div className="flex flex-wrap gap-2 justify-start">
                <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-brand-bg border border-brand-border text-brand-text font-semibold">POM-Based Frameworks</span>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-brand-bg border border-brand-border text-brand-text font-semibold">E2E Regression Automation</span>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-brand-bg border border-brand-border text-brand-text font-semibold">API Validation (Postman)</span>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-brand-bg border border-brand-border text-brand-text font-semibold">Multi-tenant Testing</span>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-brand-bg border border-brand-border text-brand-text font-semibold">Defect Lifecycle Tracking</span>
              </div>
            </motion.div>

            {/* Education Card */}
            <motion.div
              variants={itemVariants}
              className="sm:col-span-2 glass-panel border border-brand-border/60 rounded-2xl p-6 relative overflow-hidden bg-gradient-to-br from-brand-surface to-brand-accent/5"
            >
              <h3 className="text-sm font-bold font-mono text-brand-accent mb-3 uppercase tracking-widest flex items-center gap-2">
                <Award size={14} /> Education & Credentials
              </h3>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-left w-full">
                <div>
                  <h4 className="text-base font-extrabold text-brand-text">Gujarat Technological University</h4>
                  <p className="text-sm text-brand-text-muted mt-0.5">B.Tech in Computer Engineering</p>
                </div>
                <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-1">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-brand-bg border border-brand-border text-brand-text">2021 -- 2025</span>
                  <span className="text-sm font-extrabold text-brand-primary">CGPA: 9.18 / 10</span>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
