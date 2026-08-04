import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer,
  LineChart, Line, AreaChart, Area, PieChart, Pie, Cell, Legend
} from 'recharts';
import { Calendar, Download, TrendingUp, Users, DollarSign } from 'lucide-react';
import { useToast } from '../../../context/ToastContext';

// Dummy Data
const monthlyData = [
  { name: 'Jan', users: 4000, revenue: 2400 },
  { name: 'Feb', users: 5000, revenue: 3500 },
  { name: 'Mar', users: 6500, revenue: 4200 },
  { name: 'Apr', users: 8000, revenue: 5800 },
  { name: 'May', users: 11000, revenue: 8900 },
  { name: 'Jun', users: 14000, revenue: 12000 },
  { name: 'Jul', users: 18542, revenue: 18400 },
];

const roleDistribution = [
  { name: 'Students', value: 12341 },
  { name: 'Entrepreneurs', value: 2864 },
  { name: 'Mentors', value: 426 },
  { name: 'Organizations', value: 152 },
];
const COLORS = ['#075A9D', '#4C88B8', '#064F8A', '#88B0D0'];

const summaryCards = [
  { title: 'Total Revenue', value: '₹1.8Cr', trend: '+24%', icon: DollarSign, color: 'text-brand-primary-400', bg: 'bg-brand-primary-400/10' },
  { title: 'Total Users', value: '18.5k', trend: '+12%', icon: Users, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { title: 'Conversion Rate', value: '8.4%', trend: '+1.2%', icon: TrendingUp, color: 'text-brand-primary-500', bg: 'bg-brand-primary-500/10' },
];

export default function PlatformAnalyticsView() {
  const toast = useToast();
  const [dateRange, setDateRange] = useState('30 Days');

  const handleExport = () => {
    toast.success('Analytics report exported successfully.');
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold font-heading text-slate-900 dark:text-slate-900 dark:text-white">Platform Analytics</h1>
          <p className="text-slate-500 dark:text-slate-600 mt-1">High-level insights into platform growth and engagement.</p>
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="flex bg-slate-50 dark:bg-white p-1 rounded-xl">
            {['7 Days', '30 Days', '90 Days', '1 Year'].map((range) => (
              <button
                key={range}
                onClick={() => setDateRange(range)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  dateRange === range 
                    ? 'bg-white dark:bg-white text-brand-primary-500 shadow-sm' 
                    : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-600'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
          <button onClick={handleExport} className="p-2.5 bg-slate-50 dark:bg-white hover:bg-slate-200 dark:hover:bg-slate-50 text-slate-600 dark:text-slate-600 rounded-xl transition-colors">
            <Download size={20} />
          </button>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {summaryCards.map((card, idx) => (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            key={idx}
            className="bg-white dark:bg-white rounded-2xl p-6 border border-slate-200 dark:border-slate-200 shadow-sm"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl ${card.bg} ${card.color}`}>
                <card.icon size={24} />
              </div>
              <span className="flex items-center text-sm font-bold text-green-500 bg-green-500/10 px-2.5 py-1 rounded-lg">
                {card.trend}
              </span>
            </div>
            <h3 className="text-slate-500 dark:text-slate-600 text-sm font-semibold uppercase tracking-wider">{card.title}</h3>
            <div className="text-4xl font-bold text-slate-900 dark:text-slate-800 mt-1 font-heading">{card.value}</div>
          </motion.div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Revenue Growth (Area Chart) */}
        <div className="lg:col-span-2 bg-white dark:bg-white rounded-2xl p-6 border border-slate-200 dark:border-slate-200 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-800 font-heading mb-6">Revenue Growth</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={monthlyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#075A9D" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#075A9D" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333" opacity={0.2} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#888', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#888', fontSize: 12 }} tickFormatter={(val) => `₹${val/1000}k`} />
                <RechartsTooltip 
                  contentStyle={{ backgroundColor: '#1E1E1E', border: 'none', borderRadius: '12px', color: '#fff' }}
                  itemStyle={{ color: '#075A9D', fontWeight: 'bold' }}
                />
                <Area type="monotone" dataKey="revenue" stroke="#075A9D" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Role Distribution (Pie Chart) */}
        <div className="bg-white dark:bg-white rounded-2xl p-6 border border-slate-200 dark:border-slate-200 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-800 font-heading mb-6">Role Distribution</h2>
          <div className="h-80 flex flex-col items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={roleDistribution}
                  cx="50%"
                  cy="45%"
                  innerRadius={80}
                  outerRadius={110}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {roleDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <RechartsTooltip 
                  contentStyle={{ backgroundColor: '#1E1E1E', border: 'none', borderRadius: '12px', color: '#fff' }}
                />
                <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ fontSize: '12px', color: '#888' }}/>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* User Growth (Bar Chart) */}
        <div className="lg:col-span-3 bg-white dark:bg-white rounded-2xl p-6 border border-slate-200 dark:border-slate-200 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-800 font-heading mb-6">User Acquisition</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }} barSize={30}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333" opacity={0.2} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#888', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#888', fontSize: 12 }} tickFormatter={(val) => `${val/1000}k`} />
                <RechartsTooltip 
                  cursor={{ fill: '#333', opacity: 0.1 }}
                  contentStyle={{ backgroundColor: '#1E1E1E', border: 'none', borderRadius: '12px', color: '#fff' }}
                  itemStyle={{ color: '#3B82F6', fontWeight: 'bold' }}
                />
                <Bar dataKey="users" fill="#3B82F6" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
}
