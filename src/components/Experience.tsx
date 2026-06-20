import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, ChevronRight } from 'lucide-react';

interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  location: string;
  skillsDeveloped: string[];
  tech: string[];
}

const experiences: ExperienceEntry[] = [
  {
    company: 'CIMCON Software India Private Limited (CSIPL)',
    role: 'Software Quality Assurance Engineer',
    period: 'Apr 2026 – Present',
    location: 'Ahmedabad, Gujarat',
    skillsDeveloped: [
      'Architecting Playwright (TS/JS) automation wrappers for E2E web application testing.',
      'Mobile QA E2E automation suites utilizing Flutter integration_test on Android & iOS.',
      'Configuring automated API testing beds in Postman and mock validation pipelines.',
      'Developing custom test execution & reporting portals using Vite and ExcelJS to eliminate manual reporting workflows.'
    ],
    tech: ['TypeScript Playwright Automation', 'Flutter Automation Testing', 'Python Playwright Automation', 'ExcelJS', 'Vite', 'JIRA', 'Bitbucket']
  },
  {
    company: 'Infopercept Consulting Pvt Ltd',
    role: 'QA & Testing Engineer',
    period: 'Nov 2025 – Apr 2026',
    location: 'Ahmedabad, Gujarat',
    skillsDeveloped: [
      'Designing test plans for functional, edge-case, and boundary regressions on cyber security panels.',
      'Managing full E2E defect lifecycles, logging, tracking, and validating patches.',
      'Collaborating on GitLab pipelines, JIRA, ClickUp, and Trello boards for agile team tracking.'
    ],
    tech: ['Manual Testing', 'JavaScript Playwright Automation', 'Playwright POM', 'Postman', 'GitLab', 'Trello']
  },
  {
    company: 'Viaansh Infotech LLP',
    role: 'Back End Developer - Intern',
    period: 'Apr 2025 – Jul 2025',
    location: 'Ahmedabad, Gujarat',
    skillsDeveloped: [
      'Engineering MVC RESTful API frameworks and backend routes in Laravel and PHP.',
      'Optimizing MySQL database schemas, indexes, and queries to decrease query load times by ~30%.',
      'Developing multi-tenant backend architectures with detailed diagnostics and system logs.'
    ],
    tech: ['Laravel', 'PHP', 'MySQL', 'RESTful APIs', 'Postman', 'CMS Development']
  },
  {
    company: 'Akash TechnoLabs',
    role: 'Laravel & PHP Developer Intern',
    period: 'Oct 2024 – Apr 2025',
    location: 'Ahmedabad, Gujarat',
    skillsDeveloped: [
      'Designing databases and coding custom plugins with Laravel backend modules.',
      'Developing MVC architectures and PHP web configurations for administrative tools.'
    ],
    tech: ['Laravel', 'PHP', 'MySQL', 'Postman']
  },
  {
    company: 'Viaansh Infotech LLP',
    role: 'WordPress Developer Intern',
    period: 'Mar 2024 – Jul 2024',
    location: 'Ahmedabad, Gujarat',
    skillsDeveloped: [
      'Customizing WordPress themes, templates, and backend admin hooks.',
      'Programming clean PHP templates, styles, and custom widgets.'
    ],
    tech: ['WordPress', 'PHP', 'Theme Development', 'Custom Plugin Development', 'ClickUp', 'Custom Widget Development']
  }
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center py-24 px-6 md:px-12 overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute w-[40vw] h-[40vw] rounded-full bg-brand-accent/5 glow-blob -bottom-20 left-1/4 pointer-events-none" />

      <div className="max-w-4xl w-full mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-left mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-brand-accent" />
            <span className="text-xs font-mono font-bold tracking-widest text-brand-accent uppercase">Chronology</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-brand-text">
            Professional Experience.
          </h2>
        </div>

        {/* Timeline Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative pl-6 md:pl-10 border-l border-brand-border/80 space-y-12"
        >
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">

              {/* Timeline Bullet Node with Glow */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 flex items-center justify-center z-20">
                <div className="w-4 h-4 rounded-full bg-brand-bg border-[3px] border-brand-border group-hover:border-brand-primary group-hover:scale-125 transition-all duration-300 relative shadow-sm">
                  {index === 0 && (
                    <div className="absolute inset-0 rounded-full bg-brand-primary animate-ping opacity-30" />
                  )}
                </div>
              </div>

              {/* Connector Glow Light (Dynamic visual bar) */}
              <div className="absolute -left-[24px] md:-left-[40px] top-6 bottom-0 w-[2px] bg-gradient-to-b from-brand-primary/45 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

              {/* Experience Card */}
              <motion.div
                variants={cardVariants}
                className="glass-panel border border-brand-border/60 hover:border-brand-text/20 rounded-2xl p-6 sm:p-8 transition-all duration-300 relative overflow-hidden flex flex-col gap-4 hover:shadow-lg animate-fade-in"
              >
                {/* Header Information */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 w-full">
                  <div className="text-left">
                    <h3 className="text-lg sm:text-xl font-extrabold text-brand-text tracking-tight group-hover:text-brand-primary transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <h4 className="text-xs sm:text-sm font-semibold text-brand-text-muted mt-1 flex flex-wrap items-center gap-1.5">
                      <Briefcase size={12} />
                      {exp.company}
                      <span className="opacity-50 font-normal">| {exp.location}</span>
                    </h4>
                  </div>

                  {/* Period Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-brand-border bg-brand-bg/60 text-[10px] font-mono font-bold text-brand-text-muted shrink-0 self-start sm:self-auto">
                    <Calendar size={10} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Skills Bullet List */}
                <div className="text-left">
                  <span className="text-[10px] font-mono font-bold text-brand-primary uppercase tracking-wider block mb-2">Key Skills Developed</span>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-brand-text-muted">
                    {exp.skillsDeveloped.map((skill, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2">
                        <ChevronRight size={14} className="text-brand-primary shrink-0 mt-0.5" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-brand-border/40">
                  {exp.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-bg border border-brand-border/70 text-brand-text font-semibold hover:border-brand-primary/50 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
