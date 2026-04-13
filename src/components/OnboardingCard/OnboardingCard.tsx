import { Card, CardContent, Typography, Box } from '@mui/material';
import {
  Settings, PersonAdd, Email, Group, PlayArrow, ChevronRight,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import type { OnboardingStep } from '@/types';

const iconMap: Record<string, React.ElementType> = {
  settings: Settings,
  'user-plus': PersonAdd,
  mail: Email,
  users: Group,
  play: PlayArrow,
};

const iconColors: Record<string, { bg: string; fg: string }> = {
  settings: { bg: '#E9F8F8', fg: '#1EBAB2' },
  'user-plus': { bg: '#EAF1FB', fg: '#3B85E8' },
  mail: { bg: '#F2EAFF', fg: '#8846DC' },
  users: { bg: '#FDE5F8', fg: '#E769CB' },
  play: { bg: '#FEF3D2', fg: '#C69812' },
};

interface OnboardingCardProps {
  steps: OnboardingStep[];
}

export function OnboardingCard({ steps }: OnboardingCardProps) {
  const { t } = useTranslation();
  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', overflow: { xs: 'visible', lg: 'hidden' } }}>
      <CardContent sx={{ px: 2.5, pt: 2.5, pb: 2, '&:last-child': { pb: 2 } }}>
        <Typography sx={{ fontSize: 16, fontWeight: 600, color: 'text.primary' }}>{t('onboarding.title')}</Typography>
      </CardContent>

      <Box sx={{ flex: 1, overflowY: { xs: 'visible', lg: 'auto' }, overflowX: 'hidden' }}>
        {steps.map((step) => {
          const Icon = iconMap[step.icon];
          const colors = iconColors[step.icon] || { bg: '#E9F8F8', fg: '#1EBAB2' };
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
                  width: 42, height: 42, borderRadius: '10px',
                  bgcolor: colors.bg, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {Icon && <Icon sx={{ fontSize: 20, color: colors.fg }} />}
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
