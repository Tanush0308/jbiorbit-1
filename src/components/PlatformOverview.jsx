import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Briefcase, GraduationCap, Building2, Lightbulb, Shield, Sparkles } from 'lucide-react';

const tabs = [
  { id: 'students', label: 'Students', icon: GraduationCap, color: 'text-blue-600', bg: 'bg-blue-600/10', border: 'border-blue-600/30' },
  { id: 'entrepreneurs', label: 'Entrepreneurs', icon: Lightbulb, color: 'text-brand-primary-500', bg: 'bg-brand-primary-500/10', border: 'border-brand-primary-500/30' },
  { id: 'investors', label: 'Investors', icon: Briefcase, color: 'text-green-600', bg: 'bg-green-600/10', border: 'border-green-600/30' },
  { id: 'mentors', label: 'Mentors', icon: Users, color: 'text-purple-600', bg: 'bg-purple-600/10', border: 'border-purple-600/30' },
  { id: 'organizations', label: 'Organizations', icon: Building2, color: 'text-brand-primary-400', bg: 'bg-brand-primary-400/20', border: 'border-brand-primary-400/50' },
  { id: 'admin', label: 'Admin', icon: Shield, color: 'text-red-600', bg: 'bg-red-600/10', border: 'border-red-600/30' },
];

const tabData = {
  students: {
    title: 'AI-Powered Learning & Mentorship',
    stats: [{ label: 'Courses Completed', val: '12' }, { label: 'Skill Score', val: '85/100' }],
    chartBars: [30, 45, 60, 50, 75, 90, 85],
    cardMsg: 'New Internship Match: TechNova Solutions'
  },
  entrepreneurs: {
    title: 'Venture Growth & Capital Access',
    stats: [{ label: 'Revenue MRR', val: '₹12.5L' }, { label: 'Burn Rate', val: '₹3.2L' }],
    chartBars: [20, 35, 30, 50, 70, 65, 95],
    cardMsg: 'Seed Funding Term Sheet Received'
  },
  investors: {
    title: 'Deal Flow & Portfolio Intelligence',
    stats: [{ label: 'Active Deals', val: '8' }, { label: 'Portfolio ROI', val: '+24%' }],
    chartBars: [50, 55, 60, 65, 75, 80, 85],
    cardMsg: 'Startup Match: EcoDrive AI (92% Score)'
  },
  mentors: {
    title: 'Expert Network & Knowledge Transfer',
    stats: [{ label: 'Sessions Hosted', val: '14' }, { label: 'Mentees', val: '45' }],
    chartBars: [10, 25, 40, 35, 50, 60, 75],
    cardMsg: 'Session Scheduled: Pitch Review'
  },
  organizations: {
    title: 'Corporate Innovation & Talent',
    stats: [{ label: 'Open Roles', val: '24' }, { label: 'Projects', val: '6' }],
    chartBars: [80, 70, 75, 85, 90, 95, 100],
    cardMsg: 'Hackathon Registration Full'
  },
  admin: {
    title: 'Platform Analytics & Control',
    stats: [{ label: 'Active Users', val: '12.4K' }, { label: 'System Health', val: '99.9%' }],
    chartBars: [90, 92, 91, 95, 94, 98, 99],
    cardMsg: 'System Update Completed'
  }
};

export default function PlatformOverview() {
  const [activeTab, setActiveTab] = useState('entrepreneurs');

  return (
    <section className="py-24 bg-white dark:bg-slate-900-bg overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
        
        <div className="text-center space-y-4">
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white">
            One Core. <span className="text-slate-600 dark:text-slate-500">Infinite Possibilities.</span>
          </h2>
          <p className="text-slate-600 dark:text-[#CBD5E1] max-w-2xl mx-auto">
            Experience a tailored digital environment that dynamically adapts to your role in the venture ecosystem.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 lg:gap-4">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-2.5 rounded-full flex items-center gap-2 transition-all duration-300 ${
                  isActive ? 'bg-white text-slate-800 dark:bg-white/10 dark:text-slate-800' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200 dark:hover:text-slate-600 dark:hover:bg-slate-50'
                }`}
              >
                <Icon size={16} className={isActive ? (document.documentElement.classList.contains('dark') ? tab.color : 'text-current') : ''} />
                <span className="text-sm font-semibold">{tab.label}</span>
                {isActive && (
                  <motion.div 
                    layoutId="tab-indicator"
                    className="absolute inset-0 rounded-full border border-slate-900/10 dark:border-slate-200"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Dynamic Interface Container */}
        <div className="relative w-full max-w-5xl mx-auto h-[450px] glass-panel rounded-3xl p-2 sm:p-4 overflow-hidden shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -10, filter: 'blur(10px)' }}
              transition={{ duration: 0.3 }}
              className="w-full h-full bg-white rounded-2xl border border-slate-200 shadow-inner flex flex-col p-6"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-100">
                <h3 className="font-heading font-bold text-xl text-slate-900">{tabData[activeTab].title}</h3>
                <div className="flex gap-6">
                  {tabData[activeTab].stats.map((stat, i) => (
                    <div key={i} className="text-right">
                      <div className="text-[10px] text-slate-600 font-mono uppercase font-semibold tracking-wider">{stat.label}</div>
                      <div className="font-extrabold text-slate-900 text-lg">{stat.val}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 grid grid-cols-3 gap-6">
                
                {/* Left: Chart */}
                <div className="col-span-2 bg-slate-50 rounded-xl border border-slate-100 p-4 flex flex-col">
                  <div className="text-xs font-semibold text-slate-500 mb-4 uppercase tracking-wide">Performance Metrics</div>
                  <div className="flex-1 flex items-end gap-2">
                    {tabData[activeTab].chartBars.map((h, i) => (
                      <motion.div
                        key={`${activeTab}-bar-${i}`}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 0.5, delay: i * 0.05 }}
                        className={`flex-1 rounded-t-sm ${tabs.find(t=>t.id===activeTab).bg.replace('/10','').replace('/20','')} opacity-90`}
                      />
                    ))}
                  </div>
                </div>

                {/* Right: Notifications & Activity */}
                <div className="col-span-1 space-y-4">
                  <div className={`p-4 rounded-xl border bg-white shadow-sm ${tabs.find(t=>t.id===activeTab).border}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-3 ${tabs.find(t=>t.id===activeTab).bg} ${tabs.find(t=>t.id===activeTab).color}`}>
                      <Sparkles size={14} />
                    </div>
                    <div className="text-sm font-extrabold text-slate-900 mb-1">AI Insight</div>
                    <div className="text-xs text-slate-600 font-medium leading-relaxed">
                      {tabData[activeTab].cardMsg}
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 rounded-xl border border-slate-100 p-4 h-full flex flex-col gap-3">
                    <div className="w-full h-2 bg-slate-200 rounded-full"></div>
                    <div className="w-3/4 h-2 bg-slate-200 rounded-full"></div>
                    <div className="w-5/6 h-2 bg-slate-200 rounded-full"></div>
                    <div className="mt-auto w-full h-8 bg-slate-50 rounded-md"></div>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
