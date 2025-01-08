import { forwardRef } from 'react';
import { Button } from '@/components';
import { cn } from '@/lib/utils';
import { Link } from 'react-router';
import type { MenuButtonProps } from './types';

export const MenuButton = forwardRef<HTMLButtonElement, MenuButtonProps>(
  ({ to, className, children, ...props }, ref) => {
    const buttonClasses = cn(
      'rounded-none bg-foreground font-extrabold uppercase tracking-[0.15rem] shadow-none hover:bg-foreground hover:text-chart-5 px-0',
      className,
    );

    if (to) {
      return (
        <Link to={to}>
          <Button ref={ref} className={buttonClasses} {...props}>
            {children}
          </Button>
        </Link>
      );
    }

    return (
      <Button ref={ref} className={buttonClasses} {...props}>
        {children}
      </Button>
    );
  },
);
