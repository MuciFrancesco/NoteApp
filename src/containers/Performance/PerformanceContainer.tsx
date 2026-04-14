import { Suspense, lazy } from 'react';
import { CardSkeleton } from '@/components/CardSkeleton/CardSkeleton';
import { kpis } from '@/data/mock';
import { usePerformanceDialog } from '@/hooks/usePerformanceDialog';

const PerformanceCard = lazy(() =>
  import('@/components/PerformanceCard/PerformanceCard').then(m => ({ default: m.PerformanceCard }))
);
const KpiDetailDialog = lazy(() =>
  import('@/components/KpiDetailDialog/KpiDetailDialog').then(m => ({ default: m.KpiDetailDialog }))
);

export function PerformanceContainer() {
  const { selectedKpi, openDialog, closeDialog } = usePerformanceDialog();

  return (
    <>
      <Suspense fallback={<CardSkeleton lines={4} />}>
        <PerformanceCard kpis={kpis} onOpenDialog={openDialog} />
      </Suspense>
      <Suspense fallback={null}>
        <KpiDetailDialog kpi={selectedKpi} onClose={closeDialog} />
      </Suspense>
    </>
  );
}
