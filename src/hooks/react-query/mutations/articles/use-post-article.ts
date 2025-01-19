import { type InsertArticle, postArticle } from '@/supabase';
import { useMutation, type UseMutationResult } from '@tanstack/react-query';

export const usePostArticle = (): UseMutationResult<
  void,
  Error,
  InsertArticle
> => {
  return useMutation({
    mutationFn: (articleData: InsertArticle) => postArticle(articleData),
  });
};
