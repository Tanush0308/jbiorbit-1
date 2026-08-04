import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Megaphone, Send, Eye, Calendar, Clock, BarChart2
} from 'lucide-react';
import { useToast } from '../../../context/ToastContext';

// Dummy Data
const history = Array.from({ length: 8 }).map((_, i) => ({
  id: `ANN-${1000 + i}`,
  title: ['Platform Maintenance', 'New Course Released', 'Funding Season Open', 'Mentorship Updates'][i % 4],
  category: ['System', 'Content', 'Finance', 'Community'][i % 4],
  audience: ['Everyone', 'Students', 'Entrepreneurs', 'Mentors'][i % 4],
  date: `2026-07-${(i % 28) + 1}`,
  readRate: Math.floor(Math.random() * 40) + 40,
  views: Math.floor(Math.random() * 5000) + 1000
}));

export default function AnnouncementsView() {
  const toast = useToast();
  const [formData, setFormData] = useState({ title: '', category: 'General', audience: 'Everyone', message: '' });

  const handlePublish = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.message) return toast.error('Title and message are required.');
    toast.success('Announcement published successfully.');
    setFormData({ title: '', category: 'General', audience: 'Everyone', message: '' });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold font-heading text-slate-900 dark:text-slate-800">Announcements</h1>
          <p className="text-slate-500 dark:text-slate-600 mt-1">Broadcast messages to platform users.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Composer */}
        <div className="lg:col-span-1 bg-white dark:bg-white rounded-2xl border border-slate-200 dark:border-slate-200 shadow-sm p-6 h-fit">
          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-800 font-heading mb-6 flex items-center gap-2">
            <Megaphone size={20} className="text-brand-primary-500" /> Create Announcement
          </h2>
          <form onSubmit={handlePublish} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-600 uppercase tracking-wider mb-1">Title</label>
              <input 
                type="text" 
                value={formData.title}
                onChange={e => setFormData({...formData, title: e.target.value})}
                className="w-full bg-slate-50 dark:bg-white border border-slate-200 dark:border-slate-200 rounded-xl py-2.5 px-4 text-sm text-slate-900 dark:text-slate-800 focus:outline-none focus:border-brand-primary-500 transition-colors"
                placeholder="Announcement Title"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-600 uppercase tracking-wider mb-1">Category</label>
                <select 
                  value={formData.category}
                  onChange={e => setFormData({...formData, category: e.target.value})}
                  className="w-full bg-slate-50 dark:bg-white border border-slate-200 dark:border-slate-200 rounded-xl py-2.5 px-4 text-sm text-slate-900 dark:text-slate-800 focus:outline-none focus:border-brand-primary-500 transition-colors appearance-none"
                >
                  <option>General</option>
                  <option>System</option>
                  <option>Content</option>
                  <option>Event</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-600 uppercase tracking-wider mb-1">Audience</label>
                <select 
                  value={formData.audience}
                  onChange={e => setFormData({...formData, audience: e.target.value})}
                  className="w-full bg-slate-50 dark:bg-white border border-slate-200 dark:border-slate-200 rounded-xl py-2.5 px-4 text-sm text-slate-900 dark:text-slate-800 focus:outline-none focus:border-brand-primary-500 transition-colors appearance-none"
                >
                  <option>Everyone</option>
                  <option>Students</option>
                  <option>Entrepreneurs</option>
                  <option>Mentors</option>
                  <option>Organizations</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-600 uppercase tracking-wider mb-1">Message</label>
              <textarea 
                rows={5}
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                className="w-full bg-slate-50 dark:bg-white border border-slate-200 dark:border-slate-200 rounded-xl py-2.5 px-4 text-sm text-slate-900 dark:text-slate-800 focus:outline-none focus:border-brand-primary-500 transition-colors resize-none"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <button type="button" onClick={() => toast.info('Preview mode')} className="py-2.5 rounded-xl font-bold text-sm bg-slate-50 dark:bg-white text-slate-600 dark:text-slate-600 hover:bg-slate-200 dark:hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
                <Eye size={16} /> Preview
              </button>
              <button type="submit" className="py-2.5 rounded-xl font-bold text-sm bg-brand-primary-500 text-white hover:bg-brand-primary-500/90 shadow-lg shadow-brand-primary-500/20 transition-all flex items-center justify-center gap-2">
                <Send size={16} /> Publish
              </button>
            </div>
          </form>
        </div>

        {/* History */}
        <div className="lg:col-span-2 bg-white dark:bg-white rounded-2xl border border-slate-200 dark:border-slate-200 shadow-sm overflow-hidden">
          <div className="p-4 border-b border-slate-200 dark:border-slate-200 flex justify-between items-center">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-900 dark:text-white font-heading">Recent Announcements</h2>
          </div>
          <div className="divide-y divide-slate-200 dark:divide-white/5">
            {history.map((item) => (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                key={item.id} 
                className="p-5 hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-slate-800">{item.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs font-bold bg-slate-50 dark:bg-white text-slate-600 dark:text-slate-600 px-2 py-0.5 rounded-md">{item.category}</span>
                      <span className="text-xs font-bold bg-blue-500/10 text-blue-500 px-2 py-0.5 rounded-md">To: {item.audience}</span>
                    </div>
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-600 flex items-center gap-1">
                    <Calendar size={14} /> {item.date}
                  </div>
                </div>
                
                <div className="flex items-center gap-6 mt-4 pt-4 border-t border-slate-100 dark:border-slate-200">
                  <div className="flex flex-col">
                    <span className="flex items-center gap-1 text-xs font-bold text-slate-500 uppercase tracking-wider mb-1"><Eye size={14} /> Views</span>
                    <span className="font-semibold text-slate-900 dark:text-slate-800 text-lg">{item.views.toLocaleString()}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="flex items-center gap-1 text-xs font-bold text-slate-500 uppercase tracking-wider mb-1"><BarChart2 size={14} /> Read Rate</span>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-slate-900 dark:text-slate-800 text-lg">{item.readRate}%</span>
                      <div className="w-24 h-1.5 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500" style={{ width: `${item.readRate}%` }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
