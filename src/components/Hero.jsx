import React, { useRef, useContext } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Activity, ShieldCheck, Target } from 'lucide-react';
import { RouteContext } from '../App';
import { useAppContext } from '../context/AppContext';

export default function Hero() {
  const { setRoute, setIsAuthModalOpen } = useContext(RouteContext) || {};
  const { user } = useAppContext() || {};
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[95vh] pt-40 pb-20 flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-brand-primary-50"
    >
      <div className="bg-noise"></div>
      
      {/* Background Animated Blobs */}
      <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-brand-primary-500/20 dark:bg-brand-primary-500/15 rounded-full blur-[140px] pointer-events-none animate-blob-1 z-0"></div>
      <div className="absolute top-[40%] left-[40%] w-[400px] h-[400px] bg-brand-primary-600/20 dark:bg-brand-primary-600/15 rounded-full blur-[120px] pointer-events-none animate-blob-2 z-0"></div>
      <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-brand-primary-400/20 dark:bg-brand-primary-400/15 rounded-full blur-[160px] pointer-events-none animate-blob-1 z-0" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Content */}
        <motion.div 
          style={{ y, opacity }}
          className="space-y-8"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-primary-500/10 border border-brand-primary-500/20 text-xs font-semibold text-brand-primary-600 font-mono shadow-sm backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-brand-primary-500 animate-ping"></span>
            <span>JBI OS 2.0 • The AI Ecosystem</span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-heading font-extrabold text-5xl sm:text-7xl tracking-tight text-slate-900 leading-[1.05]"
            >
              The Ultimate Business OS for <br/>
              <span className="text-brand-primary-600">Students & Founders.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg sm:text-xl text-slate-600 max-w-lg leading-relaxed font-light"
            >
              JBI Orbit is a Business Growth Operating System (Business OS) that connects learning, networking, intelligence, opportunities, funding, mentorship, and business services on a single platform.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 pt-4"
          >
            <button 
              onClick={() => {
                if (user) {
                  setRoute('dashboard_student');
                } else {
                  setIsAuthModalOpen(true);
                }
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-primary-600 text-white font-heading font-extrabold text-sm shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 group"
            >
              <span>Start Building</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button 
              onClick={() => {
                const ecosystemEl = document.getElementById('ecosystem-grid');
                if (ecosystemEl) {
                  ecosystemEl.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.scrollTo({ top: 800, behavior: 'smooth' });
                }
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/50 text-slate-900 font-heading font-bold text-sm hover:bg-white hover:border-brand-primary-200 transition-all border border-slate-200 flex items-center justify-center gap-2 backdrop-blur-md shadow-sm"
            >
              <Sparkles size={18} className="text-brand-primary-500" />
              Explore the Ecosystem
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side: Dashboard Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, rotateY: 15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          className="relative perspective-1000 hidden lg:block"
        >
          {/* Main Dashboard Card */}
          <div className="relative z-10 w-full h-[500px] glass-card rounded-2xl overflow-hidden shadow-2xl flex flex-col transform transition-transform duration-500 hover:rotate-y-[-5deg] hover:rotate-x-[5deg]">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80" 
              alt="JBI Orbit Dashboard" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent"></div>
          </div>

          {/* Floating Cards */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-12 top-20 z-20 glass-card p-3 rounded-xl flex items-center gap-3 shadow-2xl border-green-500/30 bg-white/10"
          >
            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
              <ShieldCheck size={16} />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-800">Funding Approved</div>
              <div className="text-[10px] text-slate-600">Seed Round • Rs 2.5Cr</div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -left-10 bottom-32 z-20 glass-card p-3 rounded-xl flex items-center gap-3 shadow-2xl border-brand-primary-500/30 bg-white/10"
          >
            <div className="w-8 h-8 rounded-full bg-brand-primary-500/20 flex items-center justify-center text-brand-primary-600">
              <Sparkles size={16} />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-800">AI Recommendation</div>
              <div className="text-[10px] text-slate-600">Optimize supply chain</div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
