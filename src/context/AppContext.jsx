import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useToast } from './ToastContext';

export const AppContext = createContext();

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}

export function AppProvider({ children }) {
  const toast = useToast();

  // Local Storage State
  const [theme, setTheme] = useLocalStorage('jbi_theme', 'dark');
  const [user, setUser] = useLocalStorage('jbi_user', null); // { name, email, role }
  const [bookmarks, setBookmarks] = useLocalStorage('jbi_bookmarks', []);
  const [appliedInternships, setAppliedInternships] = useLocalStorage('jbi_applied_internships', []);
  const [enrolledCourses, setEnrolledCourses] = useLocalStorage('jbi_enrolled_courses', []);
  const [connections, setConnections] = useLocalStorage('jbi_connections', []);
  const [recentDownloads, setRecentDownloads] = useLocalStorage('jbi_recent_downloads', []);
  const [notifications, setNotifications] = useLocalStorage('jbi_notifications', [
    { id: '1', title: 'Welcome to JBI Orbit', message: 'Your account is ready.', read: false, time: 'Just now' }
  ]);
  const [recentActivity, setRecentActivity] = useLocalStorage('jbi_recent_activity', []);
  const [tokens, setTokens] = useLocalStorage('jbi_tokens', 0);

  // Theme Sync (Forced Light Mode for Corporate Branding)
  useEffect(() => {
    document.documentElement.classList.remove('dark');
  }, [theme]);

  const toggleTheme = () => setTheme('light'); // No-op, always light

  // Auth Functions
  const login = (userData) => {
    setUser(userData);
    setTokens(prev => prev + 50);
    toast.success(`Welcome back, ${userData.name || 'User'}!`);
  };

  const logout = () => {
    setUser(null);
    toast.info('Logged out successfully');
  };

  // Activity Tracking
  const addActivity = (action, details) => {
    const newActivity = {
      id: Date.now().toString(),
      action,
      details,
      timestamp: new Date().toISOString(),
    };
    setRecentActivity(prev => [newActivity, ...prev].slice(0, 10)); // Keep last 10
  };

  // Notifications
  const addNotification = (title, message) => {
    const newNotification = {
      id: Date.now().toString(),
      title,
      message,
      read: false,
      time: 'Just now'
    };
    setNotifications(prev => [newNotification, ...prev]);
  };

  const markAllNotificationsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  const unreadNotificationsCount = notifications.filter(n => !n.read).length;

  // Bookmarking
  const toggleBookmark = (id, type, title) => {
    setBookmarks(prev => {
      const exists = prev.find(b => b.id === id);
      if (exists) {
        toast.info(`Removed ${title} from bookmarks`);
        return prev.filter(b => b.id !== id);
      } else {
        toast.success(`Saved ${title} to bookmarks`);
        addActivity('Bookmarked', title);
        return [...prev, { id, type, title, savedAt: new Date().toISOString() }];
      }
    });
  };

  const isBookmarked = (id) => bookmarks.some(b => b.id === id);

  return (
    <AppContext.Provider value={{
      theme, toggleTheme, setTheme,
      user, setUser, login, logout,
      bookmarks, toggleBookmark, isBookmarked,
      appliedInternships, setAppliedInternships,
      enrolledCourses, setEnrolledCourses,
      connections, setConnections,
      recentDownloads, setRecentDownloads,
      notifications, addNotification, markAllNotificationsRead, clearNotifications, unreadNotificationsCount,
      recentActivity, addActivity,
      tokens, setTokens
    }}>
      {children}
    </AppContext.Provider>
  );
}
