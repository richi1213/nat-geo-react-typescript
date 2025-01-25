import { DEFAULT_LAYOUT_PATHS } from '@/routes';
import { logout } from '@/supabase';
import { AuthApiError } from '@supabase/supabase-js';
import { useMutation, type UseMutationResult } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router';
import { toast } from 'sonner';

export const useLogoutUser = (): UseMutationResult<
  { error: AuthApiError | null },
  unknown,
  void
> => {
  const { t } = useTranslation('notifications');

  const navigate = useNavigate();
  const location = useLocation();

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      if (location.pathname === '/write-article') {
        navigate(DEFAULT_LAYOUT_PATHS.HOME);
      }
      toast.success(t('successfully_signed_out'));
    },
    onError: (err) => {
      console.error('Logout error:', err);
      toast.error(t('failed_to_sign_out'));
    },
  });
};
