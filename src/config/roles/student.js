import { LayoutDashboard, Compass, User, BookOpen, Briefcase, Network, Video, Mic, Users, PlayCircle, FolderOpen, Target, Settings } from 'lucide-react';

export const StudentConfig = {
  role: 'Student',
  sidebar: [
    {
      category: 'Main',
      items: [
        { title: 'Dashboard', icon: LayoutDashboard, route: 'Dashboard', permission: 'read' },
        { title: 'Learning Progress', icon: Compass, route: 'Learning Progress', permission: 'read' }
      ]
    },
    {
      category: 'For You',
      items: [
        { title: 'Mentorship', icon: User, route: 'Mentorship', permission: 'read' },
        { title: 'Internships', icon: Briefcase, route: 'Internships', permission: 'read' },
        { title: 'Courses', icon: BookOpen, route: 'Courses', permission: 'read' },
        { title: 'Business Project Report', icon: FolderOpen, route: 'Business Project Report', permission: 'read' },
        { title: 'Business Insights', icon: Target, route: 'Business Insights', permission: 'read' },
        { title: 'Find Co-Founder', icon: Users, route: 'Find Co-Founder', permission: 'read' },
        { title: 'Podcasts', icon: Mic, route: 'Podcasts', permission: 'read' },
        { title: 'Webinars', icon: Video, route: 'Webinars', permission: 'read' },
        { title: 'Business Toolkit', icon: Settings, route: 'Business Toolkit', permission: 'read' },
      ]
    }
  ],
  permissions: {
    canView: ['Dashboard', 'Learning Progress', 'Mentorship', 'Internships', 'Courses', 'Business Project Report', 'Business Insights', 'Find Co-Founder', 'Podcasts', 'Webinars', 'Business Toolkit'],
    canEdit: [],
    canCreate: [],
    canDelete: []
  }
};
