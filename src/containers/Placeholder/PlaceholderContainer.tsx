import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import styles from './PlaceholderContainer.module.css';

interface PlaceholderContainerProps {
  readonly labelKey: string;
}

export function PlaceholderContainer({ labelKey }: PlaceholderContainerProps) {
  const { t } = useTranslation();

  return (
    <Box className={styles.root}>
      <Typography variant="h5" className={styles.title}>
        {t(labelKey)}
      </Typography>
    </Box>
  );
}
