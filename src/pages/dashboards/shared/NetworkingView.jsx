import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Users, Briefcase, Clock, MapPin, Loader2, Check } from 'lucide-react';
import { useToast } from '../../../context/ToastContext';
import { useAppContext } from '../../../context/AppContext';
import { useModal } from '../../../context/ModalContext';

export default function NetworkingView() {
  const toast = useToast();
  const { connections, setConnections, addActivity } = useAppContext();
  const { openModal } = useModal();
  
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [loadingId, setLoadingId] = useState(null);
  
  const allConnections = [
    { id: 'n-1', initial: 'AS', name: 'Ashish Sharma', role: 'Founder', company: 'SaaS', city: 'Bangalore', mutual: 12, industry: 'SaaS', experience: '8 Years', skills: ['AI', 'Marketing', 'Sales'] },
    { id: 'n-2', initial: 'DV', name: 'Deepika Vora', role: 'COO', company: 'Manufacturing', city: 'Pune', mutual: 4, industry: 'Manufacturing', experience: '12 Years', skills: ['Operations', 'Supply Chain'] },
    { id: 'n-3', initial: 'FA', name: 'Faisal Ahmed', role: 'Angel Investor', company: 'Independent', city: 'Mumbai', mutual: 22, industry: 'Investment', experience: '15 Years', skills: ['Investing', 'Strategy', 'DeFi'] },
    { id: 'n-4', initial: 'KM', name: 'Kavya Menon', role: 'Head of Design', company: 'Tech Corp', city: 'Bangalore', mutual: 8, industry: 'Design', experience: '6 Years', skills: ['UX/UI', 'Figma', 'Research'] },
    { id: 'n-5', initial: 'MG', name: 'Manav Gupta', role: 'MBA Candidate', company: 'ISB', city: 'Hyderabad', mutual: 2, industry: 'Consulting', experience: '3 Years', skills: ['Strategy', 'Data', 'Finance'] },
    { id: 'n-6', initial: 'RS', name: 'Ritika Sen', role: 'Founder', company: 'EdTech Startup', city: 'Delhi', mutual: 15, industry: 'EdTech', experience: '5 Years', skills: ['Product', 'Growth', 'Sales'] },
    { id: 'n-7', initial: 'PJ', name: 'Pooja Jain', role: 'VP Marketing', company: 'Retail', city: 'Mumbai', mutual: 10, industry: 'Marketing', experience: '9 Years', skills: ['Brand', 'Growth', 'Ads'] },
    { id: 'n-8', initial: 'NV', name: 'Nitin Verma', role: 'CTO', company: 'Healthcare', city: 'Pune', mutual: 6, industry: 'Healthcare', experience: '14 Years', skills: ['Engineering', 'Cloud', 'AI'] },
    { id: 'n-9', initial: 'SK', name: 'Simran Kaur', role: 'Security Lead', company: 'CyberSec', city: 'Delhi', mutual: 3, industry: 'Cybersecurity', experience: '7 Years', skills: ['SecOps', 'Cloud', 'Audit'] },
  ];

  const filters = [
    'All', 'SaaS', 'Manufacturing', 'Investment', 'Design', 
    'Consulting', 'EdTech', 'Marketing', 'Finance', 'Healthcare', 'Cybersecurity'
  ];

  // Filtering Logic
  const filteredConnections = allConnections.filter(c => {
    const matchesFilter = activeFilter === 'All' || c.industry === activeFilter || c.company === activeFilter;
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = 
      c.name.toLowerCase().includes(searchLower) ||
      c.role.toLowerCase().includes(searchLower) ||
      c.company.toLowerCase().includes(searchLower) ||
      c.industry.toLowerCase().includes(searchLower) ||
      c.skills.some(s => s.toLowerCase().includes(searchLower));
    
    return matchesFilter && matchesSearch;
  });

  const handleConnect = (c) => {
    setLoadingId(c.id);
    setTimeout(() => {
      setConnections(prev => [...prev, c.id]);
      setLoadingId(null);
      toast.success(`Connected with ${c.name}`);
      addActivity('Connected', `You are now connected with ${c.name}`);
    }, 1500);
  };

  const handleMessage = (c) => {
    openModal(
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-800 mb-4">Message {c.name}</h3>
        <p className="text-slate-600 dark:text-slate-600 text-sm mb-4">This is a mock chat interface for MVP purposes.</p>
        <textarea className="w-full h-32 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-slate-200 rounded-xl p-4 text-slate-900 dark:text-slate-800 text-sm focus:outline-none focus:border-brand-primary-500" placeholder="Type your message here..."></textarea>
        <div className="flex justify-end mt-4">
          <button className="px-6 py-2 bg-brand-primary-500 text-white text-sm font-bold rounded-lg hover:bg-brand-primary-400 transition-colors" onClick={() => { toast.success('Message sent successfully!'); }}>Send</button>
        </div>
      </div>
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Hero Banner */}
      <div className="relative w-full h-[180px] md:h-[220px] lg:h-[280px] rounded-[24px] border border-slate-200 dark:border-brand-dark-border overflow-hidden shadow-[0_0_40px_-15px_rgba(255,122,0,0.2)] bg-white mb-8">
        <img 
          src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=2000&q=80" 
          alt="Banner" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-70 mix-blend-multiply" 
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-white dark:from-brand-dark-bg via-white/80 dark:via-brand-dark-bg/80 to-transparent"></div>
        <div className="absolute inset-0 p-6 md:p-10 lg:p-12 flex flex-col justify-end md:justify-center items-start md:items-end z-10 text-left md:text-right">
          <div className="w-full md:w-1/2 max-w-lg">
            <div className="text-xs font-extrabold text-brand-primary-500 uppercase tracking-widest mb-2">Business Networking</div>
            <h1 className="text-3xl lg:text-4xl font-heading font-extrabold text-slate-900 dark:text-slate-900 dark:text-white mb-2 tracking-tight">Your extended board of allies.</h1>
            <p className="text-slate-600 font-medium mt-2">Connect with founders, investors, and operators verified by JBI.</p>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="space-y-4">
        {/* Search Bar */}
        <div className="relative flex items-center bg-white dark:bg-white border border-slate-200 dark:border-slate-200 rounded-full h-[52px] px-[18px] focus-within:border-brand-primary-500 transition-all max-w-2xl shadow-sm">
          <Search size={18} className="text-slate-600 shrink-0" />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search mentors, founders or investors..." 
            className="flex-1 bg-transparent border-none focus:outline-none text-sm text-slate-900 dark:text-slate-800 placeholder:text-slate-600 ml-3"
          />
        </div>

        {/* Filters */}
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide custom-scrollbar">
          {filters.map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`h-11 px-5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 flex items-center justify-center border ${
                activeFilter === tab 
                  ? 'bg-brand-primary-500 border-brand-primary-500 text-white shadow-lg shadow-brand-primary-500/20' 
                  : 'bg-white dark:bg-white border-slate-200 dark:border-slate-200 text-slate-600 dark:text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Layout */}
      {filteredConnections.length > 0 ? (
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredConnections.map((c) => {
              const isConnected = connections.includes(c.id);
              const isLoading = loadingId === c.id;

              return (
                <motion.div 
                  layout
                  variants={itemVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  key={c.id} 
                  className="bg-white dark:bg-white rounded-xl border border-slate-200 dark:border-slate-200 shadow-sm p-6 flex flex-col group hover:border-brand-primary-500 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                >
                  {/* User Info Header */}
                  <div className="flex items-start gap-4 mb-5">
                    <img 
                      src={`https://i.pravatar.cc/150?u=${encodeURIComponent(c.name)}`} 
                      alt={c.name} 
                      className="w-[56px] h-[56px] rounded-full object-cover shrink-0 border-2 border-white dark:border-[#110E0D] shadow-sm"
                    />
                    <div className="flex flex-col gap-0.5">
                      <h3 className="text-[24px] font-bold text-slate-900 dark:text-slate-900 dark:text-white leading-tight group-hover:text-brand-primary-500 transition-colors">{c.name}</h3>
                      <p className="text-[16px] text-slate-500 dark:text-slate-600 leading-tight">{c.role} • {c.company}</p>
                      <div className="flex items-center gap-1.5 text-[14px] text-slate-500 dark:text-slate-600 mt-1">
                        <MapPin size={14} /> {c.city}
                      </div>
                    </div>
                  </div>
                  
                  {/* Statistics Row */}
                  <div className="flex flex-wrap gap-5 mb-5">
                    <div className="flex items-center gap-2 text-[14px] text-slate-600 dark:text-slate-600">
                      <Users size={16} className="text-slate-600 dark:text-[#64748B]" />
                      <span className="font-medium text-slate-900 dark:text-slate-800">{c.mutual} Mutual Connections</span>
                    </div>
                    <div className="flex items-center gap-2 text-[14px] text-slate-600 dark:text-slate-600">
                      <Briefcase size={16} className="text-slate-600 dark:text-[#64748B]" />
                      <span className="font-medium text-slate-900 dark:text-slate-800">{c.industry}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[14px] text-slate-600 dark:text-slate-600">
                      <Clock size={16} className="text-slate-600 dark:text-[#64748B]" />
                      <span className="font-medium text-slate-900 dark:text-slate-800">{c.experience}</span>
                    </div>
                  </div>
                  
                  {/* Skills Row */}
                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {c.skills.map(skill => (
                      <span key={skill} className="px-[14px] py-[6px] bg-slate-50 dark:bg-white/5 text-[13px] font-bold text-slate-600 dark:text-slate-600 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  {/* Buttons Row */}
                  <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                    {isConnected ? (
                      <button disabled className="h-12 flex-1 bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 text-[15px] font-bold rounded-lg flex items-center justify-center gap-2 cursor-default shadow-sm">
                        <Check size={18} /> Connected
                      </button>
                    ) : (
                      <button 
                        onClick={() => handleConnect(c)}
                        disabled={isLoading}
                        className="h-12 flex-1 bg-brand-primary-500 text-white text-[15px] font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-brand-primary-400 transition-colors shadow-sm"
                      >
                        {isLoading ? <Loader2 size={18} className="animate-spin" /> : 'Connect'}
                      </button>
                    )}
                    <button onClick={() => handleMessage(c)} className="h-12 flex-1 bg-white dark:bg-white border border-slate-200 dark:border-slate-200 text-slate-900 dark:text-white text-[15px] font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-50 transition-colors shadow-sm">
                      Message
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      ) : (
        /* Empty State */
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center py-20 text-center bg-white dark:bg-white rounded-xl border border-slate-200 dark:border-slate-200 shadow-sm"
        >
          <div className="w-24 h-24 bg-slate-50 dark:bg-white/5 rounded-full flex items-center justify-center mb-6">
            <Search size={32} className="text-slate-600 dark:text-slate-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-800 mb-2">No professionals found</h3>
          <p className="text-slate-500 dark:text-slate-600 mb-8">Try another category or clear your search.</p>
          <button 
            onClick={() => {
              setSearchQuery('');
              setActiveFilter('All');
            }}
            className="px-6 py-3 bg-brand-primary-500 text-white font-bold rounded-lg hover:bg-brand-primary-400 transition-colors shadow-sm"
          >
            Reset Filters
          </button>
        </motion.div>
      )}
    </div>
  );
}

