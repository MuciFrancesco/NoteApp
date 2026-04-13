import { useState, useEffect } from 'react';
import { PerformanceCard } from '@/components/PerformanceCard/PerformanceCard';
import { CardSkeleton } from '@/components/CardSkeleton/CardSkeleton';
import { kpis } from '@/data/mock';

export function PerformanceContainer() {
  const [loading, setLoading] = useState(true);
  useEffect(() => { const t = setTimeout(() => setLoading(false), 1200); return () => clearTimeout(t); }, []);
  if (loading) return <CardSkeleton lines={4} />;
  return <PerformanceCard kpis={kpis} />;
}
