import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Store, Filter, Search, Bookmark, ArrowUpRight, 
  Sparkles, Calculator, IndianRupee, MapPin, CheckCircle2, ChevronDown
} from 'lucide-react';
import { useToast } from '../../../context/ToastContext';
import { useAppContext } from '../../../context/AppContext';
import { useModal } from '../../../context/ModalContext';

export default function FranchiseOptionsView() {
  const toast = useToast();
  const { bookmarks, toggleBookmark, addActivity } = useAppContext();
  const { openModal } = useModal();
  
  const [searchQuery, setSearchQuery] = useState('');
  
  // ROI Calculator state
  const [investment, setInvestment] = useState(1500000);
  const [monthlyProfit, setMonthlyProfit] = useState(120000);
  const [breakEven, setBreakEven] = useState(0);
  const [annualRoi, setAnnualRoi] = useState(0);

  useEffect(() => {
    if (investment > 0 && monthlyProfit > 0) {
      const be = investment / monthlyProfit;
      const annualProfit = monthlyProfit * 12;
      const roi = (annualProfit / investment) * 100;
      setBreakEven(be.toFixed(1));
      setAnnualRoi(roi.toFixed(1));
    } else {
      setBreakEven(0);
      setAnnualRoi(0);
    }
  }, [investment, monthlyProfit]);

  const franchises = [
    { id: 'f-1', name: 'Brew & Bake CafÃ©', industry: 'F&B', investment: 'â‚¹15L - â‚¹25L', roi: '24%', breakEven: '18 Months', locations: 'Pan India', logo: 'B' },
    { id: 'f-2', name: 'TechFix Solutions', industry: 'Retail Tech', investment: 'â‚¹8L - â‚¹12L', roi: '32%', breakEven: '12 Months', locations: 'Tier 1 & 2', logo: 'T' },
    { id: 'f-3', name: 'FitLife Gyms', industry: 'Health & Wellness', investment: 'â‚¹40L - â‚¹60L', roi: '18%', breakEven: '24 Months', locations: 'Metro Cities', logo: 'F' },
    { id: 'f-4', name: 'EduSmart Academy', industry: 'Education', investment: 'â‚¹5L - â‚¹10L', roi: '45%', breakEven: '9 Months', locations: 'Pan India', logo: 'E' },
  ];

  const filteredFranchises = franchises.filter(f => 
    f.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    f.industry.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleViewDetails = (f) => {
    addActivity('Viewed Franchise', `Viewed details for ${f.name}`);
    openModal(
      <div className="p-6 max-h-[80vh] overflow-y-auto custom-scrollbar">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-xl bg-white text-slate-800 dark:bg-white dark:text-slate-900 flex items-center justify-center font-bold text-2xl shadow-sm">
            {f.logo}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-800">{f.name}</h2>
            <div className="text-sm text-slate-500">{f.industry} â€¢ {f.locations}</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-slate-50 dark:bg-white/5 p-4 rounded-xl">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Total Investment</div>
            <div className="font-semibold text-slate-900 dark:text-slate-800 text-lg">{f.investment}</div>
          </div>
          <div className="bg-slate-50 dark:bg-white/5 p-4 rounded-xl">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Expected ROI</div>
            <div className="font-semibold text-emerald-500 text-lg">{f.roi}</div>
          </div>
          <div className="bg-slate-50 dark:bg-white/5 p-4 rounded-xl">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Break-Even</div>
            <div className="font-semibold text-slate-900 dark:text-slate-800 text-lg">{f.breakEven}</div>
          </div>
          <div className="bg-slate-50 dark:bg-white/5 p-4 rounded-xl">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Space Required</div>
            <div className="font-semibold text-slate-900 dark:text-slate-800 text-lg">500-1000 Sq.Ft.</div>
          </div>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-600 mb-6 leading-relaxed">
          {f.name} offers a turnkey franchise model with comprehensive training, marketing support, and a proven operational playbook. Join our rapidly growing network across {f.locations}.
        </p>

        <button 
          onClick={() => { toast.success('Application Started'); }}
          className="w-full py-3 bg-brand-primary-500 text-white text-sm font-bold rounded-xl shadow-lg hover:bg-brand-primary-400 transition-all"
        >
          Apply for Franchise
        </button>
      </div>
    );
  };

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      
      {/* 1. Hero Banner */}
      <div className="relative w-full h-[240px] md:h-[300px] rounded-[24px] border border-slate-200 dark:border-brand-dark-border overflow-hidden bg-white shadow-sm">
        <img 
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=2000&q=80" 
          alt="Banner" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-70 mix-blend-multiply" 
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-white dark:from-brand-dark-bg via-white/80 dark:via-brand-dark-bg/80 to-transparent"></div>
        <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center items-start md:items-end z-10 text-left md:text-right">
          <div className="flex items-center gap-2 mb-3 text-brand-primary-500 font-bold tracking-widest text-xs uppercase bg-brand-primary-500/10 px-3 py-1.5 rounded-full border border-brand-primary-500/20">
            <Store size={14} /> Franchise Marketplace
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white mb-4 tracking-tight">
            Find Your Perfect Franchise
          </h1>
          <p className="text-slate-600 dark:text-slate-300 max-w-lg text-lg">
            Discover verified franchise opportunities across F&B, Retail, and Tech with assured ROI models.
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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by brand, industry, or investment size..." 
              className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-brand-primary-500 transition-colors dark:text-slate-800"
            />
          </div>
          <div className="hidden lg:flex gap-2">
            {['Investment', 'Industry', 'ROI', 'Location'].map(filter => (
              <button key={filter} onClick={() => toast.info(`${filter} filter modal`)} className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-slate-200 rounded-xl text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-50 transition-colors dark:text-slate-800">
                <Filter size={16} /> {filter}
              </button>
            ))}
          </div>
          {/* Mobile filter button */}
          <button onClick={() => toast.info('Filters modal')} className="lg:hidden flex items-center gap-2 px-4 py-2.5 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-slate-200 rounded-xl text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-50 transition-colors dark:text-slate-800">
             <Filter size={16} /> Filters
          </button>
        </div>
      </div>

      {/* 3. Main Workspace & AI Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left: Franchise Cards */}
        <div className="lg:col-span-2 space-y-6">
          {filteredFranchises.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredFranchises.map((f) => {
                const isSaved = bookmarks.some(b => b.id === f.id);
                return (
                  <div key={f.id} className="bg-white dark:bg-white p-6 rounded-2xl border border-slate-200 dark:border-slate-200 shadow-sm hover:border-brand-primary-500/50 transition-all group">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-white text-slate-800 dark:bg-white dark:text-slate-900 flex items-center justify-center font-bold text-xl shadow-sm">
                          {f.logo}
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900 dark:text-slate-800 group-hover:text-brand-primary-500 transition-colors">{f.name}</h3>
                          <div className="text-xs text-slate-500">{f.industry}</div>
                        </div>
                      </div>
                      <button onClick={() => toggleBookmark(f.id, 'franchise', f.name)} className="p-1 rounded-full hover:bg-slate-50 dark:hover:bg-slate-50 transition-colors">
                        <Bookmark size={18} className={`${isSaved ? 'fill-brand-primary-500 text-brand-primary-500' : 'text-slate-600'}`} />
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-slate-50 dark:bg-white/5 p-3 rounded-xl border border-slate-100 dark:border-slate-200">
                        <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Investment</div>
                        <div className="font-semibold text-slate-900 dark:text-slate-800 text-sm">{f.investment}</div>
                      </div>
                      <div className="bg-slate-50 dark:bg-white/5 p-3 rounded-xl border border-slate-100 dark:border-slate-200">
                        <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Est. ROI</div>
                        <div className="font-semibold text-emerald-500 text-sm">{f.roi}</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-500 mb-4 px-1">
                      <div className="flex items-center gap-1"><MapPin size={14} /> {f.locations}</div>
                      <div className="flex items-center gap-1"><IndianRupee size={14} /> Break-even: {f.breakEven}</div>
                    </div>

                    <button onClick={() => handleViewDetails(f)} className="w-full py-2.5 bg-slate-50 dark:bg-white/10 hover:bg-brand-primary-500 hover:text-white text-slate-900 dark:text-white rounded-xl text-sm font-semibold transition-colors flex items-center justify-center gap-2">
                      View Details <ArrowUpRight size={16} />
                    </button>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center bg-white dark:bg-white rounded-2xl border border-slate-200 dark:border-slate-200 shadow-sm">
              <Store size={48} className="text-slate-600 dark:text-slate-800/20 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-800 mb-2">No franchises found</h3>
              <p className="text-slate-500">Try adjusting your search criteria.</p>
            </div>
          )}
        </div>

        {/* Right: Calculator & AI Recommendations */}
        <div className="space-y-6">
          
          {/* AI Recommendation */}
          <div className="bg-gradient-to-br from-white dark:from-brand-dark-bg to-slate-50 dark:to-brand-dark-surface p-6 rounded-2xl border border-slate-200 dark:border-brand-dark-border shadow-xl relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-primary-500/20 blur-3xl rounded-full pointer-events-none"></div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-brand-primary-500/20 flex items-center justify-center text-brand-primary-500">
                <Sparkles size={20} />
              </div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-slate-900 dark:text-white tracking-wide">Best Match for You</h2>
            </div>
            
            <div className="bg-white/5 border border-slate-200 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-white text-slate-900 flex items-center justify-center font-bold text-xs">E</div>
                <div>
                  <div className="font-bold text-slate-800 text-sm">EduSmart Academy</div>
                  <div className="text-xs text-slate-600">Education Sector</div>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Based on your budget (under â‚¹15L) and preference for quick break-evens, this franchise offers the highest probability of success.
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                <CheckCircle2 size={14} /> 94% Profile Match
              </div>
            </div>
          </div>

          {/* ROI Calculator Widget */}
          <div className="bg-white dark:bg-white p-6 rounded-2xl border border-slate-200 dark:border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-slate-900 dark:text-slate-800">ROI Calculator</h2>
              <Calculator size={18} className="text-slate-600" />
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">Initial Investment (â‚¹)</label>
                <input 
                  type="number" 
                  value={investment} 
                  onChange={(e) => setInvestment(Number(e.target.value))}
                  className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-slate-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-brand-primary-500 dark:text-slate-800" 
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">Est. Monthly Profit (â‚¹)</label>
                <input 
                  type="number" 
                  value={monthlyProfit} 
                  onChange={(e) => setMonthlyProfit(Number(e.target.value))}
                  className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-slate-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-brand-primary-500 dark:text-slate-800" 
                />
              </div>
              
              <div className="pt-4 border-t border-slate-200 dark:border-slate-200 mt-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-slate-500">Break-even Period</span>
                  <span className="font-bold text-slate-900 dark:text-slate-800">{breakEven} Months</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-500">Annual ROI</span>
                  <span className="font-bold text-emerald-500">{annualRoi}%</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

