import { Routes, Route } from 'react-router-dom';
import { DashboardPage } from '@/pages/DashboardPage';
import { PlaceholderPage } from '@/pages/PlaceholderPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { PATH } from './paths';

export function AppRoutes() {
  return (
    <Routes>
      <Route path={PATH.dashboard} element={<DashboardPage />} />
      <Route path={PATH.findNew} element={<PlaceholderPage labelKey="sidebar.findNew" />} />
      <Route path={PATH.lists} element={<PlaceholderPage labelKey="sidebar.lists" />} />
      <Route path={PATH.templates} element={<PlaceholderPage labelKey="sidebar.templates" />} />
      <Route path={PATH.sequences} element={<PlaceholderPage labelKey="sidebar.sequences" />} />
      <Route path={PATH.tasks} element={<PlaceholderPage labelKey="sidebar.tasks" />} />
      <Route path={PATH.inbox} element={<PlaceholderPage labelKey="sidebar.inbox" />} />
      <Route path={PATH.deals} element={<PlaceholderPage labelKey="sidebar.deals" />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
