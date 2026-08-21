import React, { useState } from 'react';
import { Bookmark, Check, Loader2, Clock, BookOpen } from 'lucide-react';
import { useToast } from '../../../context/ToastContext';
import { useAppContext } from '../../../context/AppContext';

export default function CoursesView() {
  const toast = useToast();
  const { enrolledCourses, setEnrolledCourses, bookmarks, toggleBookmark, addActivity } = useAppContext();
  
  const [activeTab, setActiveTab] = useState('All');
  const [loadingId, setLoadingId] = useState(null);

  const allCourses = [
    { id: 'c-1', title: 'Zero to Product-Market Fit', author: 'by Aditi Rao', level: 'INTERMEDIATE', tag: 'Bestseller', duration: '8 weeks', lessons: '42 lessons', price: 'Rs 4999', image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=500&q=80' },
    { id: 'c-2', title: 'Fundraising Playbook for Indian Startups', author: 'by Rohan Deshmukh', level: 'ADVANCED', tag: 'New', duration: '6 weeks', lessons: '28 lessons', price: 'Rs 6499', image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=500&q=80' },
    { id: 'c-3', title: 'D2C Growth Marketing 101', author: 'by Sneha Iyer', level: 'BEGINNER', tag: 'Popular', duration: '4 weeks', lessons: '22 lessons', price: 'Rs 2999', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80' },
    { id: 'c-4', title: 'Financial Modelling for Founders', author: 'by Karthik Reddy', level: 'INTERMEDIATE', tag: '', duration: '5 weeks', lessons: '30 lessons', price: 'Rs 5499', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=500&q=80' },
    { id: 'c-5', title: 'Legal Essentials - Startup Edition', author: 'by Priya Menon', level: 'BEGINNER', tag: '', duration: '3 weeks', lessons: '15 lessons', price: 'Rs 1999', image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=500&q=80' },
    { id: 'c-6', title: 'MBA Consulting Case Prep', author: 'by Vikram Nair', level: 'ADVANCED', tag: 'Cohort', duration: '8 weeks', lessons: '40 lessons', price: 'Rs 8999', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=500&q=80' },
  ];

  const handleEnroll = (course) => {
    setLoadingId(course.id);
    setTimeout(() => {
      setEnrolledCourses(prev => [...prev, course.id]);
      setLoadingId(null);
      toast.success(`Successfully enrolled in ${course.title}`);
      addActivity('Enrolled Course', `Started ${course.title}`);
    }, 1500);
  };

  const getFilteredCourses = () => {
    switch (activeTab) {
      case 'Enrolled': return allCourses.filter(c => enrolledCourses.includes(c.id));
      case 'Saved': return allCourses.filter(c => bookmarks.some(b => b.id === c.id));
      case 'All':
      default: return allCourses;
    }
  };

  const displayedCourses = getFilteredCourses();

  return (
    <div className="space-y-8">
      {/* Hero Banner */}
      <div className="relative w-full h-[180px] md:h-[220px] lg:h-[280px] rounded-[24px] border border-slate-200 dark:border-brand-dark-border overflow-hidden shadow-[0_0_40px_-15px_rgba(255,122,0,0.2)] bg-white mb-8">
        <img 
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2000&q=80" 
          alt="Banner" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-70 mix-blend-multiply" 
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-white dark:from-brand-dark-bg via-white/80 dark:via-brand-dark-bg/80 to-transparent"></div>
        <div className="absolute inset-0 p-6 md:p-10 lg:p-12 flex flex-col justify-end md:justify-center items-start md:items-end z-10 text-left md:text-right">
          <div className="w-full md:w-1/2 max-w-lg">
            <div className="text-xs font-extrabold text-brand-primary-500 uppercase tracking-widest mb-2">Courses</div>
            <h1 className="text-3xl lg:text-4xl font-heading font-extrabold text-slate-800 mb-2 tracking-tight">Structured programs from actual operators.</h1>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-200 pb-px overflow-x-auto custom-scrollbar">
        {['All', 'Saved', 'Enrolled'].map(tab => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 border-b-2 text-sm font-semibold transition-colors whitespace-nowrap
              ${activeTab === tab 
                ? 'border-brand-primary-500 text-brand-primary-500' 
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-slate-800'
              }`}
          >
            {tab} {tab === 'All' && `(${allCourses.length})`}
            {tab === 'Saved' && `(${bookmarks.filter(b => b.type === 'course').length})`}
            {tab === 'Enrolled' && `(${enrolledCourses.length})`}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedCourses.length === 0 ? (
          <div className="col-span-full py-16 flex flex-col items-center justify-center text-slate-500 text-center bg-white dark:bg-white rounded-2xl border border-slate-200 dark:border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-800 mb-2">No courses found</h3>
            <p className="text-sm">You haven't {activeTab.toLowerCase()} any courses yet.</p>
          </div>
        ) : (
          displayedCourses.map((course) => {
            const isEnrolled = enrolledCourses.includes(course.id);
            const isSaved = bookmarks.some(b => b.id === course.id);
            const isLoading = loadingId === course.id;

            return (
              <div key={course.id} className="bg-white dark:bg-white rounded-xl border border-slate-200 dark:border-slate-200 shadow-sm overflow-hidden group hover:shadow-md transition-all flex flex-col">
                
                {/* Top Banner */}
                <div className="h-36 relative overflow-hidden flex flex-col justify-between">
                  <img src={course.image} alt={course.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#110E0D] to-transparent opacity-80"></div>
                  
                  <div className="relative z-10 p-4 flex justify-between items-start">
                    <button onClick={() => toggleBookmark(course.id, 'course', course.title)} className="p-2 bg-white hover:bg-white rounded-full backdrop-blur-sm transition-colors">
                      <Bookmark size={16} className={`${isSaved ? 'fill-brand-primary-500 text-brand-primary-500' : 'text-slate-800'}`} />
                    </button>

                    {course.tag && (
                      <span className="bg-brand-primary-500 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded shadow-sm">
                        {course.tag}
                      </span>
                    )}
                  </div>
                  <div className="relative z-10 p-4 text-[10px] text-white font-bold uppercase tracking-widest">{course.level}</div>
                </div>

                {/* Bottom Content */}
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-bold text-lg text-slate-900 dark:text-slate-800 leading-tight mb-1 group-hover:text-brand-primary-500 transition-colors">{course.title}</h3>
                  <p className="text-sm text-slate-500 mb-4">{course.author}</p>
                  
                  <div className="flex items-center gap-4 text-xs text-slate-400 font-medium mb-6">
                    <span className="flex items-center gap-1.5"><Clock size={14} /> {course.duration}</span>
                    <span className="flex items-center gap-1.5"><BookOpen size={14} /> {course.lessons}</span>
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto">
                    {isEnrolled ? (
                      <div className="w-full">
                        <div className="flex justify-between text-xs font-bold text-emerald-500 mb-2">
                          <span>In Progress</span>
                          <span>24%</span>
                        </div>
                        <div className="w-full bg-slate-50 dark:bg-white/10 rounded-full h-1.5">
                          <div className="bg-emerald-500 h-1.5 rounded-full w-[24%]"></div>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="font-bold text-slate-900 dark:text-slate-800 text-lg">{course.price}</div>
                        <button 
                          onClick={() => handleEnroll(course)}
                          disabled={isLoading}
                          className="px-5 py-2 min-w-[90px] flex items-center justify-center bg-brand-primary-500 text-white text-xs font-bold rounded hover:bg-brand-primary-400 transition-colors"
                        >
                          {isLoading ? <Loader2 size={14} className="animate-spin" /> : 'Enroll'}
                        </button>
                      </>
                    )}
                  </div>
                </div>

              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

