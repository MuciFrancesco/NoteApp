import { SignalTable } from '@/components/SignalTable/SignalTable';
import { CardSkeleton } from '@/components/CardSkeleton/CardSkeleton';
import { signals as initialSignals } from '@/data/mock';
import { useLoadingState } from '@/hooks/useLoadingState';
import { useSignalsAction } from '@/hooks/useSignalsAction';
import { useSignalPopover } from '@/hooks/useSignalPopover';

export function SignalsContainer() {
  const loading = useLoadingState(1300);
  const { signals, unreadCount, handleComplete, handleDelete } = useSignalsAction(initialSignals);
  const { anchorEl, handleOpen, handleClose, activeSignalId } = useSignalPopover();

  if (loading) return <CardSkeleton lines={5} />;

  return (
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
  );
}
