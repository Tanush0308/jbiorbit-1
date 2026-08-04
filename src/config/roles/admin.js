import { 
  LayoutDashboard, Users, ShieldCheck, FolderOpen, 
  BarChart3, DollarSign, LifeBuoy, Megaphone, 
  Sparkles, Settings 
} from 'lucide-react';

export const AdminConfig = {
  role: 'JBI Team / Super Admin',
  sidebar: [
    {
      category: 'OVERVIEW',
      items: [
        { title: 'Dashboard', icon: LayoutDashboard, route: 'Dashboard', permission: 'all' },
      ]
    },
    {
      category: 'OPERATIONS',
      items: [
        { title: 'User Management', icon: Users, route: 'User Management', permission: 'all' },
        { title: 'Verification Center', icon: ShieldCheck, route: 'Verification Center', permission: 'all' },
        { title: 'Content Management', icon: FolderOpen, route: 'Content Management', permission: 'all' },
      ]
    },
    {
      category: 'BUSINESS',
      items: [
        { title: 'Platform Analytics', icon: BarChart3, route: 'Platform Analytics', permission: 'all' },
        { title: 'Finance', icon: DollarSign, route: 'Finance', permission: 'all' },
        { title: 'Support Center', icon: LifeBuoy, route: 'Support Center', permission: 'all' },
        { title: 'Announcements', icon: Megaphone, route: 'Announcements', permission: 'all' },
      ]
    },
    {
      category: 'SYSTEM',
      items: [
        { title: 'AI Intelligence', icon: Sparkles, route: 'AI Intelligence', permission: 'all' },
        { title: 'Platform Settings', icon: Settings, route: 'Platform Settings', permission: 'all' },
      ]
    }
  ],
  permissions: {
    canView: ['*'],
    canEdit: ['*'],
    canCreate: ['*'],
    canDelete: ['*']
  }
};
