import { Card, CardContent, Skeleton, Box } from '@mui/material';
import styles from './CardSkeleton.module.css';

interface CardSkeletonProps {
  lines?: number;
  height?: number | string;
}

export function CardSkeleton({ lines = 3, height }: Readonly<CardSkeletonProps>) {
  return (
    <Card className={styles.card} style={{ height: height ?? '100%' }}>
      <CardContent className={styles.cardContent}>
        <Skeleton variant="text" width="40%" height={22} className={styles.skeletonTitle} />
        <Box className={styles.skeletonLines}>
          {Array.from({ length: lines }).map((_, i) => {
            const h = i === 0 ? 48 : 20;
            const w = i === lines - 1 ? '60%' : '100%';
            return (
              <Skeleton
                key={`${h}-${w}`}
                variant="rounded"
                height={h}
                width={w}
                className={styles.skeletonItem}
              />
            );
          })}
        </Box>
      </CardContent>
    </Card>
  );
}
