import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PlayCircle, Edit, Eye, Archive, CheckCircle2, 
  Video, Mic, FileText, LayoutTemplate, BookOpen, Plus
} from 'lucide-react';
import { useToast } from '../../../context/ToastContext';

const mockContent = Array.from({ length: 24 }).map((_, i) => {
  const types = ['Course', 'Podcast', 'Webinar', 'Business Report', 'Template', 'Knowledge Hub'];
  const type = types[i % types.length];
  
  let icon = Video;
  if (type === 'Podcast') icon = Mic;
  else if (type === 'Business Report') icon = FileText;
  else if (type === 'Template') icon = LayoutTemplate;
  else if (type === 'Knowledge Hub') icon = BookOpen;

  return {
    id: `CNT-${1000 + i}`,
    type,
    icon,
    title: `Premium ${type} Title ${i + 1}`,
    category: ['Business', 'Technology', 'Marketing', 'Finance', 'Leadership'][i % 5],
    author: `Expert Name ${i % 4 + 1}`,
    views: `${Math.floor(Math.random() * 50) + 1},${Math.floor(Math.random() * 900) + 100}`,
    published: `2026-07-${(i % 28) + 1}`,
    status: ['Published', 'Draft', 'Archived'][i % 3],
  };
});

export default function ContentManagementView() {
  const toast = useToast();
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Courses', 'Podcasts', 'Webinars', 'Business Reports', 'Templates', 'Knowledge Hub'];

  const filteredContent = mockContent.filter(c => {
    if (activeTab !== 'All' && c.type !== (activeTab.endsWith('s') && activeTab !== 'Business Reports' ? activeTab.slice(0, -1) : activeTab === 'Business Reports' ? 'Business Report' : activeTab)) return false;
    return true;
  });

  const handleAction = (action, item) => {
    toast.success(`${action} applied to ${item.title}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold font-heading text-slate-900 dark:text-slate-800">Content Management</h1>
          <p className="text-slate-500 dark:text-slate-600 mt-1">Manage and moderate all platform media and resources.</p>
        </div>
        <button className="flex items-center gap-2 bg-brand-primary-500 text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-brand-primary-500/20 hover:bg-brand-primary-500/90 transition-all hover:-translate-y-0.5">
          <Plus size={18} /> Add New Content
        </button>
      </div>

      {/* Tabs */}
      <div className="bg-white dark:bg-white rounded-2xl p-2 border border-slate-200 dark:border-slate-200 shadow-sm inline-flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              activeTab === tab 
                ? 'bg-white dark:bg-white text-white dark:text-black shadow-md' 
                : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-800 hover:bg-slate-50 dark:hover:bg-slate-50'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredContent.map((item, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              key={item.id}
              className="bg-white dark:bg-white rounded-2xl border border-slate-200 dark:border-slate-200 shadow-sm overflow-hidden group hover:shadow-md transition-all flex flex-col"
            >
              {/* Thumbnail Placeholder */}
              <div className="h-32 bg-slate-50 dark:bg-white relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary-500/10 to-transparent"></div>
                <item.icon size={48} className="text-slate-600 dark:text-slate-800/10" />
                <div className="absolute top-3 left-3 bg-white/90 dark:bg-white backdrop-blur-sm px-2.5 py-1 rounded-lg text-xs font-bold text-slate-800 dark:text-slate-800 flex items-center gap-1.5 shadow-sm">
                  <item.icon size={12} className="text-brand-primary-500" /> {item.type}
                </div>
                <div className="absolute top-3 right-3">
                  <span className={`px-2.5 py-1 rounded-lg text-xs font-bold backdrop-blur-md shadow-sm ${
                    item.status === 'Published' ? 'bg-green-500/90 text-slate-800' :
                    item.status === 'Archived' ? 'bg-red-500/90 text-slate-800' : 'bg-slate-500/90 text-slate-800'
                  }`}>
                    {item.status}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-800 line-clamp-1 font-heading group-hover:text-brand-primary-500 transition-colors">{item.title}</h3>
                  <p className="text-sm text-slate-500 mt-1">{item.category} • By {item.author}</p>
                </div>
                
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-600 mt-auto mb-4 bg-slate-50 dark:bg-white p-2.5 rounded-xl border border-slate-100 dark:border-slate-200">
                  <div className="flex flex-col">
                    <span className="uppercase text-[10px] font-bold tracking-wider mb-0.5 opacity-70">Views</span>
                    <span className="font-semibold text-slate-700 dark:text-slate-600">{item.views}</span>
                  </div>
                  <div className="w-px h-6 bg-slate-200 dark:bg-white/10"></div>
                  <div className="flex flex-col text-right">
                    <span className="uppercase text-[10px] font-bold tracking-wider mb-0.5 opacity-70">Published</span>
                    <span className="font-semibold text-slate-700 dark:text-slate-600">{item.published}</span>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-2 pt-2 border-t border-slate-100 dark:border-slate-200">
                  <button onClick={() => handleAction('Edit', item)} className="p-2 flex justify-center items-center rounded-xl text-slate-500 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-colors" title="Edit">
                    <Edit size={18} />
                  </button>
                  <button onClick={() => handleAction('Preview', item)} className="p-2 flex justify-center items-center rounded-xl text-slate-500 hover:text-purple-500 hover:bg-purple-50 dark:hover:bg-purple-500/10 transition-colors" title="Preview">
                    <Eye size={18} />
                  </button>
                  <button onClick={() => handleAction('Publish', item)} className="p-2 flex justify-center items-center rounded-xl text-slate-500 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-500/10 transition-colors" title="Publish">
                    <CheckCircle2 size={18} />
                  </button>
                  <button onClick={() => handleAction('Archive', item)} className="p-2 flex justify-center items-center rounded-xl text-slate-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors" title="Archive">
                    <Archive size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
