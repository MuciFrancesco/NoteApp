import { Box, Typography, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

export function TrialBanner() {
  const { t } = useTranslation();
  return (
    <Box sx={{ mx: 2, mt: 1, mb: 2 }}>
      <Box sx={{ borderRadius: 1.5, bgcolor: '#FEF3D2', p: 2 }}>
        <Typography sx={{ fontSize: 13, fontWeight: 600, color: 'text.primary' }}>
          {t('sidebar.trialEnds', { days: 2 })}
        </Typography>
        <Button
          fullWidth
          variant="contained"
          sx={{
            mt: 1.5, bgcolor: '#F9BB06', color: 'white',
            fontSize: 13, fontWeight: 700, textTransform: 'none',
            borderRadius: 2, py: 1,
            '&:hover': { bgcolor: '#C69812' },
          }}
        >
          {t('sidebar.upgradePlan')}
        </Button>
      </Box>
    </Box>
  );
}
