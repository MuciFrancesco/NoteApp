import { TrendingUp, TrendingDown, TrendingFlat, PeopleAlt, Business } from '@mui/icons-material';
import iconKpiTask from '@/assets/icons/icon-kpi-task.svg';
import iconKpiDeals from '@/assets/icons/icon-kpi-deals.svg';
import iconKpiGroup from '@/assets/icons/icon-kpi-group.svg';
import { COLORS, KPI_COLORS } from '@/styles/colors';

export const kpiIconMap: Record<string, React.ElementType> = {
  users: PeopleAlt,
  building: Business,
  trending: TrendingUp,
};

export const kpiSvgIconMap: Record<string, string> = {
  list: iconKpiTask,
  calendar: iconKpiGroup,
  dollar: iconKpiDeals,
};

export function getKpiColor(icon: string): string {
  return KPI_COLORS[icon] ?? COLORS.textSecondary;
}

export function getKpiPct(current: number, target: number): number {
  return target > 0 ? Math.min((current / target) * 100, 100) : 0;
}

export function TrendIcon({ trend }: Readonly<{ trend: string }>) {
  if (trend === 'up') return <TrendingUp sx={{ fontSize: 16, color: COLORS.success }} />;
  if (trend === 'down') return <TrendingDown sx={{ fontSize: 16, color: COLORS.error }} />;
  return <TrendingFlat sx={{ fontSize: 16, color: COLORS.textSecondary }} />;
}
