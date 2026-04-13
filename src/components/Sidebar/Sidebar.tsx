import {
  Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText,
  IconButton, useMediaQuery,
} from '@mui/material';
import {
  ExpandMore,
  MenuOpen, Menu as MenuIcon,
} from '@mui/icons-material';
import cronoLogo from '@/assets/icons/crono-logo.svg';
import { useTranslation } from 'react-i18next';
import type { SidebarItem, User } from '@/types';
import { sidebarIconMap } from '@/utils/sidebarIcons';
import { TrialBanner } from '@/components/TrialBanner/TrialBanner';
import { SidebarUser } from '@/components/SidebarUser/SidebarUser';

export const SIDEBAR_WIDTH = 220;

interface SidebarProps {
  readonly items: SidebarItem[];
  readonly open: boolean;
  readonly onToggle: () => void;
  readonly btnPos: { x: number; y: number };
  readonly isSnapping: boolean;
  readonly onPointerDown: (e: React.PointerEvent) => void;
  readonly onBtnClick: () => void;
  readonly user: User;
}

export function Sidebar({ items, open, onToggle, btnPos, isSnapping, onPointerDown, onBtnClick, user }: SidebarProps) {
  const { t } = useTranslation();
  const isMobile = useMediaQuery('(max-width:549px)');

  return (
    <>
      {!open && (
        <IconButton
          onPointerDown={onPointerDown}
          onClick={onBtnClick}
          sx={{
            position: 'fixed',
            top: btnPos.y,
            left: btnPos.x,
            zIndex: 1300,
            width: 40,
            height: 40,
            bgcolor: 'background.paper',
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 2,
            boxShadow: 1,
            userSelect: 'none',
            touchAction: 'none',
            transition: isSnapping ? 'top 0.25s ease, left 0.25s ease' : 'none',
            '&:hover': { bgcolor: 'grey.100' },
          }}
        >
          <MenuIcon sx={{ fontSize: 22 }} />
        </IconButton>
      )}

      <Drawer
        variant={isMobile ? 'temporary' : 'persistent'}
        open={open}
        onClose={isMobile ? onToggle : undefined}
        sx={{
          width: isMobile ? 0 : open ? SIDEBAR_WIDTH : 0,
          flexShrink: 0,
          transition: 'width 0.25s ease',
          '& .MuiDrawer-paper': {
            width: isMobile ? '100%' : SIDEBAR_WIDTH,
            boxSizing: 'border-box',
            borderRight: isMobile ? 'none' : '1px solid',
            borderColor: 'divider',
            display: 'flex',
            flexDirection: 'column',
            overflowX: 'hidden',
          },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 2.5, pt: 2.5, pb: 2 }}>
          <img src={cronoLogo} alt="Crono" height={28} />
          <IconButton
            onClick={onToggle}
            size="small"
            sx={{ color: 'text.secondary', '&:hover': { bgcolor: 'grey.100' } }}
          >
            <MenuOpen sx={{ fontSize: 22 }} />
          </IconButton>
        </Box>

        <List component="nav" sx={{ overflowY: 'auto', px: 1.5, py: 1 }}>
          {items.map((item) => {
            const icon = sidebarIconMap[item.icon];
            const isActive = item.active;
            return (
              <ListItemButton
                key={item.label}
                sx={{
                  borderRadius: 2,
                  mb: 0.75,
                  py: 1.25,
                  px: 1.5,
                  position: 'relative',
                  bgcolor: isActive ? 'primary.light' : 'transparent',
                  color: isActive ? 'primary.dark' : 'text.secondary',
                  '&:hover': {
                    bgcolor: isActive ? 'primary.light' : 'grey.100',
                  },
                  '&::before': isActive ? {
                    content: '""',
                    position: 'absolute',
                    left: -12,
                    top: 3,
                    bottom: 3,
                    width: 3,
                    bgcolor: 'primary.dark',
                    borderRadius: '0 4px 4px 0',
                  } : {},
                }}
              >
                <ListItemIcon sx={{ minWidth: 38, color: 'inherit' }}>
                  {icon && <img src={icon} alt="" width={24} height={24} style={{ filter: isActive ? 'none' : undefined }} />}
                </ListItemIcon>
                <ListItemText
                  primary={t(item.label)}
                  slotProps={{
                    primary: {
                      sx: { fontSize: 15, fontWeight: 500, lineHeight: '22px' },
                    },
                  }}
                />
                {item.badge != null && (
                  <Box
                    sx={{
                      minWidth: 24, height: 22, borderRadius: 11,
                      bgcolor: '#F9BB06', color: 'white',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 11, fontWeight: 600, px: 1,
                    }}
                  >
                    {item.badge}
                  </Box>
                )}
                {item.hasSubmenu && <ExpandMore sx={{ fontSize: 18, color: 'text.secondary' }} />}
              </ListItemButton>
            );
          })}
        </List>

        <TrialBanner />

        <Box sx={{ flex: 1 }} />

        <SidebarUser user={user} />
      </Drawer>
    </>
  );
}
