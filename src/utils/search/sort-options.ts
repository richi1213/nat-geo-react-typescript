import { ArticleCategories } from '@/supabase';

export const sortDateOptions = [
  { value: 'all-dates', label: 'All Dates' },
  { value: 'last-week', label: 'Last Week' },
  { value: 'last-month', label: 'Last Month' },
  { value: 'last-year', label: 'Last Year' },
];

export const categoryOptions = Object.values(ArticleCategories).map(
  (value) => ({
    value,
    label: value.charAt(0).toUpperCase() + value.slice(1),
  }),
);

export type SortDate = (typeof sortDateOptions)[number]['value'];
