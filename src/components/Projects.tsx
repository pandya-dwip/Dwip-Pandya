import { useState, useEffect } from 'react';
import { motion as framerMotion } from 'framer-motion';
import { Network, Smartphone, Folder, Star, Sparkles, Activity, TrendingUp, Clock, FileText, Command, LayoutGrid, Wallet, MapPin, Search } from 'lucide-react';
import { GitHubIcon } from './BrandIcons';

type ProjectTab = 'qa' | 'applications' | 'chrome-extensions';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tech: string[];
  bullets: string[];
  github?: string;
  visual: 'dashboard' | 'telemetry' | 'mobile' | 'browser' | 'api' | 'nuvio' | 'notes' | 'kanban' | 'finance' | 'places';
  tab: ProjectTab;
}

const TABS: { id: ProjectTab; label: string }[] = [
  { id: 'qa', label: 'QA' },
  { id: 'applications', label: 'Applications' },
  { id: 'chrome-extensions', label: 'Chrome Extensions' },
];

const projects: Project[] = [
  {
    id: 11,
    title: 'Nuvora Enterprise CI/CD Pipeline',
    category: 'GitHub Actions, Playwright E2E, Self-Healing Rollback Engine',
    description: 'Engineered an enterprise-grade CI/CD pipeline featuring a 3-stage sequential quality gate (ESLint static analysis, Vite compilation, 53 Playwright E2E browser tests) with an autonomous self-healing rollback engine for zero-downtime Vercel production deployment.',
    bullets: [
      'Designed a 3-stage quality gate enforcing ESLint static code analysis, Vite build compilation, and 53 Playwright E2E browser test scenarios.',
      'Implemented an 80% passing boundary metric evaluator that halts the pipeline and blocks Vercel deployment if test compliance drops below 80.00%.',
      'Engineered an autonomous self-healing rollback engine using GitHub Actions & GitHub CLI (`gh workflow run`) that automatically reverts broken commits on main (`git revert HEAD`), restores clean code, and re-dispatches pipeline runs without human intervention.'
    ],
    tech: ['GitHub Actions', 'Playwright', 'Node.js', 'Vite', 'Vercel', 'CI/CD', 'ESLint', 'TypeScript'],
    github: 'https://github.com/pandya-dwip/Nuvora',
    visual: 'browser',
    tab: 'qa',
  },
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
    tab: 'qa',
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
    tab: 'qa',
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
    tab: 'qa',
  },
  {
    id: 4,
    title: 'GSOS Web Application Automation',
    category: 'Playwright Automation Framework (JS/TS)',
    description: 'Designed and implemented a Playwright automation framework using Page Object Model (POM) with JavaScript.',
    bullets: [
      'Designed Page Object Model (POM) with JavaScript for type safety and improved maintainability.',
      'Implemented session handling to persist authentication state across test runs, reducing overall suite execution time.',
      'Handled dynamic elements using parameterized locators and flexible selectors for reliable cross-run stability.'
    ],
    tech: ['Playwright', 'TypeScript', 'JavaScript', 'Page Object Model'],
    visual: 'browser',
    tab: 'qa',
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
    tab: 'qa',
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
    tab: 'applications',
  },
  {
    id: 7,
    title: 'StickyNote',
    category: 'Chrome Extension — Manifest V3, Offline-First Productivity Workspace',
    description: 'Designed and developed a feature-rich offline-first Chrome extension for note-taking and productivity with a modern glassmorphism interface, dual-layout workspace, interactive Markdown editor, integrated fake data generator, and privacy-focused local storage.',
    bullets: [
      'Built a responsive dual-layout experience (Launcher & Workspace) with document management, favorites, templates, archive, trash, drag-and-drop organization, and a Raycast-inspired Command Palette.',
      'Implemented a real-time Markdown editor with live preview, synchronized interactive checklists, smart list continuation, autosave, comprehensive keyboard shortcuts, and customizable themes and typography.',
      'Developed an offline Fake Data Generator, JSON backup & restore, storage usage tracker, and a secure Manifest V3 architecture with zero external dependencies to ensure complete user privacy.'
    ],
    tech: ['JavaScript', 'HTML5', 'CSS3', 'Chrome Extension Manifest V3', 'Chrome Storage API', 'Markdown', 'Lucide Icons'],
    github: 'https://github.com/pandya-dwip/Sticky-notes',
    visual: 'notes',
    tab: 'chrome-extensions',
  },
  {
    id: 8,
    title: 'Clair',
    category: 'Chrome Extension — Manifest V3, SQLite, Project Management',
    description: 'Designed and developed a local-first Chrome extension for project, task, release, and QA management with SQLite-powered offline persistence, Kanban workflows, analytics dashboards, and comprehensive project coordination features.',
    bullets: [
      'Built a complete project management workspace featuring project lifecycle tracking, task and release Kanban boards, test case management, developer assignment, audit logs, and interactive analytics dashboards with Chart.js.',
      'Implemented an offline-first persistence layer using SQLite (sql.js) with IndexedDB storage, automatic migration from chrome.storage.local, JSON backup & restore, and secure Manifest V3 architecture.',
      'Developed advanced productivity features including global search, drag-and-drop workflows, dynamic filtering, theme customization, Excel & JSON export, responsive UI, and keyboard shortcuts for efficient project coordination.'
    ],
    tech: ['JavaScript', 'HTML5', 'CSS3', 'Chrome Extension Manifest V3', 'SQLite (sql.js)', 'IndexedDB', 'Chart.js', 'ExcelJS'],
    github: 'https://github.com/pandya-dwip/project-extension',
    visual: 'kanban',
    tab: 'chrome-extensions',
  },
  {
    id: 9,
    title: 'GoNext',
    category: 'Mobile Application — Flutter, Riverpod, Hive',
    description: 'Designed and developed an offline-first Flutter application for organizing and managing favorite restaurants, shopping destinations, and travel locations with integrated maps, local storage, and privacy-focused architecture.',
    bullets: [
      'Built a unified dashboard featuring intelligent search, categorized directories, overview analytics, recent activity, and wishlist previews for restaurants, clothing stores, and travel destinations.',
      'Implemented complete CRUD functionality with Hive local database, Google Maps integration, reverse geocoding, GPS location retrieval, photo management, and one-tap navigation to saved places.',
      'Developed a modern, privacy-first architecture using Riverpod, GoRouter, and modular feature-based design with responsive UI, offline persistence, customizable themes, and zero cloud dependency.'
    ],
    tech: ['Flutter', 'Dart', 'Riverpod', 'Hive', 'GoRouter', 'Google Maps Flutter', 'Geolocator', 'Geocoding'],
    github: 'https://github.com/pandya-dwip/gonext',
    visual: 'places',
    tab: 'applications',
  },
  {
    id: 10,
    title: 'Expense Manager',
    category: 'Mobile Application — Flutter, Drift (SQLite), Provider',
    description: 'Designed and developed a modern offline-first personal finance management application with multi-account support, advanced budgeting, analytics, customizable themes, secure local storage, and comprehensive financial tracking.',
    bullets: [
      'Built a complete personal finance ecosystem featuring multi-account wallet management, income, expense and transfer tracking, budget planning, financial health scoring, interactive analytics, and customizable category management.',
      'Implemented a robust offline architecture using Drift (SQLite) with CSV export, database backup & restore, PIN authentication, profile management, world currency support, and secure on-device data storage.',
      'Developed a premium Material 3 interface with dynamic accent color customization, dark/light themes, interactive charts, advanced transaction filtering, and responsive state management using Provider.'
    ],
    tech: ['Flutter', 'Dart', 'Drift (SQLite)', 'Provider', 'Material 3', 'fl_chart', 'SharedPreferences', 'Google Fonts'],
    github: 'https://github.com/pandya-dwip/expense_manager',
    visual: 'finance',
    tab: 'applications',
  },
];

const TEST_NAMES = [
  'auth_service.spec.ts',
  'payment_gateway.spec.ts',
  'api_endpoint_polling.spec.ts',
  'db_connection_pool.spec.ts',
  'user_profile_edit.spec.ts',
  'signup_validation.spec.ts',
  'cart_checkout_flow.spec.ts',
  'admin_stats_fetch.spec.ts',
  'notification_trigger.spec.ts',
  'search_indexing.spec.ts',
  'file_upload_s3.spec.ts',
  'security_headers_check.spec.ts'
];

function DashboardMockup() {
  const [passRate, setPassRate] = useState(99.2);
  const [duration, setDuration] = useState(8.2);
  const [cycle, setCycle] = useState(4812);
  const [tests, setTests] = useState([
    { name: 'auth_service.spec.ts', time: '142ms', status: 'Pass' },
    { name: 'payment_gateway.spec.ts', time: '894ms', status: 'Pass' },
    { name: 'api_endpoint_polling.spec.ts', time: '12ms', status: 'Pass' },
    { name: 'db_connection_pool.spec.ts', time: '---', status: 'Running' },
  ]);

  // Fast subtle numbers updater
  useEffect(() => {
    const interval = setInterval(() => {
      setPassRate((prev) => {
        const val = prev + (Math.random() > 0.6 ? 0.05 : -0.05);
        return Math.min(100, Math.max(98.5, Math.round(val * 100) / 100));
      });
      setDuration((prev) => Math.round((prev + 0.02) * 100) / 100);
    }, 600);
    return () => clearInterval(interval);
  }, []);

  // Rolling test cases updater
  useEffect(() => {
    let testIndex = 4;
    const interval = setInterval(() => {
      setTests((prev) => {
        const updated = prev.map((t) => {
          if (t.status === 'Running') {
            const timeVal = Math.floor(50 + Math.random() * 850);
            return { ...t, time: `${timeVal}ms`, status: 'Pass' };
          }
          return t;
        });

        const nextTestName = TEST_NAMES[testIndex % TEST_NAMES.length];
        testIndex++;

        const nextList = [...updated, { name: nextTestName, time: '---', status: 'Running' }];
        if (nextList.length > 4) {
          nextList.shift();
        }
        return nextList;
      });

      setCycle((c) => c + 1);
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full bg-slate-950/90 border border-slate-800 rounded-xl p-3 sm:p-4 text-slate-300 flex flex-col gap-3 overflow-hidden shadow-2xl relative select-none">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800/80">
        <div className="flex items-center gap-2 text-left">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-success opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-success"></span>
          </span>
          <span className="text-[10px] font-bold text-slate-200 uppercase tracking-widest font-mono">Run Dashboard v2.4</span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[9px] text-slate-500 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
          <Clock size={10} className="text-brand-primary animate-pulse" />
          <span>Cycle: #{cycle}</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <div className="bg-slate-900/60 p-1.5 rounded-lg border border-slate-800/80 flex flex-col justify-between h-[48px] text-left">
          <span className="text-[7px] text-slate-500 font-bold uppercase tracking-wider">Pass Rate</span>
          <div className="flex items-baseline justify-between leading-none">
            <span className="text-xs font-black text-brand-success font-mono">{passRate}%</span>
            <TrendingUp size={10} className="text-brand-success" />
          </div>
        </div>
        <div className="bg-slate-900/60 p-1.5 rounded-lg border border-slate-800/80 flex flex-col justify-between h-[48px] text-left">
          <span className="text-[7px] text-slate-500 font-bold uppercase tracking-wider">Duration</span>
          <div className="flex items-baseline justify-between leading-none">
            <span className="text-xs font-black text-brand-primary font-mono">{duration}m</span>
            <Activity size={10} className="text-brand-primary" />
          </div>
        </div>
        <div className="bg-slate-900/60 p-1.5 rounded-lg border border-slate-800/80 flex flex-col justify-between h-[48px] text-left">
          <span className="text-[7px] text-slate-500 font-bold uppercase tracking-wider">Modules</span>
          <div className="flex items-baseline justify-between leading-none">
            <span className="text-xs font-black text-brand-accent font-mono">6 / 6</span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
          </div>
        </div>
      </div>

      <div className="flex-grow bg-slate-900/40 rounded-lg border border-slate-900 p-2 flex flex-col justify-between h-[85px] text-left">
        <div className="flex justify-between items-center text-[7px] text-slate-500 uppercase font-mono">
          <span>Execution Waveform</span>
          <span className="text-brand-success flex items-center gap-1">
            <span className="w-1 h-1 bg-brand-success rounded-full animate-ping" />
            Live Polling
          </span>
        </div>
        <div className="h-10 w-full relative pt-1 overflow-hidden">
          <svg className="w-full h-full overflow-hidden" viewBox="0 0 100 30" preserveAspectRatio="none">
            <line x1="0" y1="5" x2="100" y2="5" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
            <line x1="0" y1="15" x2="100" y2="15" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
            <line x1="0" y1="25" x2="100" y2="25" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />

            {/* Animated Wave 1 (Secondary Background Wave - slower) */}
            <g>
              <path
                d="M 0 15 C 15 28, 20 2, 35 15 S 55 28, 70 15 S 85 2, 100 15 C 115 28, 120 2, 135 15 S 155 28, 170 15 S 185 2, 200 15"
                fill="none"
                stroke="rgba(139, 92, 246, 0.15)"
                strokeWidth="1.0"
                strokeLinecap="round"
              />
              <path
                d="M 0 15 C 15 28, 20 2, 35 15 S 55 28, 70 15 S 85 2, 100 15 C 115 28, 120 2, 135 15 S 155 28, 170 15 S 185 2, 200 15 L 200 30 L 0 30 Z"
                fill="url(#secondaryAreaGlow)"
              />
              <animateTransform
                attributeName="transform"
                type="translate"
                from="0 0"
                to="-100 0"
                dur="8s"
                repeatCount="indefinite"
              />
            </g>

            {/* Animated Wave 2 (Primary Glowing Wave) */}
            <g>
              <path
                d="M 0 20 C 10 5, 15 25, 25 15 S 40 5, 50 18 S 65 25, 75 12 S 90 8, 100 20 C 110 5, 115 25, 125 15 S 140 5, 150 18 S 165 25, 175 12 S 190 8, 200 20"
                fill="none"
                stroke="url(#primaryGlow)"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
              <path
                d="M 0 20 C 10 5, 15 25, 25 15 S 40 5, 50 18 S 65 25, 75 12 S 90 8, 100 20 C 110 5, 115 25, 125 15 S 140 5, 150 18 S 165 25, 175 12 S 190 8, 200 20 L 200 30 L 0 30 Z"
                fill="url(#primaryAreaGlow)"
              />

              <animateTransform
                attributeName="transform"
                type="translate"
                from="0 0"
                to="-100 0"
                dur="4s"
                repeatCount="indefinite"
              />
            </g>

            <defs>
              <linearGradient id="primaryGlow" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgb(59, 130, 246)" />
                <stop offset="50%" stopColor="rgb(139, 92, 246)" />
                <stop offset="100%" stopColor="rgb(20, 184, 166)" />
              </linearGradient>
              <linearGradient id="primaryAreaGlow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.15)" />
                <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
              </linearGradient>
              <linearGradient id="secondaryAreaGlow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(139, 92, 246, 0.08)" />
                <stop offset="100%" stopColor="rgba(139, 92, 246, 0)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="space-y-1 text-[8px] bg-slate-900/60 p-2 sm:p-2.5 rounded-lg border border-slate-800/80">
        <div className="flex justify-between items-center pb-1 border-b border-slate-800/50 text-[7px] text-slate-500 font-bold uppercase font-mono text-left">
          <span>Test Suite Target</span>
          <span>Response</span>
          <span>Status</span>
        </div>
        {tests.map((t, idx) => (
          <div key={idx} className="flex justify-between items-center text-slate-300 text-left py-0.5 border-b border-slate-800/20 last:border-none animate-fadeIn">
            <span className="font-mono truncate max-w-[130px]">{t.name}</span>
            <span className="font-mono text-slate-500">{t.time}</span>
            {t.status === 'Running' ? (
              <span className="px-1 py-0.5 rounded bg-brand-primary/10 text-brand-primary font-extrabold uppercase text-[6px] flex items-center gap-0.5 animate-pulse">
                <span className="w-1 h-1 rounded-full bg-brand-primary animate-ping" />
                RUN
              </span>
            ) : (
              <span className="px-1 py-0.5 rounded bg-brand-success/10 text-brand-success font-extrabold uppercase text-[6px]">
                PASS
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const MODBUS_LOG_TEMPLATES = [
  'POLLING_OK: read registers 40001-40003',
  'JSON_DUMP: serialized sensor_logs.json',
  'CSV_EXPORTER: appends telemetry data row',
  'MODBUS_CLIENT: transaction complete',
  'RTU_DATA_POLL: timestamp verified',
  'TCP_CONNECT: socket connection established',
  'MODBUS_WRITE: coils 00001-00004 reset',
  'POLLING_OK: read coil status (0x01)',
  'JSON_DUMP: auto-saved backup snapshot',
  'CSV_EXPORTER: live sync success',
];

function TelemetryMockup() {
  const [temp, setTemp] = useState(24.5);
  const [humidity, setHumidity] = useState(58.2);
  const [logs, setLogs] = useState([
    { time: '11:09:12', msg: 'POLLING_OK: registers 40001-40003 read success' },
    { time: '11:09:22', msg: 'JSON_DUMP: serialized sensor_logs.json (102 bytes)' },
    { time: '11:09:32', msg: 'CSV_EXPORTER: live sync to rtu_sensor_logs.csv' },
  ]);

  // Fast temp/humidity fluctuations
  useEffect(() => {
    const interval = setInterval(() => {
      setTemp((prev) => {
        const diff = (Math.random() * 0.2 - 0.1);
        return Math.round((prev + diff) * 10) / 10;
      });
      setHumidity((prev) => {
        const diff = (Math.random() * 0.4 - 0.2);
        return Math.round((prev + diff) * 10) / 10;
      });
    }, 700);
    return () => clearInterval(interval);
  }, []);

  // Modbus transaction log rolling updater
  useEffect(() => {
    let logIndex = 0;
    const interval = setInterval(() => {
      const now = new Date();
      const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
      const nextMsg = MODBUS_LOG_TEMPLATES[logIndex % MODBUS_LOG_TEMPLATES.length];
      logIndex++;

      setLogs((prev) => {
        const nextList = [...prev, { time: timeStr, msg: nextMsg }];
        if (nextList.length > 3) {
          nextList.shift();
        }
        return nextList;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full bg-slate-950/90 border border-slate-800 rounded-xl p-3 sm:p-4 text-slate-300 flex flex-col gap-3 overflow-hidden shadow-2xl relative select-none">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          <span className="text-[10px] font-bold text-slate-200 uppercase tracking-widest font-mono">Device: RTU-AHM-01</span>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[9px] text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
          <span>Modbus Active</span>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-3 flex-grow items-stretch">
        <div className="col-span-2 flex flex-col justify-between gap-1.5 text-left">
          <div className="bg-slate-900/60 p-1.5 rounded-lg border border-slate-800/80 flex flex-col justify-center h-[36px]">
            <span className="text-[7px] text-slate-500 font-bold uppercase tracking-wider">Temperature</span>
            <span className="text-[10px] font-black text-amber-400 font-mono mt-0.5">{temp} °C</span>
          </div>
          <div className="bg-slate-900/60 p-1.5 rounded-lg border border-slate-800/80 flex flex-col justify-center h-[36px]">
            <span className="text-[7px] text-slate-500 font-bold uppercase tracking-wider">Humidity</span>
            <span className="text-[10px] font-black text-sky-400 font-mono mt-0.5">{humidity} %</span>
          </div>
          <div className="bg-slate-900/60 p-1.5 rounded-lg border border-slate-800/80 flex flex-col justify-center h-[36px]">
            <span className="text-[7px] text-slate-500 font-bold uppercase tracking-wider">Modbus Address</span>
            <span className="text-[8px] font-extrabold text-slate-400 font-mono mt-0.5 truncate">40001 (Hold Reg)</span>
          </div>
        </div>

        <div className="col-span-3 bg-slate-900/40 rounded-lg border border-slate-900/80 p-2 flex flex-col justify-between text-left overflow-hidden">
          <div className="flex justify-between items-center text-[7px] text-slate-500 font-mono">
            <span>Modbus Polling Wave</span>
            <span className="text-amber-500 flex items-center gap-1 animate-pulse">
              <span>●</span> Scanning
            </span>
          </div>
          <div className="h-14 w-full relative pt-1 overflow-hidden">
            <svg className="w-full h-full overflow-hidden" viewBox="0 0 100 30" preserveAspectRatio="none">
              <line x1="0" y1="15" x2="100" y2="15" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />

              <g>
                <path
                  d="M 0 15 L 10 15 L 10 5 L 12 5 L 12 15 L 25 15 L 25 22 L 27 22 L 27 15 L 40 15 L 40 8 L 42 8 L 42 15 L 55 15 L 55 5 L 57 5 L 57 15 L 70 15 L 70 25 L 72 25 L 72 15 L 85 15 L 85 10 L 87 10 L 87 15 L 100 15 L 110 15 L 110 5 L 112 5 L 112 15 L 125 15 L 125 22 L 127 22 L 127 15 L 140 15 L 140 8 L 142 8 L 142 15 L 155 15 L 155 5 L 157 5 L 157 15 L 170 15 L 170 25 L 172 25 L 172 15 L 185 15 L 185 10 L 187 10 L 187 15 L 200 15"
                  fill="none"
                  stroke="rgb(245, 158, 11)"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M 0 15 L 10 15 L 10 5 L 12 5 L 12 15 L 25 15 L 25 22 L 27 22 L 27 15 L 40 15 L 40 8 L 42 8 L 42 15 L 55 15 L 55 5 L 57 5 L 57 15 L 70 15 L 70 25 L 72 25 L 72 15 L 85 15 L 85 10 L 87 10 L 87 15 L 100 15 L 110 15 L 110 5 L 112 5 L 112 15 L 125 15 L 125 22 L 127 22 L 127 15 L 140 15 L 140 8 L 142 8 L 142 15 L 155 15 L 155 5 L 157 5 L 157 15 L 170 15 L 170 25 L 172 25 L 172 15 L 185 15 L 185 10 L 187 10 L 187 15 L 200 15 L 200 30 L 0 30 Z"
                  fill="rgba(245, 158, 11, 0.04)"
                />

                <animateTransform
                  attributeName="transform"
                  type="translate"
                  from="0 0"
                  to="-100 0"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>

      <div className="bg-slate-900/60 p-2 sm:p-2.5 rounded-lg border border-slate-800/80 font-mono text-[7px] space-y-1 text-left min-h-[55px]">
        <div className="text-slate-500 pb-1 border-b border-slate-800/50 uppercase tracking-widest text-[6px] font-bold">Modbus Transactions</div>
        {logs.map((log, idx) => (
          <div key={idx} className="flex items-center gap-1 text-slate-350 py-0.5 border-b border-slate-800/10 last:border-none animate-fadeIn">
            <span className="text-amber-500 select-none">&gt;</span>
            <span className="text-slate-500">[{log.time}]</span>
            <span className="truncate">{log.msg}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileMockup() {
  const [currentTest, setCurrentTest] = useState('auth_flow');
  const [status, setStatus] = useState<'running' | 'passed'>('running');
  const [consoleLogs, setConsoleLogs] = useState<string[]>([
    'Initializing driver...',
    'Launching CIMTrack App...',
  ]);

  const testSteps = [
    { name: 'auth_flow', desc: 'Validating role-based login redirect', passLog: '✓ Auth flow passed' },
    { name: 'crud_operations', desc: 'Testing client profile updates', passLog: '✓ CRUD operations verified' },
    { name: 'history_validation', desc: 'Checking offline cache sync', passLog: '✓ History sync validated' },
    { name: 'role_access', desc: 'Verifying supervisor permissions', passLog: '✓ Role access controls pass' },
  ];

  useEffect(() => {
    let stepIndex = 0;
    let timer1: any;
    let timer2: any;

    const runStep = () => {
      const step = testSteps[stepIndex % testSteps.length];
      setCurrentTest(step.name);
      setStatus('running');
      setConsoleLogs((prev) => [
        ...prev.slice(-2),
        `Running: [integration_test] ${step.name}`
      ]);

      timer1 = setTimeout(() => {
        setStatus('passed');
        setConsoleLogs((prev) => [
          ...prev.slice(-2),
          step.passLog
        ]);
        stepIndex++;

        timer2 = setTimeout(runStep, 1200);
      }, 1500);
    };

    runStep();

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-[170px] h-[300px] rounded-[32px] bg-slate-900 border-4 border-slate-800 p-2 flex flex-col justify-between shadow-2xl relative select-none">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-3 bg-slate-800 rounded-full z-20" />

        <div className="w-full h-full rounded-[24px] bg-slate-950 border border-slate-900 p-3 font-mono text-[8px] text-slate-400 flex flex-col justify-between overflow-hidden">
          <div className="flex justify-between items-center pt-2">
            <span className="text-[9px] font-bold text-slate-200 flex items-center gap-1">
              <Smartphone size={10} className="text-teal-400" /> CIMTrack
            </span>
            <span className={status === 'running' ? 'text-amber-500 animate-pulse' : 'text-green-500'}>
              {status === 'running' ? '● Testing' : '● Connected'}
            </span>
          </div>

          <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800 flex flex-col items-center gap-1.5 my-3 min-h-[110px] justify-center text-center">
            {status === 'running' ? (
              <div className="w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <span className="w-4 h-4 rounded-full border-2 border-amber-400 border-t-transparent animate-spin" />
              </div>
            ) : (
              <div className="w-8 h-8 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400">
                <CheckCircleMock size={16} />
              </div>
            )}
            <span className="text-slate-250 text-[8px] font-bold uppercase tracking-wider">
              {currentTest.replace('_', ' ')}
            </span>
            <span className="text-slate-500 text-[7px] leading-tight px-1">
              {testSteps.find((s) => s.name === currentTest)?.desc}
            </span>
          </div>

          <div className="bg-slate-900/50 p-2 rounded border border-slate-900 space-y-1 text-[6px] min-h-[65px] flex flex-col justify-end">
            {consoleLogs.map((log, idx) => (
              <div key={idx} className={log.startsWith('✓') ? 'text-green-400 font-bold animate-fadeIn' : 'text-slate-400 truncate animate-fadeIn'}>
                {log}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function BrowserMockup() {
  const [tests, setTests] = useState([
    { name: 'auth_persistent.spec.ts', browser: 'chromium', time: '840ms', status: 'PASS' },
    { name: 'dashboard_load.spec.ts', browser: 'firefox', time: '1.2s', status: 'PASS' },
    { name: 'checkout_workflow.spec.ts', browser: 'webkit', time: '2.4s', status: 'PASS' },
    { name: 'user_permissions.spec.ts', browser: 'chromium', time: '---', status: 'RUNNING' }
  ]);
  const [progress, setProgress] = useState(72);
  const [totalExecuted, setTotalExecuted] = useState(482);

  const specNames = [
    'auth_persistent.spec.ts',
    'dashboard_load.spec.ts',
    'checkout_workflow.spec.ts',
    'user_permissions.spec.ts',
    'api_validation.spec.ts',
    'settings_profile.spec.ts',
    'payment_methods.spec.ts',
    'admin_analytics.spec.ts',
    'csv_reports_export.spec.ts',
    'socket_sync.spec.ts'
  ];

  useEffect(() => {
    let specIdx = 4;
    let timer: any;

    const runInterval = () => {
      timer = setInterval(() => {
        setTests((prev) => {
          const updated = prev.map((t) => {
            if (t.status === 'RUNNING') {
              const finalTime = `${Math.floor(400 + Math.random() * 2000)}ms`;
              return { ...t, time: finalTime, status: 'PASS' };
            }
            return t;
          });

          const nextSpec = specNames[specIdx % specNames.length];
          const nextBrowser = ['chromium', 'firefox', 'webkit'][Math.floor(Math.random() * 3)];
          specIdx++;

          const nextList = [...updated, { name: nextSpec, browser: nextBrowser, time: '---', status: 'RUNNING' }];
          if (nextList.length > 4) {
            nextList.shift();
          }
          return nextList;
        });

        setTotalExecuted((prev) => prev + 1);
        setProgress((prev) => {
          const nextProgress = prev + 5;
          return nextProgress > 100 ? 10 : nextProgress;
        });
      }, 2000);
    };

    runInterval();

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full bg-slate-950/90 border border-slate-800 rounded-xl p-3 sm:p-4 text-slate-300 flex flex-col gap-3 overflow-hidden shadow-2xl relative select-none">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800/80">
        <div className="flex items-center gap-2 text-left">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          <span className="text-[10px] font-bold text-slate-200 uppercase tracking-widest font-mono">Playwright Test Runner</span>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[8px] text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
          <span>Worker Pool: 4 Active</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <div className="bg-slate-900/60 p-1.5 rounded-lg border border-slate-800/80 flex flex-col justify-between h-[48px] text-left">
          <span className="text-[7px] text-slate-500 font-bold uppercase tracking-wider">Pass Rate</span>
          <div className="flex items-baseline justify-between leading-none">
            <span className="text-xs font-black text-green-400 font-mono">100%</span>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          </div>
        </div>
        <div className="bg-slate-900/60 p-1.5 rounded-lg border border-slate-800/80 flex flex-col justify-between h-[48px] text-left">
          <span className="text-[7px] text-slate-500 font-bold uppercase tracking-wider">Executed</span>
          <div className="flex items-baseline justify-between leading-none">
            <span className="text-xs font-black text-slate-250 font-mono">{totalExecuted}</span>
            <TrendingUp size={10} className="text-indigo-400 font-bold" />
          </div>
        </div>
        <div className="bg-slate-900/60 p-1.5 rounded-lg border border-slate-800/80 flex flex-col justify-between h-[48px] text-left">
          <span className="text-[7px] text-slate-500 font-bold uppercase tracking-wider">Target Domain</span>
          <div className="flex items-baseline justify-between leading-none">
            <span className="text-[9px] font-black text-slate-400 font-mono truncate">web.gsos.app</span>
          </div>
        </div>
      </div>

      <div className="bg-slate-900/40 p-2 rounded-lg border border-slate-900 text-left flex flex-col gap-1">
        <div className="flex justify-between items-center text-[7px] font-mono text-slate-500">
          <span>Suite Execution Progress</span>
          <span>{progress}% Completed</span>
        </div>
        <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden border border-slate-850">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="flex-grow space-y-1 text-[8px] bg-slate-900/60 p-2 sm:p-2.5 rounded-lg border border-slate-800/80 min-h-[110px]">
        <div className="flex justify-between items-center pb-1 border-b border-slate-800/50 text-[7px] text-slate-500 font-bold uppercase font-mono text-left">
          <span>Browser / Spec File</span>
          <span>Response</span>
          <span>Status</span>
        </div>
        {tests.map((t, idx) => (
          <div key={idx} className="flex justify-between items-center text-slate-350 text-left py-0.5 border-b border-slate-800/25 last:border-none animate-fadeIn">
            <div className="flex items-center gap-1.5 font-mono truncate max-w-[145px]">
              <span className={`px-1 py-0.2 rounded font-sans uppercase font-bold text-[5px] ${t.browser === 'chromium' ? 'bg-blue-500/10 text-blue-400' :
                t.browser === 'firefox' ? 'bg-orange-500/10 text-orange-400' : 'bg-pink-500/10 text-pink-400'
                }`}>
                {t.browser}
              </span>
              <span className="truncate">{t.name}</span>
            </div>
            <span className="font-mono text-[7px] text-slate-500">{t.time}</span>
            {t.status === 'RUNNING' ? (
              <span className="px-1 py-0.5 rounded bg-amber-500/10 text-amber-500 font-extrabold uppercase text-[5.5px] flex items-center gap-0.5 animate-pulse">
                <span className="w-1 h-1 rounded-full bg-amber-500 animate-ping" />
                RUN
              </span>
            ) : (
              <span className="px-1 py-0.5 rounded bg-green-500/10 text-green-400 font-extrabold uppercase text-[5.5px]">
                PASS
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ApiMockup() {
  const [activeCall, setActiveCall] = useState(0);
  const [logs, setLogs] = useState<string[]>([
    '✓ Schema validated successfully',
    '✓ Token chaining verified',
  ]);

  const calls = [
    {
      method: 'GET',
      path: '/api/v1/user',
      status: '200 OK',
      time: '14ms',
      json: { id: 481, name: 'Dwip Pandya', role: 'SDET' }
    },
    {
      method: 'POST',
      path: '/api/v1/auth',
      status: '201 Created',
      time: '86ms',
      json: { token: 'jwt_secret_token', expires: 3600 }
    },
    {
      method: 'PUT',
      path: '/api/v1/settings',
      status: '200 OK',
      time: '32ms',
      json: { theme: 'dark', notifications: true }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCall((prev) => (prev + 1) % calls.length);
      const call = calls[(activeCall + 1) % calls.length];
      setLogs([
        `✓ [${call.method}] ${call.path} response parsed`,
        `✓ Header authorization verified`
      ]);
    }, 2500);

    return () => clearInterval(interval);
  }, [activeCall]);

  const currentCall = calls[activeCall];

  return (
    <div className="w-full h-full bg-slate-900 border border-slate-800 rounded-xl p-3 font-mono text-[9px] text-slate-300 flex flex-col justify-between overflow-hidden shadow-inner select-none">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800/80">
        <span className="text-[10px] font-bold text-slate-100 flex items-center gap-1.5">
          <Network size={11} className="text-indigo-400" /> POSTMAN API
        </span>
        <span className="text-[8px] bg-indigo-500/10 text-indigo-400 px-1.5 py-0.5 rounded font-bold">NEWMAN</span>
      </div>

      <div className="grid grid-cols-5 gap-2 my-2 flex-grow">
        <div className="col-span-2 space-y-1 text-[6.5px]">
          {calls.map((c, idx) => {
            const isActive = idx === activeCall;
            const methodColors = c.method === 'GET' ? 'text-green-400' : c.method === 'POST' ? 'text-blue-400' : 'text-amber-400';
            return (
              <div
                key={idx}
                className={`flex items-center gap-1 p-1 rounded transition-all duration-300 ${isActive ? 'bg-slate-950 border border-indigo-500/30' : 'bg-slate-950/40 border border-slate-900'
                  }`}
              >
                <span className={`font-extrabold ${methodColors}`}>{c.method}</span>
                <span className="text-slate-400 truncate text-[6px]">{c.path}</span>
              </div>
            );
          })}
        </div>

        <div className="col-span-3 bg-slate-950 p-2 rounded border border-slate-850 flex flex-col justify-between text-[7px] text-slate-400 min-h-[85px]">
          <div>
            <div className="text-[6px] text-slate-650 uppercase font-bold tracking-wider mb-1">JSON_RESPONSE</div>
            <div className="text-indigo-400 font-semibold">{`{`}</div>
            {Object.entries(currentCall.json).map(([key, val]) => (
              <div key={key} className="pl-2.5 text-[6.5px]">
                <span className="text-slate-400">"{key}":</span>{' '}
                <span className="text-amber-450">"{String(val)}"</span>,
              </div>
            ))}
            <div className="text-indigo-400 font-semibold">{`}`}</div>
          </div>
          <div className="text-[6px] text-slate-500 flex justify-between border-t border-slate-900 pt-1 font-bold">
            <span className="text-green-400">{currentCall.status}</span>
            <span>{currentCall.time}</span>
          </div>
        </div>
      </div>

      <div className="space-y-0.5 text-[7.5px] bg-slate-950 p-1.5 rounded border border-slate-900 min-h-[34px] flex flex-col justify-center text-left">
        {logs.map((log, idx) => (
          <div key={idx} className="text-green-400 animate-fadeIn">
            {log}
          </div>
        ))}
      </div>
    </div>
  );
}

function NuvioMockup() {
  const [todoChecked, setTodoChecked] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [activeTab, setActiveTab] = useState('ideas');

  useEffect(() => {
    // 1. Toggle todo check
    const todoInterval = setInterval(() => {
      setTodoChecked((prev) => !prev);
    }, 3000);

    // 2. Type text
    const fullText = 'NextGen QA Platform...';
    let charIdx = 0;
    const typeInterval = setInterval(() => {
      setTypedText(fullText.slice(0, charIdx));
      charIdx++;
      if (charIdx > fullText.length) {
        setTimeout(() => {
          charIdx = 0;
        }, 1500);
      }
    }, 150);

    // 3. Cycle active folder
    const tabInterval = setInterval(() => {
      setActiveTab((prev) => (prev === 'ideas' ? 'life' : 'ideas'));
    }, 4500);

    return () => {
      clearInterval(todoInterval);
      clearInterval(typeInterval);
      clearInterval(tabInterval);
    };
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center select-none">
      <div className="w-[170px] h-[300px] rounded-[32px] bg-slate-900 border-4 border-slate-800 p-2 flex flex-col justify-between shadow-2xl relative">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-3 bg-slate-800 rounded-full z-20" />

        <div className="w-full h-full rounded-[24px] bg-slate-950 border border-slate-900 p-3 font-sans text-[8px] text-slate-400 flex flex-col justify-between overflow-hidden">
          <div className="flex justify-between items-center pt-2">
            <span className="text-[10px] font-bold text-slate-100 flex items-center gap-1 font-outfit">
              <Sparkles size={10} className="text-amber-400 animate-pulse" />
              Nuvio
            </span>
            <span className="text-[7px] text-slate-500 font-mono">100% Offline</span>
          </div>

          <div className="mt-3">
            <span className="text-[7px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Folders</span>
            <div className="grid grid-cols-2 gap-1">
              <div
                className={`p-1.5 rounded-lg border transition-all duration-300 flex items-center gap-1.5 ${activeTab === 'ideas' ? 'bg-slate-900 border-blue-500/40 shadow-sm' : 'bg-slate-900/40 border-slate-800'
                  }`}
              >
                <Folder size={10} className="text-blue-400" />
                <div className="truncate">
                  <p className="text-[7px] text-slate-200 font-bold truncate">Ideas</p>
                  <p className="text-[5px] text-slate-500">12 notes</p>
                </div>
              </div>
              <div
                className={`p-1.5 rounded-lg border transition-all duration-300 flex items-center gap-1.5 ${activeTab === 'life' ? 'bg-slate-900 border-violet-500/40 shadow-sm' : 'bg-slate-900/40 border-slate-800'
                  }`}
              >
                <Folder size={10} className="text-violet-400" />
                <div className="truncate">
                  <p className="text-[7px] text-slate-200 font-bold truncate">Life</p>
                  <p className="text-[5px] text-slate-500">5 notes</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-grow mt-3 overflow-hidden flex flex-col justify-start">
            <span className="text-[7px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
              {activeTab === 'ideas' ? 'Ideas Editor' : 'Task List'}
            </span>

            <div className="bg-slate-900/70 p-2.5 rounded-xl border border-slate-800/80 flex-grow flex flex-col justify-between min-h-[95px]">
              {activeTab === 'ideas' ? (
                <div className="space-y-1.5 text-left">
                  <div className="flex justify-between items-center">
                    <span className="text-[7.5px] text-slate-200 font-extrabold truncate">💡 App Dev Notes</span>
                    <Star size={7} className="text-amber-400 fill-amber-400" />
                  </div>
                  <p className="text-[6.5px] text-slate-400 font-mono flex items-center gap-0.5">
                    &gt; {typedText}
                    <span className="w-1 h-3 bg-brand-primary animate-pulse" />
                  </p>
                </div>
              ) : (
                <div className="space-y-1.5 text-left">
                  <div className="flex justify-between items-center">
                    <span className="text-[7.5px] text-slate-200 font-extrabold truncate">📝 Daily Tasks</span>
                    <Star size={7} className="text-slate-650" />
                  </div>
                  <div className="space-y-1 mt-1 font-sans">
                    <div className="flex items-center gap-1.5">
                      <input
                        type="checkbox"
                        checked={todoChecked}
                        readOnly
                        className="w-2 h-2 rounded-sm accent-violet-500 cursor-pointer pointer-events-none"
                      />
                      <span className={`text-[6.5px] transition-all duration-300 ${todoChecked ? 'line-through text-slate-600' : 'text-slate-350'}`}>
                        Release Flutter beta build
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <input
                        type="checkbox"
                        checked={!todoChecked}
                        readOnly
                        className="w-2 h-2 rounded-sm accent-violet-500 cursor-pointer pointer-events-none"
                      />
                      <span className={`text-[6.5px] transition-all duration-300 ${!todoChecked ? 'line-through text-slate-600' : 'text-slate-350'}`}>
                        Review integration tests
                      </span>
                    </div>
                  </div>
                </div>
              )}

              <div className="text-[5.5px] text-slate-650 text-right mt-2 font-mono">
                {activeTab === 'ideas' ? 'Char count: 21' : 'Done: 1/2'}
              </div>
            </div>
          </div>

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
}

function NotesMockup() {
  const [checked, setChecked] = useState([true, false, false]);
  const [typedText, setTypedText] = useState('');
  const [saved, setSaved] = useState(true);

  useEffect(() => {
    const fullText = '## Q3 Launch Checklist\nDraft the release notes...';
    let charIdx = 0;
    const typeInterval = setInterval(() => {
      setSaved(false);
      setTypedText(fullText.slice(0, charIdx));
      charIdx++;
      if (charIdx > fullText.length) {
        charIdx = 0;
        setSaved(true);
      }
    }, 90);
    return () => clearInterval(typeInterval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setChecked((prev) => {
        const idx = Math.floor(Math.random() * prev.length);
        const next = [...prev];
        next[idx] = !next[idx];
        return next;
      });
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full bg-slate-950/90 border border-slate-800 rounded-xl p-3 sm:p-4 text-slate-300 flex flex-col gap-3 overflow-hidden shadow-2xl relative select-none">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800/80">
        <div className="flex items-center gap-2 text-left">
          <Command size={12} className="text-amber-400" />
          <span className="text-[10px] font-bold text-slate-200 uppercase tracking-widest font-mono">StickyNote — Workspace</span>
        </div>
        <span className={`text-[8px] font-mono px-1.5 py-0.5 rounded border ${saved ? 'text-emerald-400 border-emerald-500/20 bg-emerald-500/10' : 'text-amber-400 border-amber-500/20 bg-amber-500/10 animate-pulse'}`}>
          {saved ? 'Saved' : 'Saving…'}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <div className="bg-slate-900/60 p-1.5 rounded-lg border border-slate-800/80 flex flex-col justify-between h-[40px] text-left">
          <span className="text-[7px] text-slate-500 font-bold uppercase tracking-wider">Docs</span>
          <span className="text-xs font-black text-slate-200 font-mono">38</span>
        </div>
        <div className="bg-slate-900/60 p-1.5 rounded-lg border border-slate-800/80 flex flex-col justify-between h-[40px] text-left">
          <span className="text-[7px] text-slate-500 font-bold uppercase tracking-wider">Favorites</span>
          <span className="text-xs font-black text-amber-400 font-mono">6</span>
        </div>
        <div className="bg-slate-900/60 p-1.5 rounded-lg border border-slate-800/80 flex flex-col justify-between h-[40px] text-left">
          <span className="text-[7px] text-slate-500 font-bold uppercase tracking-wider">Storage</span>
          <span className="text-xs font-black text-brand-primary font-mono">1.2mb</span>
        </div>
      </div>

      <div className="flex-grow bg-slate-900/40 rounded-lg border border-slate-900 p-2.5 flex flex-col gap-1.5 text-left min-h-[95px]">
        <div className="flex items-center gap-1 text-[7px] text-slate-500 uppercase font-mono">
          <FileText size={9} className="text-slate-500" />
          <span>launch-notes.md</span>
        </div>
        <p className="text-[7px] text-slate-400 font-mono whitespace-pre-line leading-relaxed">
          {typedText}
          <span className="inline-block w-1 h-2.5 bg-brand-primary animate-pulse align-middle ml-0.5" />
        </p>
        <div className="mt-auto space-y-1">
          {['Draft release notes', 'Update changelog', 'Notify beta testers'].map((item, idx) => (
            <div key={idx} className="flex items-center gap-1.5">
              <input type="checkbox" checked={checked[idx]} readOnly className="w-2 h-2 rounded-sm accent-amber-500 pointer-events-none" />
              <span className={`text-[6.5px] transition-all duration-300 ${checked[idx] ? 'line-through text-slate-600' : 'text-slate-350'}`}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const KANBAN_COLUMNS = ['To Do', 'In Progress', 'Done'] as const;

function KanbanMockup() {
  const [board, setBoard] = useState<number[]>([3, 2, 5]);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBoard((prev) => {
        const from = Math.floor(Math.random() * 2);
        const next = [...prev];
        if (next[from] > 0) {
          next[from] -= 1;
          next[from + 1] += 1;
        }
        return next;
      });
      setCycle((c) => c + 1);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  const total = board.reduce((a, b) => a + b, 0);
  const completion = Math.round((board[2] / total) * 100);

  return (
    <div className="w-full h-full bg-slate-950/90 border border-slate-800 rounded-xl p-3 sm:p-4 text-slate-300 flex flex-col gap-3 overflow-hidden shadow-2xl relative select-none">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800/80">
        <div className="flex items-center gap-2 text-left">
          <LayoutGrid size={12} className="text-sky-400" />
          <span className="text-[10px] font-bold text-slate-200 uppercase tracking-widest font-mono">Clair — Sprint Board</span>
        </div>
        <span className="text-[8px] font-mono text-slate-500 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">SQLite · Local #{cycle}</span>
      </div>

      <div className="grid grid-cols-3 gap-2 flex-grow">
        {KANBAN_COLUMNS.map((col, idx) => (
          <div key={col} className="bg-slate-900/50 rounded-lg border border-slate-800/80 p-1.5 flex flex-col gap-1 text-left min-h-[100px]">
            <span className="text-[6.5px] font-bold uppercase tracking-wider text-slate-500">{col}</span>
            <span className={`text-sm font-black font-mono ${idx === 2 ? 'text-emerald-400' : idx === 1 ? 'text-sky-400' : 'text-slate-300'}`}>{board[idx]}</span>
            <div className="flex flex-col gap-1 mt-1">
              {Array.from({ length: Math.min(board[idx], 3) }).map((_, cardIdx) => (
                <div key={cardIdx} className="h-2.5 rounded bg-slate-800/80 border border-slate-800 animate-fadeIn" />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-slate-900/60 p-2 rounded-lg border border-slate-800/80 text-left">
        <div className="flex justify-between items-center text-[7px] font-mono text-slate-500 mb-1">
          <span>Completion Rate</span>
          <span>{completion}%</span>
        </div>
        <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden border border-slate-850">
          <div className="h-full bg-gradient-to-r from-sky-500 to-emerald-500 rounded-full transition-all duration-700" style={{ width: `${completion}%` }} />
        </div>
      </div>
    </div>
  );
}

function FinanceMockup() {
  const [balance, setBalance] = useState(48210);
  const [bars] = useState([40, 65, 30, 80, 55, 90, 45]);
  const [txns, setTxns] = useState([
    { label: 'Grocery Store', amount: -840, type: 'expense' },
    { label: 'Salary Credit', amount: 52000, type: 'income' },
    { label: 'Electricity Bill', amount: -1240, type: 'expense' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const isIncome = Math.random() > 0.7;
      const amount = isIncome ? Math.floor(500 + Math.random() * 4000) : -Math.floor(100 + Math.random() * 900);
      setBalance((prev) => prev + amount);
      setTxns((prev) => {
        const labels = ['Coffee Shop', 'Fuel', 'Freelance Payment', 'Subscription', 'Dining Out'];
        const next = [{ label: labels[Math.floor(Math.random() * labels.length)], amount, type: isIncome ? 'income' : 'expense' }, ...prev];
        next.length = 3;
        return next;
      });
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center select-none">
      <div className="w-[170px] h-[300px] rounded-[32px] bg-slate-900 border-4 border-slate-800 p-2 flex flex-col justify-between shadow-2xl relative">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-3 bg-slate-800 rounded-full z-20" />

        <div className="w-full h-full rounded-[24px] bg-slate-950 border border-slate-900 p-3 font-sans text-[8px] text-slate-400 flex flex-col justify-between overflow-hidden">
          <div className="flex justify-between items-center pt-2">
            <span className="text-[10px] font-bold text-slate-100 flex items-center gap-1">
              <Wallet size={10} className="text-teal-400" /> Expense
            </span>
            <span className="text-[7px] text-teal-400 bg-teal-500/10 px-1.5 py-0.5 rounded border border-teal-500/20 font-mono">Offline</span>
          </div>

          <div className="mt-2 bg-slate-900/70 rounded-lg border border-slate-800 p-2 text-left">
            <span className="text-[6.5px] text-slate-500 font-bold uppercase tracking-wider">Total Balance</span>
            <div className="text-[13px] font-black text-teal-400 font-mono leading-tight">₹{balance.toLocaleString('en-IN')}</div>
          </div>

          <div className="mt-2 bg-slate-900/40 rounded-lg border border-slate-900 p-1.5 flex items-end gap-1 h-[52px]">
            {bars.map((h, idx) => (
              <div key={idx} className="flex-1 bg-gradient-to-t from-teal-500/70 to-brand-primary/60 rounded-sm transition-all duration-500" style={{ height: `${h}%` }} />
            ))}
          </div>

          <div className="flex-grow mt-2 space-y-1 text-[7px] bg-slate-900/60 p-2 rounded-lg border border-slate-800/80 min-h-[70px] flex flex-col justify-start">
            <span className="text-[6px] text-slate-500 font-bold uppercase tracking-wider mb-0.5">Recent</span>
            {txns.map((t, idx) => (
              <div key={idx} className="flex justify-between items-center text-left py-0.5 border-b border-slate-800/20 last:border-none animate-fadeIn">
                <span className="truncate max-w-[75px] text-slate-300">{t.label}</span>
                <span className={`font-mono font-bold ${t.type === 'income' ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {t.type === 'income' ? '+' : '−'}₹{Math.abs(t.amount).toLocaleString('en-IN')}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const GONEXT_CATEGORIES = [
  { name: 'Restaurants', count: 14, color: 'text-rose-400', border: 'border-rose-500/40' },
  { name: 'Shopping', count: 9, color: 'text-amber-400', border: 'border-amber-500/40' },
  { name: 'Travel', count: 7, color: 'text-sky-400', border: 'border-sky-500/40' },
];

function PlacesMockup() {
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % GONEXT_CATEGORIES.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  const active = GONEXT_CATEGORIES[activeCategory];

  return (
    <div className="w-full h-full flex justify-center items-center select-none">
      <div className="w-[170px] h-[300px] rounded-[32px] bg-slate-900 border-4 border-slate-800 p-2 flex flex-col justify-between shadow-2xl relative">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-3 bg-slate-800 rounded-full z-20" />

        <div className="w-full h-full rounded-[24px] bg-slate-950 border border-slate-900 p-3 font-sans text-[8px] text-slate-400 flex flex-col justify-between overflow-hidden">
          <div className="flex justify-between items-center pt-2">
            <span className="text-[10px] font-bold text-slate-100 flex items-center gap-1">
              <MapPin size={10} className="text-teal-400" /> GoNext
            </span>
            <span className="text-[7px] text-slate-500 font-mono">Offline</span>
          </div>

          <div className="mt-2 bg-slate-900/70 rounded-lg border border-slate-800 px-2 py-1.5 flex items-center gap-1.5">
            <Search size={9} className="text-slate-500" />
            <span className="text-[6.5px] text-slate-500">Search saved places…</span>
          </div>

          <div className="mt-3 flex-grow flex flex-col gap-1.5">
            {GONEXT_CATEGORIES.map((cat, idx) => (
              <div
                key={cat.name}
                className={`p-1.5 rounded-lg border transition-all duration-300 flex items-center justify-between ${idx === activeCategory ? `bg-slate-900 shadow-sm ${cat.border}` : 'bg-slate-900/40 border-slate-800'
                  }`}
              >
                <span className={`text-[7px] font-bold ${idx === activeCategory ? cat.color : 'text-slate-300'}`}>{cat.name}</span>
                <span className="text-[6px] text-slate-500 font-mono">{cat.count} saved</span>
              </div>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-900/80 flex items-center gap-1.5">
            <MapPin size={9} className={active.color} />
            <span className="text-[6px] text-slate-500 truncate">Nearest: {active.name} · 1.2km</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState<ProjectTab>('qa');
  const visibleProjects = projects.filter((p) => p.tab === activeTab);

  const renderVisualMockup = (type: string) => {
    switch (type) {
      case 'dashboard':
        return <DashboardMockup />;
      case 'telemetry':
        return <TelemetryMockup />;
      case 'mobile':
        return <MobileMockup />;
      case 'browser':
        return <BrowserMockup />;
      case 'api':
        return <ApiMockup />;
      case 'nuvio':
        return <NuvioMockup />;
      case 'notes':
        return <NotesMockup />;
      case 'kanban':
        return <KanbanMockup />;
      case 'finance':
        return <FinanceMockup />;
      case 'places':
        return <PlacesMockup />;
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
        <div className="text-left mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-brand-primary" />
            <span className="text-xs font-mono font-bold tracking-widest text-brand-primary uppercase">Case Studies</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-brand-text">
            Featured Projects.
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 border cursor-pointer ${activeTab === tab.id
                ? 'bg-brand-text text-brand-bg border-brand-text shadow-sm'
                : 'bg-brand-surface text-brand-text-muted border-brand-border hover:text-brand-text hover:border-brand-text/40'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects List with Alternating Layouts */}
        <framerMotion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
          className="space-y-32"
        >
          {visibleProjects.length === 0 && (
            <div className="text-center py-24 text-brand-text-muted text-sm sm:text-base">
              No Chrome Extensions available yet.
            </div>
          )}
          {visibleProjects.map((proj, index) => {
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
        </framerMotion.div>
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
