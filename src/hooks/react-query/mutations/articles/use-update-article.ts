import { QUERY_KEYS } from '@/hooks/react-query/enums';
import { type UpdateArticle, updateArticle } from '@/supabase';
import {
  useMutation,
  useQueryClient,
  type UseMutationResult,
} from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';

export const useUpdateArticle = (
  articleSlug: string,
): UseMutationResult<
  void,
  Error,
  { articleId: string; updatedData: UpdateArticle }
> => {
  const { t } = useTranslation('notifications');
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      articleId,
      updatedData,
    }: {
      articleId: string;
      updatedData: UpdateArticle;
    }) => updateArticle(articleId, updatedData),
    onError: (err) => {
      toast.error(t('failed_to_update_article'));
      console.error('Update user metadata error:', err);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.SINGLE_ARTICLE, articleSlug],
      });
      toast.success(t('article_successfully_updated'));
    },
  });
};
