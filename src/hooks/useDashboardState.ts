import { useState, useCallback } from 'react';

interface UseDashboardStateReturn {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

export function useDashboardState(): UseDashboardStateReturn {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = useCallback(() => setSidebarOpen((v) => !v), []);
  return { sidebarOpen, toggleSidebar };
}
