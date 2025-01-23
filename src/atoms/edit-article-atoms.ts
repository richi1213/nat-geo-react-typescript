import { atom } from 'jotai';

export const isSheetOpenAtom = atom<boolean>(false);

export const activeArticleSlugAtom = atom<string | null>(null);
