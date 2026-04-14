import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import { WelcomeContainer } from '@/containers/Welcome/WelcomeContainer';
import { RepliesContainer } from '@/containers/Replies/RepliesContainer';
import { PerformanceContainer } from '@/containers/Performance/PerformanceContainer';
import { TodayTasksContainer } from '@/containers/TodayTasks/TodayTasksContainer';
import { SignalsContainer } from '@/containers/Signals/SignalsContainer';
import { OnboardingContainer } from '@/containers/Onboarding/OnboardingContainer';
import styles from './DashboardContainer.module.css';

export function DashboardContainer() {
  return (
    <Box component="main" className={styles.main}>
      <Grid container spacing={{ xs: 1, lg: 1.5 }} sx={{ flex: { lg: 1 }, minHeight: { lg: 0 } }}>
        <Grid size={{ xs: 12, lg: 8 }} sx={{ display: { lg: 'flex' }, minHeight: { lg: 0 } }}>
          <Box className={styles.innerCol}>
            <Grid container spacing={{ xs: 1, lg: 1.5 }} sx={{ flexShrink: 0 }}>
              <Grid size={{ xs: 12, md: 6 }}><WelcomeContainer /></Grid>
              <Grid size={{ xs: 12, md: 6 }}><RepliesContainer /></Grid>
            </Grid>
            <Box className={styles.shrinkBox}>
              <TodayTasksContainer />
            </Box>
            <Box className={styles.signalsWrapper}>
              <SignalsContainer />
            </Box>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, lg: 4 }} sx={{ display: { lg: 'flex' }, minHeight: { lg: 0 } }}>
          <Box className={styles.innerCol}>
            <Box className={styles.shrinkBox}><PerformanceContainer /></Box>
            <Box sx={{ flex: { lg: 1 }, minHeight: { lg: 0 }, display: { lg: 'flex' } }}><OnboardingContainer /></Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
