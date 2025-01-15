import { ArticleCategories, Tables } from '@/supabase';

export type ArticleCategory = `${ArticleCategories}`;

export type Category = Tables<'categories'>;
