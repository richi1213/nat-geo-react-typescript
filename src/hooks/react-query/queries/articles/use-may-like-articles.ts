import { QUERY_KEYS } from '@/hooks/react-query/enums';
import { type ShowCardArticle, fetchMayLikeArticles } from '@/supabase';
import { useQuery, type UseQueryResult } from '@tanstack/react-query';

export const useMayLikeArticles = ({
  currentArticleId,
  currentCategoryId,
  currentAuthorId,
}: {
  currentArticleId: string;
  currentCategoryId: string;
  currentAuthorId: string;
}): UseQueryResult<ShowCardArticle[], Error> => {
  return useQuery<ShowCardArticle[], Error>({
    queryKey: [
      QUERY_KEYS.MAY_LIKE_ARTICLES,
      currentArticleId,
      currentCategoryId,
      currentAuthorId,
    ],
    queryFn: async () => {
      const { articles } = await fetchMayLikeArticles({
        currentArticleId,
        currentCategoryId,
        currentAuthorId,
      });
      return articles;
    },
    staleTime: 60 * 1000,
    enabled: !!(currentArticleId && currentCategoryId && currentAuthorId),
  });
};
