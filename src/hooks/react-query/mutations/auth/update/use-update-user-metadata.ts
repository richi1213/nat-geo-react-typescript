import { type UpdateProfile, updateUserMetadata } from '@/supabase';
import { useMutation, UseMutationResult } from '@tanstack/react-query';

export const useUpdateUserMetadata = (): UseMutationResult<
  void,
  unknown,
  UpdateProfile
> =>
  useMutation({
    mutationFn: (metadata: UpdateProfile) => updateUserMetadata(metadata),
    onError: (err) => {
      console.error('Update user metadata error:', err);
    },
    onSuccess: () => console.log('succes'),
  });
