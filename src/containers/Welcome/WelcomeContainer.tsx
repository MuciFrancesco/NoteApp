import { WelcomeCard } from '@/components/WelcomeCard/WelcomeCard';
import { CardSkeleton } from '@/components/CardSkeleton/CardSkeleton';
import { useLoadingState } from '@/hooks/useLoadingState';

export function WelcomeContainer() {
  const loading = useLoadingState(800);
  if (loading) return <CardSkeleton lines={2} />;
  return <WelcomeCard />;
}
