import { supabase } from '@/supabase';
import type { Database, LoginInput, RegisterInput } from '@/supabase';
import {
  AuthApiError,
  AuthResponse,
  isAuthApiError,
  SupabaseClient,
} from '@supabase/supabase-js';

const supabaseWithSchema: SupabaseClient<Database> = supabase;

export const register = async ({
  email,
  password,
  first_name,
  last_name,
  username,
  fb_link,
}: RegisterInput): Promise<AuthResponse> => {
  const { data, error } = await supabaseWithSchema.auth.signUp({
    email,
    password,
    options: {
      data: {
        first_name,
        last_name,
        username,
        fb_link,
      },
    },
  });

  if (error) {
    return {
      data: {
        user: null,
        session: null,
      },
      error,
    };
  }

  return {
    data: {
      user: data.user,
      session: data.session,
    },
    error: null,
  };
};

export const login = async ({ email, password }: LoginInput) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      if (isAuthApiError(error)) {
        throw new AuthApiError(error.message, error.status, 'AuthApiError');
      }
      throw new Error('An unexpected authentication error occurred.');
    }
    return data;
  } catch (err) {
    if (isAuthApiError(err)) {
      throw err;
    }

    throw new Error('Something went wrong during login. Please try again.');
  }
};

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
