import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router';
import { ScanText } from 'lucide-react';
import { cn } from '@/lib/utils';
import { forwardRef } from 'react';
import type { ShowCardArticle } from '@/supabase';
import { useTranslation } from 'react-i18next';
import { getLocalizedString } from '@/utils';
import { DEFAULT_LAYOUT_PATHS } from '@/routes';

export const ArticleHorizontalCard = forwardRef<
  HTMLAnchorElement,
  ShowCardArticle & {
    className?: string;
    style?: React.CSSProperties;
  }
>(
  (
    { category, title_en, title_ka, cover_image, className, style, slug },
    ref,
  ) => {
    const { i18n, t } = useTranslation('common');
    const currentLanguage = i18n.language;

    const title = getLocalizedString(
      { title_en, title_ka },
      'title',
      currentLanguage,
    );
    const categoryName = getLocalizedString(category, 'name', currentLanguage);

    return (
      <Link
        ref={ref}
        to={`${DEFAULT_LAYOUT_PATHS.ARTICLE}/${slug}`}
        className={cn('group block', className)}
        style={style}
      >
        <Card className='group overflow-hidden rounded-none'>
          <CardContent className='bg-foreground p-0 text-primary-foreground'>
            <div className='flex'>
              <div className='relative w-5/12 overflow-hidden'>
                <div className='relative aspect-[27/20]'>
                  <img
                    src={cover_image}
                    alt={title || title_en}
                    className='absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
                  />
                </div>
              </div>

              <div className='flex w-7/12 flex-col justify-around -space-y-5 pl-5'>
                <div className='hidden text-sm font-semibold uppercase tracking-[0.18rem] text-gray-600 md:block'>
                  {categoryName}
                </div>
                <h3 className='text-lg font-bold md:text-2xl'>{title}</h3>{' '}
                <div className='hidden items-center gap-1 p-0 sm:flex'>
                  <ScanText className='text-primary-foreground' />
                  <span className='text-sm font-semibold uppercase tracking-[0.16rem]'>
                    {t('read')}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    );
  },
);
