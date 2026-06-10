import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Skill {
  name: string;
  category: 'Testing & Automation' | 'Languages & Databases' | 'Frameworks & Backend' | 'Tools & Platforms';
  logoSlug: string;
  desc: string;
}

const skillsData: Skill[] = [
  // Testing & Automation
  { name: 'Playwright', category: 'Testing & Automation', logoSlug: 'playwright', desc: 'E2E cross-browser web automation specs in TypeScript, JavaScript, and Python.' },
  { name: 'flutter_test', category: 'Testing & Automation', logoSlug: 'flutter', desc: 'E2E integration testing workflows across Android and iOS environments.' },
  { name: 'Postman', category: 'Testing & Automation', logoSlug: 'postman', desc: 'REST API validations, collection builders, and token validation beds.' },
  { name: 'Selenium', category: 'Testing & Automation', logoSlug: 'selenium', desc: 'Functional regression sweeps and locator verification scripts.' },
  { name: 'Newman', category: 'Testing & Automation', logoSlug: 'postman', desc: 'Command line runner integration for Postman collection workflows.' },

  // Languages & Databases
  { name: 'TypeScript', category: 'Languages & Databases', logoSlug: 'typescript', desc: 'Type-safe automation wrapper configurations and script compilers.' },
  { name: 'JavaScript', category: 'Languages & Databases', logoSlug: 'javascript', desc: 'Standard scripting specifications for modular page objects.' },
  { name: 'Python', category: 'Languages & Databases', logoSlug: 'python', desc: 'Telemetry polling, listener logs, and background signal validation.' },
  { name: 'PHP', category: 'Languages & Databases', logoSlug: 'php', desc: 'MVC controller integrations and backend troubleshooting scripts.' },
  { name: 'MySQL', category: 'Languages & Databases', logoSlug: 'mysql', desc: 'Database validations, index profiling, and custom schema checks.' },

  // Frameworks & Backend
  { name: 'Laravel', category: 'Frameworks & Backend', logoSlug: 'laravel', desc: 'MVC architecture backend engineering, REST routes, and multi-tenant setups.' },
  { name: 'WordPress', category: 'Frameworks & Backend', logoSlug: 'wordpress', desc: 'Custom theme developments, core dashboard hooks, and admin plugin designs.' },
  { name: 'PHPUnit', category: 'Frameworks & Backend', logoSlug: 'phpunit', desc: 'Unit testing coverage sweeps and backend logic mock verifications.' },

  // Tools & Platforms
  { name: 'Git', category: 'Tools & Platforms', logoSlug: 'git', desc: 'Distributed version control branching and staging code matrices.' },
  { name: 'GitLab', category: 'Tools & Platforms', logoSlug: 'gitlab', desc: 'Continuous integration pipelines, parallel nodes, and merge verifications.' },
  { name: 'JIRA', category: 'Tools & Platforms', logoSlug: 'jira', desc: 'Agile defect logging workflows, project mapping, and bug trace cards.' },
  { name: 'ClickUp', category: 'Tools & Platforms', logoSlug: 'clickup', desc: 'Defect prioritization, status updates, and QA timeline management.' },
  { name: 'Trello', category: 'Tools & Platforms', logoSlug: 'trello', desc: 'Kanban status cards mapping, task breakdowns, and sprint updates.' },
  { name: 'Bitbucket', category: 'Tools & Platforms', logoSlug: 'bitbucket', desc: 'Remote repository branch merges, PR evaluations, and diff inspections.' }
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
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl glass-nav border border-brand-border/60 self-start md:self-auto">
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
                  className="group glass-panel border border-brand-border/60 hover:border-brand-primary/30 hover:shadow-[0_8px_30px_rgba(var(--color-brand-primary),0.03)] rounded-2xl p-6 flex items-start gap-4 transition-all duration-300 text-left"
                >
                  {/* Brand Logo Container using CDN */}
                  <div className="p-3 rounded-xl bg-brand-surface border border-brand-border/70 group-hover:scale-105 transition-transform duration-300 shrink-0 shadow-sm">
                    <img 
                      src={`https://cdn.simpleicons.org/${skill.logoSlug}`} 
                      alt={`${skill.name} Icon`} 
                      className="w-7 h-7 object-contain"
                      loading="lazy"
                    />
                  </div>

                  {/* Skill Details */}
                  <div className="space-y-1.5">
                    <h3 className="text-base font-extrabold text-brand-text tracking-tight group-hover:text-brand-primary transition-colors duration-300">
                      {skill.name}
                    </h3>
                    <p className="text-xs text-brand-text-muted leading-relaxed font-normal">
                      {skill.desc}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
