import { Box, Typography, Avatar, Chip, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import type { Signal } from '@/types';
import { getInitials } from '@/utils/string';
import { TAG_COLORS } from '@/styles/colors';

interface SignalRowProps {
  readonly signal: Signal;
  readonly onOpenPopover: (signalId: string, e: React.MouseEvent<HTMLElement>) => void;
}

export function SignalRow({ signal, onOpenPopover }: SignalRowProps) {
  const { t } = useTranslation();
  const tagColor = TAG_COLORS[signal.tagVariant] || TAG_COLORS.blue;
  const initials = getInitials(signal.personName);

  return (
    <Box
      sx={{
        display: 'flex', alignItems: { xs: 'flex-start', md: 'center' },
        flexWrap: { xs: 'wrap', md: 'nowrap' }, gap: { xs: 1.5, md: 2 },
        px: 2.5, py: 2,
        borderTop: '1px solid', borderColor: 'divider',
        '&:first-of-type': { borderTop: 'none' },
        '&:hover': { bgcolor: 'grey.50' },
        transition: 'background-color 0.15s',
      }}
    >
      <Box sx={{ position: 'relative', flexShrink: 0 }}>
        <Avatar sx={{ width: 38, height: 38, fontSize: 14, fontWeight: 600, bgcolor: '#8846DC' }}>
          {initials}
        </Avatar>
        <Box
          sx={{
            position: 'absolute', top: -2, left: -2,
            width: 12, height: 12, borderRadius: '50%',
            bgcolor: '#F9BB06', border: '2px solid white',
          }}
        />
      </Box>

      <Box sx={{ minWidth: 0, flex: 1 }}>
        <Typography sx={{ fontSize: 14, color: '#3E485B', lineHeight: '20px' }}>
          <Box component="span" sx={{ fontWeight: 600, color: 'text.primary' }}>{signal.personName}</Box>{' '}
          {signal.description}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
          <Typography sx={{ fontSize: 12, fontWeight: 500, color: tagColor }}>
            {signal.tag}
          </Typography>
          {signal.secondaryTag && (
            <Chip
              label={signal.secondaryTag}
              size="small"
              sx={{
                height: 24, fontSize: 12, fontWeight: 500,
                bgcolor: 'rgba(10,155,148,0.12)', color: '#0A9B94',
                '& .MuiChip-label': { px: 1.25 },
              }}
            />
          )}
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex', alignItems: 'center', gap: 1.5, flexShrink: 0,
          width: { xs: '100%', md: 'auto' },
          pl: { xs: '54px', md: 0 },
          mt: { xs: 0.5, md: 0 },
        }}
      >
        <Typography sx={{ fontSize: 13, color: 'text.secondary', flexShrink: 0, fontVariantNumeric: 'tabular-nums' }}>
          {signal.date}
        </Typography>

        <Button
          variant="contained"
          onClick={(e) => onOpenPopover(signal.id, e)}
          sx={{
            bgcolor: 'primary.main', color: 'white', textTransform: 'none',
            borderRadius: '34px', fontSize: 13, fontWeight: 600, minWidth: 88, height: 32,
            px: 2.5, ml: 'auto',
            '&:hover': { bgcolor: 'primary.dark' },
          }}
        >
          {t('signals.action')}
        </Button>
      </Box>
    </Box>
  );
}
