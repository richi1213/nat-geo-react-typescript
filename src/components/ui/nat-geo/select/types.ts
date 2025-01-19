import { ArticleCategories } from '@/supabase';

export type CategorySelectorProps = {
  onSelect: (category: ArticleCategories) => void;
  placeholder?: string;
  label?: string;
  className?: string;
};
