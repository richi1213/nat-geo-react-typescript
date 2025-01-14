import type { Tables } from '@/supabase';

export type ArticleCategory =
  | 'impact'
  | 'animals'
  | 'environment'
  | 'history'
  | 'science'
  | 'travel';

export type Article = Tables<'articles'>;

export type ShowCardArticle = Pick<
  Article,
  'id' | 'cover_image' | 'category' | 'title_en' | 'title_ka'
>;
