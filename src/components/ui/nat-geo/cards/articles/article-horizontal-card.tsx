import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router';
import type { ArticleHorizontalCardProps } from './types';
import { ScanText } from 'lucide-react';
import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

export const ArticleHorizontalCard = forwardRef<
  HTMLAnchorElement,
  ArticleHorizontalCardProps & {
    className?: string;
    style?: React.CSSProperties;
  }
>(({ category, title, imageUrl, href, className, style }, ref) => {
  return (
    <Link
      ref={ref}
      to={href}
      className={cn('group block', className)}
      style={style}
    >
      <Card className='group overflow-hidden rounded-none'>
        <CardContent className='bg-foreground p-0 text-primary-foreground'>
          <div className='flex'>
            <div className='relative w-5/12 overflow-hidden'>
              <div className='relative aspect-[27/20]'>
                <img
                  src={imageUrl}
                  alt={title}
                  className='absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
                />
              </div>
            </div>

            <div className='flex w-7/12 flex-col justify-around -space-y-5 pl-5'>
              <div className='hidden text-sm font-semibold uppercase tracking-[0.18rem] text-gray-600 md:block'>
                {category}
              </div>
              <h3 className='text-lg font-bold md:text-2xl'>{title}</h3>
              <div className='hidden items-center gap-1 p-0 sm:flex'>
                <ScanText className='text-primary-foreground' />
                <span className='text-sm font-semibold uppercase tracking-[0.16rem]'>
                  read
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
});
