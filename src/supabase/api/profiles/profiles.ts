import { supabase } from '@/supabase';

export const checkIfUserExists = async (email: string): Promise<boolean> => {
  const { data, error } = await supabase
    .from('profiles')
    .select('email')
    .eq('email', email)
    .single();

  if (error && error.code !== 'PGRST116') {
    throw new Error('Error checking user existence');
  }

  return !!data;
};
