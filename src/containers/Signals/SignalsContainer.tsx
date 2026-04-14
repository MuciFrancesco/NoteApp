import { Suspense, lazy } from 'react';
import { CardSkeleton } from '@/components/CardSkeleton/CardSkeleton';
import { signals as initialSignals } from '@/data/mock';
import { useSignalsAction } from '@/hooks/useSignalsAction';
import { useSignalPopover } from '@/hooks/useSignalPopover';

const SignalTable = lazy(() =>
  import('@/components/SignalTable/SignalTable').then(m => ({ default: m.SignalTable }))
);

export function SignalsContainer() {
  const { signals, unreadCount, handleComplete, handleDelete } = useSignalsAction(initialSignals);
  const { anchorEl, handleOpen, handleClose, activeSignalId } = useSignalPopover();

  return (
    <Suspense fallback={<CardSkeleton lines={5} />}>
      <SignalTable
        signals={signals}
        unreadCount={unreadCount}
        onComplete={handleComplete}
        onDelete={handleDelete}
        popoverAnchorEl={anchorEl}
        popoverSignalId={activeSignalId}
        onOpenPopover={handleOpen}
        onClosePopover={handleClose}
      />
    </Suspense>
  );
}
