import { QUERY_KEYS } from '@/hooks/react-query/enums';
import {
  type Category,
  getCategoryByName,
  type ArticleCategory,
} from '@/supabase';
import { useQuery, type UseQueryResult } from '@tanstack/react-query';

export const useCategoryByName = (
  category: ArticleCategory,
): UseQueryResult<Category, Error> => {
  return useQuery<Category, Error>({
    queryKey: [QUERY_KEYS.CATEGORY, category],
    queryFn: () => getCategoryByName(category),
    enabled: !!category,
  });
};
