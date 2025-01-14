import { supabase, type ArticleCategory, type Article } from '@/supabase';

export const fetchArticlesByCategory = async (
  category: ArticleCategory,
  page: number = 1,
  pageSize: number = 5,
): Promise<{ articles: Article[]; hasNextPage: boolean }> => {
  try {
    const start = (page - 1) * pageSize;
    const end = start + pageSize - 1;

    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('category', category)
      .range(start, end);

    if (error) {
      throw new Error(`Error fetching articles: ${error.message}`);
    }

    const hasNextPage = data.length === pageSize;

    return {
      articles: data.slice(0, pageSize),
      hasNextPage,
    };
  } catch (err) {
    console.error(err);
    throw err;
  }
};
