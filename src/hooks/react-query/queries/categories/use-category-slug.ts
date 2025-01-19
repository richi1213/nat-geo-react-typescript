import { QUERY_KEYS } from '@/hooks/react-query/enums';
import { getCategorySlug } from '@/supabase';
import { useQuery, type UseQueryResult } from '@tanstack/react-query';

export const useCategorySlug = (id: string): UseQueryResult<string, Error> => {
  return useQuery<string, Error>({
    queryKey: [QUERY_KEYS.CATEGORY_SLUG, id],
    queryFn: () => getCategorySlug(id),
    enabled: !!id,
  });
};
