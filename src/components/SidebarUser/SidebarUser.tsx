import { Box, Typography, Avatar, Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';
import type { User } from '@/types';

interface SidebarUserProps {
  readonly user: User;
}

export function SidebarUser({ user }: SidebarUserProps) {
  const { t } = useTranslation();
  return (
    <>
      <Divider sx={{ borderColor: 'divider' }} />
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, px: 2.5, py: 2 }}>
        <Avatar sx={{ width: 36, height: 36, fontSize: 14, fontWeight: 600, bgcolor: user.avatarColor }}>
          {user.initials}
        </Avatar>
        <Box sx={{ minWidth: 0, flex: 1 }}>
          <Typography noWrap sx={{ fontSize: 14, fontWeight: 600, color: 'text.primary' }}>
            {user.name}
          </Typography>
          <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>{t(user.role)}</Typography>
        </Box>
      </Box>
    </>
  );
}
