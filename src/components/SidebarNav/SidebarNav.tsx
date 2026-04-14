import { Box, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import type { SidebarItem } from '@/types';
import { sidebarIconMap } from '@/utils/sidebarIcons';
import styles from './SidebarNav.module.css';

interface SidebarNavItemProps {
  readonly item: SidebarItem;
}

function SidebarNavItem({ item }: SidebarNavItemProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const icon = sidebarIconMap[item.icon];
  const isActive = !item.disabled && pathname === item.path;

  return (
    <ListItemButton
      className={`${styles.navItem} ${isActive ? styles.navItemActive : ''}`}
      onClick={item.disabled ? undefined : () => navigate(item.path)}
    >
      <ListItemIcon className={styles.navIcon}>
        {icon && <img src={icon} alt="" width={24} height={24} className={isActive ? styles.iconActive : styles.iconDefault} />}
      </ListItemIcon>
      <ListItemText primary={t(item.label)} className={styles.navText} />
      {item.badge != null && (
        <Box className={styles.navBadge}>{item.badge}</Box>
      )}
      {item.hasSubmenu && <ExpandMore className={styles.expandIcon} />}
    </ListItemButton>
  );
}

interface SidebarNavProps {
  readonly items: SidebarItem[];
}

export function SidebarNav({ items }: SidebarNavProps) {
  return (
    <List component="nav" className={styles.navList}>
      {items.map((item) => (
        <SidebarNavItem key={item.label} item={item} />
      ))}
    </List>
  );
}
