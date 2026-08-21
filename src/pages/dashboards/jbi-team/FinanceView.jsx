import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  DollarSign, TrendingUp, Download, ArrowUpRight, ArrowDownRight, FileText, CreditCard, PieChart as PieChartIcon
} from 'lucide-react';
import { useToast } from '../../../context/ToastContext';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Dummy Data
const revenueData = [
  { name: 'Jan', revenue: 4000, profit: 2400 },
  { name: 'Feb', revenue: 3000, profit: 1398 },
  { name: 'Mar', revenue: 5000, profit: 3800 },
  { name: 'Apr', revenue: 7780, profit: 3908 },
  { name: 'May', revenue: 8890, profit: 4800 },
  { name: 'Jun', revenue: 12900, profit: 7800 },
  { name: 'Jul', revenue: 18400, profit: 12300 },
];

const transactions = Array.from({ length: 10 }).map((_, i) => ({
  id: `TRX-${2000 + i}`,
  description: ['Subscription - Enterprise', 'Course Sale', 'Commission Fee', 'Mentorship Booking'][i % 4],
  amount: [499, 29, 15, 99][i % 4],
  date: `2026-07-${(i % 28) + 1}`,
  status: ['Completed', 'Pending', 'Completed'][i % 3]
}));

export default function FinanceView() {
  const toast = useToast();
  
  const handleExport = () => {
    toast.success('Financial report exported to CSV.');
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold font-heading text-slate-900 dark:text-slate-800">Financial Dashboard</h1>
          <p className="text-slate-500 dark:text-slate-600 mt-1">Executive view of platform revenue and profitability.</p>
        </div>
        <button onClick={handleExport} className="flex items-center gap-2 bg-brand-primary-500 text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-brand-primary-500/20 hover:bg-brand-primary-500/90 transition-all hover:-translate-y-0.5">
          <Download size={18} /> Export Report
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0 }} className="bg-white dark:bg-white rounded-2xl p-5 border border-slate-200 dark:border-slate-200 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 rounded-xl bg-brand-primary-400/10 text-brand-primary-400"><DollarSign size={20} /></div>
            <span className="flex items-center text-xs font-semibold text-green-500 bg-green-500/10 px-2 py-1 rounded-full"><ArrowUpRight size={14} className="mr-1" /> +12.5%</span>
          </div>
          <h3 className="text-slate-500 dark:text-slate-600 text-sm font-medium">Monthly Revenue</h3>
          <div className="text-3xl font-bold text-slate-900 dark:text-white mt-1 font-heading">Rs 18.4L</div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white dark:bg-white rounded-2xl p-5 border border-slate-200 dark:border-slate-200 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 rounded-xl bg-green-500/10 text-green-500"><TrendingUp size={20} /></div>
            <span className="flex items-center text-xs font-semibold text-green-500 bg-green-500/10 px-2 py-1 rounded-full"><ArrowUpRight size={14} className="mr-1" /> +18.2%</span>
          </div>
          <h3 className="text-slate-500 dark:text-slate-600 text-sm font-medium">Net Profit</h3>
          <div className="text-3xl font-bold text-slate-900 dark:text-slate-800 mt-1 font-heading">Rs 12.3L</div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white dark:bg-white rounded-2xl p-5 border border-slate-200 dark:border-slate-200 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500"><CreditCard size={20} /></div>
            <span className="flex items-center text-xs font-semibold text-green-500 bg-green-500/10 px-2 py-1 rounded-full"><ArrowUpRight size={14} className="mr-1" /> +5.4%</span>
          </div>
          <h3 className="text-slate-500 dark:text-slate-600 text-sm font-medium">Subscriptions</h3>
          <div className="text-3xl font-bold text-slate-900 dark:text-slate-800 mt-1 font-heading">Rs 8.2L</div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white dark:bg-white rounded-2xl p-5 border border-slate-200 dark:border-slate-200 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 rounded-xl bg-red-500/10 text-red-500"><PieChartIcon size={20} /></div>
            <span className="flex items-center text-xs font-semibold text-red-500 bg-red-500/10 px-2 py-1 rounded-full"><ArrowDownRight size={14} className="mr-1" /> -2.1%</span>
          </div>
          <h3 className="text-slate-500 dark:text-slate-600 text-sm font-medium">Expenses</h3>
          <div className="text-3xl font-bold text-slate-900 dark:text-slate-800 mt-1 font-heading">Rs 6.1L</div>
        </motion.div>
      </div>

      {/* Charts */}
      <div className="bg-white dark:bg-white rounded-2xl p-6 border border-slate-200 dark:border-slate-200 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 dark:text-slate-800 font-heading mb-6">Revenue & Profit Trend</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorRevenueFin" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#F59E0B" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333" opacity={0.2} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#888', fontSize: 12 }} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#888', fontSize: 12 }} tickFormatter={(val) => `Rs ${val/1000}k`} />
              <Tooltip contentStyle={{ backgroundColor: '#1E1E1E', border: 'none', borderRadius: '12px', color: '#fff' }} />
              <Area type="monotone" dataKey="revenue" stroke="#4C88B8" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenueFin)" />
              <Area type="monotone" dataKey="profit" stroke="#10B981" strokeWidth={3} fillOpacity={1} fill="url(#colorProfit)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-white dark:bg-white rounded-2xl border border-slate-200 dark:border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-200 dark:border-slate-200 flex justify-between items-center">
          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-800 font-heading">Recent Transactions</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-white border-b border-slate-200 dark:border-slate-200">
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-600 uppercase tracking-wider">Transaction ID</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-600 uppercase tracking-wider">Description</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-600 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-600 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-600 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-600 uppercase tracking-wider text-right">Invoice</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-white/5">
              {transactions.map((trx) => (
                <tr key={trx.id} className="hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-slate-800">{trx.id}</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-600">{trx.description}</td>
                  <td className="px-6 py-4 text-sm font-bold text-slate-900 dark:text-slate-800">${trx.amount}</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-600">{trx.date}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${
                      trx.status === 'Completed' ? 'bg-green-100 text-green-800 dark:bg-green-500/10 dark:text-green-400' : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-500/10 dark:text-yellow-400'
                    }`}>
                      {trx.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-brand-primary-500 hover:text-brand-primary-400 font-semibold text-sm transition-colors">Download</button>
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
