import { QUERY_KEYS } from '@/hooks/react-query/enums';
import { fetchFilesFromSupabase } from '@/supabase';
import { useQuery, type UseQueryResult } from '@tanstack/react-query';

export const useShowImageLinks = (
  folderName: string,
): UseQueryResult<string[], Error> => {
  return useQuery<string[], Error>({
    queryKey: [QUERY_KEYS.SHOWS, folderName],
    queryFn: () => fetchFilesFromSupabase(folderName),
    staleTime: 3600000,
  });
};
