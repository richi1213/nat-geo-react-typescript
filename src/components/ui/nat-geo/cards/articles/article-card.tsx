import { Lock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardFooter } from '@/components';
import { forwardRef } from 'react';
import { Link } from 'react-router';
import type { ArticleCardProps } from './types';

export const ArticleCard = forwardRef<HTMLDivElement, ArticleCardProps>(
  (
    {
      variant = 'standard',
      category,
      subcategory,
      title,
      imageUrl,
      href,
      isPremium = false,
      className,
      ...props
    },
    ref,
  ) => {
    if (variant === 'hero') {
      return (
        <Card
          ref={ref}
          className={cn(
            'group relative overflow-hidden rounded-none border-none',
            className,
          )}
          {...props}
        >
          <Link to={href} className='block h-full'>
            <div className='relative aspect-[16/10] overflow-hidden'>
              <img
                src={imageUrl}
                alt={title}
                className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
              />
            </div>
            <CardContent className='relative z-10 flex h-full flex-col justify-end p-6 text-foreground'>
              <div className='mb-4 flex items-center gap-2'>
                {isPremium && <Lock className='h-4 w-4 text-primary' />}
                <div className='space-x-2 text-sm font-bold uppercase tracking-wider'>
                  <span className='text-primary'>{category}</span>
                  {subcategory && (
                    <span className='text-foreground/90'>{subcategory}</span>
                  )}
                </div>
              </div>
              <h2 className='mb-4 text-3xl font-bold leading-tight'>{title}</h2>
              <CardFooter className='p-0'>
                <span className='text-xs font-bold uppercase tracking-wider'>
                  Read
                </span>
              </CardFooter>
            </CardContent>
          </Link>
        </Card>
      );
    }

    return (
      <Card
        ref={ref}
        className={cn(
          'group overflow-hidden rounded-none border border-chart-4 bg-foreground transition-colors hover:bg-gray-50',
          className,
        )}
        {...props}
      >
        <Link to={href}>
          <div className='relative aspect-[3/2] overflow-hidden'>
            <img
              src={imageUrl}
              alt={title}
              className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
            />
          </div>
          <CardContent className='p-6'>
            <div className='mb-3 flex items-center gap-2'>
              {isPremium && <Lock className='h-4 w-4 text-primary' />}
              <span className='text-sm font-bold uppercase tracking-wider text-primary'>
                {category}
              </span>
            </div>
            <h3 className='mb-4 text-xl font-bold text-gray-900'>{title}</h3>
            <CardFooter className='p-0'>
              <span className='text-xs font-bold uppercase tracking-wider text-gray-600'>
                Read
              </span>
            </CardFooter>
          </CardContent>
        </Link>
      </Card>
    );
  },
);
