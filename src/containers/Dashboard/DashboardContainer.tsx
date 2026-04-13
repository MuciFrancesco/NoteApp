import { useState } from 'react';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { WelcomeContainer } from '@/containers/Welcome/WelcomeContainer';
import { RepliesContainer } from '@/containers/Replies/RepliesContainer';
import { PerformanceContainer } from '@/containers/Performance/PerformanceContainer';
import { TodayTasksContainer } from '@/containers/TodayTasks/TodayTasksContainer';
import { SignalsContainer } from '@/containers/Signals/SignalsContainer';
import { OnboardingContainer } from '@/containers/Onboarding/OnboardingContainer';
import { sidebarItems } from '@/data/mock';

export function DashboardContainer() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
      <Sidebar items={sidebarItems} open={sidebarOpen} onToggle={() => setSidebarOpen((v) => !v)} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 1.5, lg: 2 },
          height: { lg: '100vh' },
          minHeight: { xs: '100vh' },
          overflow: { xs: 'auto', lg: 'hidden' },
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Grid container spacing={{ xs: 1, lg: 1.5 }} sx={{ flex: { lg: 1 }, minHeight: { lg: 0 } }}>
          {/* Left column */}
          <Grid size={{ xs: 12, lg: 8 }} sx={{ display: { lg: 'flex' }, minHeight: { lg: 0 } }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 1, lg: 1.5 }, flex: 1, minHeight: { lg: 0 } }}>
              {/* Row: Welcome + Replies */}
              <Grid container spacing={{ xs: 1, lg: 1.5 }} sx={{ flexShrink: 0 }}>
                <Grid size={{ xs: 12, md: 6 }}><WelcomeContainer /></Grid>
                <Grid size={{ xs: 12, md: 6 }}><RepliesContainer /></Grid>
              </Grid>
              {/* Today's tasks */}
              <Box sx={{ flexShrink: 0 }}>
                <TodayTasksContainer />
              </Box>
              {/* Signals — takes remaining space */}
              <Box sx={{ flex: { lg: 1 }, minHeight: { xs: 300, lg: 0 }, display: 'flex' }}>
                <SignalsContainer />
              </Box>
            </Box>
          </Grid>

          {/* Right column: Performance + Onboarding — each 50% */}
          <Grid size={{ xs: 12, lg: 4 }} sx={{ display: { lg: 'flex' }, minHeight: { lg: 0 } }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 1, lg: 1.5 }, flex: 1, minHeight: { lg: 0 } }}>
              <Box sx={{ flexShrink: 0 }}><PerformanceContainer /></Box>
              <Box sx={{ flex: { lg: 1 }, minHeight: { lg: 0 }, display: { lg: 'flex' } }}><OnboardingContainer /></Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
