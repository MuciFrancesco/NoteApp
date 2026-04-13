import { useState, useEffect } from 'react';
import { WelcomeCard } from '@/components/WelcomeCard/WelcomeCard';
import { CardSkeleton } from '@/components/CardSkeleton/CardSkeleton';

export function WelcomeContainer() {
  const [loading, setLoading] = useState(true);
  useEffect(() => { const t = setTimeout(() => setLoading(false), 800); return () => clearTimeout(t); }, []);
  if (loading) return <CardSkeleton lines={2} />;
  return <WelcomeCard />;
}
