import { TrendingUp, TrendingDown, TrendingFlat } from '@mui/icons-material';

export function TrendIcon({ trend }: Readonly<{ trend: string }>) {
  if (trend === 'up') return <TrendingUp sx={{ fontSize: 16, color: '#1A9D6E' }} />;
  if (trend === 'down') return <TrendingDown sx={{ fontSize: 16, color: '#ED4C5E' }} />;
  return <TrendingFlat sx={{ fontSize: 16, color: '#7A8395' }} />;
}
