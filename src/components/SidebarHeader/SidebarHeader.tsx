import { Box, IconButton } from '@mui/material';
import { MenuOpen } from '@mui/icons-material';
import cronoLogo from '@/assets/icons/crono-logo.svg';
import styles from './SidebarHeader.module.css';

interface SidebarHeaderProps {
  readonly onToggle: () => void;
}

export function SidebarHeader({ onToggle }: SidebarHeaderProps) {
  return (
    <Box className={styles.drawerHeader}>
      <img src={cronoLogo} alt="Crono" height={28} />
      <IconButton onClick={onToggle} size="small" className={styles.toggleBtn}>
        <MenuOpen className={styles.toggleIcon} />
      </IconButton>
    </Box>
  );
}
