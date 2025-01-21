import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import qs from 'qs';
import type { SortDate } from '@/utils';

export const useSearchState = () => {
  const location = useLocation();

  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedSortDate, setSelectedSortDate] =
    useState<SortDate>('all-dates');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  useEffect(() => {
    const queryParams = qs.parse(location.search, { ignoreQueryPrefix: true });

    setSearchKeyword(
      typeof queryParams.keyword === 'string' ? queryParams.keyword : '',
    );

    const sortDate = queryParams.sortDate;
    if (
      typeof sortDate === 'string' &&
      ['all-dates', 'last-week', 'last-month', 'last-year'].includes(sortDate)
    ) {
      setSelectedSortDate(sortDate as SortDate);
    } else {
      setSelectedSortDate('all-dates');
    }

    // Handle selectedCategories
    setSelectedCategories(
      typeof queryParams.categories === 'string'
        ? queryParams.categories.split(',')
        : [],
    );
  }, [location.search]);

  return {
    searchKeyword,
    setSearchKeyword,
    selectedSortDate,
    setSelectedSortDate,
    selectedCategories,
    setSelectedCategories,
  };
};
