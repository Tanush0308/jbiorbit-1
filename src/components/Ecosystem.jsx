import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit } from 'lucide-react';

const nodes = [
  { label: 'Students', x: '50%', y: '10%' },
  { label: 'Entrepreneurs', x: '85%', y: '30%' },
  { label: 'Investors', x: '85%', y: '70%' },
  { label: 'Mentors', x: '50%', y: '90%' },
  { label: 'Incubators', x: '15%', y: '70%' },
  { label: 'Universities', x: '15%', y: '30%' },
];

export default function Ecosystem() {
  return (
    <section className="py-24 bg-brand-primary-500 relative overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center space-y-4 mb-20 relative z-10">
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white">
            The JBI <span className="text-white/80">Ecosystem</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            A fully integrated network where data, capital, and mentorship flow seamlessly between stakeholders.
          </p>
        </div>

        <div className="relative w-full max-w-3xl mx-auto h-[400px] sm:h-[500px]">
          {/* Center Hub */}
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', damping: 15 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-white/20 p-[2px] z-20 shadow-2xl"
          >
            <div className="w-full h-full bg-white rounded-full flex flex-col items-center justify-center">
              <BrainCircuit className="text-brand-primary-500 mb-1" size={28} />
              <span className="font-heading font-bold text-xs text-brand-primary-500">JBI AI Core</span>
            </div>
          </motion.div>

          {/* Surrounding Nodes & Lines */}
          {nodes.map((node, i) => (
            <React.Fragment key={i}>
              {/* Animated Connection Lines (SVG) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <motion.line
                  x1="50%"
                  y1="50%"
                  x2={node.x}
                  y2={node.y}
                  stroke="rgba(7, 90, 157, 0.2)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r="4"
                  fill="#075A9D"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                />
              </svg>

              {/* Node Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', damping: 20, delay: 0.8 + (i * 0.1) }}
                className="absolute w-28 text-center -translate-x-1/2 -translate-y-1/2 z-10"
                style={{ left: node.x, top: node.y }}
              >
                <div className="bg-white/20 dark:bg-white/10 backdrop-blur-md py-2 px-3 rounded-xl border border-white/20 text-xs font-bold text-white shadow-xl">
                  {node.label}
                </div>
              </motion.div>
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
}
