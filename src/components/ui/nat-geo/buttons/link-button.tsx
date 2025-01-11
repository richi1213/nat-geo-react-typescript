import { cva, type VariantProps } from 'class-variance-authority';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router';
import type { LinkButtonProps } from './types';

const linkButtonVariants = cva(
  'rounded-none uppercase text-xs font-bold tracking-[0.2rem] relative overflow-hidden transition-all ease-in-out',
  {
    variants: {
      size: {
        default: 'h-12 px-4 py-2',
        sm: 'h-8 px-3',
        lg: 'h-14 px-8',
      },
      variant: {
        default:
          'bg-background hover:bg-primary hover:text-primary-foreground bg-gradient-to-r from-primary to-primary text-foreground',
        alternate:
          'bg-primary hover:bg-foreground hover:text-background bg-gradient-to-r from-foreground to-foreground text-primary-foreground',
        penguin:
          'bg-foreground text-primary-foreground hover:text-foreground hover:bg-background bg-gradient-to-r from-background to-background',
      },
    },
    defaultVariants: {
      size: 'default',
      variant: 'default',
    },
  },
);

export type LinkButtonVariants = VariantProps<typeof linkButtonVariants>;

export const LinkButton: React.FC<LinkButtonProps> = ({
  className,
  size,
  variant = 'default',
  to,
  ...props
}) => {
  const buttonContent = (
    <Button
      className={cn(
        linkButtonVariants({ size, variant }),
        className,
        'relative overflow-hidden bg-[length:0%_100%] bg-left bg-no-repeat transition-all duration-300 ease-in-out',
        'hover:bg-[length:100%_100%]',
      )}
      {...props}
    />
  );

  if (to)
    return (
      <Link to={to} className='inline-block'>
        {buttonContent}
      </Link>
    );

  return buttonContent;
};
