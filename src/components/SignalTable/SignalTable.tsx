import { Card, CardContent, Typography, Box, Chip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import type { Signal } from '@/types';
import { SignalRow } from '@/components/SignalRow/SignalRow';

interface SignalTableProps {
  signals: Signal[];
  unreadCount: number;
  onComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

export function SignalTable({ signals, unreadCount, onComplete, onDelete }: SignalTableProps) {
  const { t } = useTranslation();
  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', overflow: 'hidden' }}>
      {/* Header */}
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

      {/* Rows */}
      <Box sx={{ flex: 1, overflowY: 'auto' }}>
        {signals.length > 0 ? (
          signals.map((s) => (
            <SignalRow key={s.id} signal={s} onComplete={onComplete} onDelete={onDelete} />
          ))
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', py: 5 }}>
            <Typography sx={{ fontSize: 14, color: 'text.secondary' }}>{t('signals.noSignals')}</Typography>
          </Box>
        )}
      </Box>
    </Card>
  );
}
