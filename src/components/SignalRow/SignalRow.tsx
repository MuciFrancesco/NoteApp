import { Box, Typography, Avatar, Chip, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import type { Signal } from '@/types';
import { getInitials } from '@/utils/string';
import { TAG_COLORS } from '@/styles/colors';
import styles from './SignalRow.module.css';

interface SignalRowProps {
  readonly signal: Signal;
  readonly onOpenPopover: (signalId: string, e: React.MouseEvent<HTMLElement>) => void;
}

export function SignalRow({ signal, onOpenPopover }: SignalRowProps) {
  const { t } = useTranslation();
  const tagColor = TAG_COLORS[signal.tagVariant] || TAG_COLORS.blue;
  const initials = getInitials(signal.personName);

  return (
    <Box className={styles.row}>
      <Box className={styles.avatarWrapper}>
        <Avatar className={styles.avatar}>{initials}</Avatar>
        <Box className={styles.unreadDot} />
      </Box>

      <Box className={styles.content}>
        <Typography className={styles.description}>
          <Box component="span" className={styles.personName} sx={{ color: 'text.primary' }}>{signal.personName}</Box>{' '}
          {signal.description}
        </Typography>
        <Box className={styles.tagRow}>
          <Typography className={styles.tagText} style={{ color: tagColor }}>
            {signal.tag}
          </Typography>
          {signal.secondaryTag && (
            <Chip label={signal.secondaryTag} size="small" className={styles.chip} />
          )}
        </Box>
      </Box>

      <Box className={styles.actionsRow}>
        <Typography className={styles.date} color="text.secondary">
          {signal.date}
        </Typography>
        <Button
          variant="contained"
          onClick={(e) => onOpenPopover(signal.id, e)}
          className={styles.actionBtn}
        >
          {t('signals.action')}
        </Button>
      </Box>
    </Box>
  );
}
