import { QUERY_KEYS } from '@/hooks/react-query/enums';
import {
  fetchArticlesByCategory,
  type ShowCardArticle,
  type ArticleCategory,
} from '@/supabase';
import {
  useInfiniteQuery,
  type UseInfiniteQueryResult,
} from '@tanstack/react-query';

export const useArticlesByCategory = (
  category: ArticleCategory,
): UseInfiniteQueryResult<
  {
    pages: { articles: ShowCardArticle[]; hasNextPage: boolean }[];
    pageParams: number[];
  },
  Error
> => {
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.ARTICLES, category],
    queryFn: ({ pageParam = 1 }) =>
      fetchArticlesByCategory(category, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.hasNextPage ? allPages.length + 1 : undefined,
    staleTime: 10 * 60 * 1000,
    enabled: !!category,
  });
};
