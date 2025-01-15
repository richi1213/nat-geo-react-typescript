import { QUERY_KEYS } from '@/hooks/react-query/enums';
import { getCategoryByName, type ArticleCategory } from '@/supabase';
import { useQuery } from '@tanstack/react-query';

export const useCategoryByName = (category: ArticleCategory) => {
  return useQuery({
    queryKey: [QUERY_KEYS.CATEGORY, category],
    queryFn: () => getCategoryByName(category),
  });
};
