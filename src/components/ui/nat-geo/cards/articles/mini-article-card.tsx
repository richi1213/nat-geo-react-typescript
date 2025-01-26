import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components';
import { Link } from 'react-router';
import type { ArticleCardProps } from './types';
import { DEFAULT_LAYOUT_PATHS } from '@/routes';
import { useTranslation } from 'react-i18next';
import { getLocalizedString } from '@/utils';

export const MiniArticleCard = forwardRef<HTMLDivElement, ArticleCardProps>(
  ({ article, className, ...props }, ref) => {
    const { title_en, title_ka, cover_image, slug, category } = article;

    const { i18n } = useTranslation();

    const currentLanguage = i18n.language;

    const title = getLocalizedString(
      { title_en, title_ka },
      'title',
      currentLanguage,
    );

    const categoryName = getLocalizedString(category, 'name', currentLanguage);
    return (
      <Card
        ref={ref}
        className={cn(
          'group relative overflow-hidden rounded-none border-none bg-transparent shadow-none transition-colors',
          className,
        )}
        {...props}
      >
        <Link to={`/${category.slug}/${DEFAULT_LAYOUT_PATHS.ARTICLE}/${slug}`}>
          <CardContent className='flex gap-4 px-0 py-4'>
            <div className='relative h-24 w-24 flex-shrink-0 overflow-hidden'>
              <img
                src={cover_image}
                alt={title_en}
                className='object-cover transition-transform group-hover:scale-105'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <div className='uppercase tracking-widest'>{categoryName}</div>

              <h3 className='text-sm font-bold text-foreground group-hover:underline'>
                {title}
              </h3>
            </div>
          </CardContent>
        </Link>
      </Card>
    );
  },
);
