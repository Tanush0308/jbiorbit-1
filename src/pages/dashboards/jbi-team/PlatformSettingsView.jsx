import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Settings, Globe, Shield, Bell, Mail, Layout, CreditCard, Palette, Save
} from 'lucide-react';
import { useToast } from '../../../context/ToastContext';

export default function PlatformSettingsView() {
  const toast = useToast();
  const [activeSection, setActiveSection] = useState('General');

  const sections = [
    { name: 'General', icon: Globe },
    { name: 'Branding', icon: Palette },
    { name: 'Appearance', icon: Layout },
    { name: 'Notifications', icon: Bell },
    { name: 'Email Templates', icon: Mail },
    { name: 'Roles & Permissions', icon: Shield },
    { name: 'Integrations', icon: CreditCard },
  ];

  const handleSave = (e) => {
    e.preventDefault();
    toast.success('Settings saved successfully.');
  };

  return (
    <div className="space-y-6">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold font-heading text-slate-900 dark:text-slate-800">Platform Settings</h1>
          <p className="text-slate-500 dark:text-slate-600 mt-1">Configure global platform preferences and rules.</p>
        </div>
        <button onClick={handleSave} className="flex items-center gap-2 bg-brand-primary-500 text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-brand-primary-500/20 hover:bg-brand-primary-500/90 transition-all hover:-translate-y-0.5">
          <Save size={18} /> Save Changes
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Sidebar Nav */}
        <div className="w-full lg:w-64 flex-shrink-0">
          <div className="bg-white dark:bg-white rounded-2xl p-2 border border-slate-200 dark:border-slate-200 shadow-sm space-y-1">
            {sections.map((section) => (
              <button
                key={section.name}
                onClick={() => setActiveSection(section.name)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  activeSection === section.name 
                    ? 'bg-brand-primary-500/10 text-brand-primary-500' 
                    : 'text-slate-600 dark:text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-50 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <section.icon size={18} />
                {section.name}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-white dark:bg-white rounded-2xl border border-slate-200 dark:border-slate-200 shadow-sm p-6 md:p-8">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-800 font-heading mb-6 flex items-center gap-2">
            <Settings size={22} className="text-brand-primary-500" /> {activeSection} Settings
          </h2>

          <form className="space-y-6 max-w-2xl" onSubmit={handleSave}>
            
            {activeSection === 'General' && (
              <>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-600 mb-2">Platform Name</label>
                  <input type="text" defaultValue="JBI Orbit Business OS" className="w-full bg-slate-50 dark:bg-white border border-slate-200 dark:border-slate-200 rounded-xl py-3 px-4 text-sm text-slate-900 dark:text-slate-800 focus:outline-none focus:border-brand-primary-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-600 mb-2">Contact Email</label>
                  <input type="email" defaultValue="support@jbiorbit.com" className="w-full bg-slate-50 dark:bg-white border border-slate-200 dark:border-slate-200 rounded-xl py-3 px-4 text-sm text-slate-900 dark:text-slate-800 focus:outline-none focus:border-brand-primary-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-600 mb-2">Timezone</label>
                  <select className="w-full bg-slate-50 dark:bg-white border border-slate-200 dark:border-slate-200 rounded-xl py-3 px-4 text-sm text-slate-900 dark:text-slate-800 focus:outline-none focus:border-brand-primary-500 transition-colors appearance-none">
                    <option>Asia/Kolkata (IST)</option>
                    <option>America/New_York (EST)</option>
                    <option>Europe/London (GMT)</option>
                  </select>
                </div>
                <div className="flex items-center gap-3 pt-2">
                  <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-slate-300 text-brand-primary-500 focus:ring-brand-primary-500" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-600">Enable Maintenance Mode</span>
                </div>
              </>
            )}

            {activeSection === 'Branding' && (
              <>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-600 mb-2">Primary Color (Hex)</label>
                  <div className="flex gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#075A9D] border-2 border-white dark:border-slate-200 shadow-md"></div>
                    <input type="text" defaultValue="#075A9D" className="flex-1 bg-slate-50 dark:bg-white border border-slate-200 dark:border-slate-200 rounded-xl py-3 px-4 text-sm text-slate-900 dark:text-slate-800 focus:outline-none focus:border-brand-primary-500 transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-600 mb-2">Secondary Color (Hex)</label>
                  <div className="flex gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#FFB347] border-2 border-white dark:border-slate-200 shadow-md"></div>
                    <input type="text" defaultValue="#FFB347" className="flex-1 bg-slate-50 dark:bg-white border border-slate-200 dark:border-slate-200 rounded-xl py-3 px-4 text-sm text-slate-900 dark:text-slate-800 focus:outline-none focus:border-brand-primary-500 transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-600 mb-2">Logo URL</label>
                  <input type="text" defaultValue="/assets/logo.png" className="w-full bg-slate-50 dark:bg-white border border-slate-200 dark:border-slate-200 rounded-xl py-3 px-4 text-sm text-slate-900 dark:text-slate-800 focus:outline-none focus:border-brand-primary-500 transition-colors" />
                </div>
              </>
            )}

            {/* Placeholder for other sections */}
            {activeSection !== 'General' && activeSection !== 'Branding' && (
              <div className="py-12 flex flex-col items-center justify-center text-slate-600">
                <Settings size={48} className="mb-4 opacity-50" />
                <p>Mock settings panel for {activeSection}.</p>
                <p className="text-sm mt-2 text-center max-w-sm">This is an MVP representation. Full configuration will be available in production.</p>
              </div>
            )}

          </form>
        </div>
      </div>
    </div>
  );
}
