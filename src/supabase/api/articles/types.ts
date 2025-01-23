import type { Category, Tables, TablesInsert } from '@/supabase';

export type Article = Tables<'articles'>;
export type InsertArticle = TablesInsert<'articles'>;

export type ShowCardArticle = Pick<
  Article,
  'id' | 'cover_image' | 'title_en' | 'title_ka' | 'slug'
> & {
  category: Pick<Category, 'name_en' | 'name_ka' | 'slug'>;
} & {
  className?: string;
  style?: React.CSSProperties;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  variant?: 'default' | 'withActions';
};
