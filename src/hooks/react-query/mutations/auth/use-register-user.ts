import { register, type RegisterInput } from '@/supabase';
import type { AuthResponse } from '@supabase/supabase-js';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';

export const useRegisterUser = (): UseMutationResult<
  AuthResponse,
  unknown,
  RegisterInput
> => {
  const { t } = useTranslation('notifications');
  return useMutation({
    mutationFn: register,
    onError: (err) => {
      toast.error(t('failed_to_sign_up'));
      console.error('Registration error:', err);
    },
    onSuccess: () => toast.success(t('successfully_signed_up')),
  });
};
