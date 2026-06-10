import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Cpu, Network, Code, Database, Layers, BarChart3, GitBranch } from 'lucide-react';

interface Skill {
  name: string;
  category: 'Testing & Automation' | 'Languages & Databases' | 'Frameworks & Backend' | 'Tools & Platforms';
  logoSlug?: string;
  iconName: 'testing' | 'automation' | 'api' | 'languages' | 'databases' | 'development' | 'reporting' | 'tools';
  desc: string;
  logs: string[];
}

const skillsData: Skill[] = [
  // Testing & Automation
  {
    name: 'Manual Testing',
    category: 'Testing & Automation',
    iconName: 'testing',
    desc: 'Functional and manual QA validation processes.',
    logs: [
      'Manual Testing',
      'Functional Testing',
      'Regression Testing',
      'Smoke Testing',
      'Sanity Testing',
      'Exploratory Testing',
      'Boundary & Negative Testing',
      'End-to-End (E2E) Testing',
      'Integration Testing'
    ]
  },
  {
    name: 'Playwright',
    category: 'Testing & Automation',
    logoSlug: 'playwright',
    iconName: 'automation',
    desc: 'E2E cross-browser web automation scripting.',
    logs: [
      'Playwright (JavaScript, TypeScript, Python)',
      'Page Object Model (POM)',
      'UI Automation Framework Design',
      'Locators & Wait Strategies'
    ]
  },
  {
    name: 'flutter_test',
    category: 'Testing & Automation',
    logoSlug: 'flutter',
    iconName: 'automation',
    desc: 'Flutter mobile application integration testing.',
    logs: [
      'flutter_test & integration_test',
      'Mobile Application Automation',
      'Android & iOS E2E Testing Flows'
    ]
  },
  {
    name: 'Postman & API Testing',
    category: 'Testing & Automation',
    logoSlug: 'postman',
    iconName: 'api',
    desc: 'REST API endpoint test suite automation.',
    logs: [
      'Postman Collections & Scripts',
      'REST API Testing',
      'API Automation',
      'Response & Schema Validation',
      'Token-based Auth Testing'
    ]
  },

  // Languages & Databases
  {
    name: 'JavaScript',
    category: 'Languages & Databases',
    logoSlug: 'javascript',
    iconName: 'languages',
    desc: 'Core language for web and playwright scripting.',
    logs: [
      'JavaScript Scripting',
      'Asynchronous Programming'
    ]
  },
  {
    name: 'TypeScript',
    category: 'Languages & Databases',
    logoSlug: 'typescript',
    iconName: 'languages',
    desc: 'Type-safe automation wrapper configurations.',
    logs: [
      'TypeScript Compilers',
      'Strict Type Assertions'
    ]
  },
  {
    name: 'Python',
    category: 'Languages & Databases',
    logoSlug: 'python',
    iconName: 'languages',
    desc: 'Automated telemetry polling and data listeners.',
    logs: [
      'Python Automation Scripting',
      'PyTest Framework Execution'
    ]
  },
  {
    name: 'PHP',
    category: 'Languages & Databases',
    logoSlug: 'php',
    iconName: 'languages',
    desc: 'Backend scripting and troubleshoot routines.',
    logs: [
      'PHP Script Execution',
      'Troubleshooting Codebases'
    ]
  },
  {
    name: 'MySQL & Databases',
    category: 'Languages & Databases',
    logoSlug: 'mysql',
    iconName: 'databases',
    desc: 'Relational data structures & validation queries.',
    logs: [
      'MySQL Databases',
      'SQL Query Validation'
    ]
  },

  // Frameworks & Backend
  {
    name: 'Laravel',
    category: 'Frameworks & Backend',
    logoSlug: 'laravel',
    iconName: 'development',
    desc: 'Backend software architecture and MVC platforms.',
    logs: [
      'Laravel Framework',
      'Backend Debugging',
      'MVC Architecture',
      'REST API Integration'
    ]
  },
  {
    name: 'Test Management & Reporting',
    category: 'Frameworks & Backend',
    iconName: 'reporting',
    desc: 'QA run diagnostics and custom spreadsheets.',
    logs: [
      'Custom Test Reporting Platform',
      'Excel & Google Sheets Reporting',
      'Module-wise Analytics',
      'Severity/Priority Dashboards'
    ]
  },

  // Tools & Platforms
  {
    name: 'Git',
    category: 'Tools & Platforms',
    logoSlug: 'git',
    iconName: 'tools',
    desc: 'Distributed version control & branching workflows.',
    logs: [
      'Git Version Control',
      'Branching & Merging workflows'
    ]
  },
  {
    name: 'GitLab',
    category: 'Tools & Platforms',
    logoSlug: 'gitlab',
    iconName: 'tools',
    desc: 'CI/CD pipeline test sweeps and parallel builds.',
    logs: [
      'GitLab Pipelines',
      'Continuous Integration setups'
    ]
  },
  {
    name: 'JIRA',
    category: 'Tools & Platforms',
    logoSlug: 'jira',
    iconName: 'tools',
    desc: 'Agile defect logging and trace metrics.',
    logs: [
      'JIRA Ticket Trackers',
      'Agile Sprint boards'
    ]
  },
  {
    name: 'ClickUp',
    category: 'Tools & Platforms',
    logoSlug: 'clickup',
    iconName: 'tools',
    desc: 'Defect prioritization and task mapping.',
    logs: [
      'ClickUp Dashboards',
      'QA Timeline Tracking'
    ]
  },
  {
    name: 'Trello',
    category: 'Tools & Platforms',
    logoSlug: 'trello',
    iconName: 'tools',
    desc: 'Sprint tasks boards and bug tracking.',
    logs: [
      'Trello Kanban Boards',
      'Sprint Task mapping'
    ]
  },
  {
    name: 'Bitbucket',
    category: 'Tools & Platforms',
    logoSlug: 'bitbucket',
    iconName: 'tools',
    desc: 'Repository access controls and code merges.',
    logs: [
      'Bitbucket PR reviews',
      'Diff Inspection screens'
    ]
  }
];

const categories = [
  'Testing & Automation',
  'Languages & Databases',
  'Frameworks & Backend',
  'Tools & Platforms'
] as const;

export default function Skills() {
  const [activeTab, setActiveTab] = useState<typeof categories[number]>('Testing & Automation');

  const filteredSkills = skillsData.filter(skill => skill.category === activeTab);

  const renderSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'testing': return <Shield className="w-6 h-6 text-brand-primary" />;
      case 'automation': return <Cpu className="w-6 h-6 text-brand-secondary" />;
      case 'api': return <Network className="w-6 h-6 text-brand-accent" />;
      case 'languages': return <Code className="w-6 h-6 text-emerald-400" />;
      case 'databases': return <Database className="w-6 h-6 text-cyan-400" />;
      case 'development': return <Layers className="w-6 h-6 text-rose-400" />;
      case 'reporting': return <BarChart3 className="w-6 h-6 text-amber-400" />;
      case 'tools': return <GitBranch className="w-6 h-6 text-indigo-400" />;
      default: return <Code className="w-6 h-6 text-brand-primary" />;
    }
  };

  return (
    <section 
      id="skills" 
      className="relative min-h-screen w-full flex items-center justify-center py-24 px-6 md:px-12 bg-brand-surface/25 overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute w-[35vw] h-[35vw] rounded-full bg-blue-500/5 glow-blob top-12 right-12 pointer-events-none" />
      <div className="absolute w-[40vw] h-[40vw] rounded-full bg-brand-accent/5 glow-blob bottom-12 left-12 pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-left mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-brand-primary" />
              <span className="text-xs font-mono font-bold tracking-widest text-brand-primary uppercase">Expertise</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-brand-text">
              Technical Arsenal.
            </h2>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="flex overflow-x-auto scrollbar-none flex-nowrap md:flex-wrap items-center gap-2 p-1.5 rounded-2xl glass-nav border border-brand-border/60 max-w-full self-start md:self-auto">
            {categories.map((cat) => {
              const isActive = activeTab === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`relative px-4 py-2 text-xs font-bold tracking-wide transition-colors duration-300 rounded-xl select-none cursor-pointer ${
                    isActive ? 'text-brand-text' : 'text-brand-text-muted hover:text-brand-text'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="skillsActiveTab"
                      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                      className="absolute inset-0 bg-brand-surface rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.03)] border border-brand-border/65 z-[-1]"
                    />
                  )}
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab content panel */}
        <div className="min-h-[380px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredSkills.map((skill, index) => (
                <div
                  key={index}
                  className="group glass-panel border border-brand-border/60 hover:border-brand-primary/30 hover:shadow-[0_8px_30px_rgba(var(--color-brand-primary),0.03)] rounded-2xl p-6 flex flex-col items-start gap-5 transition-all duration-300 text-left h-full"
                >
                  <div className="flex items-center gap-4">
                    {/* Brand Logo Container */}
                    <div className="p-3 rounded-xl bg-brand-surface border border-brand-border/70 group-hover:scale-105 transition-transform duration-300 shrink-0 shadow-sm flex items-center justify-center w-[52px] h-[52px]">
                      {skill.logoSlug === 'playwright' ? (
                        <img 
                          src="https://playwright.dev/img/playwright-logo.svg" 
                          alt="Playwright Icon" 
                          className="w-7 h-7 object-contain"
                          loading="lazy"
                        />
                      ) : skill.logoSlug === 'flutter' ? (
                        <img 
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" 
                          alt="Flutter Icon" 
                          className="w-7 h-7 object-contain"
                          loading="lazy"
                        />
                      ) : skill.logoSlug ? (
                        <img 
                          src={`https://cdn.simpleicons.org/${skill.logoSlug}`} 
                          alt={`${skill.name} Icon`} 
                          className="w-7 h-7 object-contain"
                          loading="lazy"
                        />
                      ) : (
                        renderSkillIcon(skill.iconName)
                      )}
                    </div>

                    {/* Skill Details */}
                    <div className="space-y-0.5">
                      <h3 className="text-base font-extrabold text-brand-text tracking-tight group-hover:text-brand-primary transition-colors duration-300">
                        {skill.name}
                      </h3>
                      <p className="text-[11px] text-brand-text-muted leading-normal font-normal">
                        {skill.desc}
                      </p>
                    </div>
                  </div>

                  {/* Logs Section (Only for Testing & Automation) */}
                  {skill.category === 'Testing & Automation' && skill.logs && skill.logs.length > 0 && (
                    <div className="w-full flex-grow flex flex-col gap-1.5 bg-slate-950/40 dark:bg-slate-950/80 p-3.5 rounded-xl border border-brand-border/40 max-h-[220px] overflow-y-auto scrollbar-thin">
                      {skill.logs.map((log, lIdx) => (
                        <div 
                          key={lIdx} 
                          className="font-mono text-[11px] sm:text-xs text-slate-200 dark:text-slate-200 py-1 border-b border-brand-border/10 last:border-b-0 flex items-start gap-1.5 leading-normal"
                        >
                          <span className="text-brand-primary font-bold select-none mt-0.5">&gt;</span>
                          <span className="whitespace-normal break-words">{log}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
