import { Tables } from '@/supabase';

export type ArticleCategory =
  | 'impact'
  | 'animals'
  | 'environment'
  | 'history'
  | 'science'
  | 'travel';

export type Category = Tables<'categories'>;
