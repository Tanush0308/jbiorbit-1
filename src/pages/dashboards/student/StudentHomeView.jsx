import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Calendar, CheckCircle2, Users, ArrowUpRight } from 'lucide-react';

export default function StudentHomeView() {
  const stats = [
    { label: 'APPLIED INTERNSHIPS', value: '7', sub: '+2 this week', subColor: 'text-emerald-500', icon: TrendingUp },
    { label: 'MENTOR SESSIONS', value: '3', sub: '1 upcoming', subColor: 'text-emerald-500', icon: Calendar },
    { label: 'COURSES IN PROGRESS', value: '2', sub: '68% avg complete', subColor: 'text-emerald-500', icon: CheckCircle2 },
    { label: 'CO-FOUNDER MATCHES', value: '12', sub: '+4 new', subColor: 'text-emerald-500', icon: Users },
  ];

  const internships = [
    { logo: 'F', bg: 'bg-white', title: 'Product Analyst Intern', company: 'Freshworks', loc: 'Chennai · Hybrid', pay: 'Rs 35000/mo', duration: '6 months' },
    { logo: 'b', bg: 'bg-white', title: 'Growth Marketing Intern', company: 'boAt Lifestyle', loc: 'Mumbai · Onsite', pay: 'Rs 25000/mo', duration: '3 months' },
    { logo: 'R', bg: 'bg-white', title: 'Data Science Intern', company: 'Razorpay', loc: 'Bangalore · Remote', pay: 'Rs 45000/mo', duration: '6 months' },
    { logo: 'A', bg: 'bg-white', title: 'Investment Banking Intern', company: 'Avendus Capital', loc: 'Mumbai · Onsite', pay: 'Rs 40000/mo', duration: '4 months' },
  ];

  const mentors = [
    { initial: 'AR', name: 'Aditi Rao', title: 'VP Product, Freshworks' },
    { initial: 'RD', name: 'Rohan Deshmukh', title: 'Angel Investor & Ex-founder' },
    { initial: 'SI', name: 'Sneha Iyer', title: 'CMO, D2C consumer brand' },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Banner */}
      <div className="relative w-full h-[180px] md:h-[220px] lg:h-[280px] rounded-[24px] border border-slate-200 dark:border-brand-dark-border overflow-hidden shadow-[0_0_40px_-15px_rgba(255,122,0,0.2)] bg-white mb-8">
        <img 
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2000&q=80" 
          alt="Banner" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-70 mix-blend-multiply" 
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-white dark:from-brand-dark-bg via-white/80 dark:via-brand-dark-bg/80 to-transparent"></div>
        <div className="absolute inset-0 p-6 md:p-10 lg:p-12 flex flex-col justify-end md:justify-center items-start md:items-end z-10 text-left md:text-right">
          <div className="w-full md:w-1/2 max-w-lg">
            <div className="flex items-center md:justify-end gap-2 mb-2">
              <span className="text-xs font-extrabold text-brand-primary-500 uppercase tracking-widest flex items-center gap-2 drop-shadow-md">
                <span className="w-4 h-4 flex items-center justify-center bg-brand-primary-500/20 rounded-sm">🎓</span> 
                Student Dashboard
              </span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-heading font-extrabold text-slate-900 dark:text-white mb-2 drop-shadow-lg tracking-tight flex items-center md:justify-end gap-3">
              Welcome back, Demo <span className="text-4xl drop-shadow-none">👋</span>
            </h1>
            <p className="text-slate-600 mt-2 text-lg font-medium drop-shadow-md">Learn, intern, connect.</p>
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
        
        {/* Left Column - Internships */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white dark:bg-white p-6 rounded-2xl border border-slate-200 dark:border-slate-200 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-slate-900 dark:text-slate-800">Recommended internships</h2>
              <a href="#" className="text-xs font-semibold text-brand-primary-500 hover:text-brand-primary-400 transition-colors">See all &rarr;</a>
            </div>
            
            <div className="space-y-0 divide-y divide-slate-100 dark:divide-white/5">
              {internships.map((intern, i) => (
                <div key={i} className="py-5 flex items-center justify-between group hover:bg-slate-50 dark:hover:bg-slate-50 -mx-4 px-4 rounded-xl transition-colors cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold text-slate-800 shadow-sm ${intern.bg}`}>
                      {intern.logo}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-slate-800 group-hover:text-brand-primary-500 transition-colors">{intern.title}</div>
                      <div className="text-xs text-slate-500 mt-1">{intern.company} &middot; {intern.loc}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-sm text-slate-900 dark:text-slate-800">{intern.pay}</div>
                    <div className="text-xs text-slate-500 mt-1">{intern.duration}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Mentors & Co-Founders */}
        <div className="space-y-6">
          {/* Suggested Mentors */}
          <div className="bg-white dark:bg-white p-6 rounded-2xl border border-slate-200 dark:border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-800 mb-6">Suggested mentors</h2>
            
            <div className="space-y-5">
              {mentors.map((mentor, i) => (
                <div key={i} className="flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-white/10 flex items-center justify-center text-sm font-bold text-slate-600 dark:text-slate-600">
                      {mentor.initial}
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-slate-900 dark:text-slate-800 group-hover:text-brand-primary-500 transition-colors">{mentor.name}</div>
                      <div className="text-xs text-slate-500 truncate max-w-[160px]">{mentor.title}</div>
                    </div>
                  </div>
                  <ArrowUpRight size={16} className="text-slate-600 dark:text-slate-600 group-hover:text-brand-primary-500 transition-colors" />
                </div>
              ))}
            </div>
          </div>

          {/* Co-founder matches (placeholder based on screenshot) */}
          <div className="bg-white dark:bg-white p-6 rounded-2xl border border-slate-200 dark:border-slate-200 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-slate-900 dark:text-slate-800">Co-founder matches</h2>
            </div>
            <div className="text-sm text-slate-500 py-4 text-center">
              Discover potential partners to build your next big idea.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
