import type { Category, Tables } from '@/supabase';

export type Article = Tables<'articles'>;

export type ShowCardArticle = Pick<
  Article,
  'id' | 'cover_image' | 'title_en' | 'title_ka'
> & {
  category: Pick<Category, 'name_en' | 'name_ka' | 'slug'>;
};
