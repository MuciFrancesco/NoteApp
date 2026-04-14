import { createTheme } from '@mui/material/styles';
import { COLORS } from '@/styles/colors';

declare module '@mui/material/styles' {
  interface Palette {
    crono: Palette['primary'];
    cronoDark: Palette['primary'];
    gray1: Palette['primary'];
    gray4: Palette['primary'];
    gray7: Palette['primary'];
    grayHover1: Palette['primary'];
    yellow: Palette['primary'];
    darkYellow: Palette['primary'];
  }
  interface PaletteOptions {
    crono?: PaletteOptions['primary'];
    cronoDark?: PaletteOptions['primary'];
    gray1?: PaletteOptions['primary'];
    gray4?: PaletteOptions['primary'];
    gray7?: PaletteOptions['primary'];
    grayHover1?: PaletteOptions['primary'];
    yellow?: PaletteOptions['primary'];
    darkYellow?: PaletteOptions['primary'];
  }
}

const theme = createTheme({
  palette: {
    primary: { main: COLORS.primary, dark: COLORS.primaryDark, light: COLORS.primaryLight },
    secondary: { main: COLORS.yellow, dark: COLORS.darkYellow, light: COLORS.yellowLight },
    error: { main: COLORS.error },
    success: { main: COLORS.success, light: COLORS.successLight },
    info: { main: COLORS.info, light: COLORS.infoLight },
    warning: { main: COLORS.yellow, light: COLORS.yellowLight },
    background: { default: COLORS.bgDefault, paper: COLORS.white },
    text: { primary: COLORS.textPrimary, secondary: COLORS.textSecondary },
    divider: COLORS.divider,
    crono: { main: COLORS.primary, dark: COLORS.primaryDark, light: COLORS.primaryLight },
    cronoDark: { main: COLORS.primaryDark, dark: COLORS.primaryDarker, light: COLORS.primaryLighter },
    gray1: { main: COLORS.textSecondary, dark: COLORS.textDark, light: COLORS.dividerDark },
    gray4: { main: COLORS.divider, dark: COLORS.dividerDark, light: COLORS.bgDefault },
    gray7: { main: COLORS.bgDefault, dark: COLORS.divider, light: COLORS.white },
    grayHover1: { main: COLORS.textDark, dark: COLORS.textPrimary, light: COLORS.textSecondary },
    yellow: { main: COLORS.yellow, dark: COLORS.darkYellow, light: COLORS.yellowLight },
    darkYellow: { main: COLORS.darkYellow, dark: COLORS.darkYellowDark, light: COLORS.yellowLight },
  },
  typography: {
    fontFamily: '"Poppins", system-ui, -apple-system, sans-serif',
    h1: { fontSize: 24, fontWeight: 700, lineHeight: '30px' },
    h5: { fontSize: 14, fontWeight: 600, lineHeight: '22px' },
    subtitle1: { fontSize: 14, fontWeight: 500, lineHeight: '18px' },
    body1: { fontSize: 14, fontWeight: 400, lineHeight: '24px' },
    body2: { fontSize: 14, fontWeight: 400, lineHeight: '20px' },
    caption: { fontSize: 12, fontWeight: 500, lineHeight: '16px' },
    overline: { fontSize: 11, fontWeight: 500, lineHeight: '14px' },
  },
  shape: { borderRadius: 16 },
  spacing: 8,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: COLORS.bgDefault,
          WebkitFontSmoothing: 'antialiased',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          border: `1px solid ${COLORS.divider}`,
          boxShadow: 'none',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { boxShadow: 'none' },
      },
    },
  },
});

export default theme;
