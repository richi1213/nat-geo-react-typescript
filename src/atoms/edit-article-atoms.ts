import type { Article } from '@/supabase';
import { atom } from 'jotai';

export const isSheetOpenAtom = atom<boolean>(false);

export const activeArticleDataAtom = atom<Article | null>(null);
