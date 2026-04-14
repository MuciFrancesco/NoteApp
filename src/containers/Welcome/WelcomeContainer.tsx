import { Suspense, lazy } from 'react';
import { CardSkeleton } from '@/components/CardSkeleton/CardSkeleton';
import { currentUser } from '@/data/mock';

const WelcomeCard = lazy(() =>
  import('@/components/WelcomeCard/WelcomeCard').then(m => ({ default: m.WelcomeCard }))
);

export function WelcomeContainer() {
  return (
    <Suspense fallback={<CardSkeleton lines={2} />}>
      <WelcomeCard name={currentUser.name} />
    </Suspense>
  );
}
