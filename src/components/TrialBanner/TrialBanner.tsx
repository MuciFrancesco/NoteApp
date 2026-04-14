import { Box, Typography, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import type { User } from '@/types';
import { daysRemaining } from '@/utils/format';
import styles from './TrialBanner.module.css';

interface TrialBannerProps {
  readonly user: User;
}

export function TrialBanner({ user }: TrialBannerProps) {
  const { t } = useTranslation();

  if (user.plan !== 'trial' || !user.trialEndsAt) return null;

  const days = daysRemaining(user.trialEndsAt);

  return (
    <Box className={styles.wrapper}>
      <Box className={styles.box}>
        <Typography className={styles.title} color="text.primary">
          {t('sidebar.trialEnds', { days })}
        </Typography>
        <Button fullWidth variant="contained" className={styles.button}>
          {t('sidebar.upgradePlan')}
        </Button>
      </Box>
    </Box>
  );
}
