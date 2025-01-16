import { QUERY_KEYS } from '@/hooks/react-query/enums';
import {
  fetchRecentArticlesByCategory,
  type ShowCardArticle,
  type ArticleCategory,
} from '@/supabase';
import { useQuery, type UseQueryResult } from '@tanstack/react-query';

export const useRecentArticlesByCategory = (
  category: ArticleCategory,
): UseQueryResult<{ articles: ShowCardArticle[] }, Error> => {
  return useQuery<{ articles: ShowCardArticle[] }, Error>({
    queryKey: [QUERY_KEYS.RECENT_ARTICLES, category],
    queryFn: () => fetchRecentArticlesByCategory(category),
    staleTime: 10 * 60 * 1000,
  });
};
