import { atom } from 'jotai';

export const isSheetOpenAtom = atom<boolean>(false);

export const activeArticleIdAtom = atom<string | null>(null);
