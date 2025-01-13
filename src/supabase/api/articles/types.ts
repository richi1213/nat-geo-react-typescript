import type { Tables } from '@/supabase';

export type Article = Tables<'articles'>;

export type ArticleCategory =
  | 'impact'
  | 'animals'
  | 'environment'
  | 'history'
  | 'science'
  | 'travel';
