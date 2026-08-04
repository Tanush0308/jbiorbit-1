import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart2, LineChart, TrendingUp, DollarSign, Activity, 
  Users, Download, FileText, Sparkles, Target, Flame, Loader2
} from 'lucide-react';
import { useToast } from '../../../context/ToastContext';
import { useAppContext } from '../../../context/AppContext';

export default function StartupAnalyticsView() {
  const toast = useToast();
  const { addActivity } = useAppContext();
  const [activeTimeframe, setActiveTimeframe] = useState('1M');
  const [hoveredData, setHoveredData] = useState(null);
  const [isExporting, setIsExporting] = useState(false);

  const kpis = [
    { label: 'MONTHLY RECURRING REVENUE (MRR)', value: '$124,500', sub: '+15.2% MoM', icon: DollarSign, trend: 'up' },
    { label: 'ANNUAL RECURRING REVENUE (ARR)', value: '$1.49M', sub: 'Projected', icon: TrendingUp, trend: 'up' },
    { label: 'MONTHLY ACTIVE USERS (MAU)', value: '42,800', sub: '+8.4% MoM', icon: Users, trend: 'up' },
    { label: 'CUSTOMER ACQUISITION COST (CAC)', value: '$142', sub: '-12% MoM', icon: Target, trend: 'up' },
    { label: 'LIFETIME VALUE (LTV)', value: '$1,250', sub: 'LTV:CAC Ratio 8.8', icon: Activity, trend: 'up' },
    { label: 'CASH RUNWAY', value: '14 Months', sub: 'Burn rate: $45k/mo', icon: Flame, trend: 'down' },
  ];

  const chartData = [
    { month: 'Jan', val: 40 }, { month: 'Feb', val: 45 }, { month: 'Mar', val: 42 },
    { month: 'Apr', val: 55 }, { month: 'May', val: 60 }, { month: 'Jun', val: 65 },
    { month: 'Jul', val: 80 }, { month: 'Aug', val: 85 }, { month: 'Sep', val: 95 },
    { month: 'Oct', val: 110 }, { month: 'Nov', val: 115 }, { month: 'Dec', val: 124 }
  ];

  const handleExport = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      toast.success('Analytics Report Exported');
      addActivity('Exported Analytics', 'Exported Growth Analytics Report');
    }, 1500);
  };

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      
      {/* 1. Hero Banner */}
      <div className="relative w-full h-[240px] md:h-[300px] rounded-[24px] border border-slate-200 dark:border-brand-dark-border overflow-hidden bg-white shadow-sm">
        <img 
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=80" 
          alt="Banner" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-70 mix-blend-multiply" 
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-white dark:from-brand-dark-bg via-white/80 dark:via-brand-dark-bg/80 to-transparent"></div>
        <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center items-start md:items-end z-10 text-left md:text-right">
          <div className="flex items-center gap-2 mb-3 text-brand-primary-500 font-bold tracking-widest text-xs uppercase bg-brand-primary-500/10 px-3 py-1.5 rounded-full border border-brand-primary-500/20">
            <BarChart2 size={14} /> Analytics Engine
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight drop-shadow-lg">
            Growth Analytics
          </h1>
          <p className="text-slate-600 max-w-lg text-lg drop-shadow-md">
            Investor-ready metrics, financial forecasts, and AI-driven insights to accelerate your startup's growth.
          </p>
        </div>
      </div>

      {/* 2. Quick Actions */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white dark:bg-white p-4 rounded-2xl border border-slate-200 dark:border-slate-200 shadow-sm">
        <div className="flex gap-2">
          {['1W', '1M', '3M', 'YTD', '1Y', 'ALL'].map(t => (
            <button 
              key={t} 
              onClick={() => setActiveTimeframe(t)}
              className={`text-xs font-bold px-4 py-2.5 rounded-xl transition-colors ${activeTimeframe === t ? 'bg-white text-slate-800 dark:bg-white dark:text-slate-900' : 'bg-slate-50 dark:bg-white/5 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-50'}`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <button onClick={() => toast.info('CSV Download started...')} className="flex-1 md:flex-none px-4 py-2.5 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-slate-200 text-slate-900 dark:text-slate-800 text-sm font-bold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
            <Download size={16} /> CSV
          </button>
          <button 
            onClick={handleExport}
            disabled={isExporting}
            className="flex-1 md:flex-none px-4 py-2.5 bg-brand-primary-500 text-white text-sm font-bold rounded-xl shadow-lg hover:bg-brand-primary-400 transition-all flex items-center justify-center gap-2 min-w-[140px]"
          >
            {isExporting ? <Loader2 size={16} className="animate-spin" /> : <><FileText size={16} /> Export Report</>}
          </button>
        </div>
      </div>

      {/* 3. Key Statistics (KPIs) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {kpis.map((kpi, i) => {
          const Icon = kpi.icon;
          return (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-white p-6 rounded-2xl border border-slate-200 dark:border-slate-200 shadow-sm hover:border-brand-primary-500/50 transition-colors group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{kpi.label}</div>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors group-hover:scale-110 ${kpi.trend === 'up' ? 'bg-emerald-50 text-emerald-500 dark:bg-emerald-500/10' : 'bg-amber-50 text-amber-500 dark:bg-amber-500/10'}`}>
                  <Icon size={16} />
                </div>
              </div>
              <div className="text-3xl font-heading font-extrabold text-slate-900 dark:text-white mb-2">{kpi.value}</div>
              <div className={`text-xs font-semibold flex items-center gap-1 ${kpi.trend === 'up' ? 'text-emerald-500' : 'text-amber-500'}`}>
                {kpi.trend === 'up' ? '↗' : '↘'} {kpi.sub}
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* 4. Main Workspace (Charts & Visuals) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left: Charts */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* MRR Growth Chart */}
          <div className="bg-white dark:bg-white p-6 rounded-2xl border border-slate-200 dark:border-slate-200 shadow-sm relative">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-slate-900 dark:text-slate-800 flex items-center gap-2">
                <LineChart size={18} className="text-brand-primary-500" /> Revenue Growth (MRR)
              </h2>
            </div>
            
            <div className="h-64 flex items-end justify-between border-b border-l border-slate-200 dark:border-slate-200 p-2 gap-2 relative">
              {chartData.map((data, i) => (
                <div 
                  key={i} 
                  className="w-full bg-gradient-to-t from-brand-primary-500/60 to-brand-primary-400 rounded-t-sm relative cursor-pointer transition-all hover:bg-brand-primary-500" 
                  style={{ height: `${(data.val/124)*100}%` }}
                  onMouseEnter={() => setHoveredData(data)}
                  onMouseLeave={() => setHoveredData(null)}
                />
              ))}

              <AnimatePresence>
                {hoveredData && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute top-4 right-4 bg-white dark:bg-white text-white dark:text-slate-900 p-3 rounded-xl shadow-xl pointer-events-none z-20"
                  >
                    <div className="text-xs font-bold uppercase tracking-wider mb-1">{hoveredData.month} 2024</div>
                    <div className="text-xl font-extrabold">${hoveredData.val},000</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="flex justify-between text-[10px] text-slate-600 mt-2 px-2 font-bold">
              {chartData.map(d => <span key={d.month}>{d.month}</span>)}
            </div>
          </div>

          {/* User Conversion Funnel */}
          <div className="bg-white dark:bg-white p-6 rounded-2xl border border-slate-200 dark:border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-800 mb-6">User Conversion Funnel</h2>
            <div className="space-y-3">
              {[
                { stage: 'Website Visitors', count: '124,500', pct: '100%', color: 'bg-blue-500' },
                { stage: 'Sign Ups', count: '42,800', pct: '34.3%', color: 'bg-indigo-500' },
                { stage: 'Activated Users', count: '28,100', pct: '22.5%', color: 'bg-purple-500' },
                { stage: 'Paid Subscribers', count: '9,450', pct: '7.5%', color: 'bg-brand-primary-500' },
              ].map((funnel, i) => (
                <div key={i} className="flex items-center gap-4 group cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-50 p-2 rounded-xl transition-colors">
                  <div className="w-32 text-xs font-bold text-slate-500 group-hover:text-slate-900 dark:group-hover:text-white uppercase tracking-wide text-right transition-colors">{funnel.stage}</div>
                  <div className="flex-1 bg-slate-50 dark:bg-white/5 rounded-full h-6 overflow-hidden">
                    <div className={`${funnel.color} h-full rounded-full flex items-center px-3 text-[10px] font-bold text-slate-800 shadow-inner`} style={{ width: funnel.pct }}>
                      {funnel.pct}
                    </div>
                  </div>
                  <div className="w-20 text-sm font-bold text-slate-900 dark:text-slate-800">{funnel.count}</div>
                </div>
              ))}
            </div>
          </div>
          
        </div>

        {/* Right: AI Growth Engine */}
        <div className="space-y-6">
          
          <div className="bg-gradient-to-br from-white dark:from-brand-dark-bg to-slate-50 dark:to-brand-dark-surface p-6 rounded-2xl border border-slate-200 dark:border-brand-dark-border shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-brand-primary-500/20 blur-3xl rounded-full pointer-events-none"></div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-brand-primary-500/20 flex items-center justify-center text-brand-primary-500">
                <Sparkles size={20} />
              </div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-wide">Orbit AI Growth Engine</h2>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white/5 border border-slate-200 rounded-xl p-5 text-center group hover:bg-slate-50 transition-colors cursor-pointer">
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-2">Investor Readiness Score</div>
                <div className="text-5xl font-extrabold text-slate-800 mb-2 group-hover:scale-105 transition-transform">92<span className="text-xl text-slate-500">/100</span></div>
                <div className="text-xs text-slate-600">Top 5% of startups in your cohort</div>
              </div>

              <div className="bg-white/5 border border-slate-200 rounded-xl p-4">
                <div className="text-xs font-bold text-brand-primary-500 uppercase tracking-widest mb-2">Revenue Forecast</div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Based on current MoM growth, you are projected to hit <strong className="text-slate-800">$2M ARR by Q2 2024</strong>.
                </p>
              </div>
              
              <div className="bg-white/5 border border-slate-200 rounded-xl p-4">
                <div className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2">Next Milestone</div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Reduce churn rate from 4.2% to 3.0% to unlock optimal Series A valuation multiples.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
