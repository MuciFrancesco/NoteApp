import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import theme from "@/theme";
import { SidebarContainer } from "@/containers/Sidebar/SidebarContainer";
import { PageTitle } from "@/utils/pageTitle";
import { AppRoutes } from "@/routes";
import styles from './App.module.css';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PageTitle />
      <Box className={styles.root}>
        <SidebarContainer />
        <AppRoutes />
      </Box>
    </ThemeProvider>
  );
}

export default App;
