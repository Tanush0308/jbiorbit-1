import React, { useState } from 'react';
import { Bookmark, Clock, Check, Loader2 } from 'lucide-react';
import { useToast } from '../../../context/ToastContext';
import { useAppContext } from '../../../context/AppContext';

export default function InternshipsView() {
  const toast = useToast();
  const { appliedInternships, setAppliedInternships, bookmarks, toggleBookmark, addActivity } = useAppContext();
  
  const [activeTab, setActiveTab] = useState('All');
  const [loadingId, setLoadingId] = useState(null);

  const allInternships = [
    { id: 'int-1', logo: 'F', bg: 'bg-white', title: 'Product Analyst Intern', company: 'Freshworks', loc: 'Chennai · Hybrid', duration: '5 months', pay: 'Rs 35000/mo', tags: ['SaaS', 'SQL', 'Analytics'], posted: 'Posted 2 days ago' },
    { id: 'int-2', logo: 'b', bg: 'bg-white', title: 'Growth Marketing Intern', company: 'boAt Lifestyle', loc: 'Mumbai · Onsite', duration: '3 months', pay: 'Rs 25000/mo', tags: ['D2C', 'Ads', 'Content'], posted: 'Posted 5 days ago' },
    { id: 'int-3', logo: 'R', bg: 'bg-white', title: 'Data Science Intern', company: 'Razorpay', loc: 'Bangalore · Remote', duration: '6 months', pay: 'Rs 45000/mo', tags: ['Python', 'ML', 'Fintech'], posted: 'Posted 1 day ago' },
  ];

  const handleApply = (intern) => {
    setLoadingId(intern.id);
    setTimeout(() => {
      setAppliedInternships(prev => [...prev, intern.id]);
      setLoadingId(null);
      toast.success(`Successfully applied to ${intern.company}`);
      addActivity('Applied Internship', `Applied for ${intern.title} at ${intern.company}`);
    }, 1500);
  };

  const getFilteredInternships = () => {
    switch (activeTab) {
      case 'Applied': return allInternships.filter(i => appliedInternships.includes(i.id));
      case 'Saved': return allInternships.filter(i => bookmarks.some(b => b.id === i.id));
      case 'All':
      default: return allInternships;
    }
  };

  const displayedInternships = getFilteredInternships();

  return (
    <div className="space-y-8">
      {/* Hero Banner */}
      <div className="relative w-full h-[180px] md:h-[220px] lg:h-[280px] rounded-[24px] border border-slate-200 dark:border-brand-dark-border overflow-hidden shadow-[0_0_40px_-15px_rgba(255,122,0,0.2)] bg-white">
        <img 
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=80" 
          alt="Banner" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-70 mix-blend-multiply" 
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-white dark:from-brand-dark-bg via-white/80 dark:via-brand-dark-bg/80 to-transparent"></div>
        <div className="absolute inset-0 p-6 md:p-10 lg:p-12 flex flex-col justify-end md:justify-center items-start md:items-end z-10 text-left md:text-right">
          <div className="w-full md:w-1/2 max-w-lg">
            <div className="text-xs font-extrabold text-brand-primary-500 uppercase tracking-widest mb-2 drop-shadow-md">Internships</div>
            <h1 className="text-3xl lg:text-4xl font-heading font-extrabold text-slate-800 mb-2 drop-shadow-lg">Curated internships across engineering & MBA.</h1>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-200 pb-px overflow-x-auto custom-scrollbar">
        {['All', 'Saved', 'Applied'].map(tab => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 border-b-2 text-sm font-semibold transition-colors whitespace-nowrap
              ${activeTab === tab 
                ? 'border-brand-primary-500 text-brand-primary-500' 
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-slate-800'
              }`}
          >
            {tab} {tab === 'All' && `(${allInternships.length})`}
            {tab === 'Saved' && `(${bookmarks.filter(b => b.type === 'internship').length})`}
            {tab === 'Applied' && `(${appliedInternships.length})`}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {displayedInternships.length === 0 ? (
          <div className="py-16 flex flex-col items-center justify-center text-slate-500 text-center bg-white dark:bg-white rounded-2xl border border-slate-200 dark:border-slate-200">
            <div className="text-5xl mb-4">📭</div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-800 mb-2">No internships found</h3>
            <p className="text-sm">You haven't {activeTab.toLowerCase()} any internships yet.</p>
          </div>
        ) : (
          displayedInternships.map((intern) => {
            const isApplied = appliedInternships.includes(intern.id);
            const isSaved = bookmarks.some(b => b.id === intern.id);
            const isLoading = loadingId === intern.id;

            return (
              <div key={intern.id} className="bg-white dark:bg-white rounded-xl border border-slate-200 dark:border-slate-200 p-6 flex flex-col sm:flex-row justify-between sm:items-center gap-6 shadow-sm hover:shadow-md transition-shadow group">
                <div className="flex gap-4 items-start">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl font-bold text-slate-800 shadow-sm shrink-0 ${intern.bg}`}>
                    {intern.logo}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-800 group-hover:text-brand-primary-500 transition-colors">{intern.title}</h3>
                    <p className="text-sm text-slate-500 mt-0.5">{intern.company}</p>
                    
                    <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-slate-500 font-medium">
                      <span className="flex items-center gap-1">📍 {intern.loc}</span>
                      <span className="flex items-center gap-1"><Clock size={12} /> {intern.duration}</span>
                      <span className="flex items-center gap-1">💰 {intern.pay}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 mt-4 flex-wrap">
                      {intern.tags.map(tag => (
                        <span key={tag} className="px-2.5 py-1 bg-slate-50 dark:bg-white/5 text-slate-600 dark:text-slate-600 text-xs font-semibold rounded-md">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end justify-between h-full min-h-[100px]">
                  <button onClick={() => toggleBookmark(intern.id, 'internship', intern.title)} className="p-1">
                    <Bookmark size={18} className={`transition-colors ${isSaved ? 'fill-brand-primary-500 text-brand-primary-500' : 'text-slate-600 hover:text-brand-primary-500'}`} />
                  </button>
                  <div className="text-right mt-auto">
                    <div className="text-[10px] text-slate-600 font-medium mb-2">{intern.posted}</div>
                    
                    {isApplied ? (
                      <button disabled className="px-6 py-2 rounded-lg text-sm font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 flex items-center gap-2 cursor-default">
                        <Check size={16} /> Applied
                      </button>
                    ) : (
                      <button 
                        onClick={() => handleApply(intern)}
                        disabled={isLoading}
                        className="px-6 py-2 rounded-lg text-sm font-bold bg-brand-primary-500 text-white hover:bg-brand-primary-500/90 transition-colors flex items-center justify-center min-w-[100px]"
                      >
                        {isLoading ? <Loader2 size={16} className="animate-spin" /> : 'Apply'}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
