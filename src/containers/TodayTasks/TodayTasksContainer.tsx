import { Suspense, lazy } from 'react';
import { CardSkeleton } from '@/components/CardSkeleton/CardSkeleton';
import { todayTasks } from '@/data/mock';

const TodayTasksCard = lazy(() =>
  import('@/components/TodayTasksCard/TodayTasksCard').then(m => ({ default: m.TodayTasksCard }))
);

export function TodayTasksContainer() {
  return (
    <Suspense fallback={<CardSkeleton lines={2} />}>
      <TodayTasksCard tasks={todayTasks} />
    </Suspense>
  );
}
