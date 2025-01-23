import { QUERY_KEYS } from '@/hooks/react-query/enums';
import { type Article, getArticleBySlug } from '@/supabase';
import { useQuery, type UseQueryResult } from '@tanstack/react-query';

export const useSingleArticle = (
  slug: string,
): UseQueryResult<Article, Error> => {
  return useQuery<Article, Error>({
    queryKey: [QUERY_KEYS.SINGLE_ARTICLE, slug],
    queryFn: () => getArticleBySlug(slug),
    staleTime: 2 * 60 * 1000,
    enabled: !!slug,
  });
};
