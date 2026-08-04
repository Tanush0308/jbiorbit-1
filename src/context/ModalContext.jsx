import React, { createContext, useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const ModalContext = createContext();

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}

export function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [modalOptions, setModalOptions] = useState({});

  const openModal = (content, options = {}) => {
    setModalContent(content);
    setModalOptions(options);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => {
      setModalContent(null);
      setModalOptions({});
    }, 200); // Wait for exit animation
  };

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-white backdrop-blur-sm z-[9990]"
            />
            
            {/* Modal Container */}
            <div className="fixed inset-0 z-[9991] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className={`bg-white dark:bg-white border border-slate-200 dark:border-slate-200 dark:border-brand-dark-border rounded-2xl shadow-2xl pointer-events-auto overflow-hidden flex flex-col max-h-[90vh] ${modalOptions.className || 'w-full max-w-lg'}`}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                {(modalOptions.title || !modalOptions.hideClose) && (
                  <div className="flex items-center justify-between p-4 border-b border-slate-100 dark:border-slate-200">
                    <h2 className="text-lg font-bold text-slate-900 dark:text-slate-800">
                      {modalOptions.title || ''}
                    </h2>
                    {!modalOptions.hideClose && (
                      <button 
                        onClick={closeModal}
                        className="p-1 text-slate-600 hover:text-slate-600 dark:hover:text-slate-800 transition-colors rounded-lg hover:bg-slate-50 dark:hover:bg-slate-50"
                      >
                        <X size={20} />
                      </button>
                    )}
                  </div>
                )}
                
                {/* Content */}
                <div className="overflow-y-auto p-4 sm:p-6 custom-scrollbar">
                  {modalContent}
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </ModalContext.Provider>
  );
}
