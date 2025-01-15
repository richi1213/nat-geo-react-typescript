import { ArticleCategory } from '@/supabase';
import { supabase } from '@/supabase/supabase-client';

export const getCategoryIdByName = async (categoryNameEn: ArticleCategory) => {
  const { data, error } = await supabase
    .from('categories')
    .select('id')
    .eq('name_en', categoryNameEn)
    .single();

  if (error) {
    throw new Error(`Error fetching category: ${error.message}`);
  }

  return data?.id;
};

export const getCategoryByName = async (categoryNameEn: ArticleCategory) => {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .eq('name_en', categoryNameEn)
    .single();

  if (error) {
    throw new Error(`Error fetching category: ${error.message}`);
  }

  return data;
};
