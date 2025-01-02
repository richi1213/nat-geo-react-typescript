import { Button } from '@/components';
import { cn } from '@/lib/utils';
import { Link } from 'react-router';
import type { MenuButtonProps } from './types';

export const MenuButton: React.FC<MenuButtonProps> = ({
  to,
  className,
  children,
  ...props
}) => {
  const buttonClasses = cn(
    'rounded-none bg-foreground font-extrabold uppercase tracking-[0.15rem] shadow-none hover:bg-foreground hover:text-chart-5 px-0',
    className,
  );

  if (to) {
    return (
      <Link to={to}>
        <Button className={buttonClasses} {...props}>
          {children}
        </Button>
      </Link>
    );
  }

  return (
    <Button className={buttonClasses} {...props}>
      {children}
    </Button>
  );
};
