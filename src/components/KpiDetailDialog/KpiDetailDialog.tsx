import { Typography, Box, LinearProgress, IconButton, Dialog, DialogTitle, DialogContent, Divider } from '@mui/material';
import {
  PeopleAlt, Business, TrendingUp,
  Close,
} from '@mui/icons-material';
import iconKpiTask from '@/assets/icons/icon-kpi-task.svg';
import iconKpiDeals from '@/assets/icons/icon-kpi-deals.svg';
import iconKpiGroup from '@/assets/icons/icon-kpi-group.svg';
import { useTranslation } from 'react-i18next';
import type { KPI } from '@/types';
import { KPI_COLORS } from '@/styles/colors';
import { fmtVal, trendColor } from '@/utils/format';
import { TrendIcon } from '@/utils/kpi';

const iconMap: Record<string, React.ElementType> = {
  users: PeopleAlt,
  building: Business,
  trending: TrendingUp,
};

const svgIconMap: Record<string, string> = {
  list: iconKpiTask,
  calendar: iconKpiGroup,
  dollar: iconKpiDeals,
};

interface KpiDetailDialogProps {
  readonly kpi: KPI | null;
  readonly onClose: () => void;
}

export function KpiDetailDialog({ kpi, onClose }: KpiDetailDialogProps) {
  const { t } = useTranslation();

  if (!kpi) return null;

  const Icon = iconMap[kpi.icon];
  const svgIcon = svgIconMap[kpi.icon];
  const color = KPI_COLORS[kpi.icon] || '#7A8395';
  const pct = kpi.target > 0 ? Math.min((kpi.current / kpi.target) * 100, 100) : 0;

  return (
    <Dialog
      open={!!kpi}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      slotProps={{
        paper: {
          sx: { borderRadius: 3, border: '1px solid', borderColor: 'divider' },
        },
      }}
    >
      <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pb: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          {Icon ? <Icon sx={{ fontSize: 20, color }} /> : svgIcon ? <img src={svgIcon} alt="" width={20} height={20} /> : null}
          <Typography sx={{ fontSize: 16, fontWeight: 600, color: 'text.primary' }}>{t(kpi.label)}</Typography>
        </Box>
        <IconButton onClick={onClose} size="small" sx={{ color: 'text.secondary' }}>
          <Close sx={{ fontSize: 18 }} />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ pt: '0 !important' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.5 }}>
          <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>{t(kpi.detail.period)}</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <TrendIcon trend={kpi.detail.trend} />
            <Typography sx={{ fontSize: 12, fontWeight: 600, color: trendColor(kpi.detail.trend) }}>
              {kpi.detail.trendPct}%
            </Typography>
          </Box>
        </Box>

        <Box sx={{ mb: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
            <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
              <Box component="span" sx={{ color }}>{fmtVal(kpi.current, kpi.prefix)}</Box>
              <Box component="span" sx={{ color: '#7A8395' }}>/{fmtVal(kpi.target, kpi.prefix)}</Box>
            </Typography>
            <Typography sx={{ fontSize: 12, color: 'text.secondary', alignSelf: 'flex-end' }}>{Math.round(pct)}%</Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={pct}
            sx={{
              height: 6, borderRadius: 3,
              bgcolor: 'divider',
              '& .MuiLinearProgress-bar': { bgcolor: color, borderRadius: 3 },
            }}
          />
        </Box>

        <Divider sx={{ mb: 1.5 }} />

        <Typography sx={{ fontSize: 13, color: 'text.secondary', mb: 2, lineHeight: '20px' }}>
          {t(kpi.detail.description)}
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {kpi.detail.breakdown.map((item) => (
            <Box key={item.label} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography sx={{ fontSize: 13, color: '#3E485B' }}>{t(item.label)}</Typography>
              <Typography sx={{ fontSize: 13, fontWeight: 600, color: '#3E485B', fontVariantNumeric: 'tabular-nums' }}>
                {fmtVal(item.value, kpi.prefix)}
              </Typography>
            </Box>
          ))}
        </Box>
      </DialogContent>
    </Dialog>
  );
}
