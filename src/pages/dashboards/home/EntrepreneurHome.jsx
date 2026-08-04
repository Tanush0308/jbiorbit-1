import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Activity, Users, ArrowUpRight, FileText } from 'lucide-react';

export default function EntrepreneurHome() {
  const stats = [
    { label: 'MONTHLY REVENUE', value: '₹4.2L', sub: '+12% this month', subColor: 'text-emerald-500', icon: DollarSign },
    { label: 'FUNDING RAISED', value: '₹50L', sub: 'Seed round closed', subColor: 'text-emerald-500', icon: TrendingUp },
    { label: 'ACTIVE USERS', value: '1,240', sub: '+18% growth', subColor: 'text-emerald-500', icon: Users },
    { label: 'BUSINESS HEALTH', value: '92/100', sub: 'AI Insight', subColor: 'text-emerald-500', icon: Activity },
  ];

  const recentReports = [
    { title: 'Q3 Financial Projections', date: 'Oct 12, 2023', status: 'Generated' },
    { title: 'Competitor Analysis: SaaS', date: 'Oct 05, 2023', status: 'Generated' },
    { title: 'Investor Pitch Deck v2', date: 'Sep 28, 2023', status: 'Reviewed' },
  ];

  const investors = [
    { initial: 'S', name: 'Sequoia Surge', type: 'Venture Capital', focus: 'SaaS, FinTech' },
    { initial: 'A', name: 'AngelList Syndicate', type: 'Angel Group', focus: 'Early Stage' },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Banner */}
      <div className="relative w-full h-[180px] md:h-[220px] lg:h-[280px] rounded-[24px] border border-slate-200 dark:border-brand-dark-border overflow-hidden shadow-[0_0_40px_-15px_rgba(255,122,0,0.2)] bg-white mb-8">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80" 
          alt="Banner" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-70 mix-blend-multiply" 
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-white dark:from-brand-dark-bg via-white/80 dark:via-brand-dark-bg/80 to-transparent"></div>
        <div className="absolute inset-0 p-6 md:p-10 lg:p-12 flex flex-col justify-end md:justify-center items-start md:items-end z-10 text-left md:text-right">
          <div className="w-full md:w-1/2 max-w-lg">
            <div className="flex items-center md:justify-end gap-2 mb-2">
              <span className="text-xs font-extrabold text-brand-primary-500 uppercase tracking-widest flex items-center gap-2 drop-shadow-md">
                <span className="w-4 h-4 flex items-center justify-center bg-brand-primary-500/20 rounded-sm">🚀</span> 
                Founder Dashboard
              </span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-heading font-extrabold text-slate-900 dark:text-white mb-2 drop-shadow-lg tracking-tight">
              Scale Your Vision
            </h1>
            <p className="text-slate-600 mt-2 text-lg font-medium drop-shadow-md">Track growth, secure funding, and optimize operations.</p>
          </div>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-white p-5 rounded-2xl border border-slate-200 dark:border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{s.label}</div>
                <Icon size={16} className="text-slate-600" />
              </div>
              <div className="text-4xl font-heading font-extrabold text-slate-900 dark:text-slate-800 mb-2">{s.value}</div>
              <div className={`text-xs font-semibold ${s.subColor}`}>{s.sub}</div>
            </motion.div>
          )
        })}
      </div>

      {/* 2-Column Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column - Growth & Analytics */}
        <div className="lg:col-span-2 space-y-6">
          {/* Revenue Chart Placeholder */}
          <div className="bg-white dark:bg-white p-6 rounded-2xl border border-slate-200 dark:border-slate-200 shadow-sm h-72 flex flex-col">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-800 mb-6">Revenue Growth</h2>
            <div className="flex-1 border-b border-l border-slate-200 dark:border-slate-200 flex items-end p-4 gap-4">
               {/* Dummy bars */}
               {[40, 60, 50, 80, 95, 75, 100].map((h, i) => (
                 <div key={i} className="flex-1 bg-brand-primary-500/20 dark:bg-brand-primary-500/40 rounded-t-sm hover:bg-brand-primary-500 transition-colors cursor-pointer relative group" style={{ height: `${h}%` }}>
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                       Month {i+1}
                    </div>
                 </div>
               ))}
            </div>
          </div>

          <div className="bg-white dark:bg-white p-6 rounded-2xl border border-slate-200 dark:border-slate-200 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-slate-900 dark:text-slate-800">Recent Business Reports</h2>
              <a href="#" className="text-xs font-semibold text-brand-primary-500 hover:text-brand-primary-400 transition-colors">Generate New &rarr;</a>
            </div>
            <div className="space-y-0 divide-y divide-slate-100 dark:divide-white/5">
              {recentReports.map((report, i) => (
                <div key={i} className="py-4 flex items-center justify-between group cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-50 -mx-4 px-4 rounded-xl transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-white/5 flex items-center justify-center text-slate-500">
                      <FileText size={18} />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-slate-900 dark:text-slate-800 group-hover:text-brand-primary-500 transition-colors">{report.title}</div>
                      <div className="text-xs text-slate-500 mt-1">{report.date}</div>
                    </div>
                  </div>
                  <div className="text-xs font-semibold text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-1 rounded">
                    {report.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Investors & AI Insights */}
        <div className="space-y-6">
          {/* Active AI Insights */}
          <div className="bg-gradient-to-br from-white dark:from-brand-dark-bg to-slate-50 dark:to-brand-dark-surface p-6 rounded-2xl border border-slate-200 dark:border-brand-dark-border shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary-500/10 blur-3xl rounded-full"></div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-brand-primary-500">✨</span> AI Insights
            </h2>
            <p className="text-sm text-slate-600 mb-4">
              Your CAC (Customer Acquisition Cost) has increased by 15% this week. Consider optimizing your ongoing marketing campaigns.
            </p>
            <button className="text-xs font-semibold text-brand-primary-500 hover:text-brand-primary-400 transition-colors">View detailed analysis &rarr;</button>
          </div>

          <div className="bg-white dark:bg-white p-6 rounded-2xl border border-slate-200 dark:border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-800 mb-6">Matched Investors</h2>
            <div className="space-y-5">
              {investors.map((inv, i) => (
                <div key={i} className="flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-white/10 flex items-center justify-center text-sm font-bold text-slate-600 dark:text-slate-600">
                      {inv.initial}
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-slate-900 dark:text-slate-800 group-hover:text-brand-primary-500 transition-colors">{inv.name}</div>
                      <div className="text-xs text-slate-500 truncate max-w-[160px]">{inv.type}</div>
                    </div>
                  </div>
                  <ArrowUpRight size={16} className="text-slate-600 dark:text-slate-600 group-hover:text-brand-primary-500 transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
