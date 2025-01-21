import type { Dispatch, SetStateAction } from 'react';
import { updateUrl } from '@/utils';
import { Location, NavigateFunction } from 'react-router';

export const handleSearchChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setSearchKeyword: Dispatch<SetStateAction<string>>,
  location: Location,
  navigate: NavigateFunction,
) => {
  const value = e.target.value;
  setSearchKeyword(value);
  updateUrl({ keyword: value || undefined }, location, navigate);
};

export const handleSortDateChange = (
  value: string | string[],
  setSelectedSortDate: Dispatch<SetStateAction<string>>,
  setSelectedCategories: Dispatch<SetStateAction<string[]>>,
  location: Location,
  navigate: NavigateFunction,
) => {
  if (typeof value === 'string') {
    setSelectedSortDate(value);
    updateUrl({ sortDate: value }, location, navigate);
  } else {
    setSelectedCategories(value);
    updateUrl({ categories: value.join(',') }, location, navigate);
  }
};

export const handleCategoryChange = (
  value: string | string[],
  setSelectedCategories: Dispatch<SetStateAction<string[]>>,
  location: Location,
  navigate: NavigateFunction,
) => {
  const selectedCategories =
    typeof value === 'string'
      ? [value]
      : value.filter((category) => category.trim() !== '');

  setSelectedCategories(selectedCategories);

  const newParams =
    selectedCategories.length > 0
      ? { categories: selectedCategories.join(',') }
      : { categories: undefined };

  updateUrl(newParams, location, navigate);
};
