import { LayoutDashboard, Users, FolderOpen, Target, Network, Mic } from 'lucide-react';

export const EnterpriseConfig = {
  role: 'Enterprise',
  sidebar: [
    {
      category: 'Main',
      items: [
        { title: 'Dashboard', icon: LayoutDashboard, route: 'Dashboard', permission: 'read' },
        { title: 'Talent Management', icon: Users, route: 'Talent Management', permission: 'read' }
      ]
    },
    {
      category: 'For You',
      items: [
        { title: 'Business Project Report', icon: FolderOpen, route: 'Business Project Report', permission: 'read' },
        { title: 'Business Insights', icon: Target, route: 'Business Insights', permission: 'read' },
        { title: 'Networking', icon: Network, route: 'Networking', permission: 'read' },
        { title: 'Podcasts', icon: Mic, route: 'Podcasts', permission: 'read' },
        { title: 'Find Co-Founder', icon: Users, route: 'Find Co-Founder', permission: 'read' }
      ]
    }
  ],
  permissions: {
    canView: ['Dashboard', 'Talent Management', 'Business Project Report', 'Business Insights', 'Networking', 'Podcasts', 'Find Co-Founder'],
    canEdit: [],
    canCreate: [],
    canDelete: []
  }
};
