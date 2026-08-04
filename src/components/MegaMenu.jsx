import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BrainCircuit, FileText, Presentation, BarChart3, Users, Network, UserPlus, 
  GraduationCap, Landmark, LineChart, Target, Building2, Briefcase, 
  Headphones, Calendar, MonitorPlay, Video, Lightbulb, UserCheck, 
  Globe, MessageSquare, Download, Map, Mail, Phone, PlayCircle, Newspaper, BookOpen
} from 'lucide-react';

export const megaMenuData = {
  Platform: {
    columns: [
      {
        title: "Build",
        items: [
          { name: "AI Business Assistant", desc: "Intelligent market research & insights", icon: BrainCircuit },
          { name: "Business Toolkit", desc: "Templates, Financials, Policies", icon: FileText },
          { name: "Pitch Deck Builder", desc: "Automated deck generation", icon: Presentation },
          { name: "Business Reports", desc: "Data-driven industry reports", icon: BarChart3 },
        ]
      },
      {
        title: "Connect",
        items: [
          { name: "Mentorship", desc: "Expert guidance & advisory", icon: Users },
          { name: "Networking", desc: "Meet founders & investors", icon: Network },
          { name: "Find Co-Founder", desc: "Matchmaking algorithms", icon: UserPlus },
          { name: "Investors", desc: "Connect with verified VCs", icon: Landmark },
        ]
      },
      {
        title: "Learn & Grow",
        items: [
          { name: "Courses", desc: "Entrepreneurship & technical skills", icon: GraduationCap },
          { name: "Funding", desc: "Access venture capital", icon: Target },
          { name: "Market Insights", desc: "Real-time trends", icon: LineChart },
          { name: "Internships", desc: "Career opportunities", icon: Briefcase },
        ]
      }
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Startup Ecosystem Dashboard"
  },
  Solutions: {
    columns: [
      {
        title: "Students",
        items: [
          { name: "Internships", desc: "Launch your career", icon: Briefcase },
          { name: "Mentorship", desc: "Learn from the best", icon: Users },
          { name: "Courses", desc: "Upskill rapidly", icon: GraduationCap },
          { name: "Projects", desc: "Real-world experience", icon: FileText },
        ]
      },
      {
        title: "Entrepreneurs",
        items: [
          { name: "AI Business Assistant", desc: "Your digital co-founder", icon: BrainCircuit },
          { name: "Funding", desc: "Raise capital fast", icon: Target },
          { name: "Co-Founder", desc: "Find your match", icon: UserPlus },
          { name: "Business Toolkit", desc: "Essential documents", icon: FileText },
        ]
      },
      {
        title: "Enterprise & Mentors",
        items: [
          { name: "Business Intelligence", desc: "Analytics & reports", icon: BarChart3 },
          { name: "Talent Acquisition", desc: "Hire top students", icon: UserCheck },
          { name: "Knowledge Sharing", desc: "Give back to community", icon: Lightbulb },
          { name: "Startup Discovery", desc: "Find the next big thing", icon: Globe },
        ]
      }
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Solutions for Growth"
  },
  Resources: {
    columns: [
      {
        title: "Knowledge Hub",
        items: [
          { name: "Daily Market Updates", desc: "Stay informed", icon: Newspaper },
          { name: "Industry Reports", desc: "Deep dive analysis", icon: BarChart3 },
          { name: "Funding News", desc: "Who raised what", icon: Landmark },
          { name: "Technology Trends", desc: "The future is here", icon: BrainCircuit },
        ]
      },
      {
        title: "Media & Events",
        items: [
          { name: "Business Podcasts", desc: "Learn on the go", icon: Headphones },
          { name: "Founder Talks", desc: "Alumni stories", icon: MessageSquare },
          { name: "Workshops & Webinars", desc: "Live learning", icon: MonitorPlay },
          { name: "Business Conclaves", desc: "Major networking events", icon: Calendar },
        ]
      },
      {
        title: "Downloads",
        items: [
          { name: "Business Templates", desc: "Plug and play", icon: Download },
          { name: "Pitch Decks", desc: "Win investors over", icon: Presentation },
          { name: "Financial Models", desc: "Excel templates", icon: LineChart },
          { name: "HR & NDA Policies", desc: "Legal frameworks", icon: FileText },
        ]
      }
    ],
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Resources & Media"
  },
  Company: {
    columns: [
      {
        title: "About JBI Orbit",
        items: [
          { name: "Vision & Mission", desc: "Our core purpose", icon: Target },
          { name: "Leadership", desc: "Meet the team", icon: Users },
          { name: "Careers", desc: "Join our mission", icon: Briefcase },
          { name: "Media & Press", desc: "In the news", icon: Newspaper },
        ]
      },
      {
        title: "Partnerships",
        items: [
          { name: "Incubators", desc: "Startup ecosystem", icon: Building2 },
          { name: "Universities", desc: "Academic partners", icon: GraduationCap },
          { name: "Community", desc: "Join our network", icon: Globe },
        ]
      },
      {
        title: "Connect",
        items: [
          { name: "Contact Us", desc: "Get in touch", icon: Mail },
          { name: "Support", desc: "24/7 help desk", icon: Headphones },
          { name: "Documentaries", desc: "Watch our journey", icon: PlayCircle },
        ]
      }
    ],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Modern Office"
  }
};

export default function MegaMenu({ activeMenu, onMouseLeave, onMouseEnter }) {
  if (!activeMenu || !megaMenuData[activeMenu]) return null;
  
  const data = megaMenuData[activeMenu];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 15, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.98 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[90vw] max-w-6xl glass-card border border-slate-200 shadow-2xl rounded-2xl overflow-hidden z-50 flex bg-white/95 backdrop-blur-xl"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="flex-1 p-8 grid grid-cols-3 gap-8 relative z-10">
          <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none"></div>
          {data.columns.map((col, idx) => (
            <div key={idx} className="space-y-6 relative z-10">
              <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider font-mono opacity-80">{col.title}</h4>
              <div className="space-y-4">
                {col.items.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="group flex items-start gap-4 cursor-pointer hover:bg-slate-50 p-2 -mx-2 rounded-xl transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-white/5 border border-slate-200 flex items-center justify-center text-brand-primary-500 group-hover:scale-110 group-hover:bg-brand-primary-500/20 transition-all">
                        <Icon size={18} />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-600 group-hover:text-brand-primary-500 transition-colors">{item.name}</div>
                        <div className="text-xs text-slate-500 mt-0.5">{item.desc}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
        
        <div className="w-1/3 relative overflow-hidden bg-white border-l border-slate-200 hidden lg:block">
          <img 
            src={data.image} 
            alt={data.imageAlt} 
            className="absolute inset-0 w-full h-full object-cover opacity-60 hover:opacity-100 hover:scale-105 transition-all duration-700 mix-blend-luminosity hover:mix-blend-normal"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-brand-dark-bg via-white/50 dark:via-brand-dark-bg/50 to-transparent"></div>
          <div className="absolute bottom-8 left-8 right-8 text-slate-900 dark:text-white z-10">
            <div className="text-sm font-mono text-brand-primary-500 mb-2">Featured</div>
            <div className="text-xl font-bold">{data.imageAlt}</div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
