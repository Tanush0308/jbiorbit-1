import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, FileText, Briefcase, LineChart, Target, Network, GraduationCap, 
  Calendar, Headphones, MonitorPlay, UserPlus, Building2, PlayCircle, 
  BriefcaseBusiness, BrainCircuit, BarChart3, ArrowRight
} from 'lucide-react';
import { RouteContext } from '../App';
import { useAppContext } from '../context/AppContext';

const modules = [
  { name: 'Mentorship', route: 'Mentorship', icon: Users, desc: 'Connect with industry experts', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  { name: 'Business Reports', route: 'Business Insights', icon: FileText, desc: 'Data-driven insights', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  { name: 'AI Assistant', route: 'Start-up Assistance', icon: BrainCircuit, desc: 'Your intelligent business co-pilot', colSpan: 'col-span-2 md:col-span-2', rowSpan: 'row-span-2', highlight: true, image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80' },
  { name: 'Internships', route: 'Internships', icon: Briefcase, desc: 'Career kickstarts', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  { name: 'Funding', route: 'Investment Facilitation', icon: Target, desc: 'Venture capital access', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  { name: 'Networking', route: 'Networking', icon: Network, desc: 'B2B matchmaking', colSpan: 'col-span-2 md:col-span-2', rowSpan: 'row-span-1', image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80' },
  { name: 'Courses', route: 'Courses', icon: GraduationCap, desc: 'Upskill rapidly', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  { name: 'Events', route: 'Events', icon: Calendar, desc: 'Startup demo days', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  { name: 'Knowledge Hub', route: 'Business Toolkit', icon: BarChart3, desc: 'Real-time market trends', colSpan: 'col-span-2 md:col-span-2', rowSpan: 'row-span-1', image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80' },
  { name: 'Podcasts', route: 'Podcasts', icon: Headphones, desc: 'Alumni stories', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  { name: 'Webinars', route: 'Webinars', icon: MonitorPlay, desc: 'Live workshops', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  { name: 'Co-Founder', route: 'Find Co-Founder', icon: UserPlus, desc: 'Find your match', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  { name: 'Franchise', route: 'Franchise Options', icon: Building2, desc: 'Expansion options', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  { name: 'Business Toolkit', route: 'Business Toolkit', icon: BriefcaseBusiness, desc: 'Templates & Docs', colSpan: 'col-span-2 md:col-span-2', rowSpan: 'row-span-1', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80' },
];

export default function EcosystemGrid() {
  const { setRoute, setIsAuthModalOpen } = useContext(RouteContext) || {};
  const { user } = useAppContext() || {};

  const handleModuleClick = (routeStr) => {
    if (user) {
      // For MVP demo, just set to student or appropriate dashboard
      // Usually activeTab would be set, but from Landing we route to dashboard, which defaults to Dashboard tab.
      // So let's just route to dashboard. Setting activeTab requires DashboardContext which isn't at the root.
      setRoute('dashboard_student');
    } else {
      if (setIsAuthModalOpen) setIsAuthModalOpen(true);
    }
  };

  return (
    <section className="py-32 bg-gradient-to-b from-[#d0e3f5] to-[#e1effa] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-brand-primary-500/10 border border-brand-primary-500/20 text-brand-primary-500 text-xs font-bold uppercase tracking-wider font-mono mb-4">
            The Modules
          </div>
          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl text-slate-900 leading-tight">
            Explore the <span className="text-brand-primary-600">Ecosystem.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px] grid-flow-row-dense w-full">
          {modules.map((mod, idx) => {
            const Icon = mod.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (idx % 8) * 0.05 }}
                onClick={() => handleModuleClick(mod.route)}
                className={`group relative rounded-3xl overflow-hidden glass-card border border-slate-200 hover:border-brand-primary-400/50 transition-all duration-500 cursor-pointer p-6 flex flex-col justify-between ${mod.colSpan} ${mod.rowSpan} ${mod.highlight ? 'bg-gradient-to-br from-brand-primary-500/20 to-brand-accent-500/20' : 'bg-white'}`}
              >
                {/* Background Image if exists */}
                {mod.image && (
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img 
                      src={mod.image} 
                      alt={mod.name} 
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
                  </div>
                )}
                
                {/* Background Hover Gradient for regular cards */}
                {!mod.image && (
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/5 group-hover:to-transparent transition-colors duration-500 z-0"></div>
                )}

                <div className="relative z-10 flex justify-between items-start">
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all duration-500 group-hover:scale-110 ${mod.highlight ? 'bg-brand-primary-500 border-brand-primary-500/50 shadow-[0_0_20px_rgba(255,122,0,0.4)]' : 'bg-slate-50 border-slate-200 group-hover:bg-brand-primary-500/10 group-hover:border-brand-primary-500/30 group-hover:text-brand-primary-500'}`}>
                    <Icon size={24} className={mod.highlight ? 'text-white' : 'text-slate-600 group-hover:text-brand-primary-500 transition-colors'} />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <ArrowRight size={14} className="text-slate-800" />
                  </div>
                </div>
                
                <div className="relative z-10 mt-auto transform group-hover:-translate-y-1 transition-transform duration-300">
                  <h3 className={`font-bold ${mod.highlight ? 'text-2xl text-slate-900 mb-2' : 'text-lg text-slate-800'}`}>{mod.name}</h3>
                  <p className={`text-sm ${mod.highlight ? 'text-slate-800' : 'text-slate-500 group-hover:text-slate-600'} transition-colors`}>{mod.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
