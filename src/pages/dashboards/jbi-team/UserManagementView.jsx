import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Search, Filter, MoreVertical, 
  UserCheck, UserX, Mail, Lock, Shield
} from 'lucide-react';
import { useToast } from '../../../context/ToastContext';

// Dummy Data
const summaryCards = [
  { title: 'Students', count: '12,341', icon: Users, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { title: 'Entrepreneurs', count: '2,864', icon: Users, color: 'text-brand-primary-500', bg: 'bg-brand-primary-500/10' },
  { title: 'Mentors', count: '426', icon: Shield, color: 'text-purple-500', bg: 'bg-purple-500/10' },
  { title: 'Organizations', count: '152', icon: Users, color: 'text-green-500', bg: 'bg-green-500/10' },
  { title: 'Blocked', count: '43', icon: UserX, color: 'text-red-500', bg: 'bg-red-500/10' },
];

const mockUsers = Array.from({ length: 15 }).map((_, i) => ({
  id: `USR-${1000 + i}`,
  name: ['Aarav Sharma', 'Neha Gupta', 'Rohan Mehta', 'Priya Singh', 'Kabir Das', 'Ananya Patel'][i % 6],
  email: `user${i}@example.com`,
  role: ['Student', 'Entrepreneur / MSME', 'Mentor', 'Enterprise'][i % 4],
  status: i % 7 === 0 ? 'Suspended' : 'Active',
  joined: `2026-0${(i % 6) + 1}-1${(i % 9) + 1}`,
  activity: ['High', 'Medium', 'Low'][i % 3]
}));

export default function UserManagementView() {
  const toast = useToast();
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = ['All', 'Students', 'Entrepreneurs', 'Mentors', 'Organizations'];

  const filteredUsers = mockUsers.filter(u => {
    if (activeTab !== 'All' && !u.role.includes(activeTab.slice(0, -1))) return false;
    if (searchQuery && !u.name.toLowerCase().includes(searchQuery.toLowerCase()) && !u.email.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  const handleAction = (action, user) => {
    toast.success(`${action} action triggered for ${user.name}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold font-heading text-slate-900 dark:text-slate-900 dark:text-white">User Management</h1>
          <p className="text-slate-500 dark:text-slate-600 mt-1">Manage and monitor all platform accounts.</p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {summaryCards.map((card, idx) => (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            key={idx}
            className="bg-white dark:bg-white rounded-2xl p-4 border border-slate-200 dark:border-slate-200 shadow-sm"
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${card.bg} ${card.color} mb-3`}>
              <card.icon size={20} />
            </div>
            <div className="text-2xl font-bold text-slate-900 dark:text-slate-800 font-heading">{card.count}</div>
            <div className="text-xs font-medium text-slate-500 dark:text-slate-600 mt-1">{card.title}</div>
          </motion.div>
        ))}
      </div>

      {/* Data Table Container */}
      <div className="bg-white dark:bg-white rounded-2xl border border-slate-200 dark:border-slate-200 shadow-sm overflow-hidden">
        
        {/* Toolbar */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          
          <div className="flex space-x-1 bg-slate-50 dark:bg-white p-1 rounded-xl w-full md:w-auto overflow-x-auto custom-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap ${
                  activeTab === tab 
                    ? 'bg-white dark:bg-white text-brand-primary-500 shadow-sm' 
                    : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-600'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600" size={16} />
              <input 
                type="text" 
                placeholder="Search users..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 dark:bg-white border border-slate-200 dark:border-slate-200 rounded-xl py-2 pl-9 pr-4 text-sm text-slate-900 dark:text-slate-800 focus:outline-none focus:border-brand-primary-500 transition-colors"
              />
            </div>
            <button className="p-2 bg-slate-50 dark:bg-white border border-slate-200 dark:border-slate-200 rounded-xl hover:border-brand-primary-500 transition-colors text-slate-500">
              <Filter size={18} />
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-white border-b border-slate-200 dark:border-slate-200">
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-600 uppercase tracking-wider">Profile</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-600 uppercase tracking-wider">Role</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-600 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-600 uppercase tracking-wider">Joined</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-600 uppercase tracking-wider">Activity</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-600 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-white/5">
              {filteredUsers.map((user, idx) => (
                <tr key={user.id} className="hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-primary-500/20 to-brand-primary-400/20 flex items-center justify-center text-brand-primary-500 font-bold font-heading">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 dark:text-slate-800 text-sm">{user.name}</div>
                        <div className="text-xs text-slate-500 dark:text-slate-600">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-slate-600 dark:text-slate-600 font-medium">{user.role}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                      user.status === 'Active' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-500/10 dark:text-green-400' 
                        : 'bg-red-100 text-red-800 dark:bg-red-500/10 dark:text-red-400'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-600">
                    {user.joined}
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-600">{user.activity}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button onClick={() => handleAction('Notify', user)} className="p-1.5 text-slate-600 hover:text-brand-primary-500 transition-colors">
                        <Mail size={16} />
                      </button>
                      <button onClick={() => handleAction('Suspend/Activate', user)} className="p-1.5 text-slate-600 hover:text-brand-primary-500 transition-colors">
                        {user.status === 'Active' ? <UserX size={16} /> : <UserCheck size={16} />}
                      </button>
                      <button onClick={() => handleAction('Options', user)} className="p-1.5 text-slate-600 hover:text-slate-600 dark:hover:text-slate-800 transition-colors">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Mock */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-200 flex justify-between items-center text-sm text-slate-500">
          <div>Showing 1 to {filteredUsers.length} of {mockUsers.length} users</div>
          <div className="flex gap-2">
            <button className="px-3 py-1 rounded-lg border border-slate-200 dark:border-slate-200 hover:border-brand-primary-500 transition-colors disabled:opacity-50">Prev</button>
            <button className="px-3 py-1 rounded-lg border border-slate-200 dark:border-slate-200 hover:border-brand-primary-500 transition-colors">Next</button>
          </div>
        </div>

      </div>
    </div>
  );
}
