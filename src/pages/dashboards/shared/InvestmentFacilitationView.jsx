import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, TrendingUp, Search, Calendar, ChevronRight, 
  Upload, Sparkles, Filter, CheckCircle2, User, Play, AlertCircle, Loader2
} from 'lucide-react';
import { useToast } from '../../../context/ToastContext';
import { useAppContext } from '../../../context/AppContext';
import { useModal } from '../../../context/ModalContext';

export default function InvestmentFacilitationView() {
  const toast = useToast();
  const { addActivity } = useAppContext();
  const { openModal, closeModal } = useModal();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const kpis = [
    { label: 'FUNDING PIPELINE', value: '$2.4M', sub: 'Active discussions', icon: Briefcase, trend: 'up' },
    { label: 'INVESTOR MATCHES', value: '42', sub: '+12 this week', icon: User, trend: 'up' },
    { label: 'PITCH SUCCESS RATE', value: '18%', sub: 'Avg conversion', icon: TrendingUp, trend: 'up' },
  ];

  const investors = [
    { id: 'i-1', name: 'Sequoia Capital Surge', stage: 'Seed, Series A', sector: 'FinTech, SaaS', amount: '$1M - $5M', status: 'Due Diligence', match: '98%', logo: 'S' },
    { id: 'i-2', name: 'Nexus Venture Partners', stage: 'Series A', sector: 'Enterprise Tech', amount: '$5M - $10M', status: 'Pitch Scheduled', match: '92%', logo: 'N' },
    { id: 'i-3', name: 'Blume Ventures', stage: 'Pre-Seed, Seed', sector: 'Consumer, EdTech', amount: '$500K - $2M', status: 'Reviewed', match: '85%', logo: 'B' },
    { id: 'i-4', name: 'AngelList Syndicate', stage: 'Pre-Seed', sector: 'Agnostic', amount: '$100K - $500K', status: 'Not Contacted', match: '80%', logo: 'A' },
  ];

  const meetings = [
    { investor: 'Nexus Venture Partners', type: 'Partner Pitch', date: 'Oct 28, 2023 at 10:00 AM' },
    { investor: 'Sequoia Capital Surge', type: 'Financial Review', date: 'Oct 30, 2023 at 2:00 PM' },
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'Due Diligence': return 'bg-purple-100 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400';
      case 'Pitch Scheduled': return 'bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400';
      case 'Reviewed': return 'bg-amber-100 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400';
      default: return 'bg-slate-50 text-slate-500 dark:bg-white/5 dark:text-slate-600';
    }
  };

  const handleUploadPitchDeck = () => {
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      toast.success('Pitch Deck updated successfully');
      addActivity('Uploaded Document', 'Updated Pitch Deck v4');
    }, 2000);
  };

  const handleAnalyzeVideo = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      toast.success('Analysis complete. 3 improvements found.');
      addActivity('AI Analysis', 'Analyzed Pitch Video');
    }, 2500);
  };

  const handlePitchModal = (inv) => {
    openModal(
      <div className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-xl bg-white text-slate-800 dark:bg-white dark:text-slate-900 flex items-center justify-center font-bold text-2xl shadow-sm">
            {inv.logo}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-800">Pitch to {inv.name}</h2>
            <div className="text-sm text-slate-500">{inv.stage} • {inv.sector}</div>
          </div>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-600 mb-6">
          You are preparing a pitch submission to {inv.name}. The firm typically invests {inv.amount} in this stage. Ensure your uploaded pitch deck and financial models are up to date.
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-slate-200">
            <div className="flex items-center gap-3">
              <CheckCircle2 size={20} className="text-emerald-500" />
              <div>
                <div className="text-sm font-bold text-slate-900 dark:text-slate-800">Pitch Deck v4.pdf</div>
                <div className="text-xs text-slate-500">Updated today</div>
              </div>
            </div>
            <button className="text-xs font-bold text-brand-primary-500 hover:text-brand-primary-400">Replace</button>
          </div>
          <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-slate-200">
            <div className="flex items-center gap-3">
              <CheckCircle2 size={20} className="text-emerald-500" />
              <div>
                <div className="text-sm font-bold text-slate-900 dark:text-slate-800">Financial Model 2024.xlsx</div>
                <div className="text-xs text-slate-500">Updated 2 days ago</div>
              </div>
            </div>
            <button className="text-xs font-bold text-brand-primary-500 hover:text-brand-primary-400">Replace</button>
          </div>
          
          <div>
            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block mt-4">Personalized Note (Optional)</label>
            <textarea className="w-full h-24 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:border-brand-primary-500 text-slate-900 dark:text-slate-800" placeholder={`Why is ${inv.name} the right partner for you?`}></textarea>
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <button onClick={closeModal} className="px-5 py-2.5 bg-slate-50 dark:bg-white/5 text-slate-600 dark:text-slate-600 text-sm font-bold rounded-xl hover:bg-slate-200 dark:hover:bg-slate-50 transition-colors">
            Cancel
          </button>
          <button 
            onClick={() => { 
              toast.success(`Pitch submitted to ${inv.name}`); 
              addActivity('Pitch Submitted', `Submitted pitch to ${inv.name}`);
              closeModal(); 
            }} 
            className="px-6 py-2.5 bg-brand-primary-500 text-white text-sm font-bold rounded-xl hover:bg-brand-primary-400 transition-colors shadow-sm"
          >
            Submit Pitch
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      
      {/* 1. Hero Banner */}
      <div className="relative w-full h-[240px] md:h-[300px] rounded-[24px] border border-slate-200 dark:border-brand-dark-border overflow-hidden bg-white shadow-sm">
        <img 
          src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=2000&q=80" 
          alt="Banner" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-70 mix-blend-multiply" 
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-white dark:from-brand-dark-bg via-white/80 dark:via-brand-dark-bg/80 to-transparent"></div>
        <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center items-start md:items-end z-10 text-left md:text-right">
          <div className="flex items-center gap-2 mb-3 text-brand-primary-500 font-bold tracking-widest text-xs uppercase bg-brand-primary-500/10 px-3 py-1.5 rounded-full border border-brand-primary-500/20">
            <TrendingUp size={14} /> Capital & Funding
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white mb-4 tracking-tight">
            Raise Capital Faster
          </h1>
          <p className="text-slate-600 dark:text-slate-300 max-w-lg text-lg">
            Manage your investor CRM, track due diligence, and secure the funding your startup needs to scale.
          </p>
        </div>
      </div>

      {/* 2. Quick Actions */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white dark:bg-white p-4 rounded-2xl border border-slate-200 dark:border-slate-200 shadow-sm">
        <div className="flex w-full md:w-auto flex-1 gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600" size={18} />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search investors by name, firm, or stage..." 
              className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-brand-primary-500 transition-colors dark:text-slate-800"
            />
          </div>
          <button onClick={() => toast.info('Filters active')} className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-slate-200 rounded-xl text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-50 transition-colors dark:text-slate-800">
            <Filter size={16} /> <span className="hidden sm:inline">Filter Stage</span>
          </button>
        </div>
        <button 
          onClick={handleUploadPitchDeck}
          disabled={isUploading}
          className="w-full md:w-auto px-6 py-2.5 bg-brand-primary-500 text-white text-sm font-bold rounded-xl shadow-lg hover:bg-brand-primary-400 transition-all flex items-center justify-center gap-2 min-w-[200px]"
        >
          {isUploading ? <Loader2 size={16} className="animate-spin" /> : <><Upload size={16} /> Update Pitch Deck</>}
        </button>
      </div>

      {/* 3. Key Statistics (KPIs) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {kpis.map((kpi, i) => {
          const Icon = kpi.icon;
          return (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-white p-6 rounded-2xl border border-slate-200 dark:border-slate-200 shadow-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{kpi.label}</div>
                <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-white/5 flex items-center justify-center text-slate-600 dark:text-slate-600">
                  <Icon size={16} />
                </div>
              </div>
              <div className="text-3xl font-heading font-extrabold text-slate-900 dark:text-white mb-2">{kpi.value}</div>
              <div className="text-xs font-semibold text-emerald-500 flex items-center gap-1">
                ↗ {kpi.sub}
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* 4. Main Workspace & AI Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left: Investor CRM / Pipeline */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Investor Discovery & Pipeline */}
          <div className="bg-white dark:bg-white rounded-2xl border border-slate-200 dark:border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-200 dark:border-slate-200 flex justify-between items-center">
              <h2 className="text-lg font-bold text-slate-900 dark:text-slate-800">Investor Pipeline</h2>
              <div className="flex gap-2">
                <button className="text-xs font-bold bg-slate-50 dark:bg-white/10 px-3 py-1.5 rounded-md text-slate-900 dark:text-slate-800 hover:bg-slate-200 transition-colors">Pipeline View</button>
                <button className="text-xs font-bold text-slate-500 hover:text-slate-900 dark:hover:text-slate-800 px-3 py-1.5 transition-colors">List View</button>
              </div>
            </div>
            
            <div className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm whitespace-nowrap">
                  <thead className="bg-slate-50 dark:bg-white/5 text-slate-500 text-xs uppercase font-bold tracking-widest">
                    <tr>
                      <th className="px-6 py-4">Investor / Firm</th>
                      <th className="px-6 py-4">Stage & Sector</th>
                      <th className="px-6 py-4">Ticket Size</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4 text-right">AI Match</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                    {investors.map((inv) => (
                      <tr key={inv.id} onClick={() => handlePitchModal(inv)} className="hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors cursor-pointer group">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-white text-slate-800 dark:bg-white dark:text-slate-900 flex items-center justify-center font-bold text-xs shadow-sm">
                              {inv.logo}
                            </div>
                            <div className="font-semibold text-slate-900 dark:text-slate-800 group-hover:text-brand-primary-500 transition-colors">{inv.name}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="font-medium text-slate-700 dark:text-slate-600">{inv.stage}</div>
                          <div className="text-xs text-slate-500 mt-0.5">{inv.sector}</div>
                        </td>
                        <td className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-600">{inv.amount}</td>
                        <td className="px-6 py-4">
                          <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide ${getStatusColor(inv.status)}`}>
                            {inv.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <span className="text-emerald-500 font-bold">{inv.match}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="p-4 border-t border-slate-200 dark:border-slate-200 text-center">
              <button className="text-sm font-semibold text-brand-primary-500 hover:text-brand-primary-400 transition-colors">Discover more investors &rarr;</button>
            </div>
          </div>
        </div>

        {/* Right: AI Insights & Activity */}
        <div className="space-y-6">
          
          {/* AI Insights Panel */}
          <div className="bg-gradient-to-br from-white dark:from-brand-dark-bg to-slate-50 dark:to-brand-dark-surface p-6 rounded-2xl border border-slate-200 dark:border-brand-dark-border shadow-xl relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-primary-500/20 blur-3xl rounded-full pointer-events-none"></div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-brand-primary-500/20 flex items-center justify-center text-brand-primary-500">
                <Sparkles size={20} />
              </div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-slate-900 dark:text-white tracking-wide">AI Pitch Coach</h2>
            </div>
            
            <div className="space-y-4">
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4">
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-1">Funding Probability</div>
                <div className="text-2xl font-extrabold text-slate-800">74%</div>
                <p className="text-xs text-emerald-300 mt-2">High likelihood for Seed stage based on your MRR growth.</p>
              </div>
              
              <div className="bg-white/5 border border-slate-200 rounded-xl p-4">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-2 flex items-center gap-2"><AlertCircle size={12}/> Pitch Improvement</div>
                <p className="text-sm text-slate-600 leading-relaxed">Your pitch deck lacks a clear "Go-to-Market" strategy slide. Investors heavily scrutinize this in Series A rounds.</p>
              </div>
            </div>
            <button 
              onClick={handleAnalyzeVideo}
              disabled={isAnalyzing}
              className="w-full mt-5 py-2.5 bg-white/10 hover:bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 transition-colors flex justify-center items-center gap-2"
            >
              {isAnalyzing ? <Loader2 size={16} className="animate-spin" /> : 'Analyze Pitch Video'}
            </button>
          </div>

          {/* Recent Activity / Upcoming Meetings */}
          <div className="bg-white dark:bg-white p-6 rounded-2xl border border-slate-200 dark:border-slate-200 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-slate-900 dark:text-slate-800">Upcoming Meetings</h2>
              <button className="text-slate-600 hover:text-brand-primary-500 transition-colors"><Calendar size={18} /></button>
            </div>
            <div className="space-y-4">
              {meetings.map((meeting, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="flex flex-col items-center mt-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-primary-500"></div>
                    {i !== meetings.length - 1 && <div className="w-[1px] h-full bg-slate-200 dark:bg-white/10 mt-1"></div>}
                  </div>
                  <div className="pb-4">
                    <div className="font-semibold text-sm text-slate-900 dark:text-white group-hover:text-brand-primary-500 transition-colors">{meeting.investor}</div>
                    <div className="text-xs font-medium text-slate-700 dark:text-slate-600 mt-0.5">{meeting.type}</div>
                    <div className="text-xs text-slate-500 mt-1">{meeting.date}</div>
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

