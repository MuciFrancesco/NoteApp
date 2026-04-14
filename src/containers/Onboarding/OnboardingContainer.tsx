import { Suspense, lazy } from 'react';
import { CardSkeleton } from '@/components/CardSkeleton/CardSkeleton';
import { onboardingSteps } from '@/data/mock';

const OnboardingCard = lazy(() =>
  import('@/components/OnboardingCard/OnboardingCard').then(m => ({ default: m.OnboardingCard }))
);

export function OnboardingContainer() {
  return (
    <Suspense fallback={<CardSkeleton lines={3} />}>
      <OnboardingCard steps={onboardingSteps} />
    </Suspense>
  );
}
