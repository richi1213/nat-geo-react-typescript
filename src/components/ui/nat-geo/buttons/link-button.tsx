import { cva, type VariantProps } from 'class-variance-authority';
import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router';

const linkButtonVariants = cva(
  'rounded-none uppercase text-xs font-bold tracking-[0.2rem] relative overflow-hidden transition-all duration-200 ease-in-out',
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
      },
    },
    defaultVariants: {
      size: 'default',
      variant: 'default',
    },
  },
);

type LinkButtonVariants = VariantProps<typeof linkButtonVariants>;
type LinkButtonProps = Omit<ButtonProps, 'variant'> &
  LinkButtonVariants & {
    to?: string;
  };

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
        'hover:bg-[length:100%_100%] hover:text-background',
      )}
      {...props}
    />
  );

  if (to) {
    return <Link to={to}>{buttonContent}</Link>;
  }

  return buttonContent;
};
