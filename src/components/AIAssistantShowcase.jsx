import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Sparkles, MessageSquare, Briefcase, FileText, BarChart3, ShieldCheck, Target, Calculator } from 'lucide-react';

const aiResponses = [
  { icon: BarChart3, title: 'Market Size', desc: '$4.5B projected by 2026' },
  { icon: Target, title: 'Competitors', desc: 'Rebel Foods, Curefoods' },
  { icon: Calculator, title: 'Investment', desc: 'Rs 15L - Rs 25L Initial Setup' },
  { icon: ShieldCheck, title: 'Licenses', desc: 'FSSAI, GST, Fire Safety' },
  { icon: FileText, title: 'Marketing', desc: 'Swiggy/Zomato Ads, Local SEO' },
  { icon: Briefcase, title: 'Schemes', desc: 'MUDRA Loan, Startup India' },
];

export default function AIAssistantShowcase() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-30 dark:opacity-50 pointer-events-none"></div>
      
      {/* Glow effects */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-brand-primary-500/10 border border-brand-primary-500/20 text-brand-primary-500 text-xs font-bold uppercase tracking-wider font-mono">
              <Sparkles size={14} className="mr-2 inline" />
              AI Business Assistant
            </div>
            
            <h2 className="font-heading font-extrabold text-4xl sm:text-5xl text-slate-900 leading-tight">
              Your Digital <br />
              <span className="text-brand-primary-600">Co-Founder.</span>
            </h2>
            
            <p className="text-lg text-slate-600 dark:text-[#CBD5E1] leading-relaxed font-light">
              Skip weeks of research. Ask our proprietary AI engine anything about your business idea and get comprehensive, localized, and actionable data instantly.
            </p>

            <ul className="space-y-4 pt-4">
              {[
                'Instant Market Sizing & Competitor Analysis',
                'Automated Financial Projections',
                'Regulatory & Licensing Guidance',
                'Curated Government Scheme Matches'
              ].map((item, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-3 text-slate-700 dark:text-slate-600 font-medium"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-primary-500"></div>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* AI Chat Animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="glass-card rounded-3xl border border-slate-200 dark:border-slate-200 shadow-2xl p-6 bg-white relative"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-slate-200 pb-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-brand-primary-500/20 flex items-center justify-center text-brand-primary-500">
                <BrainCircuit size={20} />
              </div>
              <div>
                <div className="text-slate-900 font-bold text-sm">Orbit AI</div>
                <div className="text-brand-primary-500 text-xs font-mono">Online</div>
              </div>
            </div>

            {/* Chat Body */}
            <div className="space-y-6">
              
              {/* User Message */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex gap-4 justify-end"
              >
                <div className="bg-brand-primary-500 text-white text-sm py-3 px-4 rounded-2xl rounded-tr-sm shadow-md">
                  I want to start a cloud kitchen.
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center shrink-0 border border-slate-200">
                   <MessageSquare size={14} className="text-white/50" />
                </div>
              </motion.div>

              {/* AI Response Block */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1 }}
                className="flex gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-brand-primary-500/20 flex items-center justify-center shrink-0 border border-brand-primary-500/30">
                  <BrainCircuit size={14} className="text-brand-primary-500" />
                </div>
                
                <div className="bg-slate-50 border border-slate-200 rounded-2xl rounded-tl-sm p-5 w-full space-y-4">
                  <div className="text-sm text-slate-600 mb-2">Here is a quick feasibility report for a cloud kitchen in your region:</div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {aiResponses.map((res, idx) => {
                      const Icon = res.icon;
                      return (
                        <motion.div 
                          key={idx}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 1.5 + (idx * 0.1) }}
                          className="bg-white border border-slate-200 rounded-xl p-3 flex gap-3 items-center hover:bg-slate-50 hover:border-brand-primary-500/30 transition-colors cursor-default group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 group-hover:text-brand-primary-500 transition-colors">
                            <Icon size={14} />
                          </div>
                          <div>
                            <div className="text-xs text-slate-600 font-mono">{res.title}</div>
                            <div className="text-sm text-slate-900 font-semibold">{res.desc}</div>
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 2.5 }}
                    className="pt-2"
                  >
                    <button className="text-xs font-bold text-brand-primary-500 flex items-center gap-1 hover:text-brand-primary-400 transition-colors">
                      Generate Full Business Plan <Target size={12} />
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
