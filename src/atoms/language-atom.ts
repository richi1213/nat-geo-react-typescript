import type { Language } from '@/components';
import { Languages } from '@/i18n';
import { atomWithStorage } from 'jotai/utils';

export const languageAtom = atomWithStorage<Language>('language', Languages.EN);
