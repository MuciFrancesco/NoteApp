import { Box, Typography, Avatar, Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';
import type { User } from '@/types';
import styles from './SidebarUser.module.css';

interface SidebarUserProps {
  readonly user: User;
}

export function SidebarUser({ user }: SidebarUserProps) {
  const { t } = useTranslation();
  return (
    <>
      <Divider sx={{ borderColor: 'divider' }} />
      <Box className={styles.container}>
        <Avatar className={styles.avatar} style={{ backgroundColor: user.avatarColor }}>
          {user.initials}
        </Avatar>
        <Box className={styles.info}>
          <Typography noWrap className={styles.name} color="text.primary">
            {user.name}
          </Typography>
          <Typography className={styles.role} color="text.secondary">{t(user.role)}</Typography>
        </Box>
      </Box>
    </>
  );
}
