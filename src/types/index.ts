export type SignalType = 'role_change' | 'company_change' | 'website_view';

export interface Signal {
  id: string;
  personName: string;
  description: string;
  type: SignalType;
  tag: string;
  tagVariant: 'blue' | 'green' | 'purple';
  secondaryTag?: string;
  date: string;
}

export interface OnboardingStep {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
  icon: string;
}

export interface TaskSummary {
  label: string;
  count: number;
  variant: 'overdue' | 'pending-manual' | 'pending-auto' | 'completed';
  hasArrow?: boolean;
  error?: string;
}

export interface KPIDetail {
  period: string;
  description: string;
  breakdown: { label: string; value: number }[];
  trend: 'up' | 'down' | 'flat';
  trendPct: number;
}

export interface KPI {
  label: string;
  current: number;
  target: number;
  prefix?: string;
  icon: string;
  detail: KPIDetail;
}

export interface SidebarItem {
  label: string;
  icon: string;
  path: string;
  badge?: number;
  active?: boolean;
  hasSubmenu?: boolean;
}
