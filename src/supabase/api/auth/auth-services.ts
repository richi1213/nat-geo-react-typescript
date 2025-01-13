import { supabase } from '@/supabase';
import type { Database, LoginInput, RegisterInput } from '@/supabase';
import {
  AuthApiError,
  type AuthResponse,
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

export const login = async ({
  email,
  password,
}: LoginInput): Promise<AuthResponse> => {
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

    return {
      data: {
        user: data?.user || null,
        session: data?.session || null,
      },
      error: null,
    };
  } catch (err) {
    if (isAuthApiError(err)) {
      throw err;
    }

    return {
      data: {
        user: null,
        session: null,
      },
      error: {
        message: 'Something went wrong during login. Please try again.',
      } as AuthApiError,
    };
  }
};

export const logout = async (): Promise<{ error: AuthApiError | null }> => {
  try {
    const { error } = await supabase.auth.signOut();

    if (error) {
      if (isAuthApiError(error)) {
        throw new AuthApiError(error.message, error.status, 'AuthApiError');
      }
      throw new Error('An unexpected error occurred during logout.');
    }

    return { error: null };
  } catch (err) {
    if (isAuthApiError(err)) {
      return { error: err };
    }

    return {
      error: {
        message: 'Something went wrong during logout. Please try again.',
      } as AuthApiError,
    };
  }
};
