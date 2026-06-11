import { motion as framerMotion } from 'framer-motion';
import { Database, Network, Smartphone, Monitor, ShieldCheck, Folder, Star, Sparkles } from 'lucide-react';
import { GitHubIcon } from './BrandIcons';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tech: string[];
  bullets: string[];
  github?: string;
  visual: 'dashboard' | 'telemetry' | 'mobile' | 'browser' | 'api' | 'nuvio';
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Custom Test Execution & Reporting Platform',
    category: 'Internal Tool — Vite, ExcelJS, Chart.js, Google Sheets API',
    description: 'Designed and developed a custom internal test execution and reporting platform to streamline QA reporting processes. The solution eliminated manual spreadsheet-based reporting efforts and introduced centralized historical test run tracking and comparison capabilities.',
    bullets: [
      'Provided the QA team with a centralized live dashboard displaying test execution results, pass rates, failure trends, and module-wise severity analysis.',
      'Implemented automated Excel and Google Sheets export functionality, generating structured multi-sheet reports with a single click.',
      'Configured execution log tracking for 80+ test cases, enabling efficient comparison and analysis across multiple test cycles.'
    ],
    tech: ['Vite', 'React', 'ExcelJS', 'Tailwind CSS'],
    github: 'https://github.com/pandya-dwip/qa-report-generator',
    visual: 'dashboard',
  },
  {
    id: 2,
    title: 'RTU Sensor Data Monitoring & Automation System',
    category: 'Python Automation + Real-Time Dashboard',
    description: 'Developed a real-time automation system using Python to monitor live IoT sensor data from a web dashboard.',
    bullets: [
      'Designed a time-based polling and change-detection mechanism using timestamp comparison.',
      'Implemented a listener-based architecture to capture and log dynamic sensor data into structured JSON format.',
      'Enabled configurable test durations and dynamic sensor selections to reduce manual monitoring effort.'
    ],
    tech: ['Python', 'PyTest', 'MQTT', 'CSV'],
    github: 'https://github.com/pandya-dwip/RTU-Monitoring',
    visual: 'telemetry',
  },
  {
    id: 3,
    title: 'CIMTrack Mobile Application Automation Suite',
    category: 'Flutter integration_test + E2E Automation',
    description: 'Developed end-to-end mobile automation using Flutter integration_test for critical workflows and regression testing across Android and iOS.',
    bullets: [
      'Automated authentication, CRUD operations, history validation, and role-based workflows across application modules.',
      'Implemented Page Object Model (POM) architecture with centralized locators and modular automation utilities.',
      'Improved test stability using optimized wait strategies, GetIt dependency reset handling, and resilient assertions.'
    ],
    tech: ['Flutter', 'Dart', 'Integration Test', 'GetIt'],
    visual: 'mobile',
  },
  {
    id: 4,
    title: 'GSOS Web Application Automation',
    category: 'Playwright Automation Framework (JS/TS)',
    description: 'Designed and implemented a Playwright automation framework using Page Object Model (POM) with TypeScript.',
    bullets: [
      'Designed Page Object Model (POM) with TypeScript for type safety and improved maintainability.',
      'Implemented session handling to persist authentication state across test runs, reducing overall suite execution time.',
      'Handled dynamic elements using parameterized locators and flexible selectors for reliable cross-run stability.'
    ],
    tech: ['Playwright', 'TypeScript', 'JavaScript', 'Page Object Model'],
    visual: 'browser',
  },
  {
    id: 5,
    title: 'API Testing & Automation',
    category: 'Postman + JavaScript',
    description: 'Designed and executed API test suites using Postman collections for CRUD operations across multiple service endpoints.',
    bullets: [
      'Automated API validation using JavaScript pre-request and test scripts for token handling and chained requests.',
      'Validated authentication flows including token-based authorization and session handling.',
      'Performed response, schema, and business logic validation with status code and error checks.'
    ],
    tech: ['Postman', 'JavaScript', 'Newman', 'REST APIs'],
    visual: 'api',
  },
  {
    id: 6,
    title: 'Nuvio',
    category: 'Flutter (Dart) — Premium Notes App',
    description: 'A premium minimalist notes app designed to help you capture ideas, organize thoughts, and structure your life with elegance and ease. Nuvio is 100% offline — your data never leaves your device.',
    bullets: [
      'Rich block-based note editor supporting text, checklists, quotes, images, files, and 50 premium accent colors.',
      'Nested folder structure with custom color selections, pinned folders/notes, and dedicated favorite views.',
      'Offline data management: backup export/import, local manual/automated backup scheduling, and restore history.'
    ],
    tech: ['Flutter', 'Dart', 'Riverpod', 'SharedPreferences', 'Path Provider'],
    github: 'https://github.com/pandya-dwip/nuvio',
    visual: 'nuvio',
  },
];

export default function Projects() {
  // Render high-fidelity SVG/HTML mockup screens for each project category
  const renderVisualMockup = (type: string) => {
    switch (type) {
      case 'dashboard':
        return (
          <div className="w-full h-full bg-slate-900 border border-slate-800 rounded-xl p-4 font-mono text-[10px] text-slate-300 flex flex-col justify-between overflow-hidden shadow-inner">
            <div className="flex justify-between items-center pb-2.5 border-b border-slate-800/80">
              <span className="text-[11px] font-bold text-slate-100 flex items-center gap-1.5"><ShieldCheck size={12} className="text-brand-primary" /> TEST RUNNER v2.0</span>
              <span className="px-2 py-0.5 rounded bg-brand-success/10 text-brand-success font-semibold text-[9px] uppercase animate-pulse">Running</span>
            </div>
            {/* Charts representation */}
            <div className="grid grid-cols-4 gap-2 my-3">
              <div className="bg-slate-950 p-2 rounded border border-slate-800 flex flex-col animate-pulse">
                <span className="text-[8px] text-slate-500 uppercase">PASS RATE</span>
                <span className="text-xs font-bold text-green-400">99.9%</span>
              </div>
              <div className="bg-slate-950 p-2 rounded border border-slate-800 flex flex-col">
                <span className="text-[8px] text-slate-500 uppercase">FAILED</span>
                <span className="text-xs font-bold text-red-400">0.1%</span>
              </div>
              <div className="bg-slate-950 p-2 rounded border border-slate-800 flex flex-col">
                <span className="text-[8px] text-slate-500 uppercase">TOTAL</span>
                <span className="text-xs font-bold text-slate-300">1,200</span>
              </div>
              <div className="bg-slate-950 p-2 rounded border border-slate-800 flex flex-col">
                <span className="text-[8px] text-slate-500 uppercase">DURATION</span>
                <span className="text-xs font-bold text-brand-primary">8.2m</span>
              </div>
            </div>
            {/* SVG line graph mock */}
            <div className="h-16 w-full bg-slate-950/80 rounded border border-slate-800/60 p-2 relative">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 100 30">
                <path d="M0,25 Q15,10 30,18 T60,5 T90,15 T100,8" fill="none" stroke="rgb(59, 130, 246)" strokeWidth="1.5" />
                <path d="M0,25 Q15,10 30,18 T60,5 T90,15 T100,8 L100,30 L0,30 Z" fill="rgba(59, 130, 246, 0.08)" />
                <circle cx="60" cy="5" r="2" fill="rgb(34, 197, 94)" className="animate-ping" />
              </svg>
            </div>
            {/* Small output logs */}
            <div className="space-y-1 text-[8px] text-slate-500 mt-2 bg-slate-950 p-2 rounded border border-slate-800/50">
              <div className="text-green-400">✓ AuthSpec: verify_user_login (1.2s)</div>
              <div className="text-slate-400">  Running BillingSpec: checkout_payment_flow...</div>
            </div>
          </div>
        );
      case 'telemetry':
        return (
          <div className="w-full h-full bg-slate-950 border border-slate-850 rounded-xl p-4 font-mono text-[9px] text-slate-400 flex flex-col justify-between overflow-hidden shadow-inner">
            <div className="flex justify-between items-center pb-2 border-b border-slate-800">
              <span className="text-[10px] font-bold text-slate-100 flex items-center gap-1.5"><Database size={11} className="text-amber-500" /> SENSOR MODBUS</span>
              <span className="text-slate-500">Interval: 10s</span>
            </div>
            {/* Graph representing telemetry waveform */}
            <div className="my-2 p-1.5 bg-slate-900 rounded border border-slate-800">
              <div className="text-[7px] text-slate-500 uppercase mb-1">Signal Amplitude (Hz)</div>
              <svg className="w-full h-12 overflow-visible" viewBox="0 0 100 20">
                <line x1="0" y1="10" x2="100" y2="10" stroke="rgba(255,255,255,0.05)" />
                <path d="M0,10 L10,2 L20,18 L30,6 L40,14 L50,2 L60,18 L70,10 L80,10 L90,2 L100,10" fill="none" stroke="rgb(245, 158, 11)" strokeWidth="1" />
              </svg>
            </div>
            {/* Data log lists */}
            <div className="space-y-1 text-[8px]">
              <div className="flex justify-between border-b border-slate-900 pb-0.5">
                <span className="text-slate-500">POLLING_OK: timestamp match</span>
                <span className="text-green-400 font-bold">100%</span>
              </div>
              <div className="flex justify-between border-b border-slate-900 pb-0.5">
                <span className="text-slate-500">JSON_DUMP: sensor_logs.json</span>
                <span className="text-slate-300">Written</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">CSV_EXPORTER: live data</span>
                <span className="text-brand-primary">Active</span>
              </div>
            </div>
          </div>
        );
      case 'mobile':
        return (
          <div className="w-full h-full flex justify-center items-center">
            {/* Mobile casing mockup */}
            <div className="w-[170px] h-[300px] rounded-[32px] bg-slate-900 border-4 border-slate-800 p-2 flex flex-col justify-between shadow-2xl relative">
              {/* Speaker */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-3 bg-slate-800 rounded-full z-20" />

              {/* Screen Contents */}
              <div className="w-full h-full rounded-[24px] bg-slate-950 border border-slate-900 p-3 font-mono text-[8px] text-slate-400 flex flex-col justify-between overflow-hidden">
                <div className="flex justify-between items-center pt-2">
                  <span className="text-[9px] font-bold text-slate-200"><Smartphone size={10} className="inline mr-1 text-teal-400" /> CIMTrack</span>
                  <span className="text-green-500 animate-pulse">● Connected</span>
                </div>
                {/* Simulated Screen Element */}
                <div className="bg-slate-900 p-2 rounded-xl border border-slate-800 flex flex-col items-center gap-1.5 my-4">
                  <div className="w-8 h-8 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400">
                    <CheckCircleMock size={16} />
                  </div>
                  <span className="text-slate-200 text-[9px] font-bold">POM Verified</span>
                  <span className="text-slate-500 text-[7px] text-center">Flutter integration tests passed across Android/iOS.</span>
                </div>
                {/* Console list output */}
                <div className="bg-slate-900/50 p-1.5 rounded border border-slate-900 space-y-0.5 text-[6px]">
                  <div className="text-green-400">✓ GetIt: dependencies reset</div>
                  <div className="text-green-400">✓ expect(overlay).toBeDismissed()</div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'browser':
        return (
          <div className="w-full h-full bg-slate-900 border border-slate-850 rounded-xl p-3 font-mono text-[9px] text-slate-400 flex flex-col justify-between overflow-hidden shadow-inner">
            {/* Browser Header address bar */}
            <div className="flex items-center gap-1.5 pb-2 border-b border-slate-800">
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              </div>
              <div className="bg-slate-950 text-slate-500 px-3 py-0.5 rounded text-[7px] truncate flex-grow text-center flex items-center justify-center gap-1">
                <Monitor size={8} /> web.gsos.app
              </div>
            </div>
            {/* Visual interface layout */}
            <div className="grid grid-cols-4 gap-2 my-2 flex-grow">
              {/* Sidebar */}
              <div className="col-span-1 bg-slate-950 p-1.5 rounded border border-slate-800/80 space-y-1 text-[6px]">
                <div className="bg-brand-primary/20 text-brand-primary px-1 rounded font-semibold">Dashboard</div>
                <div className="px-1 text-slate-650">Specs</div>
                <div className="px-1 text-slate-650">State</div>
              </div>
              {/* Main screen area */}
              <div className="col-span-3 bg-slate-950 p-2 rounded border border-slate-800/80 flex flex-col justify-between">
                <div className="flex justify-between items-center text-[7px] font-bold text-slate-350 border-b border-slate-900 pb-1">
                  <span>STATE DIAGNOSTIC</span>
                  <span className="text-brand-primary font-bold">POM ACTIVE</span>
                </div>
                {/* Dynamic matrix grid simulation */}
                <div className="grid grid-cols-6 gap-1 my-1.5">
                  {Array.from({ length: 18 }).map((_, idx) => (
                    <span key={idx} className={`w-2.5 h-2.5 rounded-[2px] ${idx === 14 ? 'bg-yellow-500/35 border border-yellow-500/50' : 'bg-green-500/30 border border-green-500/50'} animate-pulse`} />
                  ))}
                </div>
                <span className="text-[6px] text-slate-600 truncate">Playwright: POM verification stable</span>
              </div>
            </div>
            <div className="bg-slate-950 p-1.5 rounded border border-slate-900/60 text-[7px] flex justify-between text-green-400">
              <span>✓ Auth session restored</span>
              <span>✓ Parameterized locators resolved</span>
            </div>
          </div>
        );
      case 'api':
        return (
          <div className="w-full h-full bg-slate-900 border border-slate-800 rounded-xl p-3 font-mono text-[9px] text-slate-300 flex flex-col justify-between overflow-hidden shadow-inner">
            <div className="flex justify-between items-center pb-2 border-b border-slate-800/80">
              <span className="text-[10px] font-bold text-slate-100 flex items-center gap-1.5"><Network size={11} className="text-indigo-400" /> POSTMAN API</span>
              <span className="text-[8px] bg-indigo-500/10 text-indigo-400 px-1.5 py-0.5 rounded">NEWMAN</span>
            </div>
            {/* Split layout: Client sidebar and response */}
            <div className="grid grid-cols-5 gap-2 my-2.5 flex-grow">
              {/* API list */}
              <div className="col-span-2 space-y-1 text-[7px]">
                <div className="flex items-center gap-1 bg-slate-950 p-1 rounded border border-slate-800/60 animate-pulse">
                  <span className="text-green-500 font-extrabold font-sans">GET</span>
                  <span className="text-slate-400 truncate">/api/v1/user</span>
                </div>
                <div className="flex items-center gap-1 bg-slate-950 p-1 rounded border border-slate-800/60">
                  <span className="text-blue-500 font-extrabold font-sans">POST</span>
                  <span className="text-slate-400 truncate">/api/v1/auth</span>
                </div>
              </div>
              {/* API response body JSON */}
              <div className="col-span-3 bg-slate-950 p-2 rounded border border-slate-800/60 flex flex-col justify-between text-[7px] text-slate-400">
                <div>
                  <div className="text-[6px] text-slate-650">JSON_RESPONSE</div>
                  <div className="text-green-400 font-semibold">{`{`}</div>
                  <div className="pl-2">`token`: `jwt_token`,</div>
                  <div className="pl-2">`expires`: 3600</div>
                  <div className="text-green-400 font-semibold">{`}`}</div>
                </div>
                <div className="text-[6px] text-slate-650 flex justify-between border-t border-slate-900 pt-1">
                  <span>200 OK</span>
                  <span>14ms</span>
                </div>
              </div>
            </div>
            <div className="space-y-0.5 text-[8px] bg-slate-950 p-1.5 rounded border border-slate-900/60">
              <div className="text-green-400">✓ Schema validated successfully</div>
              <div className="text-green-400">✓ Token chaining verified</div>
            </div>
          </div>
        );
      case 'nuvio':
        return (
          <div className="w-full h-full flex justify-center items-center">
            {/* Mobile casing mockup */}
            <div className="w-[170px] h-[300px] rounded-[32px] bg-slate-900 border-4 border-slate-800 p-2 flex flex-col justify-between shadow-2xl relative">
              {/* Speaker */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-3 bg-slate-800 rounded-full z-20" />

              {/* Screen Contents */}
              <div className="w-full h-full rounded-[24px] bg-slate-950 border border-slate-900 p-3 font-sans text-[8px] text-slate-400 flex flex-col justify-between overflow-hidden">
                {/* Header */}
                <div className="flex justify-between items-center pt-2">
                  <span className="text-[10px] font-bold text-slate-100 flex items-center gap-1 font-outfit">
                    <Sparkles size={10} className="text-amber-400 animate-pulse" />
                    Nuvio
                  </span>
                  <span className="text-[7px] text-slate-500 font-mono">100% Offline</span>
                </div>

                {/* Folders Row */}
                <div className="mt-3">
                  <span className="text-[7px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Folders</span>
                  <div className="grid grid-cols-2 gap-1">
                    <div className="bg-slate-900 p-1.5 rounded-lg border border-slate-800 flex items-center gap-1.5">
                      <Folder size={10} className="text-blue-400" />
                      <div className="truncate">
                        <p className="text-[7px] text-slate-200 font-bold truncate">Ideas</p>
                        <p className="text-[5px] text-slate-500">12 notes</p>
                      </div>
                    </div>
                    <div className="bg-slate-900 p-1.5 rounded-lg border border-slate-800 flex items-center gap-1.5">
                      <Folder size={10} className="text-violet-400" />
                      <div className="truncate">
                        <p className="text-[7px] text-slate-200 font-bold truncate">Life</p>
                        <p className="text-[5px] text-slate-500">5 notes</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Notes List */}
                <div className="flex-grow mt-3 overflow-hidden flex flex-col justify-start">
                  <span className="text-[7px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Pinned Notes</span>
                  <div className="space-y-1">
                    {/* Note Card 1 */}
                    <div className="bg-slate-900/60 p-2 rounded-xl border-l-2 border-l-amber-400 border border-slate-800/80">
                      <div className="flex justify-between items-center mb-0.5">
                        <span className="text-[7px] text-slate-200 font-extrabold truncate">💡 Side Project Ideas</span>
                        <Star size={7} className="text-amber-400 fill-amber-400" />
                      </div>
                      <p className="text-[6px] text-slate-400 truncate">Rich block editor mockup setup...</p>
                    </div>

                    {/* Note Card 2 */}
                    <div className="bg-slate-900/60 p-2 rounded-xl border-l-2 border-l-violet-400 border border-slate-800/80">
                      <div className="flex justify-between items-center mb-0.5">
                        <span className="text-[7px] text-slate-200 font-extrabold truncate">📝 Flutter Architecture</span>
                        <Star size={7} className="text-amber-400 fill-amber-400" />
                      </div>
                      <p className="text-[6px] text-slate-400 truncate">Riverpod (StateNotifier) for clean...</p>
                    </div>
                  </div>
                </div>

                {/* Accent Colors Indicator */}
                <div className="pt-2 border-t border-slate-900/80 flex justify-between items-center">
                  <div className="flex gap-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                  </div>
                  <span className="text-[6px] text-slate-500 font-bold uppercase">50+ Colors</span>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full flex items-center justify-center py-24 px-6 md:px-12 overflow-hidden"
    >
      {/* Glow details */}
      <div className="absolute w-[45vw] h-[45vw] rounded-full bg-brand-primary/5 glow-blob top-10 left-10 pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-left mb-24">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-brand-primary" />
            <span className="text-xs font-mono font-bold tracking-widest text-brand-primary uppercase">Case Studies</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-brand-text">
            Featured Projects.
          </h2>
        </div>

        {/* Projects List with Alternating Layouts */}
        <div className="space-y-32">
          {projects.map((proj, index) => {
            const isEven = index % 2 === 0;
            return (
              <framerMotion.div
                key={proj.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${isEven ? '' : 'lg:flex-row-reverse'
                  }`}
              >
                {/* Visual Mockup Column */}
                <div className={`col-span-1 lg:col-span-6 w-full h-[320px] sm:h-[400px] glass-panel rounded-2xl p-6 relative group overflow-hidden ${isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}>
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/5 via-transparent to-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="w-full h-full flex justify-center items-center transform group-hover:scale-[1.02] transition-transform duration-500">
                    {renderVisualMockup(proj.visual)}
                  </div>
                </div>

                {/* Details Column */}
                <div className={`col-span-1 lg:col-span-6 flex flex-col items-start text-left ${isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}>
                  {/* Project Tag */}
                  <span className="text-xs font-mono font-bold text-brand-primary tracking-widest uppercase mb-3 block">
                    {proj.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-text tracking-tight mb-3 hover:text-brand-primary transition-colors duration-300">
                    {proj.title}
                  </h3>

                  {/* Description */}
                  <p className="text-brand-text-muted text-sm sm:text-base leading-relaxed mb-4">
                    {proj.description}
                  </p>

                  {/* Bullet Achievements */}
                  <ul className="space-y-2 text-xs sm:text-sm text-brand-text-muted mb-6">
                    {proj.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="text-brand-primary select-none mt-0.5">▪</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {proj.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-mono px-3 py-1 rounded-full border border-brand-border bg-brand-surface text-brand-text font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  {proj.github && (
                    <div className="flex items-center gap-4">
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="magnetic px-5 py-2.5 rounded-xl bg-brand-text text-brand-bg hover:bg-brand-surface hover:text-brand-text border border-brand-text text-xs font-bold tracking-wide transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-sm"
                      >
                        <GitHubIcon size={14} />
                        <span>Source Code</span>
                      </a>
                    </div>
                  )}
                </div>
              </framerMotion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Simple internal icon for checkmark mockup
function CheckCircleMock({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
