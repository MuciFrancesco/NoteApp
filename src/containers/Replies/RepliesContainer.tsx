import { Suspense, lazy } from 'react';
import { CardSkeleton } from '@/components/CardSkeleton/CardSkeleton';
import { replies } from '@/data/mock';

const RepliesCard = lazy(() =>
  import('@/components/RepliesCard/RepliesCard').then(m => ({ default: m.RepliesCard }))
);

export function RepliesContainer() {
  return (
    <Suspense fallback={<CardSkeleton lines={2} />}>
      <RepliesCard replies={replies} />
    </Suspense>
  );
}
