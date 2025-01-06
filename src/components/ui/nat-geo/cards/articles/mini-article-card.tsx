import * as React from 'react';
import { Lock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components';
import { Link } from 'react-router';
import type { ArticleCardProps } from './types';

export const MiniArticleCard = React.forwardRef<
  HTMLDivElement,
  ArticleCardProps
>(
  (
    { category, title, imageUrl, href, isPremium = false, className, ...props },
    ref,
  ) => {
    return (
      <Card
        ref={ref}
        className={cn(
          'group relative overflow-hidden rounded-none border-none bg-transparent shadow-none transition-colors',
          className,
        )}
        {...props}
      >
        <Link to={href}>
          <CardContent className='flex gap-4 px-0 py-4'>
            <div className='relative h-24 w-24 flex-shrink-0 overflow-hidden'>
              <img
                src={imageUrl}
                alt={title}
                className='object-cover transition-transform group-hover:scale-105'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <div className='flex items-center gap-2'>
                {isPremium && <Lock className='h-4 w-4 text-primary' />}
                <span className='text-sm font-bold uppercase tracking-wider text-primary'>
                  {category}
                </span>
              </div>
              <h3 className='text-sm font-bold text-white group-hover:underline'>
                {title}
              </h3>
            </div>
          </CardContent>
        </Link>
      </Card>
    );
  },
);
