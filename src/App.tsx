import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import theme from "@/theme";
import { DashboardContainer } from "@/containers/Dashboard/DashboardContainer";
import { SidebarContainer } from "@/containers/Sidebar/SidebarContainer";
import { PlaceholderContainer } from "@/containers/Placeholder/PlaceholderContainer";
import { NotFoundContainer } from "@/containers/NotFound/NotFoundContainer";
import styles from './App.module.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className={styles.root}>
        <SidebarContainer />
        <Routes>
          <Route path="/" element={<DashboardContainer />} />
          <Route path="/find-new" element={<PlaceholderContainer labelKey="sidebar.findNew" />} />
          <Route path="/lists" element={<PlaceholderContainer labelKey="sidebar.lists" />} />
          <Route path="/templates" element={<PlaceholderContainer labelKey="sidebar.templates" />} />
          <Route path="/sequences" element={<PlaceholderContainer labelKey="sidebar.sequences" />} />
          <Route path="/tasks" element={<PlaceholderContainer labelKey="sidebar.tasks" />} />
          <Route path="/inbox" element={<PlaceholderContainer labelKey="sidebar.inbox" />} />
          <Route path="/deals" element={<PlaceholderContainer labelKey="sidebar.deals" />} />
          <Route path="*" element={<NotFoundContainer />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
