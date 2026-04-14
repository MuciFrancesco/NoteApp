export function fmtVal(v: number, prefix?: string): string {
  if (prefix === '€') return v >= 1000 ? `€${(v / 1000).toFixed(0)}k` : `€${v}`;
  return String(v);
}

export function trendColor(trend: string): string {
  if (trend === 'up') return '#1A9D6E';
  if (trend === 'down') return '#ED4C5E';
  return '#7A8395';
}

export function daysRemaining(trialEndsAt: string): number {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const end = new Date(trialEndsAt);
  end.setHours(0, 0, 0, 0);
  return Math.max(0, Math.ceil((end.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)));
}
