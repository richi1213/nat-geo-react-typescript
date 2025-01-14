import {
  supabase,
  getCategoryIdByName,
  type ArticleCategory,
  type ShowCardArticle,
} from '@/supabase';

export const fetchArticlesByCategory = async (
  categoryNameEn: ArticleCategory,
  page: number = 1,
  pageSize: number = 5,
): Promise<{ articles: ShowCardArticle[]; hasNextPage: boolean }> => {
  try {
    const start = (page - 1) * pageSize;
    const end = start + pageSize - 1;

    const categoryId = await getCategoryIdByName(categoryNameEn);

    const { data, error } = await supabase
      .from('articles')
      .select(
        `
          id, 
          cover_image, 
          title_en, 
          title_ka, 
          category:categories(name_en, name_ka, slug) 
        `,
      )
      .eq('category_id', categoryId) // Use the dynamically fetched categoryId
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
