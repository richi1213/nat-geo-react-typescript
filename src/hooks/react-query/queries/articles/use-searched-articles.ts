import { QUERY_KEYS } from '@/hooks/react-query/enums';
import {
  searchArticles,
  type ShowCardArticle,
  type ArticleCategory,
} from '@/supabase';
import {
  useInfiniteQuery,
  type UseInfiniteQueryResult,
} from '@tanstack/react-query';

export const useSearchedArticles = (
  searchKeyword?: string,
  sortOptions?: { column: string; ascending: boolean },
  dateFilter?: 'all-dates' | 'last-week' | 'last-month' | 'last-year',
  category?: ArticleCategory,
  pageSize: number = 5,
): UseInfiniteQueryResult<
  {
    articles: ShowCardArticle[];
    hasNextPage: boolean;
  },
  Error
> => {
  return useInfiniteQuery({
    queryKey: [
      QUERY_KEYS.SEARCHED_ARTICLES,
      searchKeyword,
      sortOptions,
      dateFilter,
      category,
    ],

    queryFn: async ({ pageParam = 1 }) =>
      searchArticles(
        searchKeyword,
        sortOptions,
        dateFilter,
        category,
        pageParam,
        pageSize,
      ),

    initialPageParam: 1,

    getNextPageParam: (lastPage, allPages) =>
      lastPage.hasNextPage ? allPages.length + 1 : undefined,

    enabled: !!category || !!searchKeyword,
  });
};
