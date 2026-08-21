import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, CheckCircle2, Award, Clock, PlayCircle, Download } from 'lucide-react';

export default function LearningProgressView() {
  const stats = [
    { label: 'ACTIVE COURSES', value: '3', sub: '2 deadlines approaching', subColor: 'text-amber-500', icon: BookOpen },
    { label: 'COMPLETED', value: '8', sub: '+1 this month', subColor: 'text-emerald-500', icon: CheckCircle2 },
    { label: 'CERTIFICATES', value: '5', sub: 'Top 10% of learners', subColor: 'text-brand-primary-500', icon: Award },
    { label: 'HOURS LEARNT', value: '142', sub: '12h this week', subColor: 'text-emerald-500', icon: Clock },
  ];

  const activeCourses = [
    { 
      title: 'Advanced Product Management', 
      progress: 65, 
      nextModule: 'Module 4: Pricing Strategies',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=500&q=80',
      timeLeft: '2h 15m'
    },
    { 
      title: 'Growth Marketing Strategies', 
      progress: 30, 
      nextModule: 'Module 2: Customer Acquisition Costs',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80',
      timeLeft: '4h 30m'
    },
    { 
      title: 'Financial Modelling for Founders', 
      progress: 15, 
      nextModule: 'Module 1: Basic Accounting Principles',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=500&q=80',
      timeLeft: '6h 45m'
    }
  ];

  const completedCourses = [
    { title: 'Startup Legal Essentials', completedOn: 'Aug 12, 2026', grade: '95%' },
    { title: 'Zero to Product-Market Fit', completedOn: 'Jul 28, 2026', grade: '92%' },
    { title: 'B2B Sales Masterclass', completedOn: 'Jun 15, 2026', grade: '88%' }
  ];

  const skills = [
    { name: 'Product Strategy', progress: 85, color: 'bg-brand-primary-500' },
    { name: 'Marketing & SEO', progress: 70, color: 'bg-amber-500' },
    { name: 'Financial Analysis', progress: 40, color: 'bg-emerald-500' },
    { name: 'Leadership', progress: 90, color: 'bg-indigo-500' },
  ];

  return (
    <div className="space-y-8 pb-10">
      {/* Hero Banner */}
      <div className="relative w-full h-[180px] md:h-[220px] lg:h-[260px] rounded-[24px] border border-slate-200 dark:border-brand-dark-border overflow-hidden shadow-[0_0_40px_-15px_rgba(255,122,0,0.2)] bg-white mb-8">
        <img 
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=2000&q=80" 
          alt="Learning Progress Banner" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-80 mix-blend-multiply" 
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-white dark:from-brand-dark-bg via-white/80 dark:via-brand-dark-bg/80 to-transparent"></div>
        <div className="absolute inset-0 p-6 md:p-10 lg:p-12 flex flex-col justify-end md:justify-center items-start md:items-end z-10 text-left md:text-right">
          <div className="w-full md:w-1/2 max-w-lg">
            <div className="text-xs font-extrabold text-brand-primary-500 uppercase tracking-widest mb-2 drop-shadow-md">Learning Progress</div>
            <h1 className="text-3xl lg:text-4xl font-heading font-extrabold text-slate-900 dark:text-white mb-2 tracking-tight drop-shadow-lg">Track your growth journey.</h1>
            <p className="text-slate-600 font-medium drop-shadow-md">Monitor your course progress, skills, and certifications all in one place.</p>
          </div>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-white p-5 rounded-2xl border border-slate-200 dark:border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{s.label}</div>
                <Icon size={16} className="text-slate-600" />
              </div>
              <div className="text-4xl font-heading font-extrabold text-slate-900 dark:text-slate-800 mb-2">{s.value}</div>
              <div className={`text-xs font-semibold ${s.subColor}`}>{s.sub}</div>
            </motion.div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Active Courses */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-white p-6 rounded-2xl border border-slate-200 dark:border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-800 mb-6">Continue Learning</h2>
            
            <div className="space-y-6">
              {activeCourses.map((course, i) => (
                <div key={i} className="flex flex-col sm:flex-row gap-5 p-4 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all group">
                  <div className="w-full sm:w-32 h-24 rounded-lg overflow-hidden shrink-0">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className="font-bold text-slate-900 dark:text-slate-800 mb-1">{course.title}</h3>
                    <div className="text-xs text-slate-500 mb-3 flex items-center gap-2">
                      <PlayCircle size={14} className="text-brand-primary-500" /> 
                      Up next: <span className="font-medium text-slate-700">{course.nextModule}</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="flex-1 bg-slate-100 dark:bg-slate-200 rounded-full h-2">
                        <div className="bg-brand-primary-500 h-2 rounded-full relative" style={{ width: `${course.progress}%` }}>
                           <span className="absolute right-0 top-3 text-[10px] font-bold text-slate-500 transform translate-x-1/2">{course.progress}%</span>
                        </div>
                      </div>
                      <span className="text-[10px] font-medium text-slate-500 whitespace-nowrap">{course.timeLeft} left</span>
                    </div>
                  </div>
                  <div className="flex items-center sm:justify-end">
                     <button className="w-full sm:w-auto px-5 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg hover:bg-slate-800 transition-colors shadow-sm">
                       Resume
                     </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Skills & Certificates */}
        <div className="space-y-6">
          
          {/* Skills Matrix */}
          <div className="bg-white dark:bg-white p-6 rounded-2xl border border-slate-200 dark:border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-800 mb-6">Skills Mastery</h2>
            <div className="space-y-5">
              {skills.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-200 rounded-full h-2">
                    <div className={`${skill.color} h-2 rounded-full`} style={{ width: `${skill.progress}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates */}
          <div className="bg-white dark:bg-white p-6 rounded-2xl border border-slate-200 dark:border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-800 mb-6">Recent Certificates</h2>
            <div className="space-y-4">
              {completedCourses.map((course, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0">
                    <Award size={18} />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-sm text-slate-900 dark:text-slate-800 leading-tight mb-1">{course.title}</div>
                    <div className="text-[10px] text-slate-500 flex items-center justify-between">
                      <span>{course.completedOn}</span>
                      <span className="font-bold text-slate-700">Grade: {course.grade}</span>
                    </div>
                  </div>
                  <button className="text-brand-primary-500 hover:text-brand-primary-600 transition-colors shrink-0 pt-1" title="Download Certificate">
                    <Download size={16} />
                  </button>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-2 border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors">
              View All Achievements
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
