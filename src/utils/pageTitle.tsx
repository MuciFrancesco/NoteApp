import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PATH } from '@/routes/paths';

const PAGE_TITLES: Record<string, string> = {
  [PATH.dashboard]: 'sidebar.dashboard',
  [PATH.findNew]: 'sidebar.findNew',
  [PATH.lists]: 'sidebar.lists',
  [PATH.templates]: 'sidebar.templates',
  [PATH.sequences]: 'sidebar.sequences',
  [PATH.tasks]: 'sidebar.tasks',
  [PATH.inbox]: 'sidebar.inbox',
  [PATH.deals]: 'sidebar.deals',
};

export function PageTitle() {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const key = PAGE_TITLES[pathname];
    const section = key ? t(key) : '404';
    document.title = `Crono - ${section}`;
  }, [pathname, t]);

  return null;
}
