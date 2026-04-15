import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const PAGE_TITLES: Record<string, string> = {
  '/': 'sidebar.dashboard',
  '/find-new': 'sidebar.findNew',
  '/lists': 'sidebar.lists',
  '/templates': 'sidebar.templates',
  '/sequences': 'sidebar.sequences',
  '/tasks': 'sidebar.tasks',
  '/inbox': 'sidebar.inbox',
  '/deals': 'sidebar.deals',
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
