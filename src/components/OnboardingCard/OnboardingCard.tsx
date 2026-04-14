import { Card, CardContent, Typography, Box } from '@mui/material';
import { ChevronRight } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import type { OnboardingStep } from '@/types';
import iconExtension from '@/assets/icons/icon-extension.svg';
import iconAddContacts from '@/assets/icons/icon-add-contacts.svg';
import iconGroup from '@/assets/icons/icon-group.svg';
import iconAddToStrategy from '@/assets/icons/icon-add-to-strategy.svg';
import iconRunTask from '@/assets/icons/icon-run-task.svg';
import styles from './OnboardingCard.module.css';

const iconMap: Record<string, string> = {
  settings: iconExtension,
  'user-plus': iconAddContacts,
  mail: iconGroup,
  users: iconAddToStrategy,
  play: iconRunTask,
};

interface OnboardingCardProps {
  steps: OnboardingStep[];
}

export function OnboardingCard({ steps }: Readonly<OnboardingCardProps>) {
  const { t } = useTranslation();
  return (
    <Card className={styles.card}>
      <CardContent className={styles.cardContent}>
        <Typography className={styles.title} color="text.primary">{t('onboarding.title')}</Typography>
      </CardContent>

      <Box className={styles.scrollArea}>
        {steps.map((step) => {
          const icon = iconMap[step.icon];
          return (
            <Box key={step.id} className={styles.stepRow}>
              <Box className={styles.iconWrapper}>
                {icon && <img src={icon} alt="" width={36} height={36} />}
              </Box>
              <Typography className={styles.stepTitle}>
                {t(step.title)}
              </Typography>
              <Typography className={styles.stepDuration} color="text.secondary">
                {step.duration}
              </Typography>
              <ChevronRight className={styles.stepChevron} sx={{ color: 'text.secondary' }} />
            </Box>
          );
        })}
      </Box>
    </Card>
  );
}
