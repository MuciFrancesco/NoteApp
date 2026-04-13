export function fmtVal(v: number, prefix?: string): string {
  if (prefix === '€') return v >= 1000 ? `€${(v / 1000).toFixed(0)}k` : `€${v}`;
  return String(v);
}

export function trendColor(trend: string): string {
  if (trend === 'up') return '#1A9D6E';
  if (trend === 'down') return '#ED4C5E';
  return '#7A8395';
}
