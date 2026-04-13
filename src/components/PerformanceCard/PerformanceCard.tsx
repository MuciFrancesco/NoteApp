import { Card, CardContent, Typography, Box, LinearProgress, IconButton } from '@mui/material';
import {
  PeopleAlt, Business, TrendingUp, Edit, InfoOutlined,
} from '@mui/icons-material';
import iconKpiTask from '@/assets/icons/icon-kpi-task.svg';
import iconKpiDeals from '@/assets/icons/icon-kpi-deals.svg';
import iconKpiGroup from '@/assets/icons/icon-kpi-group.svg';
import { useTranslation } from 'react-i18next';
import type { KPI } from '@/types';
import { KPI_COLORS } from '@/styles/colors';
import { fmtVal } from '@/utils/format';

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

interface PerformanceCardProps {
  readonly kpis: KPI[];
  readonly onOpenDialog: (kpi: KPI) => void;
}

export function PerformanceCard({ kpis, onOpenDialog }: PerformanceCardProps) {
  const { t } = useTranslation();

  return (
    <Card sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', overflow: { xs: 'visible', lg: 'auto' } }}>
      <CardContent sx={{ p: 2, flex: 1, display: 'flex', flexDirection: 'column', '&:last-child': { pb: 2 } }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
          <Typography sx={{ fontSize: 14, fontWeight: 600, lineHeight: '22px', color: 'text.primary' }}>{t('performance.title')}</Typography>
          <Box
            sx={{ display: 'flex', alignItems: 'center', gap: 0.5, cursor: 'pointer', ml: 'auto', color: '#0A9B94', '&:hover': { opacity: 0.8 } }}
          >
            <Typography sx={{ fontSize: 14, fontWeight: 500, lineHeight: '18px' }}>{t('performance.editKpis')}</Typography>
            <Edit sx={{ fontSize: 16, display: 'block' }} />
          </Box>
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, flex: 1 }}>
          {kpis.map((kpi) => {
            const Icon = iconMap[kpi.icon];
            const svgIcon = svgIconMap[kpi.icon];
            const color = KPI_COLORS[kpi.icon] || '#7A8395';
            const pct = kpi.target > 0 ? Math.min((kpi.current / kpi.target) * 100, 100) : 0;
            return (
              <Box key={kpi.label} sx={{ width: 'calc(50% - 3px)' }}>
                <Box
                  sx={{
                    border: '1px solid', borderColor: 'divider', borderRadius: 1,
                    px: 1.5, py: 1.5, display: 'flex', flexDirection: 'column',
                    gap: 0.75, position: 'relative',
                    '&:hover .kpi-info-btn': { opacity: 1 },
                  }}
                >
                  <IconButton
                    className="kpi-info-btn"
                    onClick={() => onOpenDialog(kpi)}
                    sx={{
                      position: 'absolute', top: 6, right: 6,
                      width: 32, height: 32, opacity: 0,
                      transition: 'opacity 0.15s ease',
                      color: '#7A8395',
                      '&:hover': { color: '#0A9B94', bgcolor: '#E9F8F8' },
                    }}
                  >
                    <InfoOutlined sx={{ fontSize: 20 }} />
                  </IconButton>
                  <Typography noWrap sx={{ fontSize: 12, fontWeight: 500, lineHeight: '16px', color: '#3E485B', pr: 2.5 }}>
                    {t(kpi.label)}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                    {Icon ? <Icon sx={{ fontSize: 16, color }} /> : svgIcon ? <img src={svgIcon} alt="" width={16} height={16} /> : null}
                    <Typography
                      data-key-number
                      sx={{ fontSize: 16, fontWeight: 500, lineHeight: '24px', whiteSpace: 'nowrap', fontVariantNumeric: 'tabular-nums' }}
                    >
                      <Box component="span" sx={{ color }}>{fmtVal(kpi.current, kpi.prefix)}</Box>
                      <Box component="span" sx={{ color: '#7A8395' }}>/{fmtVal(kpi.target, kpi.prefix)}</Box>
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={pct}
                    sx={{
                      mt: 0.25, height: 3, borderRadius: 2,
                      bgcolor: 'divider',
                      '& .MuiLinearProgress-bar': { bgcolor: color, borderRadius: 2 },
                    }}
                  />
                </Box>
              </Box>
            );
          })}
        </Box>
      </CardContent>
    </Card>
  );
}
