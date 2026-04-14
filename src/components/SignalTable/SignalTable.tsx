import { Card, CardContent, Typography, Box, Chip, Popover, Button } from '@mui/material';
import { CheckCircle, Delete } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import type { Signal } from '@/types';
import { SignalRow } from '@/components/SignalRow/SignalRow';
import styles from './SignalTable.module.css';

interface SignalTableProps {
  readonly signals: Signal[];
  readonly unreadCount: number;
  readonly onComplete: () => void;
  readonly onDelete: () => void;
  readonly popoverAnchorEl: HTMLElement | null;
  readonly onOpenPopover: (signalId: string, e: React.MouseEvent<HTMLElement>) => void;
  readonly onClosePopover: () => void;
}

export function SignalTable({ signals, unreadCount, onComplete, onDelete, popoverAnchorEl, onOpenPopover, onClosePopover }: SignalTableProps) {
  const { t } = useTranslation();
  return (
    <Card className={styles.card}>
      <CardContent className={styles.cardContent}>
        <Box className={styles.header}>
          <Typography className={styles.title} color="text.primary">{t('signals.title')}</Typography>
          <Chip label={unreadCount} size="small" className={styles.badge} />
        </Box>
        <Typography className={styles.description} color="text.secondary">
          {t('signals.description')}
        </Typography>
      </CardContent>

      <Box className={styles.scrollArea}>
        {signals.length > 0 ? (
          signals.map((s) => (
            <SignalRow key={s.id} signal={s} onOpenPopover={onOpenPopover} />
          ))
        ) : (
          <Box className={styles.emptyState}>
            <Typography className={styles.emptyText} color="text.secondary">{t('signals.noSignals')}</Typography>
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
        <Box className={styles.popoverContent}>
          <Button
            endIcon={<CheckCircle sx={{ fontSize: 18 }} />}
            onClick={onComplete}
            className={styles.popoverBtn}
          >
            {t('signals.complete')}
          </Button>
          <Button
            endIcon={<Delete sx={{ fontSize: 18 }} />}
            onClick={onDelete}
            className={styles.popoverBtn}
          >
            {t('signals.delete')}
          </Button>
        </Box>
      </Popover>
    </Card>
  );
}
