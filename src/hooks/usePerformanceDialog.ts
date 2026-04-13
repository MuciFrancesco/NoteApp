import { useState, useCallback } from 'react';
import type { KPI } from '@/types';

interface UsePerformanceDialogReturn {
  selectedKpi: KPI | null;
  openDialog: (kpi: KPI) => void;
  closeDialog: () => void;
}

export function usePerformanceDialog(): UsePerformanceDialogReturn {
  const [selectedKpi, setSelectedKpi] = useState<KPI | null>(null);
  const openDialog = useCallback((kpi: KPI) => setSelectedKpi(kpi), []);
  const closeDialog = useCallback(() => setSelectedKpi(null), []);
  return { selectedKpi, openDialog, closeDialog };
}
