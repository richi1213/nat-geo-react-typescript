import { ShowCardArticle } from '@/supabase';

export type ArticleCardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: 'hero' | 'standard';
  article: ShowCardArticle;
};
