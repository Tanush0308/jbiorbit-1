import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, MessageSquare, Video } from 'lucide-react';

export default function MentorDashboard() {
  const features = [
    { icon: Calendar, title: 'Upcoming Sessions', desc: 'Manage your mentorship schedule.' },
    { icon: Users, title: 'Mentees', desc: 'Track progress of students and entrepreneurs.' },
    { icon: MessageSquare, title: 'Messages', desc: 'Direct communication with your network.' },
    { icon: Video, title: 'Webinars', desc: 'Host masterclasses and workshops.' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-heading font-extrabold text-slate-900 dark:text-slate-800">Mentor / Alliance Portal</h1>
          <p className="text-slate-500 mt-1">Guide the next generation of business leaders.</p>
        </div>
        <button className="px-4 py-2 bg-brand-primary-500 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-brand-primary-400 transition-colors">
          Schedule Session
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
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-800 mb-4">Pending Mentorship Requests</h2>
        <div className="text-sm text-slate-500 italic">No pending requests at this time.</div>
      </div>
    </div>
  );
}
