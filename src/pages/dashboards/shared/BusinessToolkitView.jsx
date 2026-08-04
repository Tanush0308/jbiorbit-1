import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Folder, FileText, Download, Bookmark, Eye, Clock, 
  Search, Sparkles, Filter, Briefcase, BarChart2, Shield,
  Megaphone, ShoppingCart, LayoutGrid, FilePlus, Loader2
} from 'lucide-react';
import { useToast } from '../../../context/ToastContext';
import { useAppContext } from '../../../context/AppContext';

export default function BusinessToolkitView() {
  const toast = useToast();
  const { bookmarks, toggleBookmark, addActivity } = useAppContext();
  
  const [activeTab, setActiveTab] = useState('All');
  const [loadingId, setLoadingId] = useState(null);

  const categories = [
    { id: 'All', label: 'All Resources', icon: LayoutGrid },
    { id: 'Business', label: 'Business', icon: Briefcase },
    { id: 'Finance', label: 'Finance', icon: BarChart2 },
    { id: 'Operations', label: 'Operations', icon: Shield },
    { id: 'Marketing', label: 'Marketing', icon: Megaphone },
    { id: 'Sales', label: 'Sales', icon: ShoppingCart },
  ];

  const templates = [
    { id: 't-1', name: 'SaaS Pitch Deck', category: 'Business', type: 'PPTX', size: '12 MB', downloads: '12.4k', recent: true },
    { id: 't-2', name: 'Founder Agreement', category: 'Operations', type: 'DOCX', size: '1.2 MB', downloads: '8.2k', recent: true },
    { id: 't-3', name: '12-Month Cash Flow', category: 'Finance', type: 'XLSX', size: '3.4 MB', downloads: '15.1k', recent: false },
    { id: 't-4', name: 'Employee NDA', category: 'Operations', type: 'DOCX', size: '0.8 MB', downloads: '24k', recent: false },
    { id: 't-5', name: 'Go-To-Market Strategy', category: 'Marketing', type: 'PDF', size: '4.5 MB', downloads: '6.7k', recent: false },
    { id: 't-6', name: 'Sales Proposal Temp', category: 'Sales', type: 'DOCX', size: '2.1 MB', downloads: '9.3k', recent: false },
    { id: 't-7', name: 'Cap Table Model', category: 'Finance', type: 'XLSX', size: '5.2 MB', downloads: '11.8k', recent: false },
    { id: 't-8', name: 'Brand Guidelines', category: 'Marketing', type: 'PPTX', size: '18 MB', downloads: '4.2k', recent: false },
  ];

  const filteredTemplates = activeTab === 'All' ? templates : templates.filter(t => t.category === activeTab);

  const handleDownload = (t) => {
    setLoadingId(t.id);
    setTimeout(() => {
      setLoadingId(null);
      toast.success(`${t.name} downloaded successfully!`);
      addActivity('Downloaded Template', `Downloaded ${t.name}`);
    }, 1500);
  };

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      
      {/* 1. Hero Banner */}
      <div className="relative w-full h-[240px] md:h-[300px] rounded-[24px] border border-slate-200 dark:border-brand-dark-border overflow-hidden bg-white shadow-sm">
        <img 
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2000&q=80" 
          alt="Banner" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-70 mix-blend-multiply" 
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-white dark:from-brand-dark-bg via-white/80 dark:via-brand-dark-bg/80 to-transparent"></div>
        <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center items-start md:items-end z-10 text-left md:text-right">
          <div className="flex items-center gap-2 mb-3 text-brand-primary-500 font-bold tracking-widest text-xs uppercase bg-brand-primary-500/10 px-3 py-1.5 rounded-full border border-brand-primary-500/20">
            <Folder size={14} /> Resource Library
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white mb-4 tracking-tight">
            Business Toolkit
          </h1>
          <p className="text-slate-600 dark:text-slate-300 max-w-lg text-lg">
            The largest collection of premium enterprise templates, legal documents, and financial models.
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
              placeholder="Search templates, models, policies..." 
              className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-brand-primary-500 transition-colors dark:text-slate-800"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-slate-200 rounded-xl text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-50 transition-colors dark:text-slate-800">
            <Filter size={16} /> <span className="hidden sm:inline">Format</span>
          </button>
        </div>
        <button onClick={() => toast.info('Custom upload modal would open here.')} className="w-full md:w-auto px-6 py-2.5 bg-brand-primary-500 text-white text-sm font-bold rounded-xl shadow-lg hover:bg-brand-primary-400 transition-all flex items-center justify-center gap-2">
          <FilePlus size={16} /> Upload Custom
        </button>
      </div>

      {/* 3. Main Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Left Sidebar: Categories & AI Generator */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-white p-4 rounded-2xl border border-slate-200 dark:border-slate-200 shadow-sm flex flex-col gap-2">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 px-2">Categories</h3>
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button 
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors text-left
                    ${activeTab === cat.id 
                      ? 'bg-brand-primary-500/10 text-brand-primary-500' 
                      : 'text-slate-600 dark:text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-50 hover:text-slate-900 dark:hover:text-white'}`}
                >
                  <Icon size={18} /> {cat.label}
                </button>
              )
            })}
          </div>
          
          <div className="bg-gradient-to-br from-white dark:from-brand-dark-bg to-slate-50 dark:to-brand-dark-surface p-5 rounded-2xl border border-slate-200 dark:border-brand-dark-border shadow-xl relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-primary-500/20 blur-3xl rounded-full pointer-events-none"></div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-brand-primary-500/20 flex items-center justify-center text-brand-primary-500">
                <Sparkles size={16} />
              </div>
              <h2 className="text-sm font-bold text-slate-900 dark:text-slate-900 dark:text-white tracking-wide">AI Document Generator</h2>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Can't find what you need? Describe the document, and Orbit AI will generate a custom draft for you.
            </p>
            <button onClick={() => toast.info('Opening AI generator...')} className="w-full py-2 bg-white/10 hover:bg-brand-primary-500 text-white rounded-lg text-sm font-semibold transition-all flex justify-center items-center gap-2">
              Generate Draft
            </button>
          </div>
        </div>

        {/* Right Area: Templates Grid */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* Recently Used */}
          {activeTab === 'All' && (
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Clock size={18} className="text-slate-600" /> Recently Used
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {templates.filter(t => t.recent).map((t) => {
                  const isSaved = bookmarks.some(b => b.id === t.id);
                  return (
                    <div key={t.id} onClick={() => handleDownload(t)} className="bg-white dark:bg-white p-5 rounded-2xl border border-slate-200 dark:border-slate-200 shadow-sm hover:border-brand-primary-500/50 transition-colors group cursor-pointer relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2" onClick={e => e.stopPropagation()}>
                        <button className="w-8 h-8 rounded-full bg-slate-50 dark:bg-white/10 flex items-center justify-center text-slate-500 hover:text-brand-primary-500 hover:bg-slate-200 dark:hover:bg-slate-50 transition-all"><Eye size={14}/></button>
                        <button onClick={() => toggleBookmark(t.id, 'template', t.name)} className="w-8 h-8 rounded-full bg-slate-50 dark:bg-white/10 flex items-center justify-center text-slate-500 hover:text-brand-primary-500 hover:bg-slate-200 dark:hover:bg-slate-50 transition-all">
                          <Bookmark size={14} className={`${isSaved ? 'fill-brand-primary-500 text-brand-primary-500' : ''}`} />
                        </button>
                      </div>
                      
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-xl font-bold
                        ${t.type === 'PPTX' ? 'bg-orange-100 text-orange-600 dark:bg-orange-500/20' : 
                          t.type === 'DOCX' ? 'bg-blue-100 text-blue-600 dark:bg-blue-500/20' : 
                          t.type === 'XLSX' ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20' : 
                          'bg-red-100 text-red-600 dark:bg-red-500/20'}`}>
                        <FileText size={24} />
                      </div>
                      <h3 className="font-bold text-slate-900 dark:text-slate-800 mb-1 group-hover:text-brand-primary-500 transition-colors line-clamp-1">{t.name}</h3>
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <span className="font-semibold">{t.type}</span> &middot; <span>{t.size}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* All Templates Grid */}
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-800 mb-4">
              {activeTab === 'All' ? 'Browse All Templates' : `${activeTab} Templates`}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredTemplates.map((t) => {
                const isSaved = bookmarks.some(b => b.id === t.id);
                const isLoading = loadingId === t.id;

                return (
                  <div key={t.id} className="bg-white dark:bg-white p-5 rounded-2xl border border-slate-200 dark:border-slate-200 shadow-sm hover:border-brand-primary-500/50 transition-colors group cursor-pointer relative overflow-hidden flex flex-col h-full">
                    
                    <div className="flex justify-between items-start mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold
                        ${t.type === 'PPTX' ? 'bg-orange-100 text-orange-600 dark:bg-orange-500/20' : 
                          t.type === 'DOCX' ? 'bg-blue-100 text-blue-600 dark:bg-blue-500/20' : 
                          t.type === 'XLSX' ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20' : 
                          'bg-red-100 text-red-600 dark:bg-red-500/20'}`}>
                        <FileText size={24} />
                      </div>
                      <div className="flex gap-2">
                        <button onClick={() => toggleBookmark(t.id, 'template', t.name)} className="text-slate-600 hover:text-brand-primary-500 transition-colors p-1">
                          <Bookmark size={18} className={`${isSaved ? 'fill-brand-primary-500 text-brand-primary-500' : ''}`} />
                        </button>
                      </div>
                    </div>

                    <div className="flex-1" onClick={() => handleDownload(t)}>
                      <h3 className="font-bold text-slate-900 dark:text-slate-800 mb-1 group-hover:text-brand-primary-500 transition-colors line-clamp-2">{t.name}</h3>
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{t.category}</div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-200 flex items-center justify-between text-xs text-slate-500">
                      <div className="flex items-center gap-2">
                        <span className="font-bold">{t.type}</span> &middot; <span>{t.size}</span>
                      </div>
                      <button onClick={() => handleDownload(t)} disabled={isLoading} className="flex items-center gap-1 font-bold text-slate-700 dark:text-slate-600 group-hover:text-brand-primary-500 transition-colors">
                        {isLoading ? <Loader2 size={14} className="animate-spin" /> : <Download size={14} />} {t.downloads}
                      </button>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

