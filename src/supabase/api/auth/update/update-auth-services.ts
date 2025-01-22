import { type UserMetadata, supabase } from '@/supabase';
import { AuthApiError, isAuthApiError } from '@supabase/supabase-js';

export const updateUserMetadata = async ({
  first_name,
  last_name,
  username,
}: UserMetadata): Promise<void> => {
  try {
    // Check if the user is authenticated
    const { data, error: userError } = await supabase.auth.getUser();
    if (userError) {
      throw new Error('Error fetching user: ' + userError.message);
    }
    if (!data) {
      throw new Error('User is not authenticated.');
    }

    // Log the input data
    console.log('Updating user metadata:', { first_name, last_name, username });

    const { error } = await supabase.auth.updateUser({
      data: { first_name, last_name, username },
    });

    if (error) {
      console.error('Error details:', error);
      throw new AuthApiError(
        error.message,
        error.status as number,
        'Error updating user metadata.',
      );
    }
  } catch (err) {
    if (isAuthApiError(err)) {
      console.error('Auth API Error:', err.message);
      throw err;
    } else {
      console.error('Unexpected Error:', err);
      throw new Error('Something went wrong while updating user metadata.');
    }
  }
};
