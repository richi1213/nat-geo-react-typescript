export type ArticleCardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: 'hero' | 'standard';
  category: string;
  subcategory?: string;
  title: string;
  imageUrl: string;
  href: string;
  isPremium?: boolean;
};

export type ArticleHorizontalCardProps = {
  category: string;
  title: string;
  imageUrl: string;
  href: string;
};
