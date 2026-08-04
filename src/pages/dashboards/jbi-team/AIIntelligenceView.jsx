import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, TrendingUp, AlertTriangle, Lightbulb, Activity, ChevronRight
} from 'lucide-react';
import { useToast } from '../../../context/ToastContext';

// Dummy Data
const insights = [
  {
    id: 1,
    type: 'Trend',
    icon: TrendingUp,
    color: 'text-brand-primary-500',
    bg: 'bg-brand-primary-500/10',
    title: 'Startup Registrations Surge',
    description: 'AI detected a 31% increase in startup registrations over the last 48 hours.',
    recommendation: 'Launch additional startup mentorship sessions to capture demand.',
    confidence: 97
  },
  {
    id: 2,
    type: 'Opportunity',
    icon: Lightbulb,
    color: 'text-brand-primary-400',
    bg: 'bg-brand-primary-400/10',
    title: 'ClimateTech Funding Demand',
    description: 'Funding interest has shifted significantly toward ClimateTech startups.',
    recommendation: 'Onboard 5-10 new investors specializing in green energy.',
    confidence: 92
  },
  {
    id: 3,
    type: 'Risk',
    icon: AlertTriangle,
    color: 'text-red-500',
    bg: 'bg-red-500/10',
    title: 'Manufacturing Internships Drop',
    description: 'Internship applications are down 14% in the Manufacturing sector.',
    recommendation: 'Run an email campaign highlighting top manufacturing opportunities.',
    confidence: 88
  },
  {
    id: 4,
    type: 'Health',
    icon: Activity,
    color: 'text-green-500',
    bg: 'bg-green-500/10',
    title: 'Course Completion Improvement',
    description: 'Overall course completion rate has improved by 14% this month.',
    recommendation: 'Reward top-performing students with premium badges.',
    confidence: 99
  }
];

export default function AIIntelligenceView() {
  const toast = useToast();
  const [typingText, setTypingText] = useState('');
  
  const heroText = "Analyzing millions of data points to optimize JBI Orbit...";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypingText(prev => prev + heroText.charAt(i));
      i++;
      if (i >= heroText.length) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, []);

  const handleAction = (id) => {
    toast.success('Recommendation applied to platform strategy.');
  };

  return (
    <div className="space-y-6">
      
      {/* Hero */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#090706] to-[#1A120A] border border-brand-primary-500/20 p-8 md:p-12 shadow-2xl">
        
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-primary-500/20 rounded-full blur-[100px]"></div>
          {/* Futuristic Grid Background (Mock) */}
          <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,122,0,0.15) 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-primary-500/10 border border-brand-primary-500/20 text-brand-primary-500 text-sm font-bold mb-6">
              <Sparkles size={16} /> Orbit AI Engine Active
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white mb-4 leading-tight">
              Orbit AI Intelligence Center
            </h1>
            <div className="h-8">
              <p className="text-lg text-slate-600 font-medium">
                {typingText}<span className="animate-pulse text-brand-primary-500 ml-1">_</span>
              </p>
            </div>
          </div>
          
          <div className="hidden md:flex relative w-48 h-48 items-center justify-center">
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-brand-primary-500/20 border-t-brand-primary-500/60"
            ></motion.div>
            <motion.div 
              animate={{ rotate: -360 }} 
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 rounded-full border border-brand-primary-400/20 border-b-brand-primary-400/60"
            ></motion.div>
            <div className="bg-gradient-to-br from-brand-primary-500 to-brand-primary-400 p-5 rounded-full shadow-[0_0_50px_rgba(255,122,0,0.3)]">
              <Sparkles size={48} className="text-slate-800" />
            </div>
          </div>
        </div>
      </div>

      {/* Insights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {insights.map((insight, idx) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            key={insight.id} 
            className="bg-white dark:bg-white rounded-2xl border border-slate-200 dark:border-slate-200 shadow-sm p-6 hover:shadow-lg hover:border-brand-primary-500/30 transition-all flex flex-col group"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-xl ${insight.bg} ${insight.color}`}>
                  <insight.icon size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-800 font-heading">{insight.title}</h3>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{insight.type}</p>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-2xl font-bold text-slate-900 dark:text-slate-800 font-heading">{insight.confidence}%</span>
                <span className="text-[10px] uppercase font-bold text-slate-600">Confidence</span>
              </div>
            </div>

            <p className="text-slate-600 dark:text-slate-600 mb-6 flex-1 text-sm leading-relaxed">
              {insight.description}
            </p>

            <div className="bg-slate-50 dark:bg-white p-4 rounded-xl border border-slate-100 dark:border-slate-200 mb-4 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-brand-primary-500"></div>
              <p className="text-sm font-semibold text-white dark:text-slate-600 ml-2">
                <span className="text-brand-primary-500 block mb-1 text-xs">AI RECOMMENDATION:</span>
                {insight.recommendation}
              </p>
            </div>

            <button onClick={() => handleAction(insight.id)} className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm bg-slate-50 dark:bg-white/5 text-slate-700 dark:text-slate-800 hover:bg-brand-primary-500 hover:text-white transition-colors group-hover:border-brand-primary-500">
              Apply Strategy <ChevronRight size={16} />
            </button>
          </motion.div>
        ))}
      </div>

    </div>
  );
}
