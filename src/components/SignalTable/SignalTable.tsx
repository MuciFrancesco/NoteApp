import { Card, CardContent, Typography, Box, Chip, Popover, Button } from '@mui/material';
import { CheckCircle, Delete } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import type { Signal } from '@/types';
import { SignalRow } from '@/components/SignalRow/SignalRow';

interface SignalTableProps {
  readonly signals: Signal[];
  readonly unreadCount: number;
  readonly onComplete: (id: string) => void;
  readonly onDelete: (id: string) => void;
  readonly popoverAnchorEl: HTMLElement | null;
  readonly popoverSignalId: string | null;
  readonly onOpenPopover: (signalId: string, e: React.MouseEvent<HTMLElement>) => void;
  readonly onClosePopover: () => void;
}

export function SignalTable({ signals, unreadCount, onComplete, onDelete, popoverAnchorEl, popoverSignalId, onOpenPopover, onClosePopover }: SignalTableProps) {
  const { t } = useTranslation();
  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', overflow: 'hidden' }}>
      <CardContent sx={{ px: 2.5, pt: 2.5, pb: 2, '&:last-child': { pb: 2 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography sx={{ fontSize: 16, fontWeight: 600, color: 'text.primary' }}>{t('signals.title')}</Typography>
          <Chip
            label={unreadCount}
            size="small"
            sx={{
              bgcolor: '#F9BB06', color: 'white', height: 22, minWidth: 24,
              fontSize: 11, fontWeight: 600,
              '& .MuiChip-label': { px: 0.75 },
            }}
          />
        </Box>
        <Typography sx={{ mt: 0.5, fontSize: 13, color: 'text.secondary', lineHeight: '20px' }}>
          {t('signals.description')}
        </Typography>
      </CardContent>

      <Box sx={{ flex: 1, overflowY: 'auto' }}>
        {signals.length > 0 ? (
          signals.map((s) => (
            <SignalRow key={s.id} signal={s} onOpenPopover={onOpenPopover} />
          ))
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', py: 5 }}>
            <Typography sx={{ fontSize: 14, color: 'text.secondary' }}>{t('signals.noSignals')}</Typography>
          </Box>
        )}
      </Box>

      <Popover
        open={Boolean(popoverAnchorEl)}
        anchorEl={popoverAnchorEl}
        onClose={onClosePopover}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        slotProps={{ paper: { sx: { borderRadius: 1, mt: 1, boxShadow: 3 } } }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, p: 1, minWidth: 160 }}>
          <Button
            endIcon={<CheckCircle sx={{ fontSize: 18 }} />}
            onClick={() => { if (popoverSignalId) onComplete(popoverSignalId); onClosePopover(); }}
            sx={{
              textTransform: 'none', fontSize: 13, fontWeight: 500,
              color: '#3E485B', justifyContent: 'space-between',
              '&:hover': { bgcolor: '#E9F8F8', color: '#1EBAB2' },
              '&:focus': { bgcolor: '#E9F8F8', color: '#1EBAB2' },
              borderRadius: 1.5, px: 2, py: 0.75,
              gap: 3,
            }}
          >
            {t('signals.complete')}
          </Button>
          <Button
            endIcon={<Delete sx={{ fontSize: 18 }} />}
            onClick={() => { if (popoverSignalId) onDelete(popoverSignalId); onClosePopover(); }}
            sx={{
              textTransform: 'none', fontSize: 13, fontWeight: 500,
              color: '#3E485B', justifyContent: 'space-between',
              '&:hover': { bgcolor: '#E9F8F8', color: '#1EBAB2' },
              '&:focus': { bgcolor: '#E9F8F8', color: '#1EBAB2' },
              borderRadius: 1.5, px: 2, py: 0.75,
              gap: 3,
            }}
          >
            {t('signals.delete')}
          </Button>
        </Box>
      </Popover>
    </Card>
  );
}
