import { Navigate, Outlet } from 'react-router';
import { LOCAL_STORAGE_KEYS } from '@/utils';
import { DEFAULT_LAYOUT_PATHS } from '@/routes';

export const IsUnauthorizedGuard: React.FC = () => {
  const token = localStorage.getItem(LOCAL_STORAGE_KEYS.SUPABASE_SESSION);

  const user = token ? JSON.parse(token)?.user : null;

  if (!user?.id || user.role !== 'authenticated') {
    return <Navigate to={DEFAULT_LAYOUT_PATHS.HOME} />;
  }

  return <Outlet />;
};
