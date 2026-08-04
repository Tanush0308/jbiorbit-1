import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, FileText, CheckCircle2, XCircle, Search, Clock, Eye 
} from 'lucide-react';
import { useToast } from '../../../context/ToastContext';

// Dummy Data
const mockRequests = Array.from({ length: 12 }).map((_, i) => ({
  id: `REQ-${1000 + i}`,
  type: ['Mentor', 'Organization', 'Startup', 'Investor', 'Certificate'][i % 5],
  name: `Applicant Name ${i + 1}`,
  businessName: i % 2 === 0 ? `Business Entity ${i + 1}` : null,
  submittedAt: `2026-07-${(i % 28) + 1}T10:00:00Z`,
  status: ['Pending', 'Under Review', 'Pending'][i % 3],
  documents: i % 3 + 1
}));

export default function VerificationCenterView() {
  const toast = useToast();
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Mentors', 'Organizations', 'Startups', 'Investors', 'Certificates'];

  const filteredRequests = mockRequests.filter(req => {
    if (activeTab !== 'All' && req.type !== (activeTab.endsWith('s') ? activeTab.slice(0, -1) : activeTab)) return false;
    return true;
  });

  const handleAction = (action, req) => {
    toast.success(`Successfully marked ${req.id} as ${action}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold font-heading text-slate-900 dark:text-slate-800">Verification Center</h1>
          <p className="text-slate-500 dark:text-slate-600 mt-1">Review and approve platform applications.</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white dark:bg-white rounded-2xl p-2 border border-slate-200 dark:border-slate-200 shadow-sm inline-flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              activeTab === tab 
                ? 'bg-brand-primary-500 text-white shadow-md' 
                : 'text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-50'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Request Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredRequests.map((req, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              key={req.id}
              className="bg-white dark:bg-white rounded-2xl border border-slate-200 dark:border-slate-200 shadow-sm p-5 hover:border-brand-primary-500/50 transition-colors group flex flex-col"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-white flex items-center justify-center text-slate-600 font-bold">
                    {req.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-slate-800 leading-tight">{req.name}</h3>
                    {req.businessName && <p className="text-xs text-slate-500">{req.businessName}</p>}
                  </div>
                </div>
                <span className="bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 text-xs font-bold px-2 py-1 rounded-lg">
                  {req.status}
                </span>
              </div>

              <div className="flex-1 space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-600">
                  <span className="flex items-center gap-1.5"><ShieldCheck size={16} className="text-brand-primary-500" /> Type</span>
                  <span className="font-medium text-slate-900 dark:text-slate-800">{req.type}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-600">
                  <span className="flex items-center gap-1.5"><Clock size={16} className="text-blue-500" /> Submitted</span>
                  <span className="font-medium">{new Date(req.submittedAt).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-600">
                  <span className="flex items-center gap-1.5"><FileText size={16} className="text-purple-500" /> Documents</span>
                  <span className="font-medium flex items-center gap-1 bg-slate-50 dark:bg-white px-2 py-0.5 rounded-md">
                    {req.documents} attached <Eye size={14} className="cursor-pointer hover:text-brand-primary-500 ml-1" />
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-auto">
                <button 
                  onClick={() => handleAction('Rejected', req)}
                  className="flex items-center justify-center gap-2 p-2.5 rounded-xl text-sm font-bold text-red-500 bg-red-500/10 hover:bg-red-500/20 transition-colors"
                >
                  <XCircle size={16} /> Reject
                </button>
                <button 
                  onClick={() => handleAction('Approved', req)}
                  className="flex items-center justify-center gap-2 p-2.5 rounded-xl text-sm font-bold text-slate-800 bg-brand-primary-500 hover:bg-brand-primary-500/90 shadow-lg shadow-brand-primary-500/20 transition-colors"
                >
                  <CheckCircle2 size={16} /> Approve
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

    </div>
  );
}
