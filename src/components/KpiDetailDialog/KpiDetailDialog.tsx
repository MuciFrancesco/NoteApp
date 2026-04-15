import { Typography, Box, LinearProgress, IconButton, Dialog, DialogTitle, DialogContent, Divider } from '@mui/material';
import { Close } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import type { KPI } from '@/types';
import { COLORS } from '@/styles/colors';
import { fmtVal, trendColor } from '@/utils/format';
import { TrendIcon } from '@/components/TrendIcon/TrendIcon';
import { kpiIconMap, kpiSvgIconMap, getKpiColor, getKpiPct } from '@/utils/kpi';
import styles from './KpiDetailDialog.module.css';

interface KpiDetailDialogProps {
  readonly kpi: KPI | null;
  readonly onClose: () => void;
}

export function KpiDetailDialog({ kpi, onClose }: KpiDetailDialogProps) {
  const { t } = useTranslation();

  if (!kpi) return null;

  const Icon = kpiIconMap[kpi.icon];
  const svgIcon = kpiSvgIconMap[kpi.icon];
  const color = getKpiColor(kpi.icon);
  const pct = getKpiPct(kpi.current, kpi.target);

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
      <DialogTitle className={styles.dialogTitle}>
        <Box className={styles.titleIconRow}>
          {Icon ? <Icon sx={{ fontSize: 20, color }} /> : svgIcon ? <img src={svgIcon} alt="" width={20} height={20} /> : null}
          <Typography className={styles.titleText} color="text.primary">{t(kpi.label)}</Typography>
        </Box>
        <IconButton onClick={onClose} size="small" sx={{ color: 'text.secondary' }}>
          <Close className={styles.closeIcon} />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ pt: '0 !important' }}>
        <Box className={styles.metaRow}>
          <Typography className={styles.metaPeriod} color="text.secondary">{t(kpi.detail.period)}</Typography>
          <Box className={styles.trendRow}>
            <TrendIcon trend={kpi.detail.trend} />
            <Typography className={styles.trendPct} style={{ color: trendColor(kpi.detail.trend) }}>
              {kpi.detail.trendPct}%
            </Typography>
          </Box>
        </Box>

        <Box className={styles.progressSection}>
          <Box className={styles.progressValueRow}>
            <Typography className={styles.progressValue}>
              <Box component="span" style={{ color }}>{fmtVal(kpi.current, kpi.prefix)}</Box>
              <Box component="span" style={{ color: COLORS.textSecondary }}>/{fmtVal(kpi.target, kpi.prefix)}</Box>
            </Typography>
            <Typography className={styles.progressPct} color="text.secondary">{Math.round(pct)}%</Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={pct}
            className={styles.progressBar}
            sx={{ '& .MuiLinearProgress-bar': { bgcolor: color } }}
          />
        </Box>

        <Divider className={styles.divider} />

        <Typography className={styles.description} color="text.secondary">
          {t(kpi.detail.description)}
        </Typography>

        <Box className={styles.breakdownList}>
          {kpi.detail.breakdown.map((item) => (
            <Box key={item.label} className={styles.breakdownItem}>
              <Typography className={styles.breakdownLabel}>{t(item.label)}</Typography>
              <Typography className={styles.breakdownValue}>
                {fmtVal(item.value, kpi.prefix)}
              </Typography>
            </Box>
          ))}
        </Box>
      </DialogContent>
    </Dialog>
  );
}
