import { login, type LoginInput } from '@/supabase';
import type { AuthResponse } from '@supabase/supabase-js';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';

export const useLoginUser = (): UseMutationResult<
  AuthResponse,
  unknown,
  LoginInput
> => {
  const { t } = useTranslation('notifications');
  return useMutation({
    mutationFn: login,

    onError: (err) => {
      toast.error(t('failed_to_login'));
      console.error('Login error:', err);
    },

    onSuccess: () => toast.success(t('successfully_logged_in')),
  });
};
