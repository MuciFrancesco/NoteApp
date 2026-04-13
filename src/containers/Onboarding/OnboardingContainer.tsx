import { useState, useEffect } from 'react';
import { OnboardingCard } from '@/components/OnboardingCard/OnboardingCard';
import { CardSkeleton } from '@/components/CardSkeleton/CardSkeleton';
import { onboardingSteps } from '@/data/mock';

export function OnboardingContainer() {
  const [loading, setLoading] = useState(true);
  useEffect(() => { const t = setTimeout(() => setLoading(false), 1100); return () => clearTimeout(t); }, []);
  if (loading) return <CardSkeleton lines={3} />;
  return <OnboardingCard steps={onboardingSteps} />;
}
