import { Box, Typography, Avatar, Chip, Button, Popover } from '@mui/material';
import { CheckCircle, Delete } from '@mui/icons-material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { Signal } from '@/types';

const tagStyles: Record<string, string> = {
  blue: '#8846DC',
  purple: '#3B85E8',
  green: '#E769CB',
};

interface SignalRowProps {
  signal: Signal;
  onComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

export function SignalRow({ signal, onComplete, onDelete }: SignalRowProps) {
  const { t } = useTranslation();
  const tagColor = tagStyles[signal.tagVariant] || tagStyles.blue;
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const initials = signal.personName
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

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
      <Avatar sx={{ width: 38, height: 38, fontSize: 14, fontWeight: 600, bgcolor: '#8846DC' }}>
        {initials}
      </Avatar>

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

      {/* Date + Action — inline on md+, below on small */}
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
          onClick={(e) => setAnchorEl(e.currentTarget)}
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
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        slotProps={{ paper: { sx: { borderRadius: 1, mt: 1, boxShadow: 3 } } }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, p: 1, minWidth: 160 }}>
          <Button
            endIcon={<CheckCircle sx={{ fontSize: 18 }} />}
            onClick={() => { onComplete(signal.id); setAnchorEl(null); }}
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
            onClick={() => { onDelete(signal.id); setAnchorEl(null); }}
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
    </Box>
  );
}
