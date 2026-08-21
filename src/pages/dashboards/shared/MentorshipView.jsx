import React, { useState } from 'react';
import { useToast } from '../../../context/ToastContext';
import { useAppContext } from '../../../context/AppContext';
import { Loader2, Check } from 'lucide-react';

export default function MentorshipView() {
  const toast = useToast();
  const { connections, setConnections, addActivity } = useAppContext();
  
  const [activeFilter, setActiveFilter] = useState('All industries');
  const [loadingId, setLoadingId] = useState(null);

  const mentors = [
    { id: 'm-1', name: 'Aditi Rao', title: 'VP Product, Freshworks', rating: '4.9', reviews: '128 reviews', price: 'Rs 2500/hr', tags: ['Product', 'SaaS', 'GTM'], image: 'https://i.pravatar.cc/150?u=aditi' },
    { id: 'm-2', name: 'Rohan Deshmukh', title: 'Angel Investor & Ex-founder', rating: '4.8', reviews: '96 reviews', price: 'Rs 3200/hr', tags: ['Fundraising', 'Fintech'], image: 'https://i.pravatar.cc/150?u=rohan' },
    { id: 'm-3', name: 'Sneha Iyer', title: 'CMO, D2C consumer brand', rating: '4.7', reviews: '74 reviews', price: 'Rs 1800/hr', tags: ['Brand', 'D2C', 'Growth'], image: 'https://i.pravatar.cc/150?u=sneha' },
    { id: 'm-4', name: 'Vikram Nair', title: 'Ex-McKinsey, Strategy', rating: '4.9', reviews: '152 reviews', price: 'Rs 4000/hr', tags: ['Strategy', 'Consulting'], image: 'https://i.pravatar.cc/150?u=vikram' },
    { id: 'm-5', name: 'Priya Menon', title: 'Legal Counsel, Startup Law', rating: '4.8', reviews: '88 reviews', price: 'Rs 2200/hr', tags: ['Compliance', 'Legal'], image: 'https://i.pravatar.cc/150?u=priya' },
    { id: 'm-6', name: 'Arjun Kapoor', title: 'CTO, Series-B startup', rating: '4.7', reviews: '61 reviews', price: 'Rs 2800/hr', tags: ['Tech', 'Engineering'], image: 'https://i.pravatar.cc/150?u=arjun' },
    { id: 'm-7', name: 'Neha Bansal', title: 'Founder, EdTech', rating: '4.9', reviews: '110 reviews', price: 'Rs 3000/hr', tags: ['Product', 'EdTech'], image: 'https://i.pravatar.cc/150?u=neha' },
    { id: 'm-8', name: 'Karthik Reddy', title: 'MD, Manufacturing PE', rating: '4.8', reviews: '95 reviews', price: 'Rs 4500/hr', tags: ['Finance', 'Manufacturing'], image: 'https://i.pravatar.cc/150?u=karthik' },
  ];

  const filters = ['All industries', 'SaaS', 'Fintech', 'D2C', 'Consulting', 'Legal', 'Tech', 'EdTech', 'Manufacturing'];

  const displayedMentors = mentors.filter(m => activeFilter === 'All industries' || m.tags.includes(activeFilter));

  const handleConnect = (mentor) => {
    setLoadingId(mentor.id);
    setTimeout(() => {
      setConnections(prev => [...prev, mentor.id]);
      setLoadingId(null);
      toast.success(`Session booked with ${mentor.name}`);
      addActivity('Booked Session', `1:1 Session with ${mentor.name}`);
    }, 1500);
  };

  return (
    <div className="space-y-8">
      {/* Hero Banner */}
      <div className="relative w-full h-[180px] md:h-[220px] lg:h-[280px] rounded-[24px] border border-slate-200 dark:border-brand-dark-border overflow-hidden shadow-[0_0_40px_-15px_rgba(255,122,0,0.2)] bg-white mb-8">
        <img 
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=2000&q=80" 
          alt="Banner" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-70 mix-blend-multiply" 
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-white dark:from-brand-dark-bg via-white/80 dark:via-brand-dark-bg/80 to-transparent"></div>
        <div className="absolute inset-0 p-6 md:p-10 lg:p-12 flex flex-col justify-end md:justify-center items-start md:items-end z-10 text-left md:text-right">
          <div className="w-full md:w-1/2 max-w-lg">
            <div className="text-xs font-extrabold text-brand-primary-500 uppercase tracking-widest mb-2">Mentorship</div>
            <h1 className="text-3xl lg:text-4xl font-heading font-extrabold text-slate-800 mb-2 tracking-tight">Expert Connect - book 1:1 with the operators who've done it.</h1>
            <p className="text-slate-600 font-medium mt-2">Filter by industry or expertise. Every mentor is verified by JBI.</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide custom-scrollbar">
        {filters.map((filter) => (
          <button 
            key={filter} 
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors border ${activeFilter === filter ? 'bg-white dark:bg-brand-primary-500/20 border-[#0F172A] dark:border-brand-primary-500/30 text-white dark:text-brand-primary-500' : 'bg-white dark:bg-white/5 border-slate-200 dark:border-slate-200 text-slate-600 dark:text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-50'}`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayedMentors.length === 0 ? (
          <div className="col-span-full py-16 flex flex-col items-center justify-center text-slate-500 text-center bg-white dark:bg-white rounded-2xl border border-slate-200 dark:border-slate-200">
            <div className="text-5xl mb-4">📭</div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">No mentors found</h3>
            <p className="text-sm">Try selecting a different industry.</p>
          </div>
        ) : (
          displayedMentors.map((mentor) => {
            const isConnected = connections.includes(mentor.id);
            const isLoading = loadingId === mentor.id;

            return (
              <div key={mentor.id} className="bg-white dark:bg-white rounded-xl border border-slate-200 dark:border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow group flex flex-col">
                <div className="flex gap-4 items-center mb-6">
                  <img src={mentor.image} alt={mentor.name} className="w-12 h-12 rounded-full object-cover bg-slate-50 group-hover:scale-105 transition-transform" />
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-slate-800 group-hover:text-brand-primary-500 transition-colors">{mentor.name}</h3>
                    <p className="text-xs text-slate-500">{mentor.title}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1 text-sm font-bold text-slate-900 dark:text-slate-800">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#075A9D" className="text-brand-primary-500"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                      {mentor.rating}
                    </span>
                    <span className="text-xs text-slate-600">{mentor.reviews}</span>
                  </div>
                  <div className="text-sm font-bold text-slate-900 dark:text-slate-800">{mentor.price}</div>
                </div>
                
                <div className="flex items-center gap-2 mb-6">
                  {mentor.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 text-[10px] font-bold text-brand-primary-500 bg-orange-50 dark:bg-brand-primary-500/10 border border-orange-100 dark:border-brand-primary-500/20 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto">
                  {isConnected ? (
                    <button disabled className="w-full py-2.5 rounded-lg text-sm font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 flex items-center justify-center gap-2 cursor-default">
                      <Check size={16} /> Session Booked
                    </button>
                  ) : (
                    <button 
                      onClick={() => handleConnect(mentor)}
                      disabled={isLoading}
                      className="w-full py-2.5 rounded-lg text-sm font-bold bg-white dark:bg-white text-white dark:text-slate-900 hover:bg-brand-primary-500 dark:hover:bg-brand-primary-500 hover:text-white transition-colors flex items-center justify-center min-h-[40px]"
                    >
                      {isLoading ? <Loader2 size={16} className="animate-spin" /> : 'Book Session'}
                    </button>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

