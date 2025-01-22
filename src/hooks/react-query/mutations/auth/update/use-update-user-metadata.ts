import { updateUserMetadata, type UserMetadata } from '@/supabase';
import { useMutation, UseMutationResult } from '@tanstack/react-query';

export const useUpdateUserMetadata = (): UseMutationResult<
  void,
  unknown,
  UserMetadata
> =>
  useMutation({
    mutationFn: (metadata: UserMetadata) => updateUserMetadata(metadata),
    onError: (err) => {
      console.error('Update user metadata error:', err);
    },
    onSuccess: () => console.log('succes'),
  });
