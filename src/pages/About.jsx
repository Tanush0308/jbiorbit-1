import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, ShieldCheck, Target, Users, Zap, Building2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const values = [
  { icon: ShieldCheck, title: 'Uncompromising Integrity', desc: 'Trust is our core currency. We operate with radical transparency.' },
  { icon: Zap, title: 'Velocity & Innovation', desc: 'We move fast, adapt instantly, and deploy capital efficiently.' },
  { icon: Target, title: 'Data-Driven Precision', desc: 'Every decision is backed by millions of data points.' },
  { icon: Users, title: 'Ecosystem First', desc: 'We win only when our founders and students succeed.' },
];

export default function About() {
  return (
    <div className="bg-white dark:bg-white min-h-screen text-slate-900 dark:text-slate-100 font-sans selection:bg-brand-primary-500 selection:text-white">
      <Navbar />
      
      <main>
        {/* Massive Hero */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          {/* Abstract background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-brand-primary-500/10 blur-[180px] rounded-full mix-blend-screen dark:mix-blend-screen mix-blend-multiply"></div>
            <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-brand-primary-400/10 blur-[150px] rounded-full mix-blend-screen dark:mix-blend-screen mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-noise opacity-30 dark:opacity-50"></div>
          </div>

          <div className="relative z-10 text-center px-6 max-w-5xl mx-auto space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-slate-200 text-xs font-semibold text-slate-700 dark:text-slate-600 font-mono"
            >
              OUR MISSION & VISION
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-tight text-slate-900 dark:text-white leading-none"
            >
              Architecting the <span className="text-gradient">Future of Business.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-2xl text-slate-600 dark:text-slate-600 font-light max-w-3xl mx-auto"
            >
              We are building the digital infrastructure that connects capital, talent, and intelligence on a global scale.
            </motion.p>
          </div>
        </section>

        {/* The Story & Mission (Full Width Split) */}
        <section className="border-t border-slate-200 dark:border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 lg:p-32 space-y-8 bg-white dark:bg-white">
              <div className="w-12 h-12 rounded-2xl bg-brand-primary-500/10 flex items-center justify-center text-brand-primary-500">
                <Target size={24} />
              </div>
              <h2 className="font-heading font-extrabold text-4xl text-slate-900 dark:text-white">Our Mission</h2>
              <p className="text-slate-600 dark:text-slate-600 text-lg leading-relaxed">
                To democratize access to elite business intelligence, tier-1 mentorship, and venture capital for 1 million founders and students across emerging markets by 2030. We believe that geographical boundaries should not dictate entrepreneurial success.
              </p>
            </div>
            <div className="p-12 lg:p-32 space-y-8 bg-slate-50 dark:bg-white border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-200">
              <div className="w-12 h-12 rounded-2xl bg-brand-primary-400/10 flex items-center justify-center text-brand-primary-400">
                <Globe2 size={24} />
              </div>
              <h2 className="font-heading font-extrabold text-4xl text-slate-900 dark:text-slate-800">Our Vision</h2>
              <p className="text-slate-600 dark:text-slate-600 text-lg leading-relaxed">
                A globally interconnected ecosystem where every aspiring entrepreneur has a personalized AI co-pilot, guiding them from raw idea to IPO, eliminating the friction of traditional venture building.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-32 bg-white dark:bg-white border-t border-slate-200 dark:border-slate-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-20">
              <h2 className="font-heading font-extrabold text-4xl sm:text-5xl text-slate-900 dark:text-slate-800">Core Principles</h2>
              <p className="text-slate-600 dark:text-slate-600 mt-4 max-w-xl">The foundational algorithms that govern our company culture and product decisions.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card p-8 rounded-3xl border-slate-200 dark:border-slate-200 space-y-4 group hover:border-brand-primary-500/30 dark:hover:border-brand-primary-500/30"
                  >
                    <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-white/5 flex items-center justify-center text-slate-900 dark:text-slate-800 group-hover:text-brand-primary-500 dark:group-hover:text-brand-primary-500 transition-colors">
                      <Icon size={24} />
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-slate-800">{v.title}</h3>
                    <p className="text-slate-600 dark:text-[#CBD5E1] leading-relaxed">{v.desc}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Global Reach - Full bleed image replacement */}
        <section className="relative py-40 border-t border-slate-200 dark:border-slate-200 overflow-hidden">
          <div className="absolute inset-0 bg-slate-50 dark:bg-white">
            {/* We would put a massive high-res generated world map/datacenter image here. For now, abstract gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary-500/20 to-white dark:to-slate-900 opacity-50 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#F8FAFC]/80 to-[#F8FAFC] dark:via-[#090706]/80 dark:to-[#090706]"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center space-y-8">
            <h2 className="font-heading font-extrabold text-5xl sm:text-7xl text-slate-900 dark:text-slate-800">Operating at <span className="text-gradient">Global Scale.</span></h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-slate-300 dark:border-slate-200 mt-12">
              {[
                { label: 'Countries', val: '12+' },
                { label: 'Data Points Analyzed/Day', val: '4.2B' },
                { label: 'Strategic Partners', val: '50+' },
                { label: 'System Uptime', val: '99.99%' },
              ].map((s, i) => (
                <div key={i}>
                  <div className="font-heading font-extrabold text-4xl text-slate-900 dark:text-slate-800">{s.val}</div>
                  <div className="text-xs text-slate-600 dark:text-slate-600 font-mono mt-2 uppercase tracking-wider font-semibold">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
