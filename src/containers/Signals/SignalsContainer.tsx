import { Suspense, lazy } from 'react';
import { CardSkeleton } from '@/components/CardSkeleton/CardSkeleton';
import { signals as initialSignals } from '@/data/mock';
import { useSignalsAction } from '@/hooks/useSignalsAction';
import { useSignalPopover } from '@/hooks/useSignalPopover';

const SignalTable = lazy(() =>
  import('@/components/SignalTable/SignalTable').then(m => ({ default: m.SignalTable }))
);

export function SignalsContainer() {
  const { anchorEl, handleOpen, handleClose, activeSignalId } = useSignalPopover();
  const { signals, unreadCount, handleCompleteAction, handleDeleteAction } = useSignalsAction(initialSignals, activeSignalId, handleClose);

  return (
    <Suspense fallback={<CardSkeleton lines={5} />}>
      <SignalTable
        signals={signals}
        unreadCount={unreadCount}
        onComplete={handleCompleteAction}
        onDelete={handleDeleteAction}
        popoverAnchorEl={anchorEl}
        onOpenPopover={handleOpen}
        onClosePopover={handleClose}
      />
    </Suspense>
  );
}
