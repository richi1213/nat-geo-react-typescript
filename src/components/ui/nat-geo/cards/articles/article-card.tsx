import { ScanText } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardFooter } from '@/components';
import { forwardRef } from 'react';
import { Link } from 'react-router';
import type { ArticleCardProps } from './types';
import { useTranslation } from 'react-i18next';
import { getLocalizedString } from '@/utils';

export const ArticleCard = forwardRef<HTMLDivElement, ArticleCardProps>(
  ({ variant = 'standard', article, className, ...props }, ref) => {
    const { i18n, t } = useTranslation('common');
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
        <Card className='group relative h-[450px] w-full overflow-hidden rounded-none border-none md:col-span-2'>
          <div
            className='absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105'
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

              <div className='flex items-center gap-2'>
                <ScanText />
                <span className='text-sm uppercase tracking-wider text-foreground'>
                  Read
                </span>
              </div>
            </div>
          </Link>
        </Card>
      );
    }

    return (
      <Card
        ref={ref}
        className={cn(
          'group overflow-hidden rounded-none border bg-foreground transition-colors hover:bg-gray-50',
          className,
        )}
        {...props}
      >
        <Link to={`/article/${id}`}>
          <div className='relative aspect-[3/2] overflow-hidden'>
            <img
              src={cover_image}
              alt={title || title_en}
              className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
            />
          </div>
          <CardContent className='flex flex-col justify-between px-6 pt-9'>
            <div>
              <div className='mb-3 flex items-center gap-2'>
                <span className='text-sm font-bold uppercase tracking-wider text-primary-foreground'>
                  {categoryName}
                </span>
              </div>
              <h3 className='mb-4 text-xl font-bold text-primary-foreground'>
                {title}
              </h3>
            </div>
            <CardFooter className='mt-auto flex items-center gap-1 p-0 text-primary-foreground'>
              <ScanText className='text-primary-foreground' />
              <span className='text-xs font-bold uppercase tracking-[0.16rem] text-primary-foreground'>
                {t('read')}
              </span>
            </CardFooter>
          </CardContent>
        </Link>
      </Card>
    );
  },
);
