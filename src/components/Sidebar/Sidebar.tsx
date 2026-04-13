import { useRef, useState, useCallback, useEffect } from 'react';
import {
  Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText,
  Typography, Avatar, Button, Divider, IconButton,
} from '@mui/material';
import {
  Dashboard, Search, FormatListBulleted, Description, AccountTree,
  CheckBox, Inbox, Work, BarChart, ExpandMore, Bolt,
  MenuOpen, Menu as MenuIcon,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import type { SidebarItem } from '@/types';

export const SIDEBAR_WIDTH = 220;
const SIDEBAR_COLLAPSED = 0;
const DRAG_THRESHOLD = 4;
const BTN_SIZE = 40;
const EDGE_MARGIN = 12;

/** Snap to nearest edge/corner */
function snapToEdge(x: number, y: number): { x: number; y: number } {
  const w = window.innerWidth - BTN_SIZE;
  const h = window.innerHeight - BTN_SIZE;
  const snapX = x < w / 2 ? EDGE_MARGIN : w - EDGE_MARGIN;
  const snapY = Math.max(EDGE_MARGIN, Math.min(h - EDGE_MARGIN, y));
  return { x: snapX, y: snapY };
}

const iconMap: Record<string, React.ElementType> = {
  'layout-dashboard': Dashboard,
  search: Search,
  list: FormatListBulleted,
  'file-text': Description,
  'git-branch': AccountTree,
  'check-square': CheckBox,
  inbox: Inbox,
  briefcase: Work,
  'bar-chart-2': BarChart,
};

interface SidebarProps {
  items: SidebarItem[];
  open: boolean;
  onToggle: () => void;
}

export function Sidebar({ items, open, onToggle }: SidebarProps) {
  const { t } = useTranslation();

  // Draggable floating button state
  const [btnPos, setBtnPos] = useState({ x: EDGE_MARGIN, y: 16 });
  const [isSnapping, setIsSnapping] = useState(false);
  const draggingRef = useRef(false);
  const didDragRef = useRef(false);
  const startMouse = useRef({ x: 0, y: 0 });
  const startPos = useRef({ x: 0, y: 0 });

  const handlePointerMove = useCallback((e: PointerEvent) => {
    const dx = e.clientX - startMouse.current.x;
    const dy = e.clientY - startMouse.current.y;
    if (!didDragRef.current && Math.abs(dx) + Math.abs(dy) < DRAG_THRESHOLD) return;
    didDragRef.current = true;
    setIsSnapping(false);
    setBtnPos({
      x: Math.max(0, Math.min(window.innerWidth - BTN_SIZE, startPos.current.x + dx)),
      y: Math.max(0, Math.min(window.innerHeight - BTN_SIZE, startPos.current.y + dy)),
    });
  }, []);

  const handlePointerUp = useCallback(() => {
    draggingRef.current = false;
    document.removeEventListener('pointermove', handlePointerMove);
    document.removeEventListener('pointerup', handlePointerUp);
    if (didDragRef.current) {
      // Snap to nearest edge
      setBtnPos((prev) => {
        setIsSnapping(true);
        return snapToEdge(prev.x, prev.y);
      });
    }
  }, [handlePointerMove]);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    e.preventDefault();
    (e.target as HTMLElement).setPointerCapture?.(e.nativeEvent.pointerId);
    draggingRef.current = true;
    didDragRef.current = false;
    startMouse.current = { x: e.clientX, y: e.clientY };
    startPos.current = { ...btnPos };
    document.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('pointerup', handlePointerUp);
  }, [btnPos, handlePointerMove, handlePointerUp]);

  const handleBtnClick = useCallback(() => {
    if (!didDragRef.current) onToggle();
  }, [onToggle]);

  // Clamp + re-snap on window resize
  useEffect(() => {
    const onResize = () => {
      setBtnPos((p) => snapToEdge(p.x, p.y));
      setIsSnapping(true);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <>
      {/* Toggle button — visible only when sidebar is closed, draggable */}
      {!open && (
        <IconButton
          onPointerDown={handlePointerDown}
          onClick={handleBtnClick}
          sx={{
            position: 'fixed',
            top: btnPos.y,
            left: btnPos.x,
            zIndex: 1300,
            width: BTN_SIZE,
            height: BTN_SIZE,
            bgcolor: 'background.paper',
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 2,
            boxShadow: 1,
            cursor: draggingRef.current ? 'grabbing' : 'grab',
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
        variant="persistent"
        open={open}
        sx={{
          width: open ? SIDEBAR_WIDTH : SIDEBAR_COLLAPSED,
          flexShrink: 0,
          transition: 'width 0.25s ease',
          '& .MuiDrawer-paper': {
            width: SIDEBAR_WIDTH,
            boxSizing: 'border-box',
            borderRight: '1px solid',
            borderColor: 'divider',
            display: 'flex',
            flexDirection: 'column',
            overflowX: 'hidden',
          },
        }}
      >
        {/* Logo + close button */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 2.5, pt: 2.5, pb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Box
              sx={{
                width: 38, height: 38, borderRadius: 1.5,
                bgcolor: '#07C8C0', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <Bolt sx={{ color: 'white', fontSize: 22 }} />
            </Box>
            <Typography sx={{ fontSize: 20, fontWeight: 700, color: '#07C8C0', letterSpacing: '-0.02em' }}>
              crono
            </Typography>
          </Box>
          <IconButton
            onClick={onToggle}
            size="small"
            sx={{ color: 'text.secondary', '&:hover': { bgcolor: 'grey.100' } }}
          >
            <MenuOpen sx={{ fontSize: 22 }} />
          </IconButton>
        </Box>

        {/* Nav */}
        <List component="nav" sx={{ overflowY: 'auto', px: 1.5, py: 1 }}>
          {items.map((item) => {
            const Icon = iconMap[item.icon];
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
                  {Icon && <Icon sx={{ fontSize: 24 }} />}
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

        {/* Trial banner */}
        <Box sx={{ mx: 2, mt: 1, mb: 2 }}>
          <Box sx={{ borderRadius: 1.5, bgcolor: '#FEF3D2', p: 2 }}>
            <Typography sx={{ fontSize: 13, fontWeight: 600, color: 'text.primary' }}>
              {t('sidebar.trialEnds', { days: 2 })}
            </Typography>
            <Button
              fullWidth
              variant="contained"
              sx={{
                mt: 1.5, bgcolor: '#F9BB06', color: 'white',
                fontSize: 13, fontWeight: 700, textTransform: 'none',
                borderRadius: 2, py: 1,
                '&:hover': { bgcolor: '#C69812' },
              }}
            >
              {t('sidebar.upgradePlan')}
            </Button>
          </Box>
        </Box>

        {/* Spacer */}
        <Box sx={{ flex: 1 }} />

        {/* User */}
        <Divider sx={{ borderColor: 'divider' }} />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, px: 2.5, py: 2 }}>
          <Avatar sx={{ width: 36, height: 36, fontSize: 14, fontWeight: 600, bgcolor: '#8846DC' }}>
            WR
          </Avatar>
          <Box sx={{ minWidth: 0, flex: 1 }}>
            <Typography noWrap sx={{ fontSize: 14, fontWeight: 600, color: 'text.primary' }}>
              William Robertson
            </Typography>
            <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>{t('sidebar.sales')}</Typography>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
