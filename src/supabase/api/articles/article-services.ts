import {
  supabase,
  getCategoryIdByName,
  type ArticleCategory,
  type ShowCardArticle,
  type Article,
  type InsertArticle,
} from '@/supabase';

export const fetchRecentArticlesByCategory = async (
  categoryNameEn: ArticleCategory,
): Promise<{ articles: ShowCardArticle[] }> => {
  try {
    const categoryId = await getCategoryIdByName(categoryNameEn);

    const { data, error } = await supabase
      .from('articles')
      .select(
        `
          id, 
          cover_image, 
          title_en, 
          title_ka,
          slug, 
          category:categories(name_en, name_ka, slug)
        `,
      )
      .eq('category_id', categoryId)
      .order('created_at', { ascending: false })
      .limit(5);
    if (error) {
      throw new Error(`Error fetching articles: ${error.message}`);
    }

    return {
      articles: data,
    };
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const fetchArticlesByCategory = async (
  categoryNameEn: ArticleCategory,
  page: number = 1,
  pageSize: number = 5,
): Promise<{ articles: ShowCardArticle[]; hasNextPage: boolean }> => {
  try {
    const start = (page - 1) * pageSize + 5; // Skip the first 6 items for subsequent pages
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
          slug,
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

export const getArticleBySlug = async (slug: string): Promise<Article> => {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('slug', slug)
    .limit(1)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  if (!data) {
    throw new Error('Article not found');
  }

  return data as Article;
};

export const fetchMayLikeArticles = async ({
  currentArticleId,
  currentCategoryId,
  currentAuthorId,
}: {
  currentArticleId: string;
  currentCategoryId: string;
  currentAuthorId: string;
}): Promise<{ articles: ShowCardArticle[] }> => {
  try {
    const { data, error } = await supabase
      .from('articles')
      .select(
        `
          id,
          cover_image,
          title_en,
          title_ka,
          slug,
          category:categories(name_en, name_ka, slug)
        `,
      )
      .or(
        `category_id.eq.${currentCategoryId},author_id.eq.${currentAuthorId},category_id.eq.${currentCategoryId},id.neq.${currentArticleId}`,
      )
      .order('created_at', { ascending: false })
      .limit(5);

    if (error) {
      throw new Error(`Error fetching "may like" articles: ${error.message}`);
    }

    return {
      articles: data as ShowCardArticle[],
    };
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const postArticle = async (
  articleData: InsertArticle,
): Promise<void> => {
  try {
    const { error } = await supabase.from('articles').insert([
      {
        title_en: articleData.title_en,
        title_ka: articleData.title_ka,
        content: articleData.content,
        cover_image: articleData.cover_image,
        category_id: articleData.category_id,
        author_id: articleData.author_id,
        slug: articleData.slug,
      },
    ]);

    if (error) {
      throw new Error(`Error inserting article: ${error.message}`);
    }
  } catch (err) {
    console.error('Error during article insertion:', err);
    throw err;
  }
};
