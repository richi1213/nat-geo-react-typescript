import { QUERY_KEYS } from '@/hooks/react-query/enums';
import { deleteArticle } from '@/supabase';
import {
  useMutation,
  useQueryClient,
  type UseMutationResult,
} from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';

export const useDeleteArticle = (): UseMutationResult<void, Error, string> => {
  const { t } = useTranslation('notifications');

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (articleId: string) => deleteArticle(articleId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.SEARCHED_ARTICLES],
      });
      toast.success(t('article_successfully_deleted'));
    },
    onError: () => toast.error(t('failed_to_delete_article')),
  });
};
