import { supabase } from '@/supabase';

export const deleteArticle = async (articleId: string): Promise<void> => {
  try {
    const { error } = await supabase
      .from('articles')
      .delete()
      .eq('id', articleId);

    if (error) {
      throw new Error(`Error deleting article: ${error.message}`);
    }
  } catch (err) {
    console.error('Error during article deletion:', err);
    throw err;
  }
};
