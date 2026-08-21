import React from 'react';

const footerLinks = {
  Platform: ['Dashboard', 'Analytics', 'AI Chat', 'Business Intelligence'],
  Solutions: ['For Students', 'For Entrepreneurs', 'For Enterprises', 'For Mentors'],
  Resources: ['Documentation', 'API Reference', 'Community', 'Blog'],
  Company: ['About Us', 'Careers', 'Privacy Policy', 'Terms of Service'],
};

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-200 bg-slate-50 dark:bg-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          
          <div className="col-span-2 lg:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <img src="/jbi-logo.png" alt="JBI Logo" className="h-6 w-auto object-contain rounded shadow-sm" />
              <span className="font-heading font-bold text-lg text-brand-primary-900 dark:text-white">Orbit</span>
            </div>
            <p className="text-sm text-slate-500 dark:text-[#CBD5E1]">
              The enterprise-grade AI operating system for business growth.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-slate-900 dark:text-slate-800 mb-4 text-sm">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-slate-500 hover:text-brand-primary-500 dark:text-slate-600 dark:hover:text-brand-primary-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500 dark:text-slate-600">
            © {new Date().getFullYear()} Jadhavar Business Intelligence. All rights reserved.
          </p>
          <div className="flex gap-4">
            {/* Social Icons Placeholders */}
            <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-white/5 flex items-center justify-center hover:bg-brand-primary-500/20 cursor-pointer transition-colors">
              <span className="text-slate-500 dark:text-slate-600 text-xs">𝕏</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-white/5 flex items-center justify-center hover:bg-brand-primary-500/20 cursor-pointer transition-colors">
              <span className="text-slate-500 dark:text-slate-600 text-xs">in</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
