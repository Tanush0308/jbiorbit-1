import React, { useContext } from 'react';
import { DashboardContext } from '../../components/DashboardLayout';

import StudentHomeView from './student/StudentHomeView';
import MentorshipView from './student/MentorshipView';
import InternshipsView from './student/InternshipsView';
import CoFounderView from './student/CoFounderView';
import NetworkingView from './student/NetworkingView';
import CoursesView from './student/CoursesView';
import WebinarsView from './student/WebinarsView';
import PodcastsView from './student/PodcastsView';

export default function StudentDashboard() {
  const { activeTab } = useContext(DashboardContext);

  const renderView = () => {
    switch (activeTab) {
      case 'Dashboard':
        return <StudentHomeView />;
      case 'Mentorship':
        return <MentorshipView />;
      case 'Internships':
        return <InternshipsView />;
      case 'Find Co-Founder':
        return <CoFounderView />;
      case 'Networking':
        return <NetworkingView />;
      case 'Courses':
        return <CoursesView />;
      case 'Webinars':
        return <WebinarsView />;
      case 'Podcasts':
        return <PodcastsView />;
      default:
        return (
          <div className="flex flex-col items-center justify-center h-64 text-slate-500">
            <div className="text-4xl mb-4">🚧</div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-800 mb-2">{activeTab}</h2>
            <p>This section is currently under construction.</p>
          </div>
        );
    }
  };

  return (
    <div className="w-full">
      {renderView()}
    </div>
  );
}
