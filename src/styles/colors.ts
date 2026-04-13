/** Shared color constants for Tailwind arbitrary values and CSS */
export const COLORS = {
  primary: '#1EBAB2',
  primaryDark: '#0A9B94',
  primaryLight: '#E9F8F8',
  primaryLighter: '#CEEDED',
  textPrimary: '#010E27',
  textSecondary: '#7A8395',
  textDark: '#3E485B',
  divider: '#E6E9F2',
  bgDefault: '#F5F7F9',
  yellow: '#F9BB06',
  darkYellow: '#C69812',
  yellowLight: '#FEF3D2',
  error: '#ED4C5E',
  errorLight: '#FFE9E9',
  success: '#1A9D6E',
  successLight: '#E8F5D9',
  info: '#3B85E8',
  infoLight: '#EAF1FB',
  purple: '#8846DC',
  purpleLight: '#F2EAFF',
  pink: '#E769CB',
  pinkLight: '#FDE5F8',
  logoGreen: '#07C8C0',
} as const;

export const KPI_COLORS: Record<string, string> = {
  users: '#3B85E8',
  building: '#3B58DB',
  list: '#8846DC',
  calendar: '#E2AD13',
  dollar: '#E769CB',
  trending: '#1A9D6E',
};

export const ICON_COLORS: Record<string, { bg: string; fg: string }> = {
  settings: { bg: '#E9F8F8', fg: '#1EBAB2' },
  'user-plus': { bg: '#EAF1FB', fg: '#3B85E8' },
  mail: { bg: '#F2EAFF', fg: '#8846DC' },
  users: { bg: '#FDE5F8', fg: '#E769CB' },
  play: { bg: '#FEF3D2', fg: '#C69812' },
};

export const TAG_COLORS: Record<string, string> = {
  blue: '#8846DC',
  purple: '#3B85E8',
  green: '#E769CB',
};

export const TASK_VARIANT_COLORS: Record<string, { bg: string; count: string }> = {
  overdue: { bg: '#FFE9E9', count: '#ED4C5E' },
  'pending-manual': { bg: '#FEF3D2', count: '#C69812' },
  'pending-auto': { bg: '#EAF1FB', count: '#3B85E8' },
  completed: { bg: '#E8F5D9', count: '#1A9D6E' },
};
