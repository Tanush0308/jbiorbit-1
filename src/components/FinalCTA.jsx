import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-white">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 bg-noise opacity-30"></div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-brand-primary-500/20 to-brand-accent-500/20 rounded-full blur-[100px] pointer-events-none animate-pulse-slow"></div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/5 border border-slate-200 text-brand-primary-500 text-sm font-bold uppercase tracking-widest font-mono">
            <Sparkles size={16} className="mr-2 inline" />
            Join the Orbit
          </div>
          
          <h2 className="font-heading font-extrabold text-5xl sm:text-7xl text-slate-800 leading-tight tracking-tight">
            Build your <span className="text-gradient">Empire.</span>
          </h2>
          
          <p className="text-xl text-slate-600 font-light max-w-2xl mx-auto">
            Stop switching between 10 different tools. Experience the only unified Business Operating System designed for the modern founder.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <button className="w-full sm:w-auto px-8 py-4 bg-brand-primary-500 hover:bg-brand-primary-500/90 text-white rounded-full font-bold text-lg shadow-[0_0_30px_rgba(255,122,0,0.3)] hover:shadow-[0_0_40px_rgba(255,122,0,0.5)] transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
              Start Building Free <ArrowRight size={20} />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-slate-50 text-white rounded-full font-bold text-lg border border-slate-200 transition-colors">
              Talk to Sales
            </button>
          </div>
          
          <div className="pt-8 text-sm text-slate-500 font-mono">
            No credit card required. Setup takes 2 minutes.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
