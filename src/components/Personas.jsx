import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Rocket, Building2, Users, Landmark, Globe, ShieldCheck, ArrowRight } from 'lucide-react';

const personas = [
  {
    title: "Students",
    role: "Learn & Connect",
    desc: "Gain real-world experience, access exclusive internships, and learn directly from industry experts.",
    icon: GraduationCap,
    benefits: ["Internship Opportunities", "Mentorship Access", "Skill Courses", "Project Reports"],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Entrepreneurs",
    role: "Build & Scale",
    desc: "Find co-founders, secure funding, and utilize AI tools to accelerate your startup growth.",
    icon: Rocket,
    benefits: ["AI Business Assistant", "Investor Matching", "Co-Founder Search", "Business Toolkit"],
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80",
    color: "from-brand-primary-500 to-brand-primary-400"
  },
  {
    title: "Enterprise / MSME",
    role: "Grow & Expand",
    desc: "Access real-time market intelligence, recruit top talent, and discover strategic partnerships.",
    icon: Building2,
    benefits: ["Market Intelligence", "Talent Acquisition", "B2B Networking", "Growth Analytics"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
    color: "from-brand-primary-600 to-pink-500"
  },
  {
    title: "Mentors",
    role: "Guide & Give Back",
    desc: "Share your expertise, guide the next generation of founders, and build your personal brand.",
    icon: Users,
    benefits: ["Host Masterclasses", "1-on-1 Sessions", "Alumni Talks", "Vetted Mentees"],
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    color: "from-emerald-500 to-teal-500"
  },
  {
    title: "Investors",
    role: "Discover & Fund",
    desc: "Get matched with high-potential startups based on your exact investment mandate and thesis.",
    icon: Landmark,
    benefits: ["Deal Flow Access", "Due Diligence Tools", "Portfolio Tracking", "Startup Pitch Days"],
    image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&w=600&q=80",
    color: "from-amber-500 to-brand-primary-400"
  },
  {
    title: "Organizations",
    role: "Partner & Incubate",
    desc: "Universities and incubators can manage their cohorts, host events, and track startup progress.",
    icon: Globe,
    benefits: ["Cohort Management", "Event Hosting", "Performance Tracking", "Resource Sharing"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
    color: "from-indigo-500 to-brand-primary-400"
  }
];

export default function Personas() {
  return (
    <section className="py-32 bg-gradient-to-b from-brand-surface to-blue-50/50 dark:from-brand-dark-bg dark:to-[#051d30] relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-30 dark:opacity-40"></div>
      
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-[-10%] w-[600px] h-[600px] bg-brand-primary-500/5 dark:bg-brand-primary-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-accent-500/5 dark:bg-brand-accent-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-20 space-y-4"
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white dark:bg-brand-dark-card border border-brand-primary-200 dark:border-brand-dark-border text-brand-primary-600 dark:text-brand-primary-400 text-xs font-bold uppercase tracking-wider font-mono shadow-sm">
            Who is it for?
          </div>
          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl text-slate-900 dark:text-white leading-tight">
            One Platform.<br />
            <span className="text-gradient">Every Stakeholder.</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 font-light">
            Whether you're starting your career or running a multinational enterprise, JBI Orbit adapts to your specific growth needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {personas.map((persona, idx) => {
            const Icon = persona.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative flex flex-col h-[480px] rounded-3xl overflow-hidden bg-white dark:bg-brand-dark-card border border-slate-200/60 dark:border-brand-dark-border shadow-xl shadow-slate-200/50 dark:shadow-none hover:shadow-2xl hover:shadow-brand-primary-500/10 dark:hover:shadow-brand-primary-500/5 hover:-translate-y-2 transition-all duration-500 cursor-pointer"
              >
                {/* Top Image Area */}
                <div className="relative h-56 w-full overflow-hidden shrink-0">
                  <img 
                    src={persona.image} 
                    alt={persona.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-brand-dark-card via-white/40 dark:via-brand-dark-card/40 to-transparent"></div>
                  {/* Colored overlay for brand feel */}
                  <div className={`absolute inset-0 bg-gradient-to-tr ${persona.color} opacity-20 mix-blend-multiply dark:mix-blend-overlay group-hover:opacity-10 transition-opacity duration-500`}></div>
                </div>

                {/* Content Area */}
                <div className="relative z-10 flex-1 px-8 pb-8 pt-0 flex flex-col justify-end">
                  {/* Icon */}
                  <div className="absolute -top-8 left-8">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${persona.color} p-[2px] shadow-lg`}>
                      <div className="w-full h-full bg-white dark:bg-[#072944] rounded-[14px] flex items-center justify-center">
                        <Icon size={28} className="text-brand-primary-600 dark:text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute top-2 right-8">
                    <span className="text-[10px] font-mono font-bold text-brand-primary-600 dark:text-brand-primary-300 uppercase tracking-widest bg-brand-primary-50 dark:bg-brand-primary-900/40 border border-brand-primary-100 dark:border-brand-primary-800 px-3 py-1 rounded-full">{persona.role}</span>
                  </div>

                  <div className="mt-8 transform transition-transform duration-500 ease-out group-hover:-translate-y-6">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{persona.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2 transition-all duration-300 mb-6 group-hover:line-clamp-none">
                      {persona.desc}
                    </p>
                    
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 max-h-0 group-hover:max-h-[200px] overflow-hidden">
                      <ul className="space-y-2 mb-6">
                        {persona.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-200 font-medium">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-primary-500 shrink-0"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                      <button className="flex items-center gap-2 text-brand-primary-600 dark:text-brand-primary-400 text-sm font-bold group/btn">
                        Explore {persona.title} 
                        <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
