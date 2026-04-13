import { Card, CardContent, Typography, Box, LinearProgress, IconButton, Dialog, DialogTitle, DialogContent, Divider } from '@mui/material';
import {
  PeopleAlt, Business, FormatListBulleted, CalendarMonth, TrendingUp, Edit,
  InfoOutlined, Close, TrendingUp as TrendUp, TrendingDown, TrendingFlat,
} from '@mui/icons-material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { KPI } from '@/types';

const iconMap: Record<string, React.ElementType> = {
  users: PeopleAlt,
  building: Business,
  list: FormatListBulleted,
  calendar: CalendarMonth,
  dollar: FormatListBulleted,
  trending: TrendingUp,
};

const kpiColors: Record<string, string> = {
  users: '#3B85E8',
  building: '#3B58DB',
  list: '#8846DC',
  calendar: '#E2AD13',
  dollar: '#E769CB',
  trending: '#1A9D6E',
};

interface PerformanceCardProps {
  kpis: KPI[];
}

function fmtVal(v: number, prefix?: string): string {
  if (prefix === '€') return v >= 1000 ? `€${(v / 1000).toFixed(0)}k` : `€${v}`;
  return String(v);
}

export function PerformanceCard({ kpis }: PerformanceCardProps) {
  const { t } = useTranslation();
  const [selectedKpi, setSelectedKpi] = useState<KPI | null>(null);

  const trendIcon = (trend: string) => {
    if (trend === 'up') return <TrendUp sx={{ fontSize: 16, color: '#1A9D6E' }} />;
    if (trend === 'down') return <TrendingDown sx={{ fontSize: 16, color: '#ED4C5E' }} />;
    return <TrendingFlat sx={{ fontSize: 16, color: '#7A8395' }} />;
  };
  const trendColor = (trend: string) => trend === 'up' ? '#1A9D6E' : trend === 'down' ? '#ED4C5E' : '#7A8395';

  return (
    <>
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
            const color = kpiColors[kpi.icon] || '#7A8395';
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
                  {/* Info button — visible on hover */}
                  <IconButton
                    className="kpi-info-btn"
                    onClick={() => setSelectedKpi(kpi)}
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
                  {/* Title */}
                  <Typography noWrap sx={{ fontSize: 12, fontWeight: 500, lineHeight: '16px', color: '#3E485B', pr: 2.5 }}>
                    {t(kpi.label)}
                  </Typography>
                  {/* Icon + value */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                    {Icon && <Icon sx={{ fontSize: 16, color }} />}
                    <Typography
                      data-key-number
                      sx={{ fontSize: 16, fontWeight: 500, lineHeight: '24px', whiteSpace: 'nowrap', fontVariantNumeric: 'tabular-nums' }}
                    >
                      <Box component="span" sx={{ color }}>{fmtVal(kpi.current, kpi.prefix)}</Box>
                      <Box component="span" sx={{ color: '#7A8395' }}>/{fmtVal(kpi.target, kpi.prefix)}</Box>
                    </Typography>
                  </Box>
                  {/* Progress bar */}
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

    {/* Detail Modal */}
    <Dialog
      open={!!selectedKpi}
      onClose={() => setSelectedKpi(null)}
      maxWidth="xs"
      fullWidth
      slotProps={{
        paper: {
          sx: { borderRadius: 3, border: '1px solid', borderColor: 'divider' },
        },
      }}
    >
      {selectedKpi && (() => {
        const Icon = iconMap[selectedKpi.icon];
        const color = kpiColors[selectedKpi.icon] || '#7A8395';
        const pct = selectedKpi.target > 0 ? Math.min((selectedKpi.current / selectedKpi.target) * 100, 100) : 0;
        return (
          <>
            <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pb: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                {Icon && <Icon sx={{ fontSize: 20, color }} />}
                <Typography sx={{ fontSize: 16, fontWeight: 600, color: 'text.primary' }}>{t(selectedKpi.label)}</Typography>
              </Box>
              <IconButton onClick={() => setSelectedKpi(null)} size="small" sx={{ color: 'text.secondary' }}>
                <Close sx={{ fontSize: 18 }} />
              </IconButton>
            </DialogTitle>
            <DialogContent sx={{ pt: '0 !important' }}>
              {/* Period + trend */}
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.5 }}>
                <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>{t(selectedKpi.detail.period)}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  {trendIcon(selectedKpi.detail.trend)}
                  <Typography sx={{ fontSize: 12, fontWeight: 600, color: trendColor(selectedKpi.detail.trend) }}>
                    {selectedKpi.detail.trendPct}%
                  </Typography>
                </Box>
              </Box>

              {/* Progress */}
              <Box sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                  <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
                    <Box component="span" sx={{ color }}>{fmtVal(selectedKpi.current, selectedKpi.prefix)}</Box>
                    <Box component="span" sx={{ color: '#7A8395' }}>/{fmtVal(selectedKpi.target, selectedKpi.prefix)}</Box>
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

              {/* Description */}
              <Typography sx={{ fontSize: 13, color: 'text.secondary', mb: 2, lineHeight: '20px' }}>
                {t(selectedKpi.detail.description)}
              </Typography>

              {/* Breakdown */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {selectedKpi.detail.breakdown.map((item) => (
                  <Box key={item.label} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography sx={{ fontSize: 13, color: '#3E485B' }}>{t(item.label)}</Typography>
                    <Typography sx={{ fontSize: 13, fontWeight: 600, color: '#3E485B', fontVariantNumeric: 'tabular-nums' }}>
                      {selectedKpi.prefix === '€'
                        ? (item.value >= 1000 ? `€${(item.value / 1000).toFixed(0)}k` : `€${item.value}`)
                        : item.value}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </DialogContent>
          </>
        );
      })()}
    </Dialog>
    </>
  );
}
