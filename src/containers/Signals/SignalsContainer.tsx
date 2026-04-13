import { useState, useCallback, useMemo, useEffect } from 'react';
import { SignalTable } from '@/components/SignalTable/SignalTable';
import { CardSkeleton } from '@/components/CardSkeleton/CardSkeleton';
import { signals as initialSignals } from '@/data/mock';

export function SignalsContainer() {
  const [loading, setLoading] = useState(true);
  const [signals, setSignals] = useState(initialSignals);

  useEffect(() => { const t = setTimeout(() => setLoading(false), 1300); return () => clearTimeout(t); }, []);

  const unreadCount = useMemo(() => signals.length, [signals]);

  const handleComplete = useCallback((id: string) => {
    setSignals((prev) => prev.filter((s) => s.id !== id));
  }, []);

  const handleDelete = useCallback((id: string) => {
    setSignals((prev) => prev.filter((s) => s.id !== id));
  }, []);

  if (loading) return <CardSkeleton lines={5} />;

  return (
    <SignalTable
      signals={signals}
      unreadCount={unreadCount}
      onComplete={handleComplete}
      onDelete={handleDelete}
    />
  );
}
