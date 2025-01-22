import { Languages } from '@/i18n';
import type { PropsWithChildren } from 'react';

export type Language = Languages.EN | Languages.KA;

export type AccountSettingsDialogProps = PropsWithChildren<{
  isOpen: boolean;
  onClose: () => void;
}>;
