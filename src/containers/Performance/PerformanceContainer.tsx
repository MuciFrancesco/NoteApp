import { PerformanceCard } from '@/components/PerformanceCard/PerformanceCard';
import { KpiDetailDialog } from '@/components/KpiDetailDialog/KpiDetailDialog';
import { CardSkeleton } from '@/components/CardSkeleton/CardSkeleton';
import { kpis } from '@/data/mock';
import { useLoadingState } from '@/hooks/useLoadingState';
import { usePerformanceDialog } from '@/hooks/usePerformanceDialog';

export function PerformanceContainer() {
  const loading = useLoadingState(1200);
  const { selectedKpi, openDialog, closeDialog } = usePerformanceDialog();

  if (loading) return <CardSkeleton lines={4} />;
  return (
    <>
      <PerformanceCard kpis={kpis} onOpenDialog={openDialog} />
      <KpiDetailDialog kpi={selectedKpi} onClose={closeDialog} />
    </>
  );
}
