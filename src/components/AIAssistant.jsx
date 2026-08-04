import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, User } from 'lucide-react';

const chatSequence = [
  { role: 'user', content: 'What are the current trends in sustainable packaging startups?' },
  { role: 'ai', content: 'Based on Q3 data, investment in sustainable packaging increased by 42%. Key growth areas include mycelium-based materials and biodegradable polymers. Would you like to see a list of top-performing startups in this sector?' },
  { role: 'user', content: 'Yes, and generate a competitive analysis matrix.' },
  { role: 'ai', content: 'Generating competitive matrix...', isAction: true },
  { role: 'ai', content: 'Matrix complete. I have identified 3 potential acquisition targets and 2 strategic partnership opportunities based on your current portfolio.' }
];

export default function AIAssistant() {
  const [messages, setMessages] = useState([chatSequence[0]]);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentIndex < chatSequence.length) {
      const timer = setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [...prev, chatSequence[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
        
        if (currentIndex + 1 < chatSequence.length) {
          setTimeout(() => setIsTyping(true), 1500); // Wait before starting next message
        }
      }, chatSequence[currentIndex].role === 'ai' ? 2500 : 1500); // AI takes longer to 'type'
      
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  return (
    <section className="py-24 bg-white dark:bg-white border-y border-slate-200 dark:border-slate-200 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[500px] bg-brand-primary-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16 relative z-10">
        
        {/* Left: Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-primary-500/10 border border-brand-primary-500/30 text-xs font-semibold text-brand-primary-500 font-mono">
            <Sparkles size={14} />
            <span>JBI AI Assistant</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-slate-900 dark:text-white leading-tight">
            Not just 'Powered by AI'. <br/>
            <span className="text-gradient">Driven by it.</span>
          </h2>

          <p className="text-slate-600 dark:text-[#CBD5E1] text-lg leading-relaxed max-w-lg">
            Interact directly with the ecosystem's brain. Ask complex business questions, generate competitive matrices, or request funding advice in plain English.
          </p>

          <div className="flex gap-4 flex-wrap">
            {['Market Analysis', 'Funding Advice', 'Startup Suggestions'].map((suggestion, i) => (
              <div key={i} className="px-4 py-2 rounded-full border border-slate-300 dark:border-slate-200 bg-slate-50 dark:bg-white/5 text-xs text-slate-700 dark:text-slate-600 font-medium hover:bg-slate-200 dark:hover:bg-slate-50 hover:border-brand-primary-500/50 dark:hover:border-brand-primary-500/50 transition-colors cursor-pointer">
                {suggestion}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Chat Interface Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex-1 w-full max-w-lg glass-card rounded-2xl border-slate-200 dark:border-slate-200 overflow-hidden shadow-2xl"
        >
          {/* Chat Header */}
          <div className="bg-slate-50 dark:bg-white/5 border-b border-slate-200 dark:border-slate-200 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-brand-primary-500 flex items-center justify-center text-white">
                <Sparkles size={16} />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">Orbit Intelligence</div>
                <div className="text-[10px] text-green-600 dark:text-green-400 flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 dark:bg-green-400 animate-pulse"></div> Online
                </div>
              </div>
            </div>
          </div>

          {/* Chat Body */}
          <div className="p-6 h-[400px] overflow-y-auto space-y-4 flex flex-col justify-end bg-gradient-to-b from-transparent to-slate-50 dark:to-[#110E0D]">
            <AnimatePresence>
              {messages.map((msg, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-brand-primary-500 text-white rounded-tr-sm' 
                      : msg.isAction 
                        ? 'bg-transparent border border-brand-primary-500/30 text-brand-primary-500 font-mono text-xs rounded-xl'
                        : 'bg-slate-200 dark:bg-white/10 text-white dark:text-slate-600 border border-slate-300 dark:border-slate-200 rounded-tl-sm shadow-sm dark:shadow-none'
                  }`}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-slate-200 p-3 rounded-2xl rounded-tl-sm flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-500 dark:bg-slate-400 animate-bounce"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-500 dark:bg-slate-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-500 dark:bg-slate-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Chat Input */}
          <div className="p-4 bg-slate-50 dark:bg-white/5 border-t border-slate-200 dark:border-slate-200">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Ask Orbit Intelligence..." 
                className="w-full bg-white dark:bg-white border border-slate-300 dark:border-slate-200 rounded-full py-3 pl-4 pr-12 text-sm text-slate-900 dark:text-slate-800 focus:outline-none focus:border-brand-primary-500 transition-colors"
                disabled
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-brand-primary-500 flex items-center justify-center text-white hover:bg-brand-primary-400 transition-colors">
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
