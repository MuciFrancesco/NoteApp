import { Routes, Route } from 'react-router-dom';
import { DashboardContainer } from '@/containers/Dashboard/DashboardContainer';
import { PlaceholderContainer } from '@/containers/Placeholder/PlaceholderContainer';
import { NotFoundContainer } from '@/containers/NotFound/NotFoundContainer';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DashboardContainer />} />
      <Route path="/find-new" element={<PlaceholderContainer labelKey="sidebar.findNew" />} />
      <Route path="/lists" element={<PlaceholderContainer labelKey="sidebar.lists" />} />
      <Route path="/templates" element={<PlaceholderContainer labelKey="sidebar.templates" />} />
      <Route path="/sequences" element={<PlaceholderContainer labelKey="sidebar.sequences" />} />
      <Route path="/tasks" element={<PlaceholderContainer labelKey="sidebar.tasks" />} />
      <Route path="/inbox" element={<PlaceholderContainer labelKey="sidebar.inbox" />} />
      <Route path="/deals" element={<PlaceholderContainer labelKey="sidebar.deals" />} />
      <Route path="*" element={<NotFoundContainer />} />
    </Routes>
  );
}
