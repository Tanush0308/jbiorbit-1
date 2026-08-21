import React, { useState } from 'react';
import { Video, Loader2, Check, Play } from 'lucide-react';
import { useToast } from '../../../context/ToastContext';
import { useAppContext } from '../../../context/AppContext';
import { useModal } from '../../../context/ModalContext';

export default function WebinarsView() {
  const toast = useToast();
  const { addActivity } = useAppContext();
  const { openModal } = useModal();
  
  const [registered, setRegistered] = useState([]);
  const [loadingId, setLoadingId] = useState(null);

  const webinars = [
    { id: 'w-1', title: 'Building Your Fundraising Deck', author: 'by Rohan Deshmukh', date: '18 Feb 2026 · 6:00 PM', status: 'Upcoming', image: 'https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&w=600&q=80' },
    { id: 'w-2', title: 'MSME Digital Marketing 101', author: 'by Sneha Iyer', date: '22 Feb 2026 · 5:00 PM', status: 'Upcoming', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80' },
    { id: 'w-3', title: 'Legal 101 for Founders', author: 'by Priya Menon', date: '05 Feb 2026 · 6:30 PM', status: 'Past', image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80' },
    { id: 'w-4', title: 'Hiring Your First Engineers', author: 'by Arjun Kapoor', date: '12 Feb 2026 · 7:00 PM', status: 'Upcoming', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80' },
  ];

  const handleAction = (webinar) => {
    if (webinar.status === 'Past') {
      addActivity('Watched Webinar', `Watched ${webinar.title}`);
      openModal(
        <div className="p-6">
          <div className="aspect-video bg-white rounded-lg mb-6 flex items-center justify-center relative overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-white flex items-center justify-center opacity-80">
              <Video className="w-20 h-20 text-slate-800/20" />
            </div>
            <div className="w-16 h-16 bg-brand-primary-500 text-white rounded-full flex items-center justify-center relative z-10 shadow-lg group-hover:scale-110 transition-transform">
              <Play fill="currentColor" size={24} />
            </div>
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{webinar.title}</h3>
          <p className="text-sm text-slate-500 mb-6">{webinar.author} • {webinar.date}</p>
        </div>
      );
    } else {
      setLoadingId(webinar.id);
      setTimeout(() => {
        setRegistered(prev => [...prev, webinar.id]);
        setLoadingId(null);
        toast.success(`Successfully registered for ${webinar.title}`);
        addActivity('Registered for Webinar', `Registered for ${webinar.title}`);
      }, 1500);
    }
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Hero Banner */}
      <div className="relative w-full h-[180px] md:h-[220px] lg:h-[280px] rounded-[24px] border border-slate-200 dark:border-brand-dark-border overflow-hidden shadow-[0_0_40px_-15px_rgba(255,122,0,0.2)] bg-white">
        <img 
          src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=2000&q=80" 
          alt="Banner" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-70 mix-blend-multiply" 
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-white dark:from-brand-dark-bg via-white/80 dark:via-brand-dark-bg/80 to-transparent"></div>
        <div className="absolute inset-0 p-6 md:p-10 lg:p-12 flex flex-col justify-end md:justify-center items-start md:items-end z-10 text-left md:text-right">
          <div className="w-full md:w-1/2 max-w-lg flex flex-col items-start md:items-end">
            <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-sm border border-slate-200 flex items-center justify-center shadow-sm mb-4">
              <Video size={20} className="text-brand-primary-500" />
            </div>
            <div className="text-xs font-extrabold text-brand-primary-500 uppercase tracking-widest mb-2">Webinars</div>
            <h1 className="text-3xl lg:text-4xl font-heading font-extrabold text-slate-800 mb-2 tracking-tight">Webinars / Workshops</h1>
            <p className="text-slate-600 font-medium">Live sessions & hands-on workshops.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {webinars.map((webinar) => {
          const isRegistered = registered.includes(webinar.id);
          const isLoading = loadingId === webinar.id;
          const isPast = webinar.status === 'Past';

          return (
            <div key={webinar.id} className="group flex flex-col bg-white dark:bg-white border border-slate-200 dark:border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-brand-primary-200 transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img src={webinar.image} alt={webinar.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-[10px] font-bold text-slate-700 uppercase tracking-wider">
                  {webinar.status}
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-bold text-slate-900 dark:text-slate-900 mb-2 leading-tight line-clamp-2 group-hover:text-brand-primary-500 transition-colors">{webinar.title}</h3>
                <div className="text-sm text-slate-500 font-medium mb-4">{webinar.author} &middot; {webinar.date}</div>
                
                <div className="mt-auto pt-4 border-t border-slate-100 flex justify-end">
                  {isRegistered ? (
                    <button disabled className="px-6 py-2 rounded-lg text-sm font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 flex items-center justify-center gap-2 cursor-default w-full md:w-auto">
                      <Check size={16} /> Registered
                    </button>
                  ) : (
                    <button 
                      onClick={() => handleAction(webinar)}
                      disabled={isLoading}
                      className="px-6 py-2 rounded-lg text-sm font-bold bg-brand-primary-500 text-white hover:bg-brand-primary-400 transition-colors flex items-center justify-center gap-2 shadow-sm w-full md:w-auto"
                    >
                      {isLoading ? <Loader2 size={16} className="animate-spin" /> : (isPast ? 'Watch Recording' : 'Register Now')}
                    </button>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

