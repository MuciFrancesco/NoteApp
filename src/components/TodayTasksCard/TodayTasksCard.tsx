import { Card, CardContent, Typography, Divider, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import type { TaskSummary } from '@/types';
import { TaskCard } from '@/components/TaskCard/TaskCard';
import styles from './TodayTasksCard.module.css';

interface TodayTasksCardProps {
  readonly tasks: TaskSummary[];
}

export function TodayTasksCard({ tasks }: TodayTasksCardProps) {
  const { t } = useTranslation();
  const pendingTasks = tasks.filter((tk) => tk.variant !== 'completed');
  const completedTasks = tasks.filter((tk) => tk.variant === 'completed');
  return (
    <Card className={styles.card}>
      <CardContent className={styles.cardContent}>
        <Typography className={styles.title} color="text.primary">
          {t('todayTasks.title')}
        </Typography>
        <Box className={styles.tasksRow}>
          {pendingTasks.map((task) => (
            <Box key={task.label} className={styles.taskWrapper}>
              <TaskCard task={task} />
            </Box>
          ))}
          <Divider orientation="vertical" flexItem className={styles.divider} />
          {completedTasks.map((task) => (
            <Box key={task.label} className={styles.taskWrapper}>
              <TaskCard task={task} />
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
