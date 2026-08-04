import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, CheckCircle2, Circle, FileText, Download, 
  Sparkles, ExternalLink, Scale, ShieldCheck, Map
} from 'lucide-react';

export default function StartupAssistanceView() {
  const [activeStage, setActiveStage] = useState('Company Registration');

  const stages = [
    { id: 'Idea', label: 'Idea', status: 'completed' },
    { id: 'Validation', label: 'Validation', status: 'completed' },
    { id: 'MVP', label: 'MVP', status: 'completed' },
    { id: 'Company Registration', label: 'Company Registration', status: 'active' },
    { id: 'Funding', label: 'Funding', status: 'upcoming' },
    { id: 'Growth', label: 'Growth', status: 'upcoming' },
  ];

  const checklist = [
    { id: 1, title: 'Choose a Company Name', desc: 'Verify name availability on MCA portal.', done: true },
    { id: 2, title: 'Draft MOA and AOA', desc: 'Define objectives and rules of the company.', done: true },
    { id: 3, title: 'Apply for Digital Signature (DSC)', desc: 'Required for all proposed directors.', done: false },
    { id: 4, title: 'File SPICe+ Form', desc: 'Submit incorporation application to MCA.', done: false },
    { id: 5, title: 'Open Corporate Bank Account', desc: 'Requires Certificate of Incorporation.', done: false },
  ];

  const resources = [
    { title: 'Legal & Compliance Guide', type: 'PDF', icon: Scale },
    { title: 'GST Registration Steps', type: 'Article', icon: FileText },
    { title: 'Trademark Filing Process', type: 'PDF', icon: ShieldCheck },
    { title: 'MSME (Udyam) Benefits', type: 'Link', icon: ExternalLink },
  ];

  const downloads = [
    { title: 'Founders Agreement Template', size: '1.2 MB' },
    { title: 'Employee NDA', size: '0.8 MB' },
    { title: 'SPICe+ Part A Sample', size: '2.5 MB' },
    { title: 'Startup India Scheme Details', size: '4.1 MB' },
  ];

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      
      {/* 1. Hero Banner */}
      <div className="relative w-full h-[240px] md:h-[300px] rounded-[24px] border border-slate-200 dark:border-brand-dark-border overflow-hidden bg-white shadow-sm">
        <img 
          src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=2000&q=80" 
          alt="Banner" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-70 mix-blend-multiply" 
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-white dark:from-brand-dark-bg via-white/80 dark:via-brand-dark-bg/80 to-transparent"></div>
        <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center items-start md:items-end z-10 text-left md:text-right">
          <div className="flex items-center gap-2 mb-3 text-brand-primary-500 font-bold tracking-widest text-xs uppercase bg-brand-primary-500/10 px-3 py-1.5 rounded-full border border-brand-primary-500/20">
            <Rocket size={14} /> Startup Launch Center
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white mb-4 tracking-tight">
            Launch Your Startup
          </h1>
          <p className="text-slate-600 dark:text-slate-300 max-w-lg text-lg">
            Step-by-step guidance, legal resources, and compliance checklists to register and scale your company.
          </p>
        </div>
      </div>

      {/* 2. Progress Tracker (Timeline) */}
      <div className="bg-white dark:bg-white p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-200 shadow-sm overflow-x-auto">
        <div className="min-w-[600px]">
          <div className="flex items-center justify-between relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-50 dark:bg-white/10 z-0 rounded-full"></div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-brand-primary-500 z-0 rounded-full transition-all duration-500" style={{ width: '50%' }}></div>
            
            {stages.map((stage, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center gap-2 cursor-pointer" onClick={() => setActiveStage(stage.id)}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-4 border-white dark:border-[#110E0D] transition-colors
                  ${stage.status === 'completed' ? 'bg-brand-primary-500 text-white' : 
                    stage.status === 'active' ? 'bg-white dark:bg-white border-brand-primary-500 text-brand-primary-500' : 
                    'bg-slate-200 dark:bg-white/10 text-slate-600'}`}>
                  {stage.status === 'completed' ? <CheckCircle2 size={18} /> : <div className="font-bold text-sm">{i+1}</div>}
                </div>
                <div className={`text-xs font-bold ${stage.status === 'upcoming' ? 'text-slate-600' : 'text-slate-900 dark:text-white'}`}>
                  {stage.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Main Workspace & AI Assistant */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left: Checklist & Resources */}
        <div className="lg:col-span-2 space-y-6">
          
          <div className="bg-white dark:bg-white p-6 rounded-2xl border border-slate-200 dark:border-slate-200 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-slate-900 dark:text-slate-800 flex items-center gap-2">
                <Map size={18} className="text-brand-primary-500" /> {activeStage} Checklist
              </h2>
              <span className="text-xs font-bold bg-slate-50 dark:bg-white/10 px-3 py-1 rounded-full">2/5 Completed</span>
            </div>
            
            <div className="space-y-3">
              {checklist.map((item) => (
                <div key={item.id} className={`flex items-start gap-4 p-4 rounded-xl border transition-colors cursor-pointer group
                  ${item.done ? 'bg-slate-50 dark:bg-white/[0.02] border-slate-200 dark:border-slate-200' : 'bg-white dark:bg-white border-slate-200 dark:border-slate-200 hover:border-brand-primary-500/50'}`}>
                  <button className={`mt-0.5 ${item.done ? 'text-emerald-500' : 'text-slate-600 dark:text-slate-600 group-hover:text-brand-primary-500 transition-colors'}`}>
                    {item.done ? <CheckCircle2 size={20} /> : <Circle size={20} />}
                  </button>
                  <div>
                    <div className={`font-semibold text-sm ${item.done ? 'text-slate-500 line-through' : 'text-slate-900 dark:text-slate-800'}`}>{item.title}</div>
                    <div className="text-xs text-slate-500 mt-1">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-white p-6 rounded-2xl border border-slate-200 dark:border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-800 mb-6">Essential Resources</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {resources.map((res, i) => {
                const Icon = res.icon;
                return (
                  <div key={i} className="flex items-center justify-between p-4 border border-slate-200 dark:border-slate-200 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-50 transition-colors cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-slate-50 dark:bg-white/5 flex items-center justify-center text-slate-500 group-hover:text-brand-primary-500 transition-colors">
                        <Icon size={18} />
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-slate-900 dark:text-slate-800 group-hover:text-brand-primary-500 transition-colors">{res.title}</div>
                        <div className="text-[10px] font-bold text-slate-500 uppercase mt-1">{res.type}</div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Right: AI Assistant & Downloads */}
        <div className="space-y-6">
          
          {/* AI Assistant */}
          <div className="bg-gradient-to-br from-white dark:from-brand-dark-bg to-slate-50 dark:to-brand-dark-surface p-6 rounded-2xl border border-slate-200 dark:border-brand-dark-border shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-brand-primary-500/10 blur-3xl rounded-full pointer-events-none"></div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-brand-primary-500/20 flex items-center justify-center text-brand-primary-500">
                <Sparkles size={20} />
              </div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-slate-900 dark:text-white tracking-wide">Orbit AI Assistant</h2>
            </div>
            
            <div className="bg-white/5 border border-slate-200 rounded-xl p-4 mb-4">
              <p className="text-sm text-slate-600 leading-relaxed">
                You're currently in the <strong className="text-slate-800">Company Registration</strong> phase. Your next critical step is to apply for a Digital Signature Certificate (DSC) for all directors. 
              </p>
            </div>
            
            <button className="w-full py-2.5 bg-brand-primary-500 hover:bg-brand-primary-400 rounded-xl text-sm font-semibold text-white transition-colors flex items-center justify-center gap-2">
              Start DSC Application <ExternalLink size={16} />
            </button>
          </div>

          {/* Downloads */}
          <div className="bg-white dark:bg-white p-6 rounded-2xl border border-slate-200 dark:border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-slate-900 dark:text-white mb-4">Templates & Forms</h2>
            <div className="space-y-3">
              {downloads.map((doc, i) => (
                <div key={i} className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-50 transition-colors cursor-pointer group border border-transparent hover:border-slate-200 dark:hover:border-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-slate-50 dark:bg-white flex items-center justify-center text-slate-500 dark:text-slate-600 mt-1 group-hover:text-brand-primary-500 transition-colors">
                    <Download size={18} />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-slate-900 dark:text-slate-800 group-hover:text-brand-primary-500 transition-colors line-clamp-2">{doc.title}</div>
                    <div className="text-xs text-slate-500 mt-1">{doc.size}</div>
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

