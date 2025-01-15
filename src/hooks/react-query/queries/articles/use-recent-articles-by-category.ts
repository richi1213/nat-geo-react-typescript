import { QUERY_KEYS } from '@/hooks/react-query/enums';
import {
  fetchRecentArticlesByCategory,
  type ArticleCategory,
} from '@/supabase';
import { useQuery } from '@tanstack/react-query';

export const useRecentArticlesByCategory = (category: ArticleCategory) => {
  return useQuery({
    queryKey: [QUERY_KEYS.RECENT_ARTICLES, category],
    queryFn: () => fetchRecentArticlesByCategory(category),
  });
};
