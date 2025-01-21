import { QUERY_KEYS } from '@/hooks/react-query/enums';
import {
  searchArticles,
  type ShowCardArticle,
  type ArticleCategory,
} from '@/supabase';
import type { SortDate } from '@/utils';
import {
  useInfiniteQuery,
  type UseInfiniteQueryResult,
} from '@tanstack/react-query';

export const useSearchedArticles = (
  searchKeyword?: string,
  sortOptions?: { column: string; ascending: boolean },
  dateFilter?: SortDate,
  category?: ArticleCategory[],
  pageSize: number = 5,
): UseInfiniteQueryResult<
  {
    pages: { articles: ShowCardArticle[]; hasNextPage: boolean }[];
    pageParams: number[];
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
