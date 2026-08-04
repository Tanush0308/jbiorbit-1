import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Landmark, BarChart3, Users, Network, Briefcase } from 'lucide-react';

const gridItems = [
  {
    title: 'AI Mentor',
    desc: 'Personalized guidance powered by generative AI.',
    icon: BrainCircuit,
    colSpan: 'md:col-span-2',
    rowSpan: 'md:row-span-1',
    color: 'text-brand-primary-500',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Funding Hub',
    desc: 'Direct access to verified angel investors and VCs.',
    icon: Landmark,
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-2',
    color: 'text-green-500',
    image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Business Intelligence',
    desc: 'Real-time market trends and predictive analytics.',
    icon: BarChart3,
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
    color: 'text-brand-primary-400'
  },
  {
    title: 'Community',
    desc: 'Vibrant ecosystem of founders and innovators.',
    icon: Users,
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
    color: 'text-purple-500'
  },
  {
    title: 'Networking',
    desc: 'Matchmaking algorithms for co-founders and partners.',
    icon: Network,
    colSpan: 'md:col-span-2',
    rowSpan: 'md:row-span-1',
    color: 'text-blue-500',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Career Support',
    desc: 'Internships and placement opportunities.',
    icon: Briefcase,
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
    color: 'text-red-500'
  }
];

export default function BentoGrid() {
  return (
    <section className="py-24 bg-white dark:bg-slate-900-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
        <div className="text-center space-y-4">
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-slate-800">
            Everything you need. <span className="text-gradient">In one place.</span>
          </h2>
          <p className="text-slate-600 dark:text-[#CBD5E1] max-w-2xl mx-auto">
            JBI Orbit consolidates fragmented tools into a single, unified operating system designed for scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[200px] gap-6">
          {gridItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`glass-card rounded-3xl p-6 flex flex-col justify-between group overflow-hidden ${item.colSpan} ${item.rowSpan}`}
              >
                <div className="relative z-10 space-y-4">
                  <div className={`w-12 h-12 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-slate-200 flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-slate-800">{item.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-[#CBD5E1] mt-1">{item.desc}</p>
                  </div>
                </div>
                
                {/* Background Hover Effect & Image */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/0 to-black/0 group-hover:from-black/5 group-hover:to-transparent dark:from-white/0 dark:to-white/0 dark:group-hover:from-white/5 dark:group-hover:to-transparent transition-colors duration-500 rounded-3xl z-0"></div>
                {item.image && (
                  <div className="absolute inset-0 rounded-3xl overflow-hidden z-0 pointer-events-none">
                    <img src={item.image} alt="" className="w-full h-full object-cover opacity-20 dark:opacity-30 mix-blend-luminosity group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 to-transparent"></div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
