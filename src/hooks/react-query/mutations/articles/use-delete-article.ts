import { deleteArticle } from '@/supabase';
import { useMutation, type UseMutationResult } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';

export const useDeleteArticle = (): UseMutationResult<void, Error, string> => {
  const { t } = useTranslation('notifications');
  return useMutation({
    mutationFn: (articleId: string) => deleteArticle(articleId),
    onSuccess: () => toast.success(t('article_successfully_deleted')),
    onError: () => toast.error(t('failed_to_delete_article')),
  });
};
