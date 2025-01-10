import { useEffect, useState } from 'react';
import { supabase } from '@/supabase';
import { Session } from '@supabase/supabase-js';

export const useAuth = () => {
  const [session, setSession] = useState<Session | null>(null);

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
  }, [session]);

  return { session };
};
