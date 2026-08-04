import React, { useContext, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext } from '../../context/AppContext';
import { DashboardContext } from '../../components/DashboardLayout';

// Lazy loading all possible modules
const StudentHome = lazy(() => import('./home/StudentHome'));
const EntrepreneurHome = lazy(() => import('./home/EntrepreneurHome'));
const EnterpriseHome = lazy(() => import('./home/EnterpriseHome'));

// Shared modules
const MentorshipView = lazy(() => import('./shared/MentorshipView'));
const CoursesView = lazy(() => import('./shared/CoursesView'));
const NetworkingView = lazy(() => import('./shared/NetworkingView'));
const PodcastsView = lazy(() => import('./shared/PodcastsView'));
const WebinarsView = lazy(() => import('./shared/WebinarsView'));
const CoFounderView = lazy(() => import('./shared/CoFounderView'));
const BusinessProjectReportView = lazy(() => import('./shared/BusinessProjectReportView'));
const BusinessInsightsView = lazy(() => import('./shared/BusinessInsightsView'));
const InvestmentFacilitationView = lazy(() => import('./shared/InvestmentFacilitationView'));
const StartupAssistanceView = lazy(() => import('./shared/StartupAssistanceView'));
const FranchiseOptionsView = lazy(() => import('./shared/FranchiseOptionsView'));
const DocumentaryShootsView = lazy(() => import('./shared/DocumentaryShootsView'));
const BusinessToolkitView = lazy(() => import('./shared/BusinessToolkitView'));

// Role specific
const InternshipsView = lazy(() => import('./student/InternshipsView'));
const StartupAnalyticsView = lazy(() => import('./entrepreneur/StartupAnalyticsView'));
const TalentManagementView = lazy(() => import('./enterprise/TalentManagementView'));

// JBI Team / Super Admin specific
const AdminDashboardView = lazy(() => import('./jbi-team/DashboardView'));
const UserManagementView = lazy(() => import('./jbi-team/UserManagementView'));
const VerificationCenterView = lazy(() => import('./jbi-team/VerificationCenterView'));
const ContentManagementView = lazy(() => import('./jbi-team/ContentManagementView'));
const PlatformAnalyticsView = lazy(() => import('./jbi-team/PlatformAnalyticsView'));
const FinanceView = lazy(() => import('./jbi-team/FinanceView'));
const SupportCenterView = lazy(() => import('./jbi-team/SupportCenterView'));
const AnnouncementsView = lazy(() => import('./jbi-team/AnnouncementsView'));
const AIIntelligenceView = lazy(() => import('./jbi-team/AIIntelligenceView'));
const PlatformSettingsView = lazy(() => import('./jbi-team/PlatformSettingsView'));

// Fallbacks
const NotFoundView = () => (
  <div className="flex flex-col items-center justify-center h-64 text-slate-500">
    <div className="text-4xl mb-4">🚧</div>
    <h2 className="text-xl font-bold text-slate-900 dark:text-slate-800 mb-2">Module Under Construction</h2>
    <p>This module is coming soon to the Business OS.</p>
  </div>
);

export default function DashboardApp() {
  const { activeTab } = useContext(DashboardContext);
  const { user } = useAppContext();

  if (!user) return null;

  // 1. Home Routing based on Role
  if (activeTab === 'Dashboard') {
    switch(user.role) {
      case 'Student': return <StudentHome />;
      case 'Entrepreneur / MSME': return <EntrepreneurHome />;
      case 'Enterprise': return <EnterpriseHome />;
      case 'JBI Team / Super Admin': return <AdminDashboardView />;
      default: return <StudentHome />; // fallback
    }
  }

  // 2. Shared Modules
  switch(activeTab) {
    case 'Mentorship': return <MentorshipView />;
    case 'Courses': return <CoursesView />;
    case 'Networking': return <NetworkingView />;
    case 'Podcasts': return <PodcastsView />;
    case 'Webinars': return <WebinarsView />;
    case 'Find Co-Founder': return <CoFounderView />;
    case 'Business Project Report': return <BusinessProjectReportView />;
    case 'Business Insights': return <BusinessInsightsView />;
    case 'Investment Facilitation': return <InvestmentFacilitationView />;
    case 'Start-up Assistance': return <StartupAssistanceView />;
    case 'Franchise Options': return <FranchiseOptionsView />;
    case 'Documentary Shoots': return <DocumentaryShootsView />;
    case 'Business Toolkit': return <BusinessToolkitView />;
    
    // 3. Role-Specific Modules
    case 'Internships': return <InternshipsView />;
    case 'Learning Progress': return <NotFoundView />; // Example
    case 'Startup Analytics': return <StartupAnalyticsView />;
    case 'Talent Management': return <TalentManagementView />;

    // 4. JBI Team Modules
    case 'User Management': return <UserManagementView />;
    case 'Verification Center': return <VerificationCenterView />;
    case 'Content Management': return <ContentManagementView />;
    case 'Platform Analytics': return <PlatformAnalyticsView />;
    case 'Finance': return <FinanceView />;
    case 'Support Center': return <SupportCenterView />;
    case 'Announcements': return <AnnouncementsView />;
    case 'AI Intelligence': return <AIIntelligenceView />;
    case 'Platform Settings': return <PlatformSettingsView />;

    default: return <NotFoundView />;
  }
}
