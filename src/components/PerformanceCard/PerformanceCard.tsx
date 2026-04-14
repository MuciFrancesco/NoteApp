import { Card, CardContent, Typography, Box, LinearProgress, IconButton } from '@mui/material';
import { Edit, InfoOutlined } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import type { KPI } from '@/types';
import { COLORS } from '@/styles/colors';
import { fmtVal } from '@/utils/format';
import { kpiIconMap, kpiSvgIconMap, getKpiColor, getKpiPct } from '@/utils/kpi';
import styles from './PerformanceCard.module.css';

interface PerformanceCardProps {
  readonly kpis: KPI[];
  readonly onOpenDialog: (kpi: KPI) => void;
}

export function PerformanceCard({ kpis, onOpenDialog }: PerformanceCardProps) {
  const { t } = useTranslation();

  return (
    <Card className={styles.card}>
      <CardContent className={styles.cardContent}>
        <Box className={styles.header}>
          <Typography className={styles.headerTitle} color="text.primary">{t('performance.title')}</Typography>
          <Box className={styles.editLink}>
            <Typography className={styles.editLinkText}>{t('performance.editKpis')}</Typography>
            <Edit className={styles.editIcon} />
          </Box>
        </Box>

        <Box className={styles.kpiGrid}>
          {kpis.map((kpi) => {
            const Icon = kpiIconMap[kpi.icon];
            const svgIcon = kpiSvgIconMap[kpi.icon];
            const color = getKpiColor(kpi.icon);
            const pct = getKpiPct(kpi.current, kpi.target);
            return (
              <Box key={kpi.label} className={styles.kpiItem}>
                <Box className={styles.kpiBox}>
                  <IconButton
                    className={styles.infoBtn}
                    data-testid="kpi-info-btn"
                    onClick={() => onOpenDialog(kpi)}
                  >
                    <InfoOutlined className={styles.infoIcon} />
                  </IconButton>
                  <Typography noWrap className={styles.kpiLabel}>
                    {t(kpi.label)}
                  </Typography>
                  <Box className={styles.kpiValuesRow}>
                    {Icon ? <Icon sx={{ fontSize: 16, color }} /> : svgIcon ? <img src={svgIcon} alt="" width={16} height={16} /> : null}
                    <Typography data-key-number className={styles.kpiNumber}>
                      <Box component="span" style={{ color }}>{fmtVal(kpi.current, kpi.prefix)}</Box>
                      <Box component="span" style={{ color: COLORS.textSecondary }}>/{fmtVal(kpi.target, kpi.prefix)}</Box>
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={pct}
                    className={styles.kpiProgress}
                    sx={{ '& .MuiLinearProgress-bar': { bgcolor: color } }}
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
