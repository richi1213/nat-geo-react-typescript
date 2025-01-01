import { ButtonProps } from '@/components';
import type { LinkButtonVariants } from './link-button';
import type { UnderlinedButtonVariants } from './underlined-button';

type ButtonWithVariantProps<T> = Omit<ButtonProps, 'variant'> &
  T & { to?: string };

export type LinkButtonProps = ButtonWithVariantProps<LinkButtonVariants>;
export type UnderlinedButtonProps =
  ButtonWithVariantProps<UnderlinedButtonVariants>;
