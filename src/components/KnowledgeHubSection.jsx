import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp } from 'lucide-react';

const newsItems = [
  {
    category: "Funding News",
    title: "Global SaaS funding reaches new highs in Q3",
    image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&w=600&q=80",
    time: "2 hours ago",
    colSpan: "col-span-2 md:col-span-2 md:row-span-2",
    large: true
  },
  {
    category: "IPO",
    title: "Tech decacorn files for upcoming IPO",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80",
    time: "5 hours ago",
    colSpan: "col-span-2 md:col-span-1",
    large: false
  },
  {
    category: "M&A",
    title: "Major acquisition shakes up the fintech sector",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
    time: "8 hours ago",
    colSpan: "col-span-2 md:col-span-1",
    large: false
  },
  {
    category: "Policy Updates",
    title: "New AI regulations drafted for startup ecosystem",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
    time: "12 hours ago",
    colSpan: "col-span-2 md:col-span-1",
    large: false
  },
  {
    category: "Technology",
    title: "The rise of autonomous AI agents in B2B",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80",
    time: "1 day ago",
    colSpan: "col-span-2 md:col-span-1",
    large: false
  }
];

export default function KnowledgeHubSection() {
  return (
    <section className="py-32 bg-brand-primary-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-30 dark:opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider font-mono mb-4">
              Knowledge Hub
            </div>
            <h2 className="font-heading font-extrabold text-4xl sm:text-5xl text-white leading-tight">
              Real-Time <span className="text-blue-200">Market Insights.</span>
            </h2>
          </div>
          
          <button className="flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 px-5 py-2.5 rounded-full text-sm font-bold transition-all border border-white/20">
            View All Updates <ArrowUpRight size={16} />
          </button>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {newsItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group relative rounded-3xl overflow-hidden glass-card border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${item.colSpan}`}
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105" 
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-brand-primary-900/90 via-brand-primary-900/40 to-transparent ${item.large ? 'opacity-90' : 'opacity-100'}`}></div>
              </div>

              <div className="relative z-10 h-full p-6 flex flex-col justify-end">
                <div className="absolute top-6 left-6">
                  <span className="px-2.5 py-1 rounded-full bg-brand-primary-600/50 backdrop-blur-md border border-white/20 text-xs font-bold text-white uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
                
                <h3 className={`font-bold text-white mb-2 line-clamp-2 group-hover:text-blue-100 transition-colors ${item.large ? 'text-2xl sm:text-3xl' : 'text-lg'}`}>
                  {item.title}
                </h3>
                
                <div className="flex items-center gap-2 text-xs text-blue-100 font-mono">
                  <TrendingUp size={14} className="text-blue-200" />
                  {item.time}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
