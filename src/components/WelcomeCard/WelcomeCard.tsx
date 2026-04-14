import { Card, CardContent, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import styles from './WelcomeCard.module.css';

export function WelcomeCard() {
  const { t } = useTranslation();
  return (
    <Card className={styles.card}>
      <CardContent className={styles.cardContent}>
        <Typography variant="h1" color="text.primary">
          {t('welcome.greeting', { name: 'Alex' })}
        </Typography>
        <Typography className={styles.description}>
          {t('welcome.description')}
        </Typography>
      </CardContent>
    </Card>
  );
}
