import { Card, CardContent, Skeleton, Box } from '@mui/material';

interface CardSkeletonProps {
  lines?: number;
  height?: number | string;
}

export function CardSkeleton({ lines = 3, height }: CardSkeletonProps) {
  return (
    <Card sx={{ height: height ?? '100%', width: '100%', flex: 1, display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ p: 2.5, flex: 1, display: 'flex', flexDirection: 'column', gap: 1.5, '&:last-child': { pb: 2.5 } }}>
        <Skeleton variant="text" width="40%" height={22} sx={{ borderRadius: 0.5 }} />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, flex: 1 }}>
          {Array.from({ length: lines }).map((_, i) => (
            <Skeleton
              key={i}
              variant="rounded"
              height={i === 0 ? 48 : 20}
              width={i === lines - 1 ? '60%' : '100%'}
              sx={{ borderRadius: 1 }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
