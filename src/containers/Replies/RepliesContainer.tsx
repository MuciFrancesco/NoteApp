import { RepliesCard } from '@/components/RepliesCard/RepliesCard';
import { CardSkeleton } from '@/components/CardSkeleton/CardSkeleton';
import { useLoadingState } from '@/hooks/useLoadingState';
import { replies } from '@/data/mock';

export function RepliesContainer() {
  const loading = useLoadingState(1000);
  if (loading) return <CardSkeleton lines={2} />;
  return <RepliesCard replies={replies} />;
}
