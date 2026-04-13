import { useState, useEffect } from 'react';
import { TodayTasksCard } from '@/components/TodayTasksCard/TodayTasksCard';
import { CardSkeleton } from '@/components/CardSkeleton/CardSkeleton';
import { todayTasks } from '@/data/mock';

export function TodayTasksContainer() {
  const [loading, setLoading] = useState(true);
  useEffect(() => { const t = setTimeout(() => setLoading(false), 900); return () => clearTimeout(t); }, []);
  if (loading) return <CardSkeleton lines={2} />;
  return <TodayTasksCard tasks={todayTasks} />;
}
