import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Briefcase, FileText, Calendar, CheckCircle2, 
  Sparkles, Search, Clock, ArrowRight, XCircle, Loader2, BarChart2
} from 'lucide-react';
import { useToast } from '../../../context/ToastContext';
import { useAppContext } from '../../../context/AppContext';
import { useModal } from '../../../context/ModalContext';

export default function TalentManagementView() {
  const toast = useToast();
  const { addActivity } = useAppContext();
  const { openModal } = useModal();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [isFastTracking, setIsFastTracking] = useState(false);

  const kpis = [
    { label: 'OPEN POSITIONS', value: '12', sub: '+3 this month', icon: Briefcase },
    { label: 'ACTIVE APPLICATIONS', value: '342', sub: 'Across all roles', icon: Users },
    { label: 'AVG TIME TO HIRE', value: '18 Days', sub: '-4 days vs Q2', icon: Clock },
    { label: 'OFFER ACCEPTANCE', value: '88%', sub: '+2% vs industry avg', icon: CheckCircle2 },
  ];

  const kanban = [
    {
      title: 'Applied', count: 145, 
      candidates: [
        { name: 'Tanush Pachpute', role: 'AI/ML Engineer', skills: 'Python, PyTorch, TensorFlow, React', exp: '2 Years', edu: 'B.Tech AI/ML, VIT Pune', image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=150&q=80' }
      ]
    },
    {
      title: 'Screening', count: 42, 
      candidates: [
        { name: 'Priya Sharma', role: 'Product Manager', skills: 'Agile, Figma, JIRA', exp: '6 Years', edu: 'MBA, IIM B' }
      ]
    },
    {
      title: 'Interview', count: 18, 
      candidates: [
        { name: 'Arjun Das', role: 'Backend Engineer', skills: 'Python, AWS, Postgres', exp: '5 Years', edu: 'M.Tech, NIT Trichy' }
      ]
    },
    {
      title: 'Offer', count: 3, 
      candidates: [
        { name: 'Sneha Iyer', role: 'UX Designer', skills: 'Figma, Prototyping, UI', exp: '3 Years', edu: 'NID Ahmedabad' }
      ]
    }
  ];

  const filteredKanban = kanban.map(col => ({
    ...col,
    candidates: col.candidates.filter(c => 
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      c.role.toLowerCase().includes(searchQuery.toLowerCase()) || 
      c.skills.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }));

  const handleFastTrack = () => {
    setIsFastTracking(true);
    setTimeout(() => {
      setIsFastTracking(false);
      toast.success('Tanush Pachpute moved to Interview stage');
      addActivity('ATS Update', 'Fast-tracked Tanush Pachpute to Interview');
    }, 1500);
  };

  const handleViewResume = (cand) => {
    addActivity('Viewed Resume', `Viewed resume of ${cand.name}`);
    openModal(
      <div className="p-6">
        <div className="flex items-center gap-4 mb-6">
          {cand.image ? (
            <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80" 
          alt="Banner" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-70 mix-blend-multiply" 
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-white dark:from-brand-dark-bg via-white/80 dark:via-brand-dark-bg/80 to-transparent"></div>
        <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center items-start md:items-end z-10 text-left md:text-right">
          <div className="flex items-center gap-2 mb-3 text-brand-primary-500 font-bold tracking-widest text-xs uppercase bg-brand-primary-500/10 px-3 py-1.5 rounded-full border border-brand-primary-500/20">
            <Users size={14} /> Enterprise HR
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight drop-shadow-lg">
            Talent Management
          </h1>
          <p className="text-slate-600 max-w-lg text-lg drop-shadow-md">
            Streamline your hiring process with an AI-powered Applicant Tracking System (ATS).
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
              placeholder="Search candidates by name, skills, or role..." 
              className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-brand-primary-500 transition-colors dark:text-slate-800"
            />
          </div>
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <button onClick={() => toast.info('Opening calendar...')} className="flex-1 md:flex-none px-4 py-2.5 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-slate-200 text-slate-900 dark:text-slate-800 text-sm font-bold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
            <Calendar size={16} /> Interview Calendar
          </button>
          <button onClick={() => toast.info('Job posting form...')} className="flex-1 md:flex-none px-4 py-2.5 bg-brand-primary-500 text-white text-sm font-bold rounded-xl shadow-lg hover:bg-brand-primary-400 transition-all flex items-center justify-center gap-2">
            <Briefcase size={16} /> Post New Job
          </button>
        </div>
      </div>

      {/* 3. Key Statistics (KPIs) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi, i) => {
          const Icon = kpi.icon;
          return (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-white p-5 rounded-2xl border border-slate-200 dark:border-slate-200 shadow-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{kpi.label}</div>
                <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-white/5 flex items-center justify-center text-slate-600 dark:text-slate-600">
                  <Icon size={16} />
                </div>
              </div>
              <div className="text-3xl font-heading font-extrabold text-slate-900 dark:text-white mb-2">{kpi.value}</div>
              <div className="text-xs font-semibold text-emerald-500">{kpi.sub}</div>
            </motion.div>
          )
        })}
      </div>

      {/* 4. Main Workspace (Kanban ATS) */}
      <div className="bg-white dark:bg-white p-6 rounded-2xl border border-slate-200 dark:border-slate-200 shadow-sm overflow-x-auto custom-scrollbar">
        <h2 className="text-lg font-bold text-slate-900 dark:text-slate-800 mb-6">Candidate Pipeline</h2>
        
        <div className="flex gap-4 min-w-[1000px]">
          {filteredKanban.map((column, i) => (
            <div key={i} className="flex-1 bg-slate-50 dark:bg-white/5 rounded-2xl p-4 flex flex-col h-[500px]">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-slate-700 dark:text-slate-600">{column.title}</h3>
                <span className="bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-slate-600 text-xs font-bold px-2 py-1 rounded-full">{column.count}</span>
              </div>
              
              <div className="flex-1 overflow-y-auto space-y-3 custom-scrollbar pr-2">
                {column.candidates.map((cand, j) => (
                  <div key={j} onClick={() => handleViewResume(cand)} className="bg-white dark:bg-white p-4 rounded-xl border border-slate-200 dark:border-slate-200 shadow-sm hover:border-brand-primary-500/50 transition-colors cursor-pointer group">
                    <div className="flex items-center gap-3 mb-3">
                      {cand.image ? (
                        <img src={cand.image} alt={cand.name} className="w-10 h-10 rounded-full object-cover" />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-white/10 flex items-center justify-center font-bold text-slate-600 dark:text-slate-600 text-sm">
                          {cand.name.charAt(0)}
                        </div>
                      )}
                      <div>
                        <div className="font-bold text-slate-900 dark:text-slate-800 group-hover:text-brand-primary-500 transition-colors">{cand.name}</div>
                        <div className="text-xs text-slate-500">{cand.role}</div>
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-3">
                      <div className="flex flex-wrap gap-1">
                        {cand.skills.split(',').map(skill => (
                          <span key={skill} className="text-[9px] font-bold bg-slate-50 dark:bg-white/5 text-slate-500 px-1.5 py-0.5 rounded">{skill.trim()}</span>
                        ))}
                      </div>
                      <div className="text-[10px] text-slate-500">{cand.edu}</div>
                    </div>

                    <div className="flex justify-between items-center pt-3 border-t border-slate-100 dark:border-slate-200">
                      <div className="text-[10px] font-bold text-slate-500 uppercase">{cand.exp} Exp</div>
                      <button className="text-slate-600 hover:text-brand-primary-500 transition-colors"><FileText size={14} /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. AI Insights & Hiring Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left: Hiring Metrics */}
        <div className="lg:col-span-2 bg-white dark:bg-white p-6 rounded-2xl border border-slate-200 dark:border-slate-200 shadow-sm flex items-center justify-center min-h-[250px]">
          <div className="text-center space-y-4">
             <div className="w-16 h-16 rounded-full bg-slate-50 dark:bg-white/5 flex items-center justify-center text-slate-600 mx-auto">
               <BarChart2 size={24} />
             </div>
             <div>
               <h3 className="font-bold text-slate-900 dark:text-slate-800">Detailed Hiring Analytics</h3>
               <p className="text-sm text-slate-500 mt-1 max-w-sm mx-auto">Track source of hire, candidate drop-off rates, and diversity metrics across your organization.</p>
             </div>
             <button onClick={() => toast.info('Loading report...')} className="text-sm font-semibold text-brand-primary-500 hover:text-brand-primary-400 transition-colors">View full report &rarr;</button>
          </div>
        </div>

        {/* Right: AI Candidate Match */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-white dark:from-brand-dark-bg to-slate-50 dark:to-brand-dark-surface p-6 rounded-2xl border border-slate-200 dark:border-brand-dark-border shadow-xl relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-primary-500/20 blur-3xl rounded-full pointer-events-none"></div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-brand-primary-500/20 flex items-center justify-center text-brand-primary-500">
                <Sparkles size={20} />
              </div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-wide">AI Top Match</h2>
            </div>
            
            <div className="bg-white/5 border border-slate-200 rounded-xl p-4 mb-4">
              <div className="flex items-center justify-between mb-3">
                <div className="font-bold text-slate-800 text-sm">Tanush Pachpute</div>
                <div className="text-[10px] font-bold bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded">99% Match</div>
              </div>
              <div className="text-xs text-slate-600 mb-3 border-b border-slate-200 pb-3">AI/ML Engineer Role</div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                  <p className="text-xs text-slate-600">Perfect technical alignment with Python, PyTorch, and TensorFlow.</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                  <p className="text-xs text-slate-600">Strong research background in LLMs and AI matches company profile.</p>
                </div>
                <div className="flex items-start gap-2">
                  <XCircle size={14} className="text-amber-500 mt-0.5 shrink-0" />
                  <p className="text-xs text-slate-600">Still pursuing B.Tech (Expected 2028).</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-2">
               <button onClick={() => handleViewResume({name: 'Tanush Pachpute', role: 'AI/ML Engineer', skills: 'Python, PyTorch, TensorFlow, React', exp: '2 Years', edu: 'B.Tech AI/ML, VIT Pune', image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=150&q=80'})} className="flex-1 py-2 bg-white/10 hover:bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold text-slate-800 transition-colors">View Resume</button>
               <button 
                  onClick={handleFastTrack}
                  disabled={isFastTracking}
                  className="flex-1 py-2 bg-brand-primary-500 hover:bg-brand-primary-400 rounded-lg text-xs font-bold text-white transition-colors flex items-center justify-center gap-2"
               >
                 {isFastTracking ? <Loader2 size={14} className="animate-spin" /> : 'Fast-track'}
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
