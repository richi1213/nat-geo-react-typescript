import { type UpdateProfile, supabase } from '@/supabase';

export const updateUserMetadata = async ({
  first_name,
  last_name,
  username,
}: UpdateProfile): Promise<void> => {
  try {
    const { error } = await supabase.auth.updateUser({
      data: {
        first_name,
        last_name,
        username,
      },
    });

    if (error) {
      console.error('Error updating user metadata:', error.message);
      throw new Error('Failed to update user metadata.');
    }
  } catch (err) {
    console.error('Unexpected error while updating user metadata:', err);
    throw new Error('An error occurred while updating user metadata.');
  }
};
