import React from 'react';
import { motion } from 'framer-motion';
import { Network, Database, GraduationCap, Target, ArrowRight } from 'lucide-react';

export default function WhatIsJBI() {
  return (
    <section className="py-32 bg-brand-primary-600 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-brand-primary-500/10 to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-white font-mono shadow-sm">
              The Business OS
            </div>
            
            <h2 className="font-heading font-extrabold text-4xl sm:text-5xl text-white leading-tight">
              What is <span className="text-blue-200">JBI Orbit?</span>
            </h2>
            
            <p className="text-lg text-blue-50 leading-relaxed font-light">
              JBI Orbit is a comprehensive Business Growth Operating System (Business OS). We seamlessly connect learning, networking, intelligence, opportunities, funding, mentorship, and business services onto a single, powerful platform.
            </p>
            
            <p className="text-lg text-blue-50 leading-relaxed font-light">
              Designed for Students, Entrepreneurs, and Enterprises, Orbit provides everything you need to build, scale, and succeed in the modern business landscape.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-4">
              {[
                { icon: Network, title: 'Connect', desc: 'Founders & Investors' },
                { icon: GraduationCap, title: 'Learn', desc: 'Courses & Podcasts' },
                { icon: Database, title: 'Intelligence', desc: 'Market & Industry Data' },
                { icon: Target, title: 'Grow', desc: 'Funding & Support' },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shadow-sm shrink-0">
                      <Icon size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">{item.title}</div>
                      <div className="text-xs text-blue-100 mt-1">{item.desc}</div>
                    </div>
                  </div>
                )
              })}
            </div>
            
            <div className="pt-4">
              <button className="flex items-center gap-2 text-white hover:text-blue-200 text-sm font-bold transition-colors group">
                Explore the Ecosystem <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Illustration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card rounded-3xl overflow-hidden border border-slate-200 p-2 shadow-2xl">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-brand-primary-700">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80" 
                  alt="Business Ecosystem" 
                  className="w-full h-full object-cover opacity-90 transition-all duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary-900/60 via-brand-primary-500/20 to-transparent"></div>
                
                {/* Floating Elements overlay to make it look like an ecosystem */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/4 left-8 glass-card p-4 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md shadow-lg"
                >
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white mb-2">
                    <Database size={16} />
                  </div>
                  <div className="text-xs font-bold text-white">Data Streams</div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-1/4 right-8 glass-card p-4 rounded-xl border border-brand-primary-500/30 bg-brand-primary-500 backdrop-blur-md shadow-[0_0_30px_rgba(0,90,169,0.3)]"
                >
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white mb-2">
                    <Network size={16} />
                  </div>
                  <div className="text-xs font-bold text-white">Ecosystem Connected</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
