import { login, type LoginInput } from '@/supabase';
import type { AuthResponse } from '@supabase/supabase-js';
import { useMutation, UseMutationResult } from '@tanstack/react-query';

export const useLoginUser = (): UseMutationResult<
  AuthResponse,
  unknown,
  LoginInput
> =>
  useMutation({
    mutationFn: login,
    onError: (err) => {
      console.error('Login error:', err);
    },
  });
