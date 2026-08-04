import { LayoutDashboard, Rocket, User, Network, BookOpen, Mic, Video, Users, FolderOpen, Target, PlayCircle, Store } from 'lucide-react';

export const EntrepreneurConfig = {
  role: 'Entrepreneur / MSME',
  sidebar: [
    {
      category: 'Main',
      items: [
        { title: 'Dashboard', icon: LayoutDashboard, route: 'Dashboard', permission: 'read' },
        { title: 'Startup Analytics', icon: Rocket, route: 'Startup Analytics', permission: 'read' }
      ]
    },
    {
      category: 'For You',
      items: [
        { title: 'Mentorship', icon: User, route: 'Mentorship', permission: 'read' },
        { title: 'Business Project Report', icon: FolderOpen, route: 'Business Project Report', permission: 'read' },
        { title: 'Business Insights', icon: Target, route: 'Business Insights', permission: 'read' },
        { title: 'Investment Facilitation', icon: Rocket, route: 'Investment Facilitation', permission: 'read' },
        { title: 'Networking', icon: Network, route: 'Networking', permission: 'read' },
        { title: 'Start-up Assistance', icon: Target, route: 'Start-up Assistance', permission: 'read' },
        { title: 'Courses', icon: BookOpen, route: 'Courses', permission: 'read' },
        { title: 'Podcasts', icon: Mic, route: 'Podcasts', permission: 'read' },
        { title: 'Webinars', icon: Video, route: 'Webinars', permission: 'read' },
        { title: 'Find Co-Founder', icon: Users, route: 'Find Co-Founder', permission: 'read' },
        { title: 'Franchise Options', icon: Store, route: 'Franchise Options', permission: 'read' },
        { title: 'Documentary Shoots', icon: PlayCircle, route: 'Documentary Shoots', permission: 'read' }
      ]
    }
  ],
  permissions: {
    canView: ['Dashboard', 'Startup Analytics', 'Mentorship', 'Business Project Report', 'Business Insights', 'Investment Facilitation', 'Networking', 'Start-up Assistance', 'Courses', 'Podcasts', 'Webinars', 'Find Co-Founder', 'Franchise Options', 'Documentary Shoots'],
    canEdit: [],
    canCreate: [],
    canDelete: []
  }
};
