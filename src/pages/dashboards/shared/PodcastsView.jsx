import React from 'react';
import { Mic, Play, Bookmark } from 'lucide-react';
import { useModal } from '../../../context/ModalContext';
import { useAppContext } from '../../../context/AppContext';
import { useToast } from '../../../context/ToastContext';

export default function PodcastsView() {
  const { openModal } = useModal();
  const { bookmarks, toggleBookmark, addActivity } = useAppContext();
  const toast = useToast();

  const podcasts = [
    { id: 'p-1', title: 'Building in Bharat â€” Ep. 42', author: 'with Kunal Shah', duration: '58 min', image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=500&q=80' },
    { id: 'p-2', title: 'The MSME Story â€” Nashik Edition', author: 'with Sameer Patil', duration: '44 min', image: 'https://images.unsplash.com/photo-1581368135153-a506cf13b1e1?auto=format&fit=crop&w=500&q=80' },
    { id: 'p-3', title: 'Fundraising Myths, Busted', author: 'with Rohan Deshmukh', duration: '51 min', image: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&w=500&q=80' },
    { id: 'p-4', title: 'Scaling a D2C Brand to â‚¹100Cr', author: 'with Sneha Iyer', duration: '62 min', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=500&q=80' },
    { id: 'p-5', title: 'AI in Traditional Businesses', author: 'with Ankit R.', duration: '48 min', image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=500&q=80' },
    { id: 'p-6', title: 'Bootstrapping vs VC Funding', author: 'with Ritika Sen', duration: '55 min', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=500&q=80' },
  ];

  const handlePlay = (podcast) => {
    addActivity('Listened to Podcast', `Listened to ${podcast.title}`);
    openModal(
      <div className="p-6">
        <div className="aspect-video bg-white rounded-lg mb-6 flex items-center justify-center relative overflow-hidden group cursor-pointer">
          <img 
          src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=2000&q=80" 
          alt="Banner" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-70 mix-blend-multiply" 
        />
          <div className="w-16 h-16 bg-brand-primary-500 text-white rounded-full flex items-center justify-center relative z-10 shadow-lg group-hover:scale-110 transition-transform">
            <Play fill="currentColor" size={24} />
          </div>
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{podcast.title}</h3>
        <p className="text-sm text-slate-500 mb-6">{podcast.author} â€¢ {podcast.duration}</p>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      {/* Hero Banner */}
      <div className="relative w-full h-[180px] md:h-[220px] lg:h-[280px] rounded-[24px] border border-slate-200 dark:border-brand-dark-border overflow-hidden shadow-[0_0_40px_-15px_rgba(255,122,0,0.2)] bg-white">
        <img 
          src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=2000&q=80" 
          alt="Banner" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-70 mix-blend-multiply" 
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-white dark:from-brand-dark-bg via-white/80 dark:via-brand-dark-bg/80 to-transparent"></div>
        <div className="absolute inset-0 p-6 md:p-10 lg:p-12 flex flex-col justify-end md:justify-center items-start md:items-end z-10 text-left md:text-right">
          <div className="w-full md:w-1/2 max-w-lg flex flex-col items-start md:items-end">
            <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-sm border border-slate-200 flex items-center justify-center shadow-sm mb-4">
              <Mic size={20} className="text-brand-primary-500" />
            </div>
            <div className="text-xs font-extrabold text-brand-primary-500 uppercase tracking-widest mb-2">Podcasts</div>
            <h1 className="text-3xl lg:text-4xl font-heading font-extrabold text-slate-800 mb-2 tracking-tight">Guidance Podcast / Alumni Talks</h1>
            <p className="text-slate-600 font-medium">Weekly episodes from founders & alumni.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {podcasts.map((podcast) => {
          const isSaved = bookmarks.some(b => b.id === podcast.id);

          return (
            <div key={podcast.id} className="bg-white dark:bg-white rounded-xl border border-slate-200 dark:border-slate-200 shadow-sm overflow-hidden group hover:shadow-md transition-all flex flex-col">
              
              {/* Podcast Cover */}
              <div onClick={() => handlePlay(podcast)} className="h-48 relative flex items-center justify-center overflow-hidden cursor-pointer">
                <img src={podcast.image} alt={podcast.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors"></div>
                
                <div className="w-12 h-12 rounded-full bg-brand-primary-500 text-white flex items-center justify-center relative z-10 shadow-lg scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
                  <Play fill="currentColor" size={20} />
                </div>

                <div className="absolute top-3 right-3 z-10" onClick={(e) => { e.stopPropagation(); toggleBookmark(podcast.id, 'podcast', podcast.title); }}>
                  <button className="p-2 bg-white hover:bg-white rounded-full backdrop-blur-sm transition-colors">
                    <Bookmark size={16} className={`${isSaved ? 'fill-brand-primary-500 text-brand-primary-500' : 'text-white'}`} />
                  </button>
                </div>

                <div className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm text-slate-800 text-[10px] font-bold px-2 py-1 rounded shadow-sm border border-slate-200 relative z-10">
                  {podcast.duration}
                </div>
              </div>

              {/* Episode Details */}
              <div className="p-5 flex-1 flex flex-col">
                <h3 onClick={() => handlePlay(podcast)} className="font-bold text-slate-900 dark:text-slate-800 leading-tight mb-1 group-hover:text-brand-primary-500 transition-colors cursor-pointer">{podcast.title}</h3>
                <p className="text-sm text-slate-500 mb-4">{podcast.author}</p>
                
                <div className="mt-auto flex items-center gap-2">
                  <div className="w-20 h-2 bg-brand-primary-500 rounded-full"></div>
                  <div className="w-16 h-2 bg-slate-50 dark:bg-white/5 rounded-full"></div>
                </div>
              </div>

            </div>
          )
        })}
      </div>
    </div>
  );
}

