import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, CheckCircle2, AlertCircle, ArrowRight, Activity, FileLineChart, HelpCircle } from 'lucide-react';

export default function BusinessProjectReportView() {
  const availableReports = [
    { name: 'Steel Manufacturing Business Report', category: 'Manufacturing', price: '₹99', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80' },
    { name: 'Fruit Export & Logistics Report', category: 'Agriculture & Export', price: '₹99', image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=600&q=80' },
    { name: 'Cloud Kitchen Feasibility Report', category: 'Food & Beverage', price: '₹99', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80' },
    { name: 'Solar Power Plant Setup Report', category: 'Renewable Energy', price: '₹99', image: 'https://images.unsplash.com/photo-1509391366360-1f9509ce1581?auto=format&fit=crop&w=600&q=80' },
    { name: 'IT Services Agency Business Plan', category: 'Technology', price: '₹99', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80' },
    { name: 'Electric Vehicle (EV) Dealership', category: 'Automotive', price: '₹99', image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=600&q=80' }
  ];

  const stats = [
    { label: 'TOTAL REPORTS', value: '14' },
    { label: 'GENERATED THIS MONTH', value: '3' },
    { label: 'AVG READABILITY SCORE', value: '88/100' },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* 1. Hero */}
      <div className="relative w-full h-[180px] md:h-[220px] rounded-[24px] border border-slate-200 dark:border-brand-dark-border overflow-hidden bg-white shadow-sm">
        <img 
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=2000&q=80" 
          alt="Banner" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-70 mix-blend-multiply" 
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-white dark:from-brand-dark-bg via-white/80 dark:via-brand-dark-bg/80 to-transparent"></div>
        <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end md:justify-center items-start md:items-end z-10 text-left md:text-right">
          <h1 className="text-3xl font-heading font-extrabold text-slate-800 mb-2 tracking-tight">Business Project Reports</h1>
          <p className="text-slate-600 mt-1 max-w-md">Generate, analyze, and manage enterprise-grade project reports with AI-driven insights.</p>
        </div>
      </div>

      {/* 2. Quick Actions */}
      <div className="flex flex-wrap gap-4">
        <button className="px-5 py-2.5 bg-brand-primary-500 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-brand-primary-400 transition-colors flex items-center gap-2">
          <FileText size={16} /> Generate New Report
        </button>
        <button className="px-5 py-2.5 bg-white dark:bg-white border border-slate-200 dark:border-slate-200 text-slate-700 dark:text-slate-600 text-sm font-semibold rounded-lg hover:border-brand-primary-500/50 transition-colors flex items-center gap-2">
          <HelpCircle size={16} /> Request AI Analysis
        </button>
      </div>

      {/* 3. Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white dark:bg-white p-5 rounded-2xl border border-slate-200 dark:border-slate-200 shadow-sm">
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">{stat.label}</div>
            <div className="text-3xl font-heading font-extrabold text-slate-900 dark:text-white">{stat.value}</div>
          </div>
        ))}
      </div>

      {/* 4. Main Content */}
      <div className="bg-white dark:bg-white p-6 rounded-2xl border border-slate-200 dark:border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-6">Available Business Reports</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {availableReports.map((report, i) => (
            <div key={i} className="group flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-brand-primary-200 transition-all duration-300">
              <div className="relative h-40 overflow-hidden">
                <img src={report.image} alt={report.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-[10px] font-bold text-slate-700 uppercase tracking-wider">
                  {report.category}
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-bold text-slate-900 mb-2 leading-tight line-clamp-2">{report.name}</h3>
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="font-extrabold text-lg text-brand-primary-600">{report.price}</div>
                  <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-brand-primary-50 hover:text-brand-primary-600 text-slate-700 text-sm font-semibold rounded-lg transition-colors">
                    <Download size={16} /> Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

