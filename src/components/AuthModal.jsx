import React, { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, Mail, UserCircle } from 'lucide-react';
import { RouteContext } from '../App';
import { useAppContext } from '../context/AppContext';
import { useToast } from '../context/ToastContext';

export default function AuthModal({ isOpen, onClose }) {
  const { login } = useAppContext();
  const { setRoute } = useContext(RouteContext);
  const toast = useToast();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Student');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      login({ email, role, name: email.split('@')[0] });
      toast.success('🎉 You have been awarded 50 tokens!');
      setIsLoading(false);
      onClose();
    
    // Route based on role
    switch(role) {
      case 'Student':
        setRoute('dashboard_student');
        break;
      case 'Entrepreneur / MSME':
        setRoute('dashboard_entrepreneur');
        break;
      case 'Enterprise':
        setRoute('dashboard_enterprise');
        break;
      case 'Mentor / JBI Alliance Partner':
        setRoute('dashboard_mentor');
        break;
      case 'JBI Team / Super Admin':
        setRoute('dashboard_admin');
        break;
      default:
        setRoute('dashboard_student');
    }
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-white/60 dark:bg-white backdrop-blur-sm"
          ></motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-white dark:bg-slate-900-bg rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-200 overflow-hidden"
          >
            {/* Top Decoration */}
            <div className="h-2 w-full bg-gradient-to-r from-brand-primary-500 to-brand-primary-400"></div>
            
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="font-heading font-bold text-2xl text-slate-900 dark:text-slate-800">Welcome Back</h2>
                  <p className="text-sm text-slate-500 dark:text-slate-600 mt-1">Sign in to your JBI Orbit account</p>
                </div>
                <button 
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-slate-50 dark:hover:bg-slate-50 text-slate-600 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-600 uppercase tracking-wider">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-600">
                      <Mail size={16} />
                    </div>
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-white border border-slate-200 dark:border-slate-200 rounded-xl py-3 pl-10 pr-4 text-sm text-slate-900 dark:text-slate-800 focus:outline-none focus:border-brand-primary-500 transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-600 uppercase tracking-wider">Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-600">
                      <Lock size={16} />
                    </div>
                    <input 
                      type="password" 
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-white border border-slate-200 dark:border-slate-200 rounded-xl py-3 pl-10 pr-4 text-sm text-slate-900 dark:text-slate-800 focus:outline-none focus:border-brand-primary-500 transition-colors"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-600 uppercase tracking-wider">Role</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-600">
                      <UserCircle size={16} />
                    </div>
                    <select 
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-white border border-slate-200 dark:border-slate-200 rounded-xl py-3 pl-10 pr-4 text-sm text-slate-900 dark:text-slate-800 focus:outline-none focus:border-brand-primary-500 transition-colors appearance-none"
                    >
                      <option>Student</option>
                      <option>Entrepreneur / MSME</option>
                      <option>Enterprise</option>
                      <option>Mentor / JBI Alliance Partner</option>
                      <option>JBI Team / Super Admin</option>
                    </select>
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-3 rounded-xl font-bold text-sm shadow-lg transition-all ${
                    isLoading 
                      ? 'bg-slate-200 dark:bg-white/10 text-slate-600 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-brand-primary-500 to-brand-primary-400 text-white hover:shadow-brand-primary-500/25 hover:scale-[1.02]'
                  }`}
                >
                  {isLoading ? 'Signing In...' : 'Sign In'}
                </button>
              </form>
            </div>
            
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
