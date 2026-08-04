import React, { useState } from 'react';
import Landing from './pages/Landing';
import About from './pages/About';
import AuthModal from './components/AuthModal';
import DashboardLayout from './components/DashboardLayout';
import DashboardApp from './pages/dashboards/DashboardApp';
import { ToastProvider } from './context/ToastContext';
import { ModalProvider } from './context/ModalContext';
import { AppProvider } from './context/AppContext';

export const RouteContext = React.createContext();

function AppContent() {
  const [route, setRoute] = useState('landing');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const renderRoute = () => {
    switch(route) {
      case 'landing': return <Landing />;
      case 'about': return <About />;
      case 'dashboard': 
      case 'dashboard_student': 
      case 'dashboard_entrepreneur': 
      case 'dashboard_enterprise': 
      case 'dashboard_mentor': 
      case 'dashboard_admin': 
        return <DashboardLayout><DashboardApp /></DashboardLayout>;
      default: return <Landing />;
    }
  };

  return (
    <RouteContext.Provider value={{ route, setRoute, isAuthModalOpen, setIsAuthModalOpen }}>
      {renderRoute()}
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </RouteContext.Provider>
  );
}

function App() {
  return (
    <ToastProvider>
      <ModalProvider>
        <AppProvider>
          <AppContent />
        </AppProvider>
      </ModalProvider>
    </ToastProvider>
  );
}

export default App;
