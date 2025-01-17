import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components';
import { Link } from 'react-router';
import type { ArticleCardProps } from './types';
import { useTranslation } from 'react-i18next';
import { getLocalizedString } from '@/utils';

export const MayLikeCard = forwardRef<HTMLDivElement, ArticleCardProps>(
  ({ variant = 'standard', article, className, ...props }, ref) => {
    const { i18n } = useTranslation();
    const currentLanguage = i18n.language;

    const { id, title_en, title_ka, cover_image, category } = article;

    const title = getLocalizedString(
      { title_en, title_ka },
      'title',
      currentLanguage,
    );
    const categoryName = getLocalizedString(category, 'name', currentLanguage);

    if (variant === 'hero') {
      return (
        <Card className='relative h-full w-full overflow-hidden rounded-none border-none md:col-span-2'>
          <div
            className='absolute inset-0 bg-cover bg-center transition-transform duration-300'
            style={{ backgroundImage: `url(${cover_image})` }}
          >
            <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-black/40' />
          </div>

          <Link
            to={`/article/${id}`}
            className='relative flex h-full flex-col justify-end p-6'
          >
            <div className='space-y-4'>
              <div className='flex items-center gap-2'>
                <span className='text-sm font-medium uppercase tracking-wider hover:underline'>
                  {categoryName}
                </span>
              </div>

              <h3 className='max-w-xl text-2xl font-bold text-foreground sm:text-3xl md:text-4xl'>
                {title}
              </h3>
            </div>
          </Link>
        </Card>
      );
    }

    return (
      <Card
        ref={ref}
        className={cn(
          'overflow-hidden rounded-none border border-none bg-transparent shadow-none transition-colors',
          className,
        )}
        {...props}
      >
        <Link to={`/article/${id}`}>
          <div className='relative aspect-[3/2] overflow-hidden'>
            <img
              src={cover_image}
              alt={title || title_en}
              className='h-full w-full object-cover'
            />
          </div>
          <CardContent className='flex flex-col justify-between px-6 pt-4'>
            <div>
              <div className='mb-3 flex items-center gap-2'>
                <span className='text-xs font-semibold uppercase tracking-wider text-gray-500'>
                  {categoryName}
                </span>
              </div>
              <h3 className='text-xl font-bold text-primary-foreground'>
                {title}
              </h3>
            </div>
          </CardContent>
        </Link>
      </Card>
    );
  },
);
