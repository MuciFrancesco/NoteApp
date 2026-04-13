import { useState, useEffect } from 'react';
import { RepliesCard } from '@/components/RepliesCard/RepliesCard';
import { CardSkeleton } from '@/components/CardSkeleton/CardSkeleton';

export function RepliesContainer() {
  const [loading, setLoading] = useState(true);
  useEffect(() => { const t = setTimeout(() => setLoading(false), 1000); return () => clearTimeout(t); }, []);
  if (loading) return <CardSkeleton lines={2} />;
  return <RepliesCard />;
}
