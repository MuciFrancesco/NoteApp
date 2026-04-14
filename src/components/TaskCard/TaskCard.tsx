import { Box, Typography } from '@mui/material';
import { ChevronRight, Warning } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import type { TaskSummary } from '@/types';
import { TASK_VARIANT_COLORS } from '@/styles/colors';
import styles from './TaskCard.module.css';

interface TaskCardProps {
  task: TaskSummary;
}

export function TaskCard({ task }: Readonly<TaskCardProps>) {
  const { t } = useTranslation();
  const s = TASK_VARIANT_COLORS[task.variant];
  return (
    <Box className={styles.card} style={{ backgroundColor: s.bg }}>
      {task.error && (
        <Box className={styles.errorBadge}>
          <Typography className={styles.errorText}>
            {t(task.error, { count: 1 })}
          </Typography>
          <Box className={styles.errorIconWrapper}>
            <Warning className={styles.errorIcon} />
          </Box>
        </Box>
      )}

      <Typography data-key-number className={styles.count} style={{ color: s.count }}>
        {task.count}
      </Typography>

      <Box className={styles.footer}>
        <Typography className={styles.label} noWrap>
          {t(task.label)}
        </Typography>
        {task.hasArrow && <ChevronRight className={styles.chevron} sx={{ color: 'text.secondary' }} />}
      </Box>
    </Box>
  );
}
