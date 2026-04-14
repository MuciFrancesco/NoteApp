import { useState, useCallback, useMemo } from 'react';
import type { Signal } from '@/types';

interface UseSignalsActionReturn {
  signals: Signal[];
  unreadCount: number;
  handleCompleteAction: () => void;
  handleDeleteAction: () => void;
}

export function useSignalsAction(
  initialSignals: Signal[],
  activeSignalId: string | null,
  onClose: () => void,
): UseSignalsActionReturn {
  const [signals, setSignals] = useState<Signal[]>(initialSignals);
  const unreadCount = useMemo(() => signals.length, [signals]);

  const handleCompleteAction = useCallback(() => {
    if (activeSignalId) setSignals((prev) => prev.filter((s) => s.id !== activeSignalId));
    onClose();
  }, [activeSignalId, onClose]);

  const handleDeleteAction = useCallback(() => {
    if (activeSignalId) setSignals((prev) => prev.filter((s) => s.id !== activeSignalId));
    onClose();
  }, [activeSignalId, onClose]);

  return { signals, unreadCount, handleCompleteAction, handleDeleteAction };
}
