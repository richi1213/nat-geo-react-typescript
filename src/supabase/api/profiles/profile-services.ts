import { type Profile, supabase } from '@/supabase';

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

export const fetchAuthorById = async (id: string): Promise<Profile> => {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    throw new Error(`Failed to fetch author: ${error.message}`);
  }

  if (!data) {
    throw new Error('Author not found');
  }

  return data as Profile;
};
