import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "@/theme";
import { DashboardContainer } from "@/containers/Dashboard/DashboardContainer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DashboardContainer />
    </ThemeProvider>
  );
}

export default App;
