import { useState, useCallback } from 'react';

interface UseSignalPopoverReturn {
  anchorEl: HTMLElement | null;
  open: boolean;
  activeSignalId: string | null;
  handleOpen: (signalId: string, e: React.MouseEvent<HTMLElement>) => void;
  handleClose: () => void;
}

export function useSignalPopover(): UseSignalPopoverReturn {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [activeSignalId, setActiveSignalId] = useState<string | null>(null);
  const open = Boolean(anchorEl);

  const handleOpen = useCallback((signalId: string, e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
    setActiveSignalId(signalId);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
    setActiveSignalId(null);
  }, []);

  return { anchorEl, open, activeSignalId, handleOpen, handleClose };
}
