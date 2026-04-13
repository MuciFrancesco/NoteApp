import { useState, useCallback, useMemo } from 'react';
import type { Signal } from '@/types';

interface UseSignalsActionReturn {
  signals: Signal[];
  unreadCount: number;
  handleComplete: (id: string) => void;
  handleDelete: (id: string) => void;
}

export function useSignalsAction(initialSignals: Signal[]): UseSignalsActionReturn {
  const [signals, setSignals] = useState<Signal[]>(initialSignals);
  const unreadCount = useMemo(() => signals.length, [signals]);

  const handleComplete = useCallback((id: string) => {
    setSignals((prev) => prev.filter((s) => s.id !== id));
  }, []);

  const handleDelete = useCallback((id: string) => {
    setSignals((prev) => prev.filter((s) => s.id !== id));
  }, []);

  return { signals, unreadCount, handleComplete, handleDelete };
}
