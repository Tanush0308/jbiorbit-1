import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Network, LineChart, ShieldAlert } from 'lucide-react';

export default function EntrepreneurDashboard() {
  const features = [
    { icon: Rocket, title: 'Start-up Assistance', desc: 'Step-by-step guidance to launch your venture.' },
    { icon: Network, title: 'Business Networking', desc: 'Connect with co-founders and early-stage investors.' },
    { icon: LineChart, title: 'Market Insights', desc: 'Real-time business insights across the world.' },
    { icon: ShieldAlert, title: 'Risk Analysis', desc: 'AI-driven business project reporting and validation.' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-heading font-extrabold text-slate-900 dark:text-slate-800">Entrepreneur Hub</h1>
          <p className="text-slate-500 mt-1">Tools and network to scale your startup from zero to one.</p>
        </div>
        <button className="px-4 py-2 bg-brand-primary-500 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-brand-primary-400 transition-colors">
          Pitch to Investors
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 rounded-2xl border-slate-200 dark:border-slate-200 hover:border-brand-primary-500/30 dark:hover:border-brand-primary-500/30 transition-colors cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-white/5 flex items-center justify-center text-slate-700 dark:text-slate-600 group-hover:text-brand-primary-500 transition-colors mb-4">
                <Icon size={20} />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">{f.title}</h3>
              <p className="text-sm text-slate-600 dark:text-[#CBD5E1]">{f.desc}</p>
            </motion.div>
          )
        })}
      </div>

      <div className="glass-card rounded-2xl border-slate-200 dark:border-slate-200 p-8 mt-8">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-800 mb-4">Business Toolkit</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['Pitch Deck Templates', 'Financial Projections', 'Partnership Agreements'].map((tool, i) => (
             <div key={i} className="p-4 bg-slate-50 dark:bg-white rounded-xl border border-slate-100 dark:border-slate-200 flex items-center justify-between group cursor-pointer hover:border-brand-primary-500/50 transition-colors">
               <span className="text-sm font-semibold text-slate-700 dark:text-slate-600 group-hover:text-brand-primary-500">{tool}</span>
               <span className="text-slate-600 group-hover:text-brand-primary-500">→</span>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
}
