import type { Signal, OnboardingStep, TaskSummary, KPI, SidebarItem } from '@/types';

export const signals: Signal[] = [
  {
    id: '1',
    personName: 'Robert Smith',
    description: 'changed role from SDR to Senior SDR at Welroad',
    type: 'role_change',
    tag: 'Role change',
    tagVariant: 'blue',
    secondaryTag: 'in sequence',
    date: 'Apr 3, 2025',
  },
  {
    id: '2',
    personName: 'Robert Smith',
    description: 'changed role from SDR to Senior SDR at Welroad',
    type: 'company_change',
    tag: 'Company change',
    tagVariant: 'purple',
    secondaryTag: 'in sequence',
    date: 'Apr 3, 2025',
  },
  {
    id: '3',
    personName: 'Robert Smith',
    description: 'changed role from SDR to Senior SDR at Welroad',
    type: 'role_change',
    tag: 'Role change',
    tagVariant: 'blue',
    date: 'Apr 3, 2025',
  },
  {
    id: '4',
    personName: 'Amazon',
    description: 'viewed 2 pages of your website for 65 sec',
    type: 'website_view',
    tag: 'Website view',
    tagVariant: 'green',
    date: 'Apr 2, 2025',
  },
  {
    id: '5',
    personName: 'Amazon',
    description: 'viewed 2 pages of your website for 65 sec',
    type: 'website_view',
    tag: 'Website view',
    tagVariant: 'green',
    date: 'Apr 3, 2025',
  },
];

export const onboardingSteps: OnboardingStep[] = [
  { id: '1', title: 'onboarding.integrationsSetup', duration: '5 min', completed: false, icon: 'settings' },
  { id: '2', title: 'onboarding.addNewContact', duration: '5 min', completed: false, icon: 'user-plus' },
  { id: '3', title: 'onboarding.createFirstSequence', duration: '10 min', completed: false, icon: 'mail' },
  { id: '4', title: 'onboarding.addContactsToSequence', duration: '5 min', completed: false, icon: 'users' },
  { id: '5', title: 'onboarding.runFirstTask', duration: '10 min', completed: false, icon: 'play' },
];

export const todayTasks: TaskSummary[] = [
  { label: 'todayTasks.overdue', count: 3, variant: 'overdue', hasArrow: true },
  { label: 'todayTasks.pendingManual', count: 10, variant: 'pending-manual', hasArrow: true },
  { label: 'todayTasks.pendingAuto', count: 20, variant: 'pending-auto', hasArrow: true, error: 'todayTasks.error' },
  { label: 'todayTasks.completed', count: 8, variant: 'completed' },
];

export const kpis: KPI[] = [
  {
    label: 'performance.contactsEngaged', current: 0, target: 500, icon: 'users',
    detail: {
      period: 'kpiDetail.periodMay',
      description: 'kpiDetail.contactsDesc',
      breakdown: [
        { label: 'kpiDetail.emailContacts', value: 0 },
        { label: 'kpiDetail.linkedinContacts', value: 0 },
        { label: 'kpiDetail.phoneContacts', value: 0 },
      ],
      trend: 'flat', trendPct: 0,
    },
  },
  {
    label: 'performance.companiesEngaged', current: 0, target: 500, icon: 'building',
    detail: {
      period: 'kpiDetail.periodMay',
      description: 'kpiDetail.companiesDesc',
      breakdown: [
        { label: 'kpiDetail.newCompanies', value: 0 },
        { label: 'kpiDetail.existingCompanies', value: 0 },
      ],
      trend: 'flat', trendPct: 0,
    },
  },
  {
    label: 'performance.activities', current: 1000, target: 2000, icon: 'list',
    detail: {
      period: 'kpiDetail.periodMay',
      description: 'kpiDetail.activitiesDesc',
      breakdown: [
        { label: 'kpiDetail.emailsSent', value: 620 },
        { label: 'kpiDetail.callsMade', value: 230 },
        { label: 'kpiDetail.linkedinMessages', value: 150 },
      ],
      trend: 'up', trendPct: 12,
    },
  },
  {
    label: 'performance.meetings', current: 20, target: 30, icon: 'calendar',
    detail: {
      period: 'kpiDetail.periodMay',
      description: 'kpiDetail.meetingsDesc',
      breakdown: [
        { label: 'kpiDetail.booked', value: 20 },
        { label: 'kpiDetail.attended', value: 18 },
        { label: 'kpiDetail.noShow', value: 2 },
      ],
      trend: 'up', trendPct: 8,
    },
  },
  {
    label: 'performance.deals', current: 100, target: 200, icon: 'dollar',
    detail: {
      period: 'kpiDetail.periodMay',
      description: 'kpiDetail.dealsDesc',
      breakdown: [
        { label: 'kpiDetail.won', value: 45 },
        { label: 'kpiDetail.inProgress', value: 55 },
        { label: 'kpiDetail.lost', value: 20 },
      ],
      trend: 'up', trendPct: 15,
    },
  },
  {
    label: 'performance.pipeline', current: 50000, target: 100000, prefix: '€', icon: 'trending',
    detail: {
      period: 'kpiDetail.periodMay',
      description: 'kpiDetail.pipelineDesc',
      breakdown: [
        { label: 'kpiDetail.qualified', value: 25000 },
        { label: 'kpiDetail.proposal', value: 15000 },
        { label: 'kpiDetail.negotiation', value: 10000 },
      ],
      trend: 'up', trendPct: 22,
    },
  },
];

export const sidebarItems: SidebarItem[] = [
  { label: 'sidebar.dashboard', icon: 'layout-dashboard', path: '/', active: true },
  { label: 'sidebar.findNew', icon: 'search', path: '/find-new' },
  { label: 'sidebar.lists', icon: 'list', path: '/lists' },
  { label: 'sidebar.templates', icon: 'file-text', path: '/templates' },
  { label: 'sidebar.sequences', icon: 'git-branch', path: '/sequences' },
  { label: 'sidebar.tasks', icon: 'check-square', path: '/tasks' },
  { label: 'sidebar.inbox', icon: 'inbox', path: '/inbox', badge: 24 },
  { label: 'sidebar.deals', icon: 'briefcase', path: '/deals' },
  { label: 'sidebar.analytics', icon: 'bar-chart-2', path: '/analytics', hasSubmenu: true },
];
