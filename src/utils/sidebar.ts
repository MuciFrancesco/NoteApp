export const SIDEBAR_WIDTH = 220;

export const MOBILE_BREAKPOINT = '(max-width:549px)';

export function getDrawerSx(isMobile: boolean, open: boolean) {
  return {
    width: !isMobile && open ? SIDEBAR_WIDTH : 0,
    '& .MuiDrawer-paper': {
      width: isMobile ? '100%' : SIDEBAR_WIDTH,
      borderRight: isMobile ? 'none' : '1px solid',
    },
  };
}
