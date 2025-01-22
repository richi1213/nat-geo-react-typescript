import { type UpdateProfile, updateUserMetadata } from '@/supabase';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { toast } from 'sonner';

export const useUpdateUserMetadata = (): UseMutationResult<
  void,
  unknown,
  UpdateProfile
> =>
  useMutation({
    mutationFn: (metadata: UpdateProfile) => updateUserMetadata(metadata),
    onError: (err) => {
      toast.error('Failed to update personal information');
      console.error('Update user metadata error:', err);
    },
    onSuccess: () => toast.success('Personal information updated'),
  });
