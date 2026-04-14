import { Box, Typography, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import styles from './NotFoundContainer.module.css';

export function NotFoundContainer() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Box className={styles.root}>
      <Box className={styles.card}>
        <Typography className={styles.code}>404</Typography>
        <Typography variant="h5" className={styles.title}>
          {t('notFound.title')}
        </Typography>
        <Typography className={styles.description}>
          {t('notFound.description')}
        </Typography>
        <Button
          variant="contained"
          className={styles.button}
          onClick={() => navigate('/')}
        >
          {t('notFound.goHome')}
        </Button>
      </Box>
    </Box>
  );
}
