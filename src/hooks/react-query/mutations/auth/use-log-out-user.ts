import { logout } from '@/supabase';
import { AuthApiError } from '@supabase/supabase-js';
import { useMutation, type UseMutationResult } from '@tanstack/react-query';

export const useLogoutUser = (): UseMutationResult<
  { error: AuthApiError | null },
  unknown,
  void
> =>
  useMutation({
    mutationFn: logout,

    onError: (err) => {
      console.error('Logout error:', err);
    },
  });
