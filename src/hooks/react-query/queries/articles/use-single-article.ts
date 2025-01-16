import { QUERY_KEYS } from '@/hooks/react-query/enums';
import { Article, getArticleByIdAndSlug } from '@/supabase';
import { useQuery, type UseQueryResult } from '@tanstack/react-query';

export const useSingleArticle = (
  id: string,
  slug: string,
): UseQueryResult<Article, Error> => {
  return useQuery<Article, Error>({
    queryKey: [QUERY_KEYS.SINGLE_ARTICLE, id, slug],
    queryFn: () => getArticleByIdAndSlug(id, slug),
    staleTime: 2 * 60 * 1000,
  });
};
