import { Box, Drawer, useMediaQuery } from '@mui/material';
import { SidebarMenuButton } from '@/components/SidebarMenuButton/SidebarMenuButton';
import { SidebarHeader } from '@/components/SidebarHeader/SidebarHeader';
import { SidebarNav } from '@/components/SidebarNav/SidebarNav';
import { TrialBanner } from '@/components/TrialBanner/TrialBanner';
import { SidebarUser } from '@/components/SidebarUser/SidebarUser';
import { sidebarItems, currentUser } from '@/data/mock';
import { useDashboardState } from '@/hooks/useDashboardState';
import { useSidebarDrag } from '@/hooks/useSidebarDrag';
import { MOBILE_BREAKPOINT, getDrawerSx } from '@/utils/sidebar';
import styles from './SidebarContainer.module.css';

export function SidebarContainer() {
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT);
  const { sidebarOpen, toggleSidebar } = useDashboardState();
  const { btnPos, isSnapping, handlePointerDown, handleBtnClick } = useSidebarDrag(toggleSidebar);

  const drawerSx = getDrawerSx(isMobile, sidebarOpen);

  return (
    <>
      {!sidebarOpen && (
        <SidebarMenuButton
          pos={btnPos}
          isSnapping={isSnapping}
          onPointerDown={handlePointerDown}
          onClick={handleBtnClick}
        />
      )}

      <Drawer
        variant={isMobile ? 'temporary' : 'persistent'}
        open={sidebarOpen}
        onClose={isMobile ? toggleSidebar : undefined}
        className={styles.drawer}
        sx={drawerSx}
      >
        <SidebarHeader onToggle={toggleSidebar} />
        <SidebarNav items={sidebarItems} />
        <TrialBanner user={currentUser} />
        <Box className={styles.spacer} />
        <SidebarUser user={currentUser} />
      </Drawer>
    </>
  );
}
