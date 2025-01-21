import qs from 'qs';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { FlexibleDropdown, Searchbar } from '@/components';
import { sortDateOptions, categoryOptions } from '@/utils';

export const SearchMenu: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedSortDate, setSelectedSortDate] = useState('all-dates');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  useEffect(() => {
    const queryParams = qs.parse(location.search, { ignoreQueryPrefix: true });

    // Safe check for queryParams.keyword
    setSearchKeyword(
      typeof queryParams.keyword === 'string' ? queryParams.keyword : '',
    );

    // Safe check for queryParams.sortDate
    setSelectedSortDate(
      typeof queryParams.sortDate === 'string'
        ? queryParams.sortDate
        : 'all-dates',
    );

    if (typeof queryParams.categories === 'string') {
      setSelectedCategories(queryParams.categories.split(','));
    } else {
      setSelectedCategories([]);
    }
  }, [location.search]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchKeyword(value);

    if (value === '') {
      updateUrl({ keyword: undefined });
    } else {
      updateUrl({ keyword: value });
    }
  };

  const handleSortDateChange = (value: string | string[]) => {
    if (typeof value === 'string') {
      setSelectedSortDate(value);
      updateUrl({ sortDate: value });
    } else {
      setSelectedCategories(value);
      updateUrl({ categories: value.join(',') });
    }
  };

  const handleCategoryChange = (value: string | string[]) => {
    if (typeof value === 'string') {
      setSelectedCategories([value]);
      updateUrl({ categories: value });
    } else {
      setSelectedCategories(value);
      updateUrl({ categories: value.join(',') });
    }
  };

  const updateUrl = (newParams: Record<string, string | undefined>) => {
    const currentParams = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });

    // Filter out any parameters with undefined values
    const updatedParams = { ...currentParams, ...newParams };
    Object.keys(updatedParams).forEach(
      (key) => updatedParams[key] === undefined && delete updatedParams[key],
    );

    navigate({
      pathname: location.pathname,
      search: qs.stringify(updatedParams, { addQueryPrefix: true }),
    });
  };

  return (
    <div className='space-y-3'>
      <Searchbar keyword={searchKeyword} onKeywordChange={handleSearchChange} />

      <div className='flex gap-4'>
        <FlexibleDropdown
          options={sortDateOptions}
          type='radio'
          triggerLabel='Sort by'
          value={selectedSortDate}
          onChange={handleSortDateChange}
        />

        <FlexibleDropdown
          options={categoryOptions}
          type='checkbox'
          triggerLabel='Categories'
          value={selectedCategories}
          onChange={handleCategoryChange}
        />
      </div>
    </div>
  );
};
