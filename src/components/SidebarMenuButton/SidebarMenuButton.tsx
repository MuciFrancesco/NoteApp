import { IconButton } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import styles from './SidebarMenuButton.module.css';

interface SidebarMenuButtonProps {
  readonly pos: { x: number; y: number };
  readonly isSnapping: boolean;
  readonly onPointerDown: (e: React.PointerEvent) => void;
  readonly onClick: () => void;
}

export function SidebarMenuButton({ pos, isSnapping, onPointerDown, onClick }: SidebarMenuButtonProps) {
  return (
    <IconButton
      onPointerDown={onPointerDown}
      onClick={onClick}
      className={styles.btn}
      style={{
        top: pos.y,
        left: pos.x,
        transition: isSnapping ? 'top 0.25s ease, left 0.25s ease' : 'none',
      }}
    >
      <MenuIcon className={styles.icon} />
    </IconButton>
  );
}
