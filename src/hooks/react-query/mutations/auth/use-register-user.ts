import { register, type RegisterInput } from '@/supabase';
import type { AuthResponse } from '@supabase/supabase-js';
import { useMutation, UseMutationResult } from '@tanstack/react-query';

export const useRegisterUser = (): UseMutationResult<
  AuthResponse,
  unknown,
  RegisterInput
> =>
  useMutation({
    mutationFn: register,
    onError: (err) => {
      console.error('Registration error:', err);
    },
  });
