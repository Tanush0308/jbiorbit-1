import React from 'react';
import { motion } from 'framer-motion';
import { 
  LifeBuoy, CheckCircle2, Clock, MessageSquare, AlertTriangle, MessageCircle
} from 'lucide-react';
import { useToast } from '../../../context/ToastContext';

// Dummy Data
const tickets = Array.from({ length: 15 }).map((_, i) => ({
  id: `TCK-${3000 + i}`,
  customer: `User ${i + 1}`,
  subject: ['Login Issue', 'Payment Failed', 'Course Not Loading', 'Refund Request', 'Mentor Not Responding'][i % 5],
  priority: ['High', 'Medium', 'Low'][i % 3],
  status: ['Open', 'In Progress', 'Resolved'][i % 3],
  agent: ['Sarah J.', 'Mike T.', 'Unassigned'][i % 3],
  date: `2026-07-${(i % 28) + 1}`,
}));

export default function SupportCenterView() {
  const toast = useToast();

  const handleAction = (ticket) => {
    toast.success(`Action initiated on ticket ${ticket.id}`);
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold font-heading text-slate-900 dark:text-slate-800">Support Center</h1>
          <p className="text-slate-500 dark:text-slate-600 mt-1">Manage customer inquiries and platform issues.</p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-white rounded-2xl p-5 border border-slate-200 dark:border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-red-500/10 text-red-500"><AlertTriangle size={18} /></div>
            <span className="text-sm font-semibold text-slate-500 dark:text-slate-600 uppercase tracking-wider">Open Tickets</span>
          </div>
          <div className="text-3xl font-bold text-slate-900 dark:text-slate-800 mt-1 font-heading">24</div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white dark:bg-white rounded-2xl p-5 border border-slate-200 dark:border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-green-500/10 text-green-500"><CheckCircle2 size={18} /></div>
            <span className="text-sm font-semibold text-slate-500 dark:text-slate-600 uppercase tracking-wider">Resolved</span>
          </div>
          <div className="text-3xl font-bold text-slate-900 dark:text-slate-800 mt-1 font-heading">142</div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white dark:bg-white rounded-2xl p-5 border border-slate-200 dark:border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500"><Clock size={18} /></div>
            <span className="text-sm font-semibold text-slate-500 dark:text-slate-600 uppercase tracking-wider">Avg Response</span>
          </div>
          <div className="text-3xl font-bold text-slate-900 dark:text-slate-800 mt-1 font-heading">1.2h</div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white dark:bg-white rounded-2xl p-5 border border-slate-200 dark:border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-purple-500/10 text-purple-500"><MessageSquare size={18} /></div>
            <span className="text-sm font-semibold text-slate-500 dark:text-slate-600 uppercase tracking-wider">Feedback</span>
          </div>
          <div className="text-3xl font-bold text-slate-900 dark:text-slate-800 mt-1 font-heading">98%</div>
        </motion.div>
      </div>

      {/* Tickets Table */}
      <div className="bg-white dark:bg-white rounded-2xl border border-slate-200 dark:border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-200 dark:border-slate-200 flex justify-between items-center">
          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-800 font-heading">Recent Tickets</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-white border-b border-slate-200 dark:border-slate-200">
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-600 uppercase tracking-wider">Ticket</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-600 uppercase tracking-wider">Priority</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-600 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-600 uppercase tracking-wider">Agent</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-600 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-600 uppercase tracking-wider text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-white/5">
              {tickets.map((ticket) => (
                <tr key={ticket.id} className="hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-semibold text-slate-900 dark:text-slate-800 text-sm">{ticket.subject}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-600">{ticket.id} • {ticket.customer}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-bold ${
                      ticket.priority === 'High' ? 'bg-red-500/10 text-red-500' :
                      ticket.priority === 'Medium' ? 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400' :
                      'bg-blue-500/10 text-blue-500'
                    }`}>
                      {ticket.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-bold ${
                      ticket.status === 'Resolved' ? 'bg-green-500/10 text-green-500' :
                      ticket.status === 'In Progress' ? 'bg-brand-primary-500/10 text-brand-primary-500' :
                      'bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-slate-600'
                    }`}>
                      {ticket.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-600">{ticket.agent}</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-600">{ticket.date}</td>
                  <td className="px-6 py-4 text-right">
                    <button onClick={() => handleAction(ticket)} className="p-2 text-slate-600 hover:text-brand-primary-500 transition-colors bg-slate-50 dark:bg-white rounded-lg border border-slate-200 dark:border-slate-200 hover:border-brand-primary-500/50">
                      <MessageCircle size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
