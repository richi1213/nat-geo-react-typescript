import {
  supabase,
  getCategoryIdByName,
  type ShowCardArticle,
  type ArticleCategory,
} from '@/supabase';

export const searchArticles = async (
  searchKeyword?: string,
  sortOptions?: { column: string; ascending: boolean },
  dateFilter?: 'all-dates' | 'last-week' | 'last-month' | 'last-year',
  categoryOptions?: ArticleCategory,
  page: number = 1,
  pageSize: number = 5,
): Promise<{ articles: ShowCardArticle[]; hasNextPage: boolean }> => {
  try {
    const start = (page - 1) * pageSize;
    const end = start + pageSize - 1;

    // Start building the query
    let query = supabase
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
      .range(start, end);

    // Apply category filter if provided
    if (categoryOptions) {
      const categoryId = await getCategoryIdByName(categoryOptions);
      query = query.eq('category_id', categoryId);
    }

    // Apply search keyword filter if provided
    if (searchKeyword) {
      query = query.or(
        `title_en.ilike.%${searchKeyword}%,title_ka.ilike.%${searchKeyword}%`,
      );
    }

    // Apply date filter based on dateFilter
    if (dateFilter && dateFilter !== 'all-dates') {
      const currentDate = new Date();
      let filterDate;

      switch (dateFilter) {
        case 'last-week':
          filterDate = new Date();
          filterDate.setDate(currentDate.getDate() - 7);
          break;
        case 'last-month':
          filterDate = new Date();
          filterDate.setMonth(currentDate.getMonth() - 1);
          break;
        case 'last-year':
          filterDate = new Date();
          filterDate.setFullYear(currentDate.getFullYear() - 1);
          break;
        default:
          break;
      }

      if (filterDate) {
        query = query.gte('created_at', filterDate.toISOString());
      }
    }

    // Apply sorting options if provided
    if (sortOptions) {
      query = query.order(sortOptions.column, {
        ascending: sortOptions.ascending,
      });
    } else {
      // Default sorting by created_at descending
      query = query.order('created_at', { ascending: false });
    }

    const { data, error } = await query;

    if (error) {
      throw new Error(`Error searching articles: ${error.message}`);
    }

    const hasNextPage = data.length === pageSize;

    return {
      articles: data,
      hasNextPage,
    };
  } catch (err) {
    console.error(err);
    throw err;
  }
};
