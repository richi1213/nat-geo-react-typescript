import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import qs from 'qs';

export const useSearchState = () => {
  const location = useLocation();

  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedSortDate, setSelectedSortDate] = useState('all-dates');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  useEffect(() => {
    const queryParams = qs.parse(location.search, { ignoreQueryPrefix: true });

    setSearchKeyword(
      typeof queryParams.keyword === 'string' ? queryParams.keyword : '',
    );
    setSelectedSortDate(
      typeof queryParams.sortDate === 'string'
        ? queryParams.sortDate
        : 'all-dates',
    );
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
