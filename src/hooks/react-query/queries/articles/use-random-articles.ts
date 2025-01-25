import { QUERY_KEYS } from '@/hooks/react-query/enums';
import {
  type ShowCardArticle,
  type ArticleCategory,
  fetchRandomArticles,
} from '@/supabase';
import { useQuery, type UseQueryResult } from '@tanstack/react-query';

export const useRandomArticles = (
  category?: ArticleCategory,
  limit = 9,
): UseQueryResult<ShowCardArticle[], Error> => {
  return useQuery<ShowCardArticle[], Error>({
    queryKey: [QUERY_KEYS.RANDOM_ARTICLES, category, limit],
    queryFn: () => fetchRandomArticles(category, limit),
    staleTime: 10 * 60 * 1000,
  });
};
