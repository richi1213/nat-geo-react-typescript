import { QUERY_KEYS } from '@/hooks/react-query/enums';
import { type Category, getCategoryById } from '@/supabase';
import { useQuery, type UseQueryResult } from '@tanstack/react-query';

export const useCategoryById = (
  categoryId: string,
): UseQueryResult<Category, Error> => {
  return useQuery<Category, Error>({
    queryKey: [QUERY_KEYS.CATEGORY_BY_ID, categoryId],
    queryFn: () => getCategoryById(categoryId),
    enabled: !!categoryId,
  });
};
