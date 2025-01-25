import { type UpdateProfile, updateUserMetadata } from '@/supabase';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';

export const useUpdateUserMetadata = (): UseMutationResult<
  void,
  unknown,
  UpdateProfile
> => {
  const { t } = useTranslation('notifications');
  return useMutation({
    mutationFn: (metadata: UpdateProfile) => updateUserMetadata(metadata),
    onError: (err) => {
      toast.error(t('failed_to_update_personal_information'));
      console.error('Update user metadata error:', err);
    },
    onSuccess: () => toast.success(t('personal_information_updated')),
  });
};
