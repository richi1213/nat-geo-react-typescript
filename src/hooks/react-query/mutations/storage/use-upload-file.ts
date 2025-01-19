import { useMutation, type UseMutationResult } from '@tanstack/react-query';
import { type UploadDestination, uploadFileToSupabase } from '@/supabase';

export const useUploadFile = (): UseMutationResult<
  string,
  Error,
  UploadDestination
> => {
  return useMutation({
    mutationFn: ({ file, folder }: UploadDestination) =>
      uploadFileToSupabase(file, folder),
    onError: (err) => {
      console.error('File upload error:', err);
    },
  });
};
