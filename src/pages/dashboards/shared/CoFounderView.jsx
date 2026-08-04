import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, Check } from 'lucide-react';
import { useToast } from '../../../context/ToastContext';
import { useAppContext } from '../../../context/AppContext';

export default function CoFounderView() {
  const toast = useToast();
  const { connections, setConnections, addActivity } = useAppContext();
  
  const [loadingId, setLoadingId] = useState(null);

  const candidates = [
    { id: 'cf-1', initial: 'AR', bg: 'bg-white', name: 'Ankit R.', loc: 'Bangalore', role: 'Technical co-founder for B2B SaaS', tags: ['Full-stack', 'AI/ML'] },
    { id: 'cf-2', initial: 'PJ', bg: 'bg-white', name: 'Preeti J.', loc: 'Delhi NCR', role: 'Business co-founder - HealthTech', tags: ['Sales', 'Ops'] },
    { id: 'cf-3', initial: 'NS', bg: 'bg-white', name: 'Nikhil S.', loc: 'Mumbai', role: 'Growth co-founder for D2C brand', tags: ['Marketing', 'Brand'] },
    { id: 'cf-4', initial: 'SK', bg: 'bg-white', name: 'Sarita K.', loc: 'Hyderabad', role: 'CTO - AgriTech', tags: ['Backend', 'Cloud'] },
    { id: 'cf-5', initial: 'RB', bg: 'bg-white', name: 'Rajat B.', loc: 'Bangalore', role: 'CFO / Fundraising partner', tags: ['Finance', 'IB'] },
    { id: 'cf-6', initial: 'AT', bg: 'bg-white', name: 'Anushka T.', loc: 'Pune', role: 'Design co-founder for EdTech', tags: ['Product', 'UX'] },
  ];

  const handleConnect = (c) => {
    setLoadingId(c.id);
    setTimeout(() => {
      setConnections(prev => [...prev, c.id]);
      setLoadingId(null);
      toast.success(`Connection request sent to ${c.name}`);
      addActivity('Co-founder Connect', `Sent connection request to ${c.name}`);
    }, 1500);
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Hero Banner */}
      <div className="relative w-full h-[180px] md:h-[220px] lg:h-[280px] rounded-[24px] border border-slate-200 dark:border-brand-dark-border overflow-hidden shadow-[0_0_40px_-15px_rgba(255,122,0,0.2)] bg-white">
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80" 
          alt="Banner" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-70 mix-blend-multiply" 
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-white dark:from-brand-dark-bg via-white/80 dark:via-brand-dark-bg/80 to-transparent"></div>
        <div className="absolute inset-0 p-6 md:p-10 lg:p-12 flex flex-col justify-end md:justify-center items-start md:items-end z-10 text-left md:text-right">
          <div className="w-full md:w-1/2 max-w-lg">
            <div className="text-xs font-extrabold text-brand-primary-500 uppercase tracking-widest mb-2">Find Co-Founder</div>
            <h1 className="text-3xl lg:text-4xl font-heading font-extrabold text-slate-800 mb-2 tracking-tight">Find Co-Founder Session</h1>
            <p className="text-slate-600 font-medium">Match with complementary talent.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {candidates.map((c, i) => {
          const isConnected = connections.includes(c.id);
          const isLoading = loadingId === c.id;

          return (
            <motion.div 
              key={c.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white dark:bg-white rounded-2xl border border-slate-200 dark:border-slate-200 p-6 flex flex-col shadow-sm hover:shadow-md transition-all group hover:-translate-y-1"
            >
              <img 
                src={`https://i.pravatar.cc/150?u=${encodeURIComponent(c.name)}`}
                alt={c.name}
                className="w-12 h-12 rounded-full object-cover shrink-0 border border-slate-200 dark:border-slate-200 shadow-sm mb-4 group-hover:scale-105 transition-transform"
              />
              
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-800 group-hover:text-brand-primary-500 transition-colors">{c.name}</h3>
              <div className="text-xs text-slate-500 mb-4">{c.loc}</div>
              
              <p className="text-sm font-medium text-slate-700 dark:text-slate-600 mb-4 flex-1">
                {c.role}
              </p>
              
              <div className="flex items-center gap-2 mb-6 flex-wrap">
                {c.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-slate-50 dark:bg-white/5 text-slate-600 dark:text-slate-600 text-[10px] font-semibold uppercase tracking-wider rounded">
                    {tag}
                  </span>
                ))}
              </div>

              {isConnected ? (
                <button disabled className="w-full py-2.5 bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 text-sm font-bold rounded-lg flex items-center justify-center gap-2 cursor-default">
                  <Check size={16} /> Request Sent
                </button>
              ) : (
                <button 
                  onClick={() => handleConnect(c)}
                  disabled={isLoading}
                  className="w-full py-2.5 bg-brand-primary-500 text-white text-sm font-bold rounded-lg hover:bg-brand-primary-400 transition-colors flex items-center justify-center gap-2 min-h-[40px]"
                >
                  {isLoading ? <Loader2 size={16} className="animate-spin" /> : (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/></svg>
                      Connect
                    </>
                  )}
                </button>
              )}
            </motion.div>
          )
        })}
      </div>
    </div>
  );
}

