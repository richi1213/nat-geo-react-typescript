import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { Separator } from '@/components';
import type { HeadingLineProps } from './types';

export const HeadingLine = forwardRef<HTMLDivElement, HeadingLineProps>(
  ({ className, orientation = 'horizontal', ...props }, ref) => {
    return (
      <Separator
        ref={ref}
        decorative
        orientation={orientation}
        className={cn(
          'bg-primary',
          orientation === 'horizontal' && 'mx-auto mt-2 h-1 w-10',
          orientation === 'vertical' && 'my-auto h-10 w-1',
          className,
        )}
        {...props}
      />
    );
  },
);
