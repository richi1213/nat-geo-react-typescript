import {
  supabase,
  type ArticleCategory,
  type ShowCardArticle,
} from '@/supabase';

export const fetchArticlesByCategory = async (
  category: ArticleCategory,
  page: number = 1,
  pageSize: number = 5,
): Promise<{ articles: ShowCardArticle[]; hasNextPage: boolean }> => {
  try {
    const start = (page - 1) * pageSize;
    const end = start + pageSize - 1;

    const { data, error } = await supabase
      .from('articles')
      .select('id, cover_image, category, title_en, title_ka')
      .eq('category', category)
      .order('created_at', { ascending: false })
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
