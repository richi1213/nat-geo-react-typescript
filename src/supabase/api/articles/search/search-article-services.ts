import {
  supabase,
  type ShowCardArticle,
  type ArticleCategory,
} from '@/supabase';
import { buildQuery, type SortDate } from '@/utils';

export const searchArticles = async (
  searchKeyword?: string,
  sortOptions?: { column: string; ascending: boolean },
  dateFilter?: SortDate,
  categoryOptions?: ArticleCategory[],
  page: number = 1,
  pageSize: number = 5,
): Promise<{ articles: ShowCardArticle[]; hasNextPage: boolean }> => {
  try {
    const start = (page - 1) * pageSize;
    const end = start + pageSize - 1;

    const baseQuery = supabase
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

    const query = await buildQuery(
      baseQuery,
      categoryOptions,
      searchKeyword,
      dateFilter as SortDate,
      sortOptions,
    );

    const { data, error } = await query;

    if (error) {
      throw new Error(`Error searching articles: ${error.message}`);
    }

    return {
      articles: data,
      hasNextPage: data.length === pageSize,
    };
  } catch (err) {
    console.error(err);
    throw err;
  }
};
