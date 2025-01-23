import { supabase, type UpdateArticle } from '@/supabase';

export const updateArticle = async (
  articleId: string,
  updatedData: UpdateArticle,
): Promise<void> => {
  try {
    const { error } = await supabase
      .from('articles')
      .update(updatedData)
      .eq('id', articleId);

    if (error) {
      throw new Error(`Error updating article: ${error.message}`);
    }
  } catch (err) {
    console.error('Error during article update:', err);
    throw err;
  }
};
