import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, TrendingUp, Activity, DollarSign, Clock, ShieldAlert,
  ArrowUpRight, Video, Mic, ShieldCheck, FileText, CheckCircle2,
  Sparkles, Megaphone
} from 'lucide-react';
import { useToast } from '../../../context/ToastContext';

// Dummy Data
const KPIs = [
  { title: 'Platform Health', value: '99.98%', icon: Activity, trend: '+0.01%', color: 'text-green-500' },
  { title: 'Total Users', value: '18,542', icon: Users, trend: '+12%', color: 'text-brand-primary-500' },
  { title: 'Revenue This Month', value: 'Rs 18.4L', icon: DollarSign, trend: '+8.4%', color: 'text-brand-primary-400' },
  { title: 'Active Sessions', value: '438', icon: TrendingUp, trend: '+24%', color: 'text-blue-500' },
];

const ActivityFeed = [
  { id: 1, action: 'Student registered', time: '2 mins ago', icon: Users, color: 'bg-blue-500/20 text-blue-500' },
  { id: 2, action: 'Funding request received', time: '15 mins ago', icon: DollarSign, color: 'bg-green-500/20 text-green-500' },
  { id: 3, action: 'Mentor approved', time: '1 hour ago', icon: CheckCircle2, color: 'bg-brand-primary-500/20 text-brand-primary-500' },
  { id: 4, action: 'New course published', time: '2 hours ago', icon: Video, color: 'bg-purple-500/20 text-purple-500' },
  { id: 5, action: 'Organization verified', time: '3 hours ago', icon: ShieldCheck, color: 'bg-brand-primary-400/20 text-brand-primary-400' },
];

const QuickActions = [
  { title: 'Create Course', icon: Video },
  { title: 'Publish Webinar', icon: Mic },
  { title: 'Broadcast Announcement', icon: Megaphone },
  { title: 'Generate Business Report', icon: FileText },
];

const PendingApprovals = [
  { title: 'Mentor Applications', count: 12 },
  { title: 'Organization Verification', count: 8 },
  { title: 'Investor Requests', count: 5 },
  { title: 'Funding Requests', count: 18 },
];

const AIInsights = [
  "Student engagement increased 18% in the last 7 days.",
  "Mentorship demand increased 22% overall.",
  "Funding requests increased 11% this month.",
  "Recommend launching an AI Marketing course to capture trending interest."
];

export default function DashboardView() {
  const toast = useToast();
  const [insightText, setInsightText] = useState('');
  const [insightIndex, setInsightIndex] = useState(0);

  // Typing animation for AI Insights
  useEffect(() => {
    const text = AIInsights[insightIndex];
    let i = 0;
    setInsightText('');
    
    const interval = setInterval(() => {
      setInsightText(prev => prev + text.charAt(i));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 50);

    const nextInsight = setTimeout(() => {
      setInsightIndex((prev) => (prev + 1) % AIInsights.length);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(nextInsight);
    };
  }, [insightIndex]);

  const handleActionClick = (title) => {
    toast.success(`Action initiated: ${title}`);
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold font-heading text-slate-900 dark:text-slate-900 dark:text-white">Executive Command Center</h1>
          <p className="text-slate-500 dark:text-slate-600 mt-1">Real-time pulse of the JBI Orbit platform.</p>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {KPIs.map((kpi, idx) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            key={idx}
            className="bg-white dark:bg-white rounded-2xl p-5 border border-slate-200 dark:border-slate-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl ${kpi.color.replace('text-', 'bg-').replace('500', '500/10')}`}>
                <kpi.icon className={kpi.color} size={20} />
              </div>
              <span className="flex items-center text-xs font-semibold text-green-500 bg-green-500/10 px-2 py-1 rounded-full">
                <ArrowUpRight size={14} className="mr-1" />
                {kpi.trend}
              </span>
            </div>
            <h3 className="text-slate-500 dark:text-slate-600 text-sm font-medium">{kpi.title}</h3>
            <div className="text-3xl font-bold text-slate-900 dark:text-slate-800 mt-1 font-heading">{kpi.value}</div>
          </motion.div>
        ))}
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: AI & Activity */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* AI Business Pulse */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-brand-primary-500/10 to-brand-primary-400/5 border border-brand-primary-500/20 rounded-2xl p-6 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <Sparkles size={100} className="text-brand-primary-500" />
            </div>
            <div className="flex items-center gap-3 mb-4 relative z-10">
              <div className="bg-brand-primary-500/20 p-2 rounded-lg text-brand-primary-500">
                <Sparkles size={20} />
              </div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-slate-900 dark:text-white font-heading">Orbit AI Pulse</h2>
            </div>
            <div className="h-16 relative z-10 flex items-center">
              <p className="text-lg font-medium text-slate-700 dark:text-slate-600">
                {insightText}<span className="animate-pulse ml-1">|</span>
              </p>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <div className="bg-white dark:bg-white rounded-2xl p-6 border border-slate-200 dark:border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-800 font-heading mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {QuickActions.map((action, idx) => (
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleActionClick(action.title)}
                  key={idx}
                  className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-50 dark:bg-white border border-slate-100 dark:border-slate-200 hover:border-brand-primary-500/50 dark:hover:border-brand-primary-500/50 transition-colors group"
                >
                  <action.icon className="text-slate-600 group-hover:text-brand-primary-500 mb-3 transition-colors" size={24} />
                  <span className="text-xs font-semibold text-slate-600 dark:text-slate-600 text-center">{action.title}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Feed & Approvals */}
        <div className="space-y-6">
          
          {/* Pending Approvals */}
          <div className="bg-white dark:bg-white rounded-2xl p-6 border border-slate-200 dark:border-slate-200 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-slate-900 dark:text-slate-800 font-heading">Pending Approvals</h2>
              <span className="bg-red-500/10 text-red-500 text-xs font-bold px-2 py-1 rounded-lg">43 Total</span>
            </div>
            <div className="space-y-3">
              {PendingApprovals.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-50 cursor-pointer transition-colors border border-transparent dark:hover:border-slate-200">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-600">{item.title}</span>
                  <span className="text-xs font-bold text-slate-500 bg-slate-50 dark:bg-white px-2 py-1 rounded-lg">{item.count} Pending</span>
                </div>
              ))}
            </div>
          </div>

          {/* Activity Feed */}
          <div className="bg-white dark:bg-white rounded-2xl p-6 border border-slate-200 dark:border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-800 font-heading mb-4">Platform Activity</h2>
            <div className="space-y-4">
              {ActivityFeed.map((item, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className={`mt-1 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${item.color}`}>
                    <item.icon size={14} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-600">{item.action}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-600 flex items-center mt-1">
                      <Clock size={12} className="mr-1" /> {item.time}
                    </p>
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
