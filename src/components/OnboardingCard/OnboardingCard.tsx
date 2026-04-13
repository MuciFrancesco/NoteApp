import { Card, CardContent, Typography, Box } from '@mui/material';
import { ChevronRight } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import type { OnboardingStep } from '@/types';
import iconExtension from '@/assets/icons/icon-extension.svg';
import iconAddContacts from '@/assets/icons/icon-add-contacts.svg';
import iconGroup from '@/assets/icons/icon-group.svg';
import iconAddToStrategy from '@/assets/icons/icon-add-to-strategy.svg';
import iconRunTask from '@/assets/icons/icon-run-task.svg';

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
    <Card sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', overflow: { xs: 'visible', lg: 'hidden' } }}>
      <CardContent sx={{ px: 2.5, pt: 2.5, pb: 2, '&:last-child': { pb: 2 } }}>
        <Typography sx={{ fontSize: 16, fontWeight: 600, color: 'text.primary' }}>{t('onboarding.title')}</Typography>
      </CardContent>

      <Box sx={{ flex: 1, overflowY: { xs: 'visible', lg: 'auto' }, overflowX: 'hidden' }}>
        {steps.map((step) => {
          const icon = iconMap[step.icon];
          return (
            <Box
              key={step.id}
              sx={{
                display: 'flex', alignItems: 'center', gap: 1.5,
                px: 2.5, py: 2,
                borderTop: '1px solid', borderColor: 'divider',
                '&:hover': { bgcolor: 'grey.100' },
                cursor: 'pointer', transition: 'background-color 0.15s ease',
              }}
            >
              <Box
                sx={{
                  width: 42, height: 42,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {icon && <img src={icon} alt="" width={36} height={36} />}
              </Box>
              <Typography sx={{ flex: 1, fontSize: 14, fontWeight: 500, color: '#3E485B' }}>
                {t(step.title)}
              </Typography>
              <Typography sx={{ fontSize: 13, color: 'text.secondary', flexShrink: 0 }}>
                {step.duration}
              </Typography>
              <ChevronRight sx={{ fontSize: 16, color: 'text.secondary', flexShrink: 0 }} />
            </Box>
          );
        })}
      </Box>
    </Card>
  );
}
