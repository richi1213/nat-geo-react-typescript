import { atomWithStorage } from 'jotai/utils';
import { Session } from '@supabase/supabase-js';

export const userAtom = atomWithStorage<Session | null>('user-session', null);
