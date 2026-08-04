import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Student",
    company: "IIT Bombay",
    quote: "JBI Orbit helped me secure a high-growth internship and connected me with an amazing mentor who guided my career path.",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704d"
  },
  {
    name: "Rahul Desai",
    role: "Founder",
    company: "Nexus AI",
    quote: "The Business Toolkit and AI Assistant saved us weeks of research. We found our lead investor through the platform's matchmaking.",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026024d"
  },
  {
    name: "Anita Patel",
    role: "Investor",
    company: "Elevate Capital",
    quote: "The quality of deal flow on JBI Orbit is unmatched. The analytics provided for each startup make our due diligence seamless.",
    image: "https://i.pravatar.cc/150?u=a04258114e29026702d"
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-white dark:bg-slate-900-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-30 dark:opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl text-slate-900 dark:text-slate-800 leading-tight">
            Loved by <span className="text-gradient">visionaries.</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-[#CBD5E1] font-light">
            Hear from the students, founders, and investors building the future on JBI Orbit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-8 rounded-3xl border border-slate-200 dark:border-slate-200 shadow-lg bg-white/40 dark:bg-white/5 relative"
            >
              <Quote size={40} className="text-brand-primary-500/20 absolute top-6 right-6" />
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full border-2 border-brand-primary-500/50 object-cover" />
                <div>
                  <div className="font-bold text-slate-900 dark:text-slate-800">{t.name}</div>
                  <div className="text-xs font-mono text-brand-primary-500">{t.role} • {t.company}</div>
                </div>
              </div>
              
              <p className="text-slate-700 dark:text-slate-600 italic relative z-10 leading-relaxed">
                "{t.quote}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
