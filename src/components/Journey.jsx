import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { title: 'Join Platform', desc: 'Create your centralized profile.' },
  { title: 'AI Profile Analysis', desc: 'System maps your skills and gaps.' },
  { title: 'Skill Assessment', desc: 'Validate your competencies.' },
  { title: 'Learning & Growth', desc: 'Access curated modules.' },
  { title: 'Mentorship', desc: 'Connect with industry experts.' },
  { title: 'Networking', desc: 'Build strategic alliances.' },
  { title: 'Funding', desc: 'Secure capital for your venture.' },
  { title: 'Business Growth', desc: 'Scale with operational support.' },
  { title: 'Success', desc: 'Join the alumni network.' },
];

export default function Journey() {
  return (
    <section className="py-24 bg-white dark:bg-slate-900-bg border-y border-slate-200 dark:border-slate-200 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-brand-primary-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4 mb-20">
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white">
            The Journey to <span className="text-gradient">Scale.</span>
          </h2>
          <p className="text-slate-600 dark:text-[#CBD5E1] max-w-2xl mx-auto">
            From inception to enterprise. Watch how the JBI ecosystem accelerates your growth at every stage.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[15px] sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-slate-200 dark:bg-white/10 rounded-full"></div>

          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex items-center ${i % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'} justify-start pl-12 sm:pl-0`}
              >
                {/* Node */}
                <div className="absolute left-0 sm:left-1/2 -translate-x-[2px] sm:-translate-x-1/2 w-8 h-8 rounded-full bg-white dark:bg-slate-900-bg border-4 border-slate-200 dark:border-slate-200 flex items-center justify-center z-10 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-brand-primary-500"></div>
                </div>

                {/* Card */}
                <div className={`w-full sm:w-[45%] ${i % 2 === 0 ? 'sm:text-right sm:pr-8' : 'sm:pl-8'}`}>
                  <div className="glass-card p-5 rounded-2xl border-slate-200 dark:border-slate-200 hover:border-brand-primary-500/30 dark:hover:border-brand-primary-500/30 transition-colors">
                    <div className="text-[10px] font-mono text-brand-primary-500 mb-1">STAGE 0{i + 1}</div>
                    <h4 className="font-heading font-bold text-lg text-slate-900 dark:text-white">{step.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-[#CBD5E1] mt-1">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
