import { cva, type VariantProps } from 'class-variance-authority';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router';
import type { UnderlinedButtonProps } from './types';

const underlinedButtonVariants = cva(
  'rounded-none capitalize text-xs relative overflow-hidden bg-foreground shadow-none',
  {
    variants: {
      size: {
        default: 'h-12 px-4 py-2',
        sm: 'h-6 px-0.5',
        lg: 'h-14 px-6',
      },
      variant: {
        default:
          'border-b-2 border-primary bg-gradient-to-t from-primary to-primary bg-[length:100%_0] bg-bottom bg-no-repeat text-sm transition-all duration-200 ease-in-out hover:bg-[length:100%_100%] hover:bg-primary',
      },
    },
    defaultVariants: {
      size: 'default',
      variant: 'default',
    },
  },
);

export type UnderlinedButtonVariants = VariantProps<
  typeof underlinedButtonVariants
>;

export const UnderlinedButton: React.FC<UnderlinedButtonProps> = ({
  className,
  size,
  variant = 'default',
  to,
  ...props
}) => {
  const buttonContent = (
    <Button
      className={cn(underlinedButtonVariants({ size, variant }), className)}
      {...props}
    />
  );

  if (to) return <Link to={to}>{buttonContent}</Link>;

  return buttonContent;
};
