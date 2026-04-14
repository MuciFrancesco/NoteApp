import { Card, CardContent, Typography, Box, Avatar, AvatarGroup } from '@mui/material';
import { ChevronRight } from '@mui/icons-material';
import iconInbox from '@/assets/icons/icon-inbox-blue.svg';
import { useTranslation } from 'react-i18next';
import type { Reply } from '@/types';
import styles from './RepliesCard.module.css';

interface RepliesCardProps {
  readonly replies: readonly Reply[];
}

export function RepliesCard({ replies }: RepliesCardProps) {
  const { t } = useTranslation();
  const visibleAvatars = replies.slice(0, 4);

  return (
    <Card className={styles.card}>
      <CardContent className={styles.cardContent}>
        <Box className={styles.header}>
          <Typography variant="h5" color="text.primary">{t('replies.title')}</Typography>
          <Box className={styles.inboxLink}>
            <Typography className={styles.inboxLinkText}>{t('replies.openInbox')}</Typography>
            <ChevronRight className={styles.inboxChevron} />
          </Box>
        </Box>

        <Box className={styles.repliesBox}>
          <Box className={styles.inboxIconWrapper}>
            <img src={iconInbox} alt="" width={24} height={24} />
          </Box>
          <Typography data-key-number className={styles.countNumber}>
            {replies.length}
          </Typography>
          <AvatarGroup max={5} className={styles.avatarGroup}>
            {visibleAvatars.map((reply) => (
              <Avatar key={reply.id} style={{ backgroundColor: reply.avatarColor }}>{reply.senderInitials}</Avatar>
            ))}
          </AvatarGroup>
        </Box>
      </CardContent>
    </Card>
  );
}
