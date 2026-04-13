import iconDashboard from '@/assets/icons/icon-dashboard.svg';
import iconFindNew from '@/assets/icons/icon-find-new.svg';
import iconLists from '@/assets/icons/icon-lists.svg';
import iconTemplate from '@/assets/icons/icon-template.svg';
import iconSequences from '@/assets/icons/icon-sequences.svg';
import iconTask from '@/assets/icons/icon-task.svg';
import iconInbox from '@/assets/icons/icon-inbox.svg';
import iconSales from '@/assets/icons/icon-sales.svg';
import iconAnalytics from '@/assets/icons/icon-analytics.svg';

export const sidebarIconMap: Record<string, string> = {
  'layout-dashboard': iconDashboard,
  search: iconFindNew,
  list: iconLists,
  'file-text': iconTemplate,
  'git-branch': iconSequences,
  'check-square': iconTask,
  inbox: iconInbox,
  briefcase: iconSales,
  'bar-chart-2': iconAnalytics,
};
