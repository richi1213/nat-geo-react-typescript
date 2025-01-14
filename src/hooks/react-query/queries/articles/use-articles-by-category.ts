import { QUERY_KEYS } from '@/hooks/react-query/enums';
import { fetchArticlesByCategory, type ArticleCategory } from '@/supabase';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useArticlesByCategory = (category: ArticleCategory) => {
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.ARTICLES, category],
    queryFn: ({ pageParam = 1 }) =>
      fetchArticlesByCategory(category, pageParam),

    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.hasNextPage ? allPages.length + 1 : undefined;
    },
    staleTime: 10 * 60 * 1000,
  });
};
