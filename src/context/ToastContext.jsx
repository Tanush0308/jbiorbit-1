import React, { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, AlertTriangle, Info, Loader2, X } from 'lucide-react';

const ToastContext = createContext();

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const addToast = useCallback((message, type = 'info', duration = 4000) => {
    const id = Date.now().toString() + Math.random().toString(36).substr(2, 9);
    setToasts((prev) => [...prev, { id, message, type, duration }]);
    
    if (duration > 0 && type !== 'loading') {
      setTimeout(() => {
        removeToast(id);
      }, duration);
    }
    return id;
  }, [removeToast]);

  const toast = {
    success: (msg, dur) => addToast(msg, 'success', dur),
    error: (msg, dur) => addToast(msg, 'error', dur),
    warning: (msg, dur) => addToast(msg, 'warning', dur),
    info: (msg, dur) => addToast(msg, 'info', dur),
    loading: (msg, dur = 0) => addToast(msg, 'loading', dur),
    dismiss: removeToast,
  };

  return (
    <ToastContext.Provider value={toast}>
      {children}
      <div className="fixed bottom-4 right-4 z-[9999] flex flex-col gap-2 pointer-events-none">
        <AnimatePresence>
          {toasts.map((t) => (
            <ToastItem key={t.id} toast={t} onDismiss={() => removeToast(t.id)} />
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

function ToastItem({ toast, onDismiss }) {
  const getIcon = () => {
    switch (toast.type) {
      case 'success': return <CheckCircle2 className="text-emerald-500" size={20} />;
      case 'error': return <XCircle className="text-red-500" size={20} />;
      case 'warning': return <AlertTriangle className="text-amber-500" size={20} />;
      case 'loading': return <Loader2 className="text-brand-primary-500 animate-spin" size={20} />;
      case 'info':
      default: return <Info className="text-blue-500" size={20} />;
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
      className="bg-white dark:bg-white border border-slate-200 dark:border-[#333] shadow-lg rounded-xl p-4 flex items-center gap-3 min-w-[300px] max-w-md pointer-events-auto"
    >
      <div className="shrink-0">{getIcon()}</div>
      <div className="flex-1 text-sm font-medium text-slate-800 dark:text-slate-600">
        {toast.message}
      </div>
      <button 
        onClick={onDismiss}
        className="text-slate-600 hover:text-slate-600 dark:hover:text-slate-800 transition-colors"
      >
        <X size={16} />
      </button>
    </motion.div>
  );
}
