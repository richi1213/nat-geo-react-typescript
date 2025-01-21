import {
  type ArticleCategory,
  getCategoryIdByName,
  supabase,
} from '@/supabase';
import type { SortDate } from '@/utils/search/sort-options';

//  Get the filter date based on the provided date filter.
const getFilterDate = (dateFilter: SortDate): string | undefined => {
  if (!dateFilter || dateFilter === 'all-dates') return undefined;

  const currentDate = new Date();
  const filterDate = new Date();

  switch (dateFilter) {
    case 'last-week':
      filterDate.setDate(currentDate.getDate() - 7);
      break;
    case 'last-month':
      filterDate.setMonth(currentDate.getMonth() - 1);
      break;
    case 'last-year':
      filterDate.setFullYear(currentDate.getFullYear() - 1);
      break;
  }

  return filterDate.toISOString();
};

// Fetch category IDs for the given category names.
const getCategoryIds = async (
  categories: ArticleCategory[],
): Promise<string[]> => {
  return Promise.all(
    categories.map((category) => getCategoryIdByName(category)),
  );
};

// Construct a Supabase query with optional filters.
export const buildQuery = async (
  baseQuery: ReturnType<typeof supabase.from>,
  categoryOptions?: ArticleCategory[],
  searchKeyword?: string,
  dateFilter?: SortDate,
  sortOptions?: { column: string; ascending: boolean },
) => {
  let query = baseQuery;

  // Apply category filter
  if (categoryOptions && categoryOptions.length > 0) {
    const categoryIds = await getCategoryIds(categoryOptions);
    if (categoryIds.length > 0) {
      query = query.in('category_id', categoryIds);
    }
  }

  // Apply search keyword filter
  if (searchKeyword) {
    query = query.or(
      `title_en.ilike.%${searchKeyword}%,title_ka.ilike.%${searchKeyword}%`,
    );
  }

  // Apply date filter
  const filterDate = getFilterDate(dateFilter!);
  if (filterDate) {
    query = query.gte('created_at', filterDate);
  }

  // Apply sorting
  if (sortOptions) {
    query = query.order(sortOptions.column, {
      ascending: sortOptions.ascending,
    });
  } else {
    query = query.order('created_at', { ascending: false });
  }

  return query;
};
