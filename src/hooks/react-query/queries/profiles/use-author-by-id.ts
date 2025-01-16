import { QUERY_KEYS } from '@/hooks/react-query/enums';
import { type Profile, fetchAuthorById } from '@/supabase';
import { type UseQueryResult, useQuery } from '@tanstack/react-query';

export const useAuthorById = (id: string): UseQueryResult<Profile, Error> => {
  return useQuery<Profile, Error>({
    queryKey: [QUERY_KEYS.AUTHOR, id],
    queryFn: () => fetchAuthorById(id),
    staleTime: 2 * 60 * 1000,
  });
};
