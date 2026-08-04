import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, TrendingUp, Activity, BarChart2, Search, Filter, 
  Download, Sparkles, Map, ChevronDown, ArrowRight, Zap, Target, Loader2
} from 'lucide-react';
import { useToast } from '../../../context/ToastContext';
import { useAppContext } from '../../../context/AppContext';

export default function BusinessInsightsView() {
  const toast = useToast();
  const { addActivity } = useAppContext();

  const [searchQuery, setSearchQuery] = useState('');
  const [loadingId, setLoadingId] = useState(null);

  const kpis = [
    { label: 'GLOBAL MARKET INDEX', value: '+4.2%', sub: 'vs last quarter', icon: Globe, trend: 'up' },
    { label: 'FUNDING ACTIVITY', value: '$124B', sub: 'Q3 2023 Total', icon: Activity, trend: 'up' },
    { label: 'AVG INDUSTRY GROWTH', value: '12.8%', sub: 'Across top 50 sectors', icon: TrendingUp, trend: 'up' },
    { label: 'STARTUP SUCCESS RATE', value: '24%', sub: 'Series A Conversion', icon: Target, trend: 'down' },
  ];

  const industries = [
    { name: 'Artificial Intelligence', growth: '+34%', marketSize: '$420B', status: 'Hot' },
    { name: 'FinTech', growth: '+18%', marketSize: '$310B', status: 'Stable' },
    { name: 'Healthcare Tech', growth: '+22%', marketSize: '$540B', status: 'Growing' },
    { name: 'Manufacturing (Industry 4.0)', growth: '+14%', marketSize: '$890B', status: 'Transforming' },
    { name: 'Retail Tech', growth: '+9%', marketSize: '$210B', status: 'Stable' },
    { name: 'Clean Energy', growth: '+28%', marketSize: '$450B', status: 'Hot' },
  ];

  const recentReports = [
    { id: 'r-1', title: 'Q4 2023 AI Market Penetration', type: 'Sector Analysis', date: 'Oct 24, 2023' },
    { id: 'r-2', title: 'FinTech Regulatory Changes (Asia)', type: 'Compliance', date: 'Oct 18, 2023' },
    { id: 'r-3', title: 'Global SaaS Valuations Report', type: 'Financial', date: 'Oct 12, 2023' },
  ];

  const handleDownload = (r) => {
    setLoadingId(r.id);
    setTimeout(() => {
      setLoadingId(null);
      toast.success(`Downloaded: ${r.title}`);
      addActivity('Downloaded Report', `Downloaded ${r.title}`);
    }, 1500);
  };

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      
      {/* 1. Hero Banner */}
      <div className="relative w-full h-[240px] md:h-[300px] rounded-[24px] border border-slate-200 dark:border-brand-dark-border overflow-hidden bg-white shadow-sm">
        <img 
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80" 
          alt="Banner" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-70 mix-blend-multiply" 
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-white dark:from-brand-dark-bg via-white/80 dark:via-brand-dark-bg/80 to-transparent"></div>
        <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center items-start md:items-end z-10 text-left md:text-right">
          <div className="flex items-center gap-2 mb-3 text-brand-primary-500 font-bold tracking-widest text-xs uppercase bg-brand-primary-500/10 px-3 py-1.5 rounded-full border border-brand-primary-500/20">
            <Globe size={14} /> Global Intelligence
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white mb-4 tracking-tight">
            Business Insights
          </h1>
          <p className="text-slate-600 dark:text-slate-300 max-w-lg text-lg">
            Real-time market trends, competitor mapping, and macroeconomic indicators to guide your enterprise strategy.
          </p>
        </div>
      </div>

      {/* 2. Quick Actions & Search */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white dark:bg-white p-4 rounded-2xl border border-slate-200 dark:border-slate-200 shadow-sm">
        <div className="flex w-full md:w-auto flex-1 gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600" size={18} />
            <input 
              type="text" 
              placeholder="Search industries, markets, or trends..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-brand-primary-500 transition-colors dark:text-slate-800"
            />
          </div>
          <button onClick={() => toast.info('Filters modal would open here')} className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-slate-200 rounded-xl text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-50 transition-colors dark:text-slate-800">
            <Filter size={16} /> <span className="hidden sm:inline">Filter</span> <ChevronDown size={14} />
          </button>
        </div>
        <button onClick={() => toast.info('Generating custom report...')} className="w-full md:w-auto px-6 py-2.5 bg-brand-primary-500 text-white text-sm font-bold rounded-xl shadow-lg hover:bg-brand-primary-400 transition-all flex items-center justify-center gap-2">
          <BarChart2 size={16} /> Generate Custom Report
        </button>
      </div>

      {/* 3. Key Statistics (KPIs) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi, i) => {
          const Icon = kpi.icon;
          return (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-white p-6 rounded-2xl border border-slate-200 dark:border-slate-200 shadow-sm relative overflow-hidden group"
            >
              <div className="absolute -right-6 -top-6 text-slate-50 dark:text-white/[0.02] group-hover:text-slate-100 dark:group-hover:text-slate-800/[0.04] transition-colors transition-transform group-hover:scale-110">
                <Icon size={120} />
              </div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{kpi.label}</div>
                  <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-white/5 flex items-center justify-center text-slate-600 dark:text-slate-600 group-hover:text-brand-primary-500 transition-colors">
                    <Icon size={16} />
                  </div>
                </div>
                <div className="text-3xl font-heading font-extrabold text-slate-900 dark:text-slate-800 mb-2">{kpi.value}</div>
                <div className={`text-xs font-semibold flex items-center gap-1 ${kpi.trend === 'up' ? 'text-emerald-500' : 'text-amber-500'}`}>
                  {kpi.trend === 'up' ? 'â†—' : 'â†˜'} {kpi.sub}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* 4. Main Workspace & AI Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left: Main Workspace (Charts & Industry Cards) */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Simulated Market Trend Chart */}
          <div className="bg-white dark:bg-white p-6 rounded-2xl border border-slate-200 dark:border-slate-200 shadow-sm h-80 flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-slate-900 dark:text-slate-800">Global Market Trends</h2>
              <div className="flex gap-2">
                {['1W', '1M', '3M', '1Y'].map(t => (
                  <button key={t} className={`text-xs font-bold px-3 py-1 rounded-md ${t==='1M' ? 'bg-white text-slate-800 dark:bg-white dark:text-slate-900' : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-50'}`}>
                    {t}
                  </button>
                ))}
              </div>
            </div>
            {/* Visual representation of a chart */}
            <div className="flex-1 border-b border-l border-slate-200 dark:border-slate-200 flex items-end p-2 gap-2 pb-0">
               {[30, 45, 40, 60, 55, 75, 80, 70, 85, 95, 90, 100].map((h, i) => (
                 <div key={i} className="flex-1 flex flex-col justify-end group h-full">
                   <div 
                     className="w-full bg-gradient-to-t from-brand-primary-500/80 to-brand-primary-400 rounded-t-sm group-hover:brightness-110 transition-all relative" 
                     style={{ height: `${h}%` }}
                   >
                     <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white dark:bg-white text-slate-800 dark:text-slate-900 text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-bold">
                       {h}K pts
                     </div>
                   </div>
                 </div>
               ))}
            </div>
            <div className="flex justify-between text-[10px] text-slate-600 mt-2 px-2 font-semibold">
              <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
            </div>
          </div>

          {/* Industry Cards */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-slate-900 dark:text-slate-800">Trending Industries</h2>
              <button className="text-sm font-semibold text-brand-primary-500 hover:text-brand-primary-400">View all sectors &rarr;</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {industries.map((ind, i) => (
                <div key={i} className="p-4 bg-white dark:bg-white border border-slate-200 dark:border-slate-200 rounded-xl hover:border-brand-primary-500/50 transition-colors cursor-pointer group flex items-center justify-between">
                  <div>
                    <div className="font-bold text-slate-900 dark:text-slate-800 mb-1 group-hover:text-brand-primary-500 transition-colors">{ind.name}</div>
                    <div className="text-xs text-slate-500 flex items-center gap-3">
                      <span>Size: {ind.marketSize}</span>
                      <span className="text-emerald-500 font-semibold">{ind.growth} YOY</span>
                    </div>
                  </div>
                  <div className={`text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide ${
                    ind.status === 'Hot' ? 'bg-brand-primary-500/10 text-brand-primary-500' : 
                    ind.status === 'Growing' ? 'bg-emerald-500/10 text-emerald-500' : 
                    'bg-slate-50 text-slate-500 dark:bg-white/10 dark:text-slate-600'
                  }`}>
                    {ind.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: AI Insights & Downloads */}
        <div className="space-y-6">
          
          {/* AI Insights Panel */}
          <div className="bg-gradient-to-br from-white dark:from-brand-dark-bg to-slate-50 dark:to-brand-dark-surface p-6 rounded-2xl border border-slate-200 dark:border-brand-dark-border shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-brand-primary-500/10 blur-3xl rounded-full pointer-events-none"></div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-brand-primary-500/20 flex items-center justify-center text-brand-primary-500">
                <Sparkles size={20} />
              </div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-slate-900 dark:text-white tracking-wide">Orbit AI Insight</h2>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white/5 border border-slate-200 rounded-xl p-4">
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-2 flex items-center gap-2"><TrendingUp size={12}/> Market Opportunity</div>
                <p className="text-sm text-slate-600 leading-relaxed">Clean Energy and Climate Tech investments have surged by 28% this quarter in APAC. High probability of favorable government subsidies rolling out next month.</p>
              </div>
              
              <div className="bg-white/5 border border-slate-200 rounded-xl p-4">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-2 flex items-center gap-2"><Activity size={12}/> Potential Risk</div>
                <p className="text-sm text-slate-600 leading-relaxed">Retail tech faces supply chain bottlenecks. Expect 15% delayed deliverables in Q4. Advised to secure alternative logistics partnerships now.</p>
              </div>
            </div>
          </div>

          {/* Recent Reports / Downloads */}
          <div className="bg-white dark:bg-white p-6 rounded-2xl border border-slate-200 dark:border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-800 mb-4">Latest Market Reports</h2>
            <div className="space-y-3">
              {recentReports.map((report) => {
                const isLoading = loadingId === report.id;
                
                return (
                  <div key={report.id} onClick={() => handleDownload(report)} className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-50 transition-colors cursor-pointer group border border-transparent hover:border-slate-200 dark:hover:border-slate-200">
                    <div className="w-10 h-10 rounded-lg bg-slate-50 dark:bg-white flex items-center justify-center text-slate-500 dark:text-slate-600 mt-1">
                      {isLoading ? <Loader2 size={18} className="animate-spin text-brand-primary-500" /> : <Download size={18} className="group-hover:text-brand-primary-500 transition-colors" />}
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-slate-900 dark:text-slate-800 group-hover:text-brand-primary-500 transition-colors line-clamp-2">{report.title}</div>
                      <div className="text-xs text-slate-500 mt-1 flex items-center gap-2">
                        <span className="bg-slate-200 dark:bg-white/10 px-2 py-0.5 rounded text-[10px] font-bold">{report.type}</span>
                        {report.date}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <button onClick={() => toast.info('Opening Full Library')} className="w-full mt-4 py-2 border-2 border-dashed border-slate-200 dark:border-slate-200 rounded-xl text-sm font-semibold text-slate-600 dark:text-slate-600 hover:text-brand-primary-500 hover:border-brand-primary-500 transition-colors">
              View Report Library
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
}

