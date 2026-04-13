import { TodayTasksCard } from '@/components/TodayTasksCard/TodayTasksCard';
import { CardSkeleton } from '@/components/CardSkeleton/CardSkeleton';
import { todayTasks } from '@/data/mock';
import { useLoadingState } from '@/hooks/useLoadingState';

export function TodayTasksContainer() {
  const loading = useLoadingState(900);
  if (loading) return <CardSkeleton lines={2} />;
  return <TodayTasksCard tasks={todayTasks} />;
}
