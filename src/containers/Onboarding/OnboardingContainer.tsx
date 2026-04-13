import { OnboardingCard } from '@/components/OnboardingCard/OnboardingCard';
import { CardSkeleton } from '@/components/CardSkeleton/CardSkeleton';
import { onboardingSteps } from '@/data/mock';
import { useLoadingState } from '@/hooks/useLoadingState';

export function OnboardingContainer() {
  const loading = useLoadingState(1100);
  if (loading) return <CardSkeleton lines={3} />;
  return <OnboardingCard steps={onboardingSteps} />;
}
