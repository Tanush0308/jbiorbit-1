import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const stats = [
  { label: 'Mentors', value: 500, suffix: '+', delay: 0 },
  { label: 'Students', value: 10000, suffix: '+', delay: 0.1 },
  { label: 'Startups', value: 250, suffix: '+', delay: 0.2 },
  { label: 'Investors', value: 50, suffix: '+', delay: 0.3 },
  { label: 'Business Tools', value: 25, suffix: '+', delay: 0.4 },
  { label: 'Learning Resources', value: 100, suffix: '+', delay: 0.5 },
];

function Counter({ from = 0, to, duration = 2, suffix = '' }) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let startTime;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing function (easeOutQuart)
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeProgress * (to - from) + from));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [from, to, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}

export default function Statistics() {
  return (
    <section className="py-24 bg-brand-primary-600 border-y border-brand-primary-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: stat.delay }}
              className="space-y-2 group"
            >
              <div className="font-heading font-extrabold text-4xl sm:text-5xl text-white tracking-tight group-hover:scale-110 transition-transform duration-300">
                <Counter to={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm font-semibold text-blue-200/80 uppercase tracking-widest font-mono">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
