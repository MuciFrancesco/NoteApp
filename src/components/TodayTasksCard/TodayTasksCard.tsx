import { Card, CardContent, Typography, Divider, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import type { TaskSummary } from '@/types';
import { TaskCard } from '@/components/TaskCard/TaskCard';

interface TodayTasksCardProps {
  readonly tasks: TaskSummary[];
}

export function TodayTasksCard({ tasks }: TodayTasksCardProps) {
  const { t } = useTranslation();
  const pendingTasks = tasks.filter((tk) => tk.variant !== 'completed');
  const completedTasks = tasks.filter((tk) => tk.variant === 'completed');
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent sx={{ p: 2.5, '&:last-child': { pb: 2.5 } }}>
        <Typography sx={{ fontSize: 14, fontWeight: 600, lineHeight: '22px', color: 'text.primary', mb: 2 }}>
          {t('todayTasks.title')}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: { xs: 'wrap', md: 'nowrap' } }}>
          {pendingTasks.map((task) => (
            <Box key={task.label} sx={{ flex: 1, minWidth: { xs: '100%', sm: '45%', md: 0 } }}>
              <TaskCard task={task} />
            </Box>
          ))}
          <Divider orientation="vertical" flexItem sx={{ mx: 0.5 }} />
          {completedTasks.map((task) => (
            <Box key={task.label} sx={{ flex: 1, minWidth: { xs: '100%', sm: '45%', md: 0 } }}>
              <TaskCard task={task} />
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
