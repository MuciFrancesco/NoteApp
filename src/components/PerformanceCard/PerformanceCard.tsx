import { Card, CardContent, Typography, Box, LinearProgress, IconButton } from '@mui/material';
import {
  PeopleAlt, Business, TrendingUp, Edit, InfoOutlined,
} from '@mui/icons-material';
import iconKpiTask from '@/assets/icons/icon-kpi-task.svg';
import iconKpiDeals from '@/assets/icons/icon-kpi-deals.svg';
import iconKpiGroup from '@/assets/icons/icon-kpi-group.svg';
import { useTranslation } from 'react-i18next';
import type { KPI } from '@/types';
import { KPI_COLORS, COLORS } from '@/styles/colors';
import { fmtVal } from '@/utils/format';
import styles from './PerformanceCard.module.css';

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
            const Icon = iconMap[kpi.icon];
            const svgIcon = svgIconMap[kpi.icon];
            const color = KPI_COLORS[kpi.icon] || COLORS.textSecondary;
            const pct = kpi.target > 0 ? Math.min((kpi.current / kpi.target) * 100, 100) : 0;
            return (
              <Box key={kpi.label} className={styles.kpiItem}>
                <Box className={styles.kpiBox}>
                  <IconButton
                    className={styles.infoBtn}
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
