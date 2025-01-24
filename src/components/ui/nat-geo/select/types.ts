import { type ArticleCategory } from '@/supabase';

export type CategorySelectorProps = {
  onSelect: (category: ArticleCategory) => void;
  placeholder?: string;
  label?: string;
  className?: string;
};
