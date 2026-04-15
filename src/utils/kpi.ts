import { TrendingUp, Business, PeopleAlt } from '@mui/icons-material';
import type { ElementType } from 'react';
import iconKpiTask from '@/assets/icons/icon-kpi-task.svg';
import iconKpiDeals from '@/assets/icons/icon-kpi-deals.svg';
import iconKpiGroup from '@/assets/icons/icon-kpi-group.svg';
import { COLORS, KPI_COLORS } from '@/styles/colors';

export const kpiIconMap: Record<string, ElementType> = {
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
