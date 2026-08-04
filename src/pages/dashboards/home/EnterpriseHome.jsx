import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, Activity, Target, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function EnterpriseHome() {
  const stats = [
    { label: 'OPEN POSITIONS', value: '24', sub: '5 urgent', subColor: 'text-brand-primary-500', icon: Briefcase },
    { label: 'TALENT PIPELINE', value: '142', sub: '+12 this week', subColor: 'text-emerald-500', icon: Users },
    { label: 'INNOVATION PROJECTS', value: '3', sub: 'On track', subColor: 'text-emerald-500', icon: Target },
    { label: 'TEAM EFFICIENCY', value: '88%', sub: '+5% vs last qtr', subColor: 'text-emerald-500', icon: Activity },
  ];

  const recentHires = [
    { name: 'Aarav Patel', role: 'Senior React Developer', date: 'Joining Oct 15' },
    { name: 'Priya Sharma', role: 'Product Manager', date: 'Joining Oct 22' },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Banner */}
      <div className="relative w-full h-[180px] md:h-[220px] lg:h-[280px] rounded-[24px] border border-slate-200 dark:border-brand-dark-border overflow-hidden shadow-[0_0_40px_-15px_rgba(255,122,0,0.2)] bg-white mb-8">
        <img 
          src="/images/dashboard/dashboard_hero.png" 
          alt="Enterprise Dashboard" 
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-white dark:from-brand-dark-bg via-white/80 dark:via-brand-dark-bg/80 to-transparent"></div>
        <div className="absolute inset-0 p-6 md:p-10 lg:p-12 flex flex-col justify-end md:justify-center items-start md:items-end z-10 text-left md:text-right">
          <div className="w-full md:w-1/2 max-w-lg">
            <div className="flex items-center md:justify-end gap-2 mb-2">
              <span className="text-xs font-extrabold text-brand-primary-500 uppercase tracking-widest flex items-center gap-2 drop-shadow-md">
                <span className="w-4 h-4 flex items-center justify-center bg-brand-primary-500/20 rounded-sm">🏢</span> 
                Enterprise Dashboard
              </span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-heading font-extrabold text-slate-900 dark:text-white mb-2 drop-shadow-lg tracking-tight">
              Manage Operations
            </h1>
            <p className="text-slate-600 mt-2 text-lg font-medium drop-shadow-md">Oversee talent, projects, and organizational innovation.</p>
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-white p-6 rounded-2xl border border-slate-200 dark:border-slate-200 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-slate-900 dark:text-slate-800">Active Talent Pipeline</h2>
              <a href="#" className="text-xs font-semibold text-brand-primary-500 hover:text-brand-primary-400 transition-colors">View all candidates &rarr;</a>
            </div>
            <div className="space-y-4">
               {['Software Engineer (Backend)', 'Marketing Director', 'UX Designer'].map((role, i) => (
                 <div key={i} className="p-4 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-100 dark:border-slate-200">
                   <div className="flex justify-between items-center mb-2">
                     <div className="font-semibold text-sm">{role}</div>
                     <div className="text-xs font-semibold text-brand-primary-500">4 pending interviews</div>
                   </div>
                   <div className="w-full bg-slate-200 dark:bg-white/10 rounded-full h-2">
                     <div className="bg-brand-primary-500 h-2 rounded-full" style={{ width: `${(i+2)*20}%` }}></div>
                   </div>
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-white p-6 rounded-2xl border border-slate-200 dark:border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-900 dark:text-white mb-4">Upcoming Joiners</h2>
            <div className="space-y-4">
              {recentHires.map((hire, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-slate-900 dark:text-slate-800">{hire.name}</div>
                    <div className="text-xs text-slate-500">{hire.role} &middot; {hire.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
