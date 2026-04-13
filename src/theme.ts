import { createTheme } from '@mui/material/styles';

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
    primary: { main: '#1EBAB2', dark: '#0A9B94', light: '#E9F8F8' },
    secondary: { main: '#F9BB06', dark: '#C69812', light: '#FEF3D2' },
    error: { main: '#ED4C5E' },
    success: { main: '#1A9D6E', light: '#E8F5D9' },
    info: { main: '#3B85E8', light: '#EAF1FB' },
    warning: { main: '#F9BB06', light: '#FEF3D2' },
    background: { default: '#F5F7F9', paper: '#FFFFFF' },
    text: { primary: '#010E27', secondary: '#7A8395' },
    divider: '#E6E9F2',
    crono: { main: '#1EBAB2', dark: '#0A9B94', light: '#E9F8F8' },
    cronoDark: { main: '#0A9B94', dark: '#078A83', light: '#CEEDED' },
    gray1: { main: '#7A8395', dark: '#3E485B', light: '#D5E0F0' },
    gray4: { main: '#E6E9F2', dark: '#D5E0F0', light: '#F5F7F9' },
    gray7: { main: '#F5F7F9', dark: '#E6E9F2', light: '#FFFFFF' },
    grayHover1: { main: '#3E485B', dark: '#010E27', light: '#7A8395' },
    yellow: { main: '#F9BB06', dark: '#C69812', light: '#FEF3D2' },
    darkYellow: { main: '#C69812', dark: '#A37D0E', light: '#FEF3D2' },
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
          backgroundColor: '#F5F7F9',
          WebkitFontSmoothing: 'antialiased',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          border: '1px solid #E6E9F2',
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
