import { TrendingUp, TrendingDown, TrendingFlat } from '@mui/icons-material';
import { COLORS } from '@/styles/colors';

export function TrendIcon({ trend }: Readonly<{ trend: string }>) {
  if (trend === 'up') return <TrendingUp sx={{ fontSize: 16, color: COLORS.success }} />;
  if (trend === 'down') return <TrendingDown sx={{ fontSize: 16, color: COLORS.error }} />;
  return <TrendingFlat sx={{ fontSize: 16, color: COLORS.textSecondary }} />;
}
