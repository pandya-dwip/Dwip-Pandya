import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Code, Cpu, ArrowRight, FileText } from 'lucide-react';

const roles = [
  'Software QA Engineer',
  'SDET',
  'Automation Engineer',
  'Playwright Specialist',
  'Flutter Test Automation Engineer',
];

interface MousePos {
  x: number;
  y: number;
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [mousePos, setMousePos] = useState<MousePos>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Role switching cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  // Mouse move parallax and glow effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Simulator for the automation test pipeline
  const [testStatus, setTestStatus] = useState<'idle' | 'running' | 'completed'>('running');
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    '$ npx playwright test --project=chromium',
    'Running 5 tests using 4 workers',
  ]);
  const [completedTests, setCompletedTests] = useState<string[]>([]);
  const [successRate, setSuccessRate] = useState(0);

  const testCases = [
    { name: 'Auth Flow: login_with_valid_credentials', duration: '1.2s' },
    { name: 'Dashboard: render_charts_and_stats', duration: '2.5s' },
    { name: 'Checkout: process_payment_gateway', duration: '4.8s' },
    { name: 'API: get_user_profile_by_id', duration: '0.4s' },
    { name: 'Flutter: mobile_cart_item_update', duration: '3.1s' },
  ];

  useEffect(() => {
    if (testStatus !== 'running') return;

    let index = 0;
    const interval = setInterval(() => {
      if (index < testCases.length) {
        const tc = testCases[index];
        setTerminalLogs((prev) => [
          ...prev,
          `  ✓ [chromium] › ${tc.name} (${tc.duration})`,
        ]);
        setCompletedTests((prev) => [...prev, tc.name]);
        setSuccessRate(Math.round(((index + 1) / testCases.length) * 100));
        index++;
      } else {
        setTestStatus('completed');
        setTerminalLogs((prev) => [
          ...prev,
          '',
          '  5 passed (12.0s)',
          '  100% test coverage target met.',
          '$ _',
        ]);
        clearInterval(interval);

        // Restart after a brief delay
        setTimeout(() => {
          setTerminalLogs([
            '$ npx playwright test --project=chromium',
            'Running 5 tests using 4 workers',
          ]);
          setCompletedTests([]);
          setSuccessRate(0);
          setTestStatus('running');
        }, 5000);
      }
    }, 1800);

    return () => clearInterval(interval);
  }, [testStatus]);

  // Smooth scroll handler
  const handleScrollTo = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      const lenis = (window as any).lenis;
      if (lenis) {
        lenis.scrollTo(el, { offset: -80 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-16 overflow-hidden px-6 md:px-12 grid-bg"
    >
      {/* Background Glowing Ambient Orbs */}
      <div 
        className="absolute w-[40vw] h-[40vw] rounded-full bg-blue-500/10 dark:bg-blue-600/10 glow-blob -top-10 -left-10 pointer-events-none" 
        style={{
          transform: `translate(${(mousePos.x - 500) * 0.03}px, ${(mousePos.y - 300) * 0.03}px)`,
          transition: 'transform 0.2s ease-out'
        }}
      />
      <div 
        className="absolute w-[45vw] h-[45vw] rounded-full bg-violet-500/10 dark:bg-violet-600/10 glow-blob -bottom-20 -right-20 pointer-events-none" 
        style={{
          transform: `translate(${(mousePos.x - 500) * -0.02}px, ${(mousePos.y - 300) * -0.02}px)`,
          transition: 'transform 0.2s ease-out'
        }}
      />

      {/* Dynamic Cursor Light Source */}
      <div 
        className="absolute w-[400px] h-[400px] rounded-full bg-brand-primary/5 dark:bg-brand-primary/8 blur-[100px] pointer-events-none z-[1] hidden md:block"
        style={{
          left: mousePos.x - 200,
          top: mousePos.y - 200,
          transition: 'left 0.1s ease-out, top 0.1s ease-out'
        }}
      />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        {/* Left Side: Typography and Info */}
        <div className="lg:col-span-7 flex flex-col items-start justify-center text-left">
          {/* Tag */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-border bg-brand-surface/50 backdrop-blur-md mb-6"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-success animate-ping" />
            <span className="text-xs font-mono font-bold tracking-wider text-brand-text/75 uppercase">Quality Engineering Redefined</span>
          </motion.div>

          {/* Name */}
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl sm:text-7xl xl:text-8xl font-black tracking-tight text-brand-text leading-[1.05] mb-4 font-sans"
          >
            Dwip Pandya
          </motion.h1>

          {/* Role Switching */}
          <div className="h-14 sm:h-16 flex items-center overflow-hidden mb-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={roleIndex}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary"
              >
                {roles[roleIndex]}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Intro Description */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl text-brand-text-muted max-w-xl mb-10 leading-relaxed font-normal"
          >
            SDET focused on scalable automation systems, testing infrastructure, and end-to-end quality engineering.
          </motion.p>

          {/* Call to action buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
          >
            {/* Primary Action */}
            <button
              onClick={() => handleScrollTo('projects')}
              className="magnetic group relative px-7 py-3.5 bg-brand-text text-brand-bg rounded-xl font-semibold text-sm tracking-wide overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 cursor-pointer border border-brand-text hover:bg-brand-surface hover:text-brand-text"
            >
              <span>View Projects</span>
              <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary Action */}
            <button
              onClick={() => handleScrollTo('contact')}
              className="magnetic px-7 py-3.5 bg-brand-surface/40 hover:bg-brand-surface border border-brand-border text-brand-text rounded-xl font-semibold text-sm tracking-wide hover:border-brand-text/50 transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-sm"
            >
              Contact Me
            </button>

            {/* Download Resume Link */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert('Resume download started! (Simulated demonstration)');
              }}
              className="magnetic px-5 py-3.5 bg-transparent hover:bg-brand-surface/20 text-brand-text-muted hover:text-brand-text rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 flex items-center gap-2"
            >
              <FileText size={16} />
              <span>Resume</span>
            </a>
          </motion.div>
        </div>

        {/* Right Side: Interactive Automation Visualizer */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative w-full flex justify-center items-center"
          style={{
            transformStyle: 'preserve-3d',
            perspective: 1000
          }}
        >
          {/* Parallax Card Container */}
          <div 
            className="w-full max-w-[480px] lg:max-w-none glass-panel rounded-2xl p-6 relative overflow-hidden transition-transform duration-300 hover:shadow-2xl border-brand-border/60"
            style={{
              transform: `rotateX(${(mousePos.y - 300) * -0.015}deg) rotateY(${(mousePos.x - 700) * 0.015}deg)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            {/* Glowing background header */}
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary" />
            
            {/* Header controls */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                <span className="w-3 h-3 rounded-full bg-green-400/80" />
                <span className="text-xs font-mono opacity-50 ml-2">playwright.config.ts</span>
              </div>
              <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-brand-primary/10 text-brand-primary text-xs font-mono font-bold">
                <Cpu size={12} className="animate-spin-slow" />
                <span>SDET INFRA</span>
              </div>
            </div>

            {/* Simulated Live Stat Counters */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="bg-brand-bg/50 border border-brand-border/60 rounded-xl p-3 flex flex-col items-center">
                <span className="text-xs font-semibold text-brand-text-muted uppercase tracking-wider mb-1">Pass Rate</span>
                <span className="text-xl font-bold font-mono text-brand-success">{successRate}%</span>
              </div>
              <div className="bg-brand-bg/50 border border-brand-border/60 rounded-xl p-3 flex flex-col items-center">
                <span className="text-xs font-semibold text-brand-text-muted uppercase tracking-wider mb-1">Workers</span>
                <span className="text-xl font-bold font-mono text-brand-primary">4 / Parallel</span>
              </div>
              <div className="bg-brand-bg/50 border border-brand-border/60 rounded-xl p-3 flex flex-col items-center">
                <span className="text-xs font-semibold text-brand-text-muted uppercase tracking-wider mb-1">Status</span>
                <span className={`text-sm font-extrabold font-mono uppercase mt-1 px-2 py-0.5 rounded ${
                  testStatus === 'completed' 
                    ? 'bg-brand-success/10 text-brand-success' 
                    : 'bg-brand-warning/10 text-brand-warning animate-pulse'
                }`}>
                  {testStatus}
                </span>
              </div>
            </div>

            {/* Custom Terminal Panel */}
            <div className="bg-slate-950 text-slate-100 rounded-xl p-4 font-mono text-xs overflow-hidden shadow-inner h-[220px] flex flex-col justify-between border border-slate-800">
              <div className="overflow-y-auto space-y-2 flex-grow scrollbar-none">
                {terminalLogs.map((log, idx) => (
                  <div 
                    key={idx} 
                    className={`${
                      log.includes('✓') 
                        ? 'text-green-400 font-semibold' 
                        : log.includes('$') 
                        ? 'text-slate-400' 
                        : log.includes('passed') 
                        ? 'text-green-400 font-bold' 
                        : 'text-slate-300'
                    }`}
                  >
                    {log}
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center text-[10px] text-slate-500 pt-2 border-t border-slate-800/80 mt-2">
                <span>CONSOLES: 4 ACTIVE</span>
                <span>EXEC_TIME: 12.0s</span>
              </div>
            </div>

            {/* Test Execution Queue Flow Animation */}
            <div className="mt-5 space-y-2.5">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-brand-text flex items-center gap-1.5">
                  <Code size={13} className="text-brand-accent" />
                  Integration Test Queue
                </span>
                <span className="font-mono text-brand-text-muted">{completedTests.length} / {testCases.length} Done</span>
              </div>
              <div className="w-full bg-brand-border/30 h-1.5 rounded-full overflow-hidden">
                <motion.div 
                  className="bg-gradient-to-r from-brand-primary to-brand-accent h-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${(completedTests.length / testCases.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Staggered Floating Spec List */}
              <div className="flex flex-wrap gap-1.5 pt-1.5">
                {testCases.map((tc, index) => {
                  const isDone = completedTests.includes(tc.name);
                  return (
                    <span 
                      key={index} 
                      className={`text-[10px] px-2.5 py-1 rounded-full border transition-all duration-300 flex items-center gap-1 ${
                        isDone 
                          ? 'bg-brand-success/10 border-brand-success/30 text-brand-success font-semibold' 
                          : 'bg-brand-surface/40 border-brand-border text-brand-text-muted opacity-60'
                      }`}
                    >
                      {isDone && <CheckCircle2 size={9} />}
                      {tc.name.split(':')[0]}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
