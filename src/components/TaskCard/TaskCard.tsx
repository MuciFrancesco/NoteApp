import { Box, Typography } from '@mui/material';
import { ChevronRight, Warning } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import type { TaskSummary } from '@/types';

const variantStyles: Record<TaskSummary['variant'], { bg: string; count: string }> = {
  overdue:          { bg: '#FFE9E9', count: '#ED4C5E' },
  'pending-manual': { bg: '#FEF3D2', count: '#C69812' },
  'pending-auto':   { bg: '#EAF1FB', count: '#3B85E8' },
  completed:        { bg: '#E8F5D9', count: '#1A9D6E' },
};

interface TaskCardProps {
  task: TaskSummary;
}

export function TaskCard({ task }: TaskCardProps) {
  const { t } = useTranslation();
  const s = variantStyles[task.variant];
  return (
    <Box
      sx={{
        borderRadius: '12px', p: 2, cursor: 'pointer',
        bgcolor: s.bg, transition: 'all 0.15s ease',
        '&:hover': { opacity: 0.9, transform: 'translateY(-2px)', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' },
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        minWidth: 0, minHeight: 100, height: '100%', position: 'relative',
      }}
    >
      {/* Error badge — top right */}
      {task.error && (
        <Box
          sx={{
            position: 'absolute', top: 8, right: 8,
            display: 'flex', alignItems: 'center',
            bgcolor: '#FFFFFF', borderRadius: '16px',
            pl: 1, gap: '2px', height: 24,
          }}
        >
          <Typography sx={{ fontSize: 12, fontWeight: 500, color: '#ED4C5E', lineHeight: '16px', whiteSpace: 'nowrap' }}>
            {t(task.error!, { count: 1 })}
          </Typography>
          <Box
            sx={{
              width: 24, height: 24, borderRadius: '50%',
              bgcolor: '#ED4C5E',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <Warning sx={{ fontSize: 16, color: '#FFFFFF' }} />
          </Box>
        </Box>
      )}

      {/* Count — top */}
      <Typography data-key-number sx={{ fontSize: 24, fontWeight: 500, lineHeight: '30px', color: s.count }}>
        {task.count}
      </Typography>

      {/* Label + arrow — bottom */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 'auto' }}>
        <Typography sx={{ fontSize: 14, fontWeight: 500, lineHeight: '16px', color: '#3E485B' }} noWrap>
          {t(task.label)}
        </Typography>
        {task.hasArrow && <ChevronRight sx={{ fontSize: 18, color: 'text.secondary' }} />}
      </Box>
    </Box>
  );
}
