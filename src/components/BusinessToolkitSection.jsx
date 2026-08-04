import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Presentation, LineChart, Users, Shield, Briefcase, Download, ArrowRight } from 'lucide-react';

const toolkitDocs = [
  { name: 'Business Plan', icon: Briefcase, type: 'DOCX / PDF' },
  { name: 'Pitch Deck', icon: Presentation, type: 'PPTX / KEY' },
  { name: 'Financial Projection', icon: LineChart, type: 'XLSX / CSV' },
  { name: 'Marketing Plan', icon: Target, type: 'DOCX / PDF' },
  { name: 'HR Policy', icon: Users, type: 'DOCX / PDF' },
  { name: 'Investor Pitch', icon: Presentation, type: 'PPTX / KEY' },
  { name: 'NDA', icon: Shield, type: 'DOCX / PDF' },
  { name: 'Partnership Agreement', icon: FileText, type: 'DOCX / PDF' },
];

import { Target } from 'lucide-react';

export default function BusinessToolkitSection() {
  return (
    <section className="py-32 bg-gradient-to-br from-white to-brand-primary-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-30 dark:opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-20 space-y-4"
        >
          <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-brand-primary-600/10 border border-brand-primary-600/20 text-brand-primary-600 text-xs font-bold uppercase tracking-wider font-mono">
            Business Toolkit
          </div>
          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl text-slate-900 leading-tight">
            Everything you need to <br />
            <span className="text-brand-primary-600">incorporate & scale.</span>
          </h2>
          <p className="text-lg text-slate-600 font-light">
            Stop searching for templates. Access our library of vetted, professional business documents and frameworks used by top startups.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {toolkitDocs.map((doc, idx) => {
            const Icon = doc.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group glass-card rounded-2xl p-6 border border-slate-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer bg-white flex flex-col items-center text-center relative overflow-hidden"
              >
                {/* Hover gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary-50/0 to-brand-primary-50/0 group-hover:from-brand-primary-50 group-hover:to-transparent transition-colors duration-500 z-0"></div>
                
                <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={24} className="text-brand-primary-600" />
                </div>
                
                <h3 className="font-bold text-slate-900 mb-2 relative z-10">{doc.name}</h3>
                <div className="text-xs font-mono text-brand-primary-600 mb-6 relative z-10">{doc.type}</div>
                
                <div className="mt-auto relative z-10 w-full pt-4 border-t border-slate-200">
                  <button className="w-full flex items-center justify-center gap-2 text-sm font-bold text-slate-500 group-hover:text-brand-primary-600 transition-colors">
                    <Download size={16} /> Download
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>
        
        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-300 text-slate-900 font-bold hover:bg-slate-50 transition-colors">
            Browse Entire Toolkit <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
