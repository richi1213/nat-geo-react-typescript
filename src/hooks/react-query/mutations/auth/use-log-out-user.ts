import { logout } from '@/supabase';
import { AuthApiError } from '@supabase/supabase-js';
import { useMutation, type UseMutationResult } from '@tanstack/react-query';
import { useNavigate, useLocation } from 'react-router';

export const useLogoutUser = (): UseMutationResult<
  { error: AuthApiError | null },
  unknown,
  void
> => {
  const navigate = useNavigate();
  const location = useLocation();

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      if (location.pathname === '/write-article') {
        navigate('/');
      }
    },
    onError: (err) => {
      console.error('Logout error:', err);
    },
  });
};
