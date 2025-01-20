import { LOCAL_STORAGE_KEYS } from '@/utils';
import { Navigate, Outlet } from 'react-router';

export const IsUnauthorizedGuard: React.FC = () => {
  const token = localStorage.getItem(LOCAL_STORAGE_KEYS.SUPABASE_SESSION);

  const user = token ? JSON.parse(token)?.user : null;

  if (!user?.id || user.role !== 'authenticated') {
    return <Navigate to='/' />;
  }

  return <Outlet />;
};
