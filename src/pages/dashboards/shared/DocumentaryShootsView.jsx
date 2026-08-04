import React from 'react';
import { motion } from 'framer-motion';
import { 
  Camera, PlayCircle, Calendar, Package, ArrowRight, 
  Sparkles, CheckCircle2, Clock, Film
} from 'lucide-react';
import { useToast } from '../../../context/ToastContext';
import { useAppContext } from '../../../context/AppContext';
import { useModal } from '../../../context/ModalContext';

export default function DocumentaryShootsView() {
  const toast = useToast();
  const { addActivity } = useAppContext();
  const { openModal, closeModal } = useModal();

  const packages = [
    { id: 'p-1', name: 'Founder Story', duration: '3-5 mins', price: 'â‚¹1.5L', features: ['1 Day Shoot', 'Executive Interviews', 'B-Roll Footage', 'Web Optimized'] },
    { id: 'p-2', name: 'Mini Documentary', duration: '10-15 mins', price: 'â‚¹4.5L', features: ['3 Days Shoot', 'Full Team Coverage', 'Cinematic Grading', '4K Deliverables'] },
    { id: 'p-3', name: 'Brand Film', duration: '1-2 mins', price: 'â‚¹2.5L', features: ['Concept Scripting', 'Studio Setup', 'Motion Graphics', 'Social Media Cuts'] },
  ];

  const portfolio = [
    { id: 'v-1', title: 'Nexus FinTech Journey', type: 'Founder Story', img: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    { id: 'v-2', title: 'Green Energy Scaling', type: 'Mini Documentary', img: 'https://images.unsplash.com/photo-1542013936-64c502d36e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  ];

  const timeline = [
    { step: 'Pre-Production', status: 'completed', desc: 'Scripting & Location Scouting' },
    { step: 'Production', status: 'active', desc: 'Shooting Days (Oct 25-27)' },
    { step: 'Post-Production', status: 'upcoming', desc: 'Editing & Color Grading' },
    { step: 'Final Delivery', status: 'upcoming', desc: 'Asset Handover' },
  ];

  const handleSelectPackage = (pkg) => {
    addActivity('Package Selected', `Selected ${pkg.name} package`);
    openModal(
      <div className="p-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-800 mb-2">Book {pkg.name}</h2>
        <p className="text-sm text-slate-500 mb-6">Confirm your production package to proceed with scheduling.</p>

        <div className="bg-slate-50 dark:bg-white/5 rounded-xl p-4 border border-slate-200 dark:border-slate-200 mb-6">
          <div className="flex justify-between items-center mb-4">
             <div className="font-bold text-slate-900 dark:text-slate-800">Estimated Cost</div>
             <div className="text-xl font-extrabold text-brand-primary-500">{pkg.price}</div>
          </div>
          <div className="space-y-2">
            {pkg.features.map(f => (
              <div key={f} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-600">
                <CheckCircle2 size={14} className="text-emerald-500" /> {f}
              </div>
            ))}
          </div>
        </div>

        <div>
          <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">Preferred Start Date</label>
          <input type="date" className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-slate-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-brand-primary-500 text-slate-900 dark:text-slate-800 mb-6" />
        </div>

        <div className="flex justify-end gap-3">
          <button onClick={closeModal} className="px-5 py-2.5 bg-slate-50 dark:bg-white/5 text-slate-600 dark:text-slate-600 text-sm font-bold rounded-xl hover:bg-slate-200 dark:hover:bg-slate-50 transition-colors">
            Cancel
          </button>
          <button 
            onClick={() => { 
              toast.success(`Booking request sent for ${pkg.name}`); 
              closeModal(); 
            }} 
            className="px-6 py-2.5 bg-brand-primary-500 text-white text-sm font-bold rounded-xl hover:bg-brand-primary-400 transition-colors shadow-sm"
          >
            Confirm Booking
          </button>
        </div>
      </div>
    );
  };

  const handlePlayVideo = (item) => {
    addActivity('Watched Video', `Watched ${item.title}`);
    openModal(
      <div className="p-1">
         <div className="relative pt-[56.25%] rounded-xl overflow-hidden bg-white">
           <iframe 
             className="absolute top-0 left-0 w-full h-full" 
             src={item.video} 
             title={item.title} 
             frameBorder="0" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
             allowFullScreen
           ></iframe>
         </div>
         <div className="p-4 flex justify-between items-center">
            <div>
              <div className="font-bold text-slate-900 dark:text-white text-lg">{item.title}</div>
              <div className="text-xs text-slate-500">{item.type}</div>
            </div>
            <button onClick={closeModal} className="px-4 py-2 bg-slate-50 dark:bg-white/10 text-slate-900 dark:text-slate-800 rounded-lg text-sm font-bold hover:bg-slate-200 transition-colors">Close</button>
         </div>
      </div>
    );
  };

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      
      {/* 1. Hero Banner */}
      <div className="relative w-full h-[240px] md:h-[300px] rounded-[24px] border border-slate-200 dark:border-brand-dark-border overflow-hidden bg-white shadow-sm">
        <img 
          src="https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?auto=format&fit=crop&w=2000&q=80" 
          alt="Banner" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-70 mix-blend-multiply" 
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-white dark:from-brand-dark-bg via-white/80 dark:via-brand-dark-bg/80 to-transparent"></div>
        <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center items-start md:items-end z-10 text-left md:text-right">
          <div className="flex items-center gap-2 mb-3 text-brand-primary-500 font-bold tracking-widest text-xs uppercase bg-brand-primary-500/10 px-3 py-1.5 rounded-full border border-brand-primary-500/20">
            <Film size={14} /> JBI Media Productions
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white mb-4 tracking-tight">
            Build Your Brand Story
          </h1>
          <p className="text-slate-600 dark:text-slate-300 max-w-lg text-lg">
            Premium documentary and brand film production to elevate your startup's narrative for investors and customers.
          </p>
        </div>
      </div>

      {/* 2. Quick Actions */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white dark:bg-white p-4 rounded-2xl border border-slate-200 dark:border-slate-200 shadow-sm">
        <div className="flex gap-4 items-center flex-1">
           <button onClick={() => toast.info('Booking calendar...')} className="px-6 py-2.5 bg-brand-primary-500 text-white text-sm font-bold rounded-xl shadow-lg hover:bg-brand-primary-400 transition-all flex items-center gap-2">
             <Calendar size={16} /> Book Production
           </button>
           <button onClick={() => window.scrollTo({ top: document.getElementById('packages').offsetTop - 100, behavior: 'smooth' })} className="px-6 py-2.5 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-slate-200 text-slate-900 dark:text-white text-sm font-bold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-50 transition-colors flex items-center gap-2">
             <Package size={16} /> View Packages
           </button>
        </div>
        <div className="flex items-center gap-2 text-sm font-semibold text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 px-4 py-2 rounded-xl">
           <CheckCircle2 size={16} /> 2 Crews Available Next Week
        </div>
      </div>

      {/* 3. Main Workspace & AI Suggestions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left: Packages & Portfolio */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Packages */}
          <div id="packages" className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {packages.map((pkg) => (
              <div key={pkg.id} className="bg-white dark:bg-white p-6 rounded-2xl border border-slate-200 dark:border-slate-200 shadow-sm hover:border-brand-primary-500/50 transition-colors group flex flex-col">
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">{pkg.duration}</div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-slate-800 mb-2">{pkg.name}</h3>
                <div className="text-2xl font-extrabold text-brand-primary-500 mb-6">{pkg.price}</div>
                
                <ul className="space-y-3 mb-6 flex-1">
                  {pkg.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-600">
                      <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" /> {feat}
                    </li>
                  ))}
                </ul>
                
                <button onClick={() => handleSelectPackage(pkg)} className="w-full py-2.5 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-slate-200 rounded-xl text-sm font-semibold text-slate-900 dark:text-slate-800 group-hover:bg-brand-primary-500 group-hover:text-white group-hover:border-brand-primary-500 transition-all">
                  Select Package
                </button>
              </div>
            ))}
          </div>

          {/* Portfolio */}
          <div className="bg-white dark:bg-white p-6 rounded-2xl border border-slate-200 dark:border-slate-200 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white">Recent Case Studies</h2>
              <button onClick={() => toast.info('Loading full portfolio...')} className="text-sm font-semibold text-brand-primary-500 hover:text-brand-primary-400 transition-colors">View all videos &rarr;</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {portfolio.map((item) => (
                <div key={item.id} onClick={() => handlePlayVideo(item)} className="group cursor-pointer">
                  <div className="relative w-full h-40 rounded-xl overflow-hidden mb-3">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-white flex items-center justify-center group-hover:bg-white transition-colors">
                      <PlayCircle size={48} className="text-slate-800 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                    </div>
                  </div>
                  <div className="font-bold text-slate-900 dark:text-slate-800 group-hover:text-brand-primary-500 transition-colors">{item.title}</div>
                  <div className="text-xs text-slate-500 mt-1">{item.type}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Project Tracker & AI Ideas */}
        <div className="space-y-6">
          
          {/* AI Story Ideas */}
          <div className="bg-gradient-to-br from-white dark:from-brand-dark-bg to-slate-50 dark:to-brand-dark-surface p-6 rounded-2xl border border-slate-200 dark:border-brand-dark-border shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary-500/10 blur-3xl rounded-full pointer-events-none"></div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-brand-primary-500/20 flex items-center justify-center text-brand-primary-500">
                <Sparkles size={20} />
              </div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-slate-900 dark:text-white tracking-wide">AI Story Generator</h2>
            </div>
            
            <div className="bg-white/5 border border-slate-200 rounded-xl p-4 mb-4">
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-2">Recommended Angle</div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Focus on the <strong className="text-slate-800">"Bootstrapped to Series A"</strong> journey. Highlight your unique technical IP and showcase your engineering team in action. This narrative strongly resonates with B2B SaaS investors.
              </p>
            </div>
            
            <button onClick={() => toast.success('Shot list generated!')} className="text-xs font-semibold text-brand-primary-500 hover:text-brand-primary-400 transition-colors flex items-center gap-1">
              Generate shot list <ArrowRight size={14} />
            </button>
          </div>

          {/* Active Project Tracker */}
          <div className="bg-white dark:bg-white p-6 rounded-2xl border border-slate-200 dark:border-slate-200 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-slate-900 dark:text-slate-800">Active Production</h2>
              <span className="text-[10px] font-bold text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-1 rounded">ON TRACK</span>
            </div>
            
            <div className="space-y-5">
              {timeline.map((step, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="flex flex-col items-center mt-0.5">
                    <div className={`w-3 h-3 rounded-full flex items-center justify-center ${
                      step.status === 'completed' ? 'bg-emerald-500' : 
                      step.status === 'active' ? 'bg-brand-primary-500 ring-4 ring-brand-primary-500/20' : 
                      'bg-slate-200 dark:bg-white/20'
                    }`}></div>
                    {i !== timeline.length - 1 && (
                      <div className={`w-[2px] h-full mt-2 ${
                        step.status === 'completed' ? 'bg-emerald-500' : 'bg-slate-50 dark:bg-white/10'
                      }`}></div>
                    )}
                  </div>
                  <div className="pb-4 flex-1">
                    <div className={`font-semibold text-sm ${step.status === 'upcoming' ? 'text-slate-500' : 'text-slate-900 dark:text-white'}`}>{step.step}</div>
                    <div className="text-xs text-slate-500 mt-1">{step.desc}</div>
                    
                    {step.status === 'active' && (
                      <div className="mt-3 bg-slate-50 dark:bg-white/5 p-3 rounded-lg border border-slate-200 dark:border-slate-200 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-600">
                          <Camera size={14} /> Shooting Day 1/3
                        </div>
                        <div className="text-[10px] text-slate-500 flex items-center gap-1"><Clock size={12} /> 09:00 AM</div>
                      </div>
                    )}
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

