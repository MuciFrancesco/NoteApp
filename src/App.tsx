import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import theme from "@/theme";
import { DashboardContainer } from "@/containers/Dashboard/DashboardContainer";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { sidebarItems, currentUser } from "@/data/mock";
import { useDashboardState } from "@/hooks/useDashboardState";
import { useSidebarDrag } from "@/hooks/useSidebarDrag";

function App() {
  const { sidebarOpen, toggleSidebar } = useDashboardState();
  const { btnPos, isSnapping, handlePointerDown, handleBtnClick } = useSidebarDrag(toggleSidebar);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
        <Sidebar
          items={sidebarItems}
          open={sidebarOpen}
          onToggle={toggleSidebar}
          btnPos={btnPos}
          isSnapping={isSnapping}
          onPointerDown={handlePointerDown}
          onBtnClick={handleBtnClick}
          user={currentUser}
        />
        <DashboardContainer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
