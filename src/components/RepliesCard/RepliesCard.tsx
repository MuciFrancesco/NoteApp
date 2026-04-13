import { Card, CardContent, Typography, Box, Avatar, AvatarGroup } from '@mui/material';
import { ChevronRight } from '@mui/icons-material';
import iconInbox from '@/assets/icons/icon-inbox-blue.svg';
import { useTranslation } from 'react-i18next';
import type { Reply } from '@/types';

interface RepliesCardProps {
  readonly replies: readonly Reply[];
}

export function RepliesCard({ replies }: RepliesCardProps) {
  const { t } = useTranslation();
  const visibleAvatars = replies.slice(0, 4);

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ p: 2.5, display: 'flex', flexDirection: 'column', '&:last-child': { pb: 2.5 } }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h5" color="text.primary">{t('replies.title')}</Typography>
          <Box
            sx={{ display: 'flex', alignItems: 'center', gap: 0.25, cursor: 'pointer', ml: 'auto', color: 'primary.dark', '&:hover': { textDecoration: 'underline' } }}
          >
            <Typography sx={{ fontSize: 14, fontWeight: 500, color: 'inherit', lineHeight: '18px' }}>{t('replies.openInbox')}</Typography>
            <ChevronRight sx={{ fontSize: 18, display: 'block' }} />
          </Box>
        </Box>

        <Box
          sx={{
            mt: 1.5, flex: 1, display: 'flex', alignItems: 'center', gap: 2,
            bgcolor: 'primary.light', borderRadius: 2, px: 2, py: 2,
          }}
        >
          <Box
            sx={{
              width: 48, height: 48, borderRadius: '50%',
              bgcolor: '#CEEDED', display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <img src={iconInbox} alt="" width={24} height={24} />
          </Box>
          <Typography data-key-number sx={{ fontSize: 36, lineHeight: '44px', fontWeight: 500, color: '#3E485B' }}>
            {replies.length}
          </Typography>
          <AvatarGroup
            max={5}
            sx={{
              ml: 'auto',
              '& .MuiAvatar-root': { width: 28, height: 28, fontSize: 11, fontWeight: 600, border: '2px solid #E9F8F8' },
            }}
          >
            {visibleAvatars.map((reply) => (
              <Avatar key={reply.id} sx={{ bgcolor: reply.avatarColor }}>{reply.senderInitials}</Avatar>
            ))}
          </AvatarGroup>
        </Box>
      </CardContent>
    </Card>
  );
}
