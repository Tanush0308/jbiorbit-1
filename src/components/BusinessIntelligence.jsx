import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, BarChart2, PieChart, Activity } from 'lucide-react';

export default function BusinessIntelligence() {
  return (
    <section className="py-24 bg-white dark:bg-slate-900-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
        
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-primary-400/10 border border-brand-primary-400/30 text-xs font-semibold text-brand-primary-400 font-mono">
            <BarChart2 size={14} />
            <span>Market Intelligence</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-slate-800">
            See the future of your <span className="text-gradient">industry.</span>
          </h2>
          <p className="text-slate-600 dark:text-[#CBD5E1] max-w-2xl mx-auto">
            Proprietary AI models analyze millions of data points to provide actionable insights, predictive modeling, and competitive analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Main Chart */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass-card p-6 rounded-3xl border-slate-200 dark:border-slate-200 space-y-6"
          >
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-slate-900 dark:text-slate-800 font-bold text-lg">Industry Growth Trajectory</h4>
                <p className="text-slate-500 dark:text-slate-600 text-xs">SaaS & Enterprise Software (Q1-Q4)</p>
              </div>
              <div className="flex items-center gap-2 text-green-600 dark:text-green-400 text-sm font-bold bg-green-500/10 dark:bg-green-400/10 px-3 py-1 rounded-full">
                <TrendingUp size={16} /> +42.5%
              </div>
            </div>
            <div className="h-64 relative overflow-hidden rounded-xl bg-white border border-slate-200 dark:border-slate-200 mt-4">
              <img 
                src="https://images.unsplash.com/photo-1642543492481-44e81e3914a1?auto=format&fit=crop&w=800&q=80" 
                alt="Market Analytics" 
                className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-80 hover:opacity-100 transition-opacity duration-500 cursor-pointer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-brand-dark-bg via-transparent to-transparent"></div>
              
              <div className="absolute bottom-3 left-4 right-4 flex justify-between text-xs text-slate-800/50 font-mono z-10">
                <span>JAN</span>
                <span>APR</span>
                <span>JUL</span>
                <span>OCT</span>
                <span>DEC</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side Widgets */}
          <div className="space-y-6">
            
            {/* Widget 1 */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-3xl border-slate-200 dark:border-slate-200 flex flex-col justify-between h-48"
            >
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-xl bg-brand-primary-500/10 flex items-center justify-center text-brand-primary-500">
                  <PieChart size={20} />
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-slate-500 dark:text-slate-600 font-mono">MARKET SHARE</div>
                  <div className="text-slate-900 dark:text-white font-bold text-xl">18.4%</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-slate-600 dark:text-[#CBD5E1]">
                  <span>Competitor A</span>
                  <span>42%</span>
                </div>
                <div className="w-full h-2 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                  <div className="w-[42%] h-full bg-slate-400 dark:bg-slate-500"></div>
                </div>
                <div className="flex justify-between text-xs text-brand-primary-500 font-bold">
                  <span>You (Predicted)</span>
                  <span>18.4%</span>
                </div>
                <div className="w-full h-2 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '18.4%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="h-full bg-brand-primary-500"
                  ></motion.div>
                </div>
              </div>
            </motion.div>

            {/* Widget 2 */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-6 rounded-3xl border-slate-200 dark:border-slate-200 flex flex-col justify-between h-48 bg-gradient-to-br from-brand-primary-500/10 to-transparent"
            >
               <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-xl bg-brand-primary-400/10 flex items-center justify-center text-brand-primary-400">
                  <Activity size={20} />
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-slate-500 dark:text-slate-600 font-mono">HEALTH SCORE</div>
                  <div className="text-brand-primary-400 font-bold text-xl">A+</div>
                </div>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-600">
                Your venture's operational health is in the top <span className="text-slate-900 dark:text-white font-bold">5%</span> of the ecosystem. Ready for Series A.
              </p>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
