import React, { useContext, useState, createContext, Suspense, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, LogOut, ChevronDown, Search, Bell, Loader2, CheckCircle2, User, Settings, HelpCircle, X, Sparkles, Coins, PanelLeftClose, PanelLeftOpen
} from 'lucide-react';
import { RouteContext } from '../App';
import { RoleRegistry } from '../config/roles';
import { useAppContext } from '../context/AppContext';
import { useToast } from '../context/ToastContext';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useModal } from '../context/ModalContext';

export const DashboardContext = createContext();

export default function DashboardLayout({ children }) {
  const { user, logout, notifications, unreadNotificationsCount, markAllNotificationsRead, clearNotifications, setUser, addActivity, tokens } = useAppContext();
  const { setRoute } = useContext(RouteContext);
  const toast = useToast();
  const { openModal, closeModal } = useModal();
  
  // Persist sidebar state
  const [activeTab, setActiveTab] = useLocalStorage('jbi_active_tab', 'Dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDesktopSidebarCollapsed, setIsDesktopSidebarCollapsed] = useLocalStorage('jbi_sidebar_collapsed', false);
  
  // Dropdowns
  const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Transition State
  const [isTransitioning, setIsTransitioning] = useState(false);

  const roleRef = useRef();
  const notifRef = useRef();
  const profileRef = useRef();

  if (!user) {
    setRoute('landing');
    return null;
  }

  const currentRoleConfig = RoleRegistry[user.role] || RoleRegistry['Student'];

  const availableRoles = [
    'Student', 'Entrepreneur / MSME', 'Enterprise', 
    'Mentor / JBI Alliance Partner', 'JBI Team / Super Admin'
  ];

  // Global Search
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleGlobalSearch = () => {
    setIsSearchOpen(false);
    toast.success(`Searched for "${searchQuery}"`);
  };

  // Click outside handlers
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (roleRef.current && !roleRef.current.contains(event.target)) setIsRoleDropdownOpen(false);
      if (notifRef.current && !notifRef.current.contains(event.target)) setIsNotifOpen(false);
      if (profileRef.current && !profileRef.current.contains(event.target)) setIsProfileOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleRoleChange = (newRole) => {
    if (newRole === user.role) {
      setIsRoleDropdownOpen(false);
      return;
    }
    
    setIsRoleDropdownOpen(false);
    setIsTransitioning(true);
    
    const toastId = toast.loading(`Switching to ${newRole} Dashboard...`);
    
    setTimeout(() => {
      toast.dismiss(toastId);
      setUser({ ...user, role: newRole });
      setActiveTab('Dashboard'); // Reset to home for new role
      setIsTransitioning(false);
      toast.success(`Welcome to the ${newRole} Dashboard!`);
      addActivity('Switched Role', `Changed active profile to ${newRole}`);
    }, 1500);
  };

  const handleLogout = () => {
    setIsProfileOpen(false);
    logout();
  };

  const handleSettingsModal = () => {
    setIsProfileOpen(false);
    let editName = user.name || '';
    let editEmail = user.email || '';

    const handleSave = () => {
      setUser({ ...user, name: editName, email: editEmail });
      toast.success('Profile updated successfully!');
      addActivity('Profile Update', 'Updated user profile settings');
      closeModal();
    };

    openModal(
      <div className="p-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-800 mb-6">Settings & Profile</h2>
        <div className="space-y-4">
          <div>
            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">Full Name</label>
            <input 
              type="text" 
              defaultValue={editName}
              onChange={(e) => editName = e.target.value}
              className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-brand-primary-500 text-slate-900 dark:text-slate-800" 
            />
          </div>
          <div>
            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">Email Address</label>
            <input 
              type="email" 
              defaultValue={editEmail}
              onChange={(e) => editEmail = e.target.value}
              className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-brand-primary-500 text-slate-900 dark:text-slate-800" 
            />
          </div>
          <div>
            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">Role</label>
            <input 
              type="text" 
              value={user.role}
              disabled
              className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-500 dark:text-slate-600 cursor-not-allowed opacity-70" 
            />
            <p className="text-[10px] text-slate-600 mt-1">Use the Role Dropdown in the topbar to switch roles for demo purposes.</p>
          </div>
        </div>
        <div className="flex justify-end gap-3 mt-8">
          <button onClick={closeModal} className="px-5 py-2.5 bg-slate-50 dark:bg-white/5 text-slate-600 dark:text-slate-600 text-sm font-bold rounded-xl hover:bg-slate-200 dark:hover:bg-slate-50 transition-colors">
            Cancel
          </button>
          <button onClick={handleSave} className="px-6 py-2.5 bg-brand-primary-500 text-white text-sm font-bold rounded-xl hover:bg-brand-primary-400 transition-colors shadow-sm">
            Save Changes
          </button>
        </div>
      </div>
    );
  };

  return (
    <DashboardContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="h-screen overflow-hidden bg-slate-50 dark:bg-white flex font-sans text-slate-900 dark:text-slate-100">
      
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-white z-40 md:hidden backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Global Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-50 backdrop-blur-sm flex items-start justify-center pt-20 px-4"
            onClick={() => setIsSearchOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: -20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: -20 }}
              className="bg-white dark:bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-200"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center px-4 py-4 border-b border-slate-100 dark:border-slate-200">
                <Search size={20} className="text-slate-600 shrink-0" />
                <input 
                  autoFocus
                  type="text" 
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleGlobalSearch()}
                  placeholder="Search across Orbit (courses, mentors, templates)..." 
                  className="w-full bg-transparent border-none focus:outline-none text-slate-900 dark:text-white px-4 py-2 text-lg"
                />
                <button onClick={() => setIsSearchOpen(false)} className="text-[10px] font-bold text-slate-600 bg-slate-50 dark:bg-white/10 px-2 py-1 rounded">ESC</button>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-white max-h-96 overflow-y-auto">
                 {searchQuery ? (
                   <div className="py-8 text-center text-slate-500">
                     <p className="text-sm">Press Enter to search for "{searchQuery}"</p>
                   </div>
                 ) : (
                   <div className="space-y-4">
                     <div>
                       <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 px-2">Recent Searches</div>
                       <div className="space-y-1">
                         <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-50 text-left text-sm text-slate-700 dark:text-slate-600 transition-colors">
                           <Search size={14} className="text-slate-600" /> B2B Marketing Strategies
                         </button>
                         <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-50 text-left text-sm text-slate-700 dark:text-slate-600 transition-colors">
                           <Search size={14} className="text-slate-600" /> Pitch Deck Template
                         </button>
                       </div>
                     </div>
                   </div>
                 )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside 
        className={`fixed inset-y-0 left-0 z-40 ${isDesktopSidebarCollapsed ? 'w-20' : 'w-64'} bg-[#00427A] border-r border-white/10 flex flex-col text-white shadow-2xl md:relative md:flex shrink-0 transform transition-[width,transform] duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        
        {/* Logo Area */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-white/10 shrink-0 overflow-hidden">
          <div className="flex items-center gap-3 cursor-pointer overflow-hidden" onClick={() => setRoute('landing')}>
            <div className="h-8 shrink-0 flex items-center">
              <img src="/jbi-logo.jpeg" alt="JBI Logo" className="h-full w-auto object-contain rounded-sm" />
            </div>
            <div className={`font-heading font-bold text-lg text-white whitespace-nowrap overflow-hidden transition-all duration-300 ${isDesktopSidebarCollapsed ? 'max-w-0 opacity-0 ml-0' : 'max-w-[200px] opacity-100'}`}>
              <span className="text-white/90">Orbit</span>
            </div>
          </div>
          <button className="md:hidden text-white/70 hover:text-white shrink-0" onClick={() => setIsSidebarOpen(false)}>
            <X size={20} />
          </button>
        </div>
        
        {/* Navigation Area */}
        <div className="flex-1 overflow-y-auto py-6 flex flex-col gap-8 custom-scrollbar">
          {currentRoleConfig.sidebar.map((category, idx) => (
            <div key={idx} className="px-4">
              <div className={`text-[10px] font-bold text-white/60 uppercase tracking-widest px-3 truncate transition-all duration-300 ${isDesktopSidebarCollapsed ? 'max-h-0 opacity-0 mb-0' : 'max-h-10 opacity-100 mb-3'}`}>
                {category.category}
              </div>
              <nav className="space-y-1">
                {category.items.map((link) => {
                  const Icon = link.icon;
                  const isActive = activeTab === link.route;
                  return (
                    <button 
                      key={link.title} 
                      onClick={() => {
                        setActiveTab(link.route);
                        setIsSidebarOpen(false); // Close on mobile
                      }}
                      title={isDesktopSidebarCollapsed ? link.title : ''}
                      className={`w-full flex items-center px-3 py-2.5 rounded-lg transition-colors relative ${isActive ? 'bg-white text-brand-primary-500' : 'text-white/80 hover:bg-white/10 hover:text-white'} ${isDesktopSidebarCollapsed ? 'justify-center' : 'justify-start'}`}
                    >
                      <Icon size={18} strokeWidth={isActive ? 2.5 : 2} className={`shrink-0 ${isActive ? 'text-brand-primary-500' : ''}`} />
                      
                      <span className={`text-sm text-left truncate transition-all duration-300 overflow-hidden ${isActive ? 'font-semibold' : 'font-medium'} ${isDesktopSidebarCollapsed ? 'max-w-0 opacity-0 ml-0 flex-none' : 'max-w-[200px] opacity-100 ml-3 flex-1'}`}>
                        {link.title}
                      </span>
                      
                      {/* Notifications Badge for specific tabs */}
                      {link.route === 'Talent Management' && (
                        <>
                          <span className={`bg-brand-primary-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full shrink-0 transition-all duration-300 ${isDesktopSidebarCollapsed ? 'max-w-0 max-h-0 opacity-0 overflow-hidden p-0' : 'max-w-[20px] opacity-100 ml-2'}`}>3</span>
                          <span className={`absolute top-2 right-2 w-2 h-2 bg-brand-primary-500 rounded-full shrink-0 transition-all duration-300 ${isDesktopSidebarCollapsed ? 'opacity-100' : 'opacity-0'}`}></span>
                        </>
                      )}
                    </button>
                  )
                })}
              </nav>
            </div>
          ))}
        </div>

        {/* User Profile Area */}
        <div className="p-4 border-t border-white/10 bg-black/10 shrink-0 mt-auto" ref={profileRef}>
            <div 
              className={`flex items-center py-2 cursor-pointer hover:bg-white/10 rounded-lg transition-colors relative ${isDesktopSidebarCollapsed ? 'justify-center px-0' : 'px-2'}`}
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-brand-primary-500 font-bold text-sm shrink-0">
                {user.name ? user.name.substring(0, 2).toUpperCase() : 'DE'}
              </div>
              
              <div className={`flex-1 min-w-0 transition-all duration-300 overflow-hidden ${isDesktopSidebarCollapsed ? 'max-w-0 opacity-0 ml-0' : 'max-w-[200px] opacity-100 ml-3'}`}>
                <div className="text-sm font-bold text-white truncate">{user.name || 'Demo User'}</div>
                <div className="text-[10px] text-white/70 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block shrink-0"></span>
                  <span className="truncate">{user.role}</span>
                </div>
              </div>
              
              {/* Profile Menu */}
              <AnimatePresence>
                {isProfileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute bottom-full left-0 mb-2 w-56 bg-white dark:bg-white border border-slate-200 dark:border-slate-200 rounded-xl shadow-2xl overflow-hidden z-50"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="p-3 border-b border-slate-100 dark:border-slate-200">
                      <div className="text-sm font-bold text-slate-900 dark:text-slate-800">{user.name}</div>
                      <div className="text-xs text-slate-500">{user.email}</div>
                    </div>
                    <div className="p-2 space-y-1">
                      <button onClick={handleSettingsModal} className="w-full flex items-center gap-2 px-3 py-2 text-sm text-slate-700 dark:text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-50 rounded-lg transition-colors">
                        <User size={16} /> My Profile
                      </button>
                      <button onClick={handleSettingsModal} className="w-full flex items-center gap-2 px-3 py-2 text-sm text-slate-700 dark:text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-50 rounded-lg transition-colors">
                        <Settings size={16} /> Settings
                      </button>
                      <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-slate-700 dark:text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-50 rounded-lg transition-colors">
                        <HelpCircle size={16} /> Help & Support
                      </button>
                    </div>
                    <div className="p-2 border-t border-slate-100 dark:border-slate-200">
                      <button onClick={handleLogout} className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-colors font-semibold">
                        <LogOut size={16} /> Sign Out
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
      </motion.aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden bg-white dark:bg-white">
        
        {/* Topbar */}
        <header className="h-16 border-b border-slate-200 dark:border-slate-200 bg-white dark:bg-white flex items-center justify-between px-4 sm:px-8 shrink-0 z-30 shadow-sm relative">
          
          <div className="flex items-center flex-1 gap-4">
            <button className="md:hidden p-2 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-50 rounded-lg" onClick={() => setIsSidebarOpen(true)}>
              <Menu size={20} />
            </button>
            <button className="hidden md:flex p-2 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-50 rounded-lg transition-colors" onClick={() => setIsDesktopSidebarCollapsed(!isDesktopSidebarCollapsed)}>
              {isDesktopSidebarCollapsed ? <PanelLeftOpen size={20} /> : <PanelLeftClose size={20} />}
            </button>
            
            {/* Global Search Bar */}
            <div 
              onClick={() => setIsSearchOpen(true)}
              className="hidden sm:flex items-center cursor-text bg-slate-50 dark:bg-white px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-200 w-full max-w-xl group hover:border-brand-primary-500/50 transition-colors"
            >
              <Search size={18} className="text-slate-600 group-hover:text-brand-primary-500 transition-colors" />
              <div className="text-sm ml-3 text-slate-600 w-full flex-1">Search mentors, courses, templates...</div>
              {/* Keyboard Shortcut Hint */}
              <div className="hidden lg:flex items-center gap-1 opacity-50">
                <span className="text-[10px] font-bold border border-slate-300 dark:border-slate-200 rounded px-1.5 py-0.5">⌘</span>
                <span className="text-[10px] font-bold border border-slate-300 dark:border-slate-200 rounded px-1.5 py-0.5">K</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-6">
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-primary-500/10 text-brand-primary-500 text-sm font-bold border border-brand-primary-500/20" title="Your Token Balance">
              <Coins size={16} />
              <span>{tokens}</span>
            </div>
            {/* Demo Role Selector */}
            <div className="relative border-l border-slate-200 dark:border-slate-200 pl-2 sm:pl-6" ref={roleRef}>
              <div 
                onClick={() => setIsRoleDropdownOpen(!isRoleDropdownOpen)}
                className="flex items-center gap-2 px-3 py-1.5 border border-slate-200 dark:border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-50 transition-colors group"
              >
                <div className="hidden lg:block text-xs font-bold text-slate-600 tracking-wider uppercase mr-2">Demo Role:</div>
                <span className="text-sm font-semibold text-brand-primary-500 dark:text-brand-primary-400 group-hover:text-brand-primary-500">{user.role.split(' ')[0]}</span>
                <ChevronDown size={14} className={`text-slate-600 transition-transform ${isRoleDropdownOpen ? 'rotate-180' : ''}`} />
              </div>

              {/* Role Dropdown */}
              <AnimatePresence>
                {isRoleDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full right-0 mt-2 w-64 bg-white dark:bg-white border border-slate-200 dark:border-slate-200 rounded-xl shadow-2xl overflow-hidden z-50"
                  >
                    <div className="p-2">
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-widest px-3 py-2">Switch Dashboard</div>
                      {availableRoles.map(r => (
                        <button
                          key={r}
                          onClick={() => handleRoleChange(r)}
                          className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-left transition-colors
                            ${user.role === r ? 'bg-brand-primary-500/10 text-brand-primary-500 font-bold' : 'text-slate-700 dark:text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-50'}`}
                        >
                          {r}
                          {user.role === r && <CheckCircle2 size={16} />}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Notification Bell */}
            <div className="relative" ref={notifRef}>
              <button 
                onClick={() => {
                  setIsNotifOpen(!isNotifOpen);
                  if (!isNotifOpen && unreadNotificationsCount > 0) {
                    // Pre-mark as read when opening (optional, or rely on Mark All Read button)
                  }
                }}
                className={`p-2 rounded-full relative transition-colors ${isNotifOpen ? 'bg-slate-50 dark:bg-white/10 text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-50'}`}
              >
                <Bell size={20} />
                {unreadNotificationsCount > 0 && (
                  <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-brand-primary-500 border-2 border-white dark:border-slate-200 rounded-full"></span>
                )}
              </button>

              {/* Notifications Dropdown */}
              <AnimatePresence>
                {isNotifOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full right-0 mt-2 w-80 sm:w-96 bg-white dark:bg-white border border-slate-200 dark:border-slate-200 rounded-xl shadow-2xl overflow-hidden z-50 flex flex-col max-h-[400px]"
                  >
                    <div className="p-4 border-b border-slate-100 dark:border-slate-200 flex items-center justify-between bg-slate-50 dark:bg-white">
                      <h3 className="font-bold text-slate-900 dark:text-white">Notifications</h3>
                      <div className="flex gap-2">
                        {unreadNotificationsCount > 0 && (
                          <button onClick={markAllNotificationsRead} className="text-xs font-semibold text-brand-primary-500 hover:text-brand-primary-400">
                            Mark read
                          </button>
                        )}
                        <button onClick={clearNotifications} className="text-xs font-semibold text-slate-500 hover:text-slate-700 dark:hover:text-slate-800">
                          Clear
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex-1 overflow-y-auto p-2 space-y-1 custom-scrollbar">
                      {notifications.length === 0 ? (
                        <div className="py-8 text-center text-slate-500">
                          <Bell size={32} className="mx-auto mb-2 opacity-20" />
                          <p className="text-sm">You're all caught up!</p>
                        </div>
                      ) : (
                        notifications.map(n => (
                          <div key={n.id} className={`p-3 rounded-lg flex gap-3 ${n.read ? 'opacity-70' : 'bg-brand-primary-500/5 dark:bg-brand-primary-500/10'}`}>
                            <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${n.read ? 'bg-transparent' : 'bg-brand-primary-500'}`}></div>
                            <div>
                              <div className={`text-sm ${n.read ? 'font-medium text-slate-700 dark:text-slate-600' : 'font-bold text-slate-900 dark:text-white'}`}>{n.title}</div>
                              <div className="text-xs text-slate-500 mt-0.5 line-clamp-2">{n.message}</div>
                              <div className="text-[10px] text-slate-600 mt-1">{n.time}</div>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                    
                    <div className="p-3 border-t border-slate-100 dark:border-slate-200 bg-slate-50 dark:bg-white text-center">
                      <button className="text-sm font-semibold text-slate-700 dark:text-slate-600 hover:text-brand-primary-500 transition-colors">
                        View All Activity
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </header>

        {/* Dashboard Scrollable Content */}
        <div className="flex-1 overflow-auto relative bg-brand-panel bg-grid">
           {/* Subtle background texture for premium feel */}
           <div className="absolute inset-0 bg-white/20 pointer-events-none z-0 backdrop-blur-[1px]"></div>
           
           <div className="relative z-10 w-full h-full p-4 sm:p-6 lg:p-8">
              {isTransitioning ? (
                <div className="w-full h-full flex flex-col items-center justify-center text-brand-primary-500">
                  <Loader2 className="animate-spin w-10 h-10 mb-4" />
                  <div className="text-lg font-bold font-heading">Reconfiguring OS...</div>
                  <div className="text-sm text-slate-500 mt-2">Loading {user.role} modules and permissions</div>
                </div>
              ) : (
                <Suspense fallback={
                  <div className="w-full h-full flex flex-col items-center justify-center text-brand-primary-500">
                    <Loader2 className="animate-spin w-8 h-8 mb-4" />
                    <div className="text-sm font-bold animate-pulse">Loading Module...</div>
                  </div>
                }>
                  {children}
                </Suspense>
              )}
           </div>
        </div>

        {/* Global Help & FAQs Floating Button */}
        <button 
          onClick={() => {
            addActivity('Help & FAQs', 'Opened JBI Orbit FAQs');
            openModal(
              <div className="p-0 flex flex-col max-h-[80vh] min-h-[500px]">
                <div className="p-4 border-b border-slate-200 dark:border-slate-200 bg-brand-primary-500 text-white flex items-center gap-3 shrink-0">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <HelpCircle size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold">Orbit Help & FAQs</h3>
                    <div className="text-xs text-white/80">Find answers to common questions</div>
                  </div>
                </div>
                
                <div className="flex-1 overflow-y-auto p-6 bg-brand-primary-50 dark:bg-white custom-scrollbar">
                  <h4 className="text-xs font-bold text-brand-primary-700 uppercase tracking-widest mb-4">Frequently Asked Questions</h4>
                  
                  <div className="space-y-3">
                    <details className="group border border-slate-200 dark:border-slate-200 rounded-xl bg-white dark:bg-slate-50 overflow-hidden shadow-sm">
                      <summary className="flex cursor-pointer list-none items-center justify-between p-4 font-bold text-sm text-slate-800 outline-none [&::-webkit-details-marker]:hidden hover:bg-slate-50 transition-colors">
                        What does Startup Assistance do?
                        <span className="transition-transform duration-300 group-open:-rotate-180 text-slate-400">
                          <ChevronDown size={18} />
                        </span>
                      </summary>
                      <div className="px-4 pb-4 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                        Startup Assistance provides end-to-end guidance for founders, helping with company registration, compliance, initial team building, and preparing your startup for its first fundraising rounds.
                      </div>
                    </details>

                    <details className="group border border-slate-200 dark:border-slate-200 rounded-xl bg-white dark:bg-slate-50 overflow-hidden shadow-sm">
                      <summary className="flex cursor-pointer list-none items-center justify-between p-4 font-bold text-sm text-slate-800 outline-none [&::-webkit-details-marker]:hidden hover:bg-slate-50 transition-colors">
                        What are Business Project Reports?
                        <span className="transition-transform duration-300 group-open:-rotate-180 text-slate-400">
                          <ChevronDown size={18} />
                        </span>
                      </summary>
                      <div className="px-4 pb-4 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                        Business Project Reports are comprehensive, industry-specific documents that include market research, financial models, and feasibility studies to help you evaluate new business ideas or secure bank loans.
                      </div>
                    </details>

                    <details className="group border border-slate-200 dark:border-slate-200 rounded-xl bg-white dark:bg-slate-50 overflow-hidden shadow-sm">
                      <summary className="flex cursor-pointer list-none items-center justify-between p-4 font-bold text-sm text-slate-800 outline-none [&::-webkit-details-marker]:hidden hover:bg-slate-50 transition-colors">
                        How does the Mentorship program work?
                        <span className="transition-transform duration-300 group-open:-rotate-180 text-slate-400">
                          <ChevronDown size={18} />
                        </span>
                      </summary>
                      <div className="px-4 pb-4 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                        You can browse industry experts, view their availability, and book 1-on-1 video sessions. Mentors provide actionable advice on growth, product development, and strategy based on their real-world experience.
                      </div>
                    </details>

                    <details className="group border border-slate-200 dark:border-slate-200 rounded-xl bg-white dark:bg-slate-50 overflow-hidden shadow-sm">
                      <summary className="flex cursor-pointer list-none items-center justify-between p-4 font-bold text-sm text-slate-800 outline-none [&::-webkit-details-marker]:hidden hover:bg-slate-50 transition-colors">
                        What is the Business Toolkit?
                        <span className="transition-transform duration-300 group-open:-rotate-180 text-slate-400">
                          <ChevronDown size={18} />
                        </span>
                      </summary>
                      <div className="px-4 pb-4 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                        The Business Toolkit offers a collection of ready-to-use templates for pitch decks, financial sheets, legal contracts, and HR policies, saving you hundreds of hours in operational setup.
                      </div>
                    </details>
                  </div>
                </div>
              </div>
            );
          }}
          className="fixed bottom-6 right-6 w-14 h-14 bg-brand-primary-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-brand-primary-400 hover:scale-110 transition-all z-40 group"
        >
          <HelpCircle size={24} />
          <span className="absolute right-full mr-4 bg-white dark:bg-white text-white dark:text-slate-900 text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md border border-slate-200">Help & FAQs</span>
        </button>

      </main>

    </div>
    </DashboardContext.Provider>
  );
}
