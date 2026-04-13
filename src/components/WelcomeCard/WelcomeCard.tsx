import { Card, CardContent, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export function WelcomeCard() {
  const { t } = useTranslation();
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: { xs: 160, md: 'auto' } }}>
      <CardContent sx={{ px: 3, py: 2.5, '&:last-child': { pb: 2.5 } }}>        
        <Typography variant="h1" color="text.primary">
          {t('welcome.greeting', { name: 'Alex' })}
        </Typography>
        <Typography
          sx={{
            mt: 1,
            fontSize: '13px !important',
            color: '#7A8395 !important',
            lineHeight: '20px',
          }}
        >
          {t('welcome.description')}
        </Typography>
      </CardContent>
    </Card>
  );
}
