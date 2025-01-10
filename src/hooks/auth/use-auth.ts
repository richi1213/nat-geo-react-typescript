import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { supabase } from '@/supabase';
import { userAtom } from '@/atoms';

export const useAuth = () => {
  const [session, setSession] = useAtom(userAtom);

  useEffect(() => {
    if (!session) {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session);
      });
    }

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, [session, setSession]);

  return { session };
};
