import { useLocation, useNavigate } from 'react-router';
import { useSearchState } from '@/hooks';
import {
  handleSearchChange,
  handleSortDateChange,
  handleCategoryChange,
  SearchMenu,
} from '@/pages';
import { FlexibleDropdown, Searchbar } from '@/components';
import { sortDateOptions, categoryOptions } from '@/utils';

const SearchPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    searchKeyword,
    setSearchKeyword,
    selectedSortDate,
    setSelectedSortDate,
    selectedCategories,
    setSelectedCategories,
  } = useSearchState();

  return (
    <section className='mx-auto mt-6 max-w-6xl px-6'>
      <SearchMenu>
        <Searchbar
          keyword={searchKeyword}
          onKeywordChange={(e) =>
            handleSearchChange(e, setSearchKeyword, location, navigate)
          }
        />

        <div className='flex gap-4'>
          <FlexibleDropdown
            options={sortDateOptions}
            type='radio'
            triggerLabel='Sort by'
            value={selectedSortDate}
            onChange={(value) =>
              handleSortDateChange(
                value,
                setSelectedSortDate,
                setSelectedCategories,
                location,
                navigate,
              )
            }
          />

          <FlexibleDropdown
            options={categoryOptions}
            type='checkbox'
            triggerLabel='Categories'
            value={selectedCategories}
            onChange={(value) =>
              handleCategoryChange(
                value,
                setSelectedCategories,
                location,
                navigate,
              )
            }
          />
        </div>
      </SearchMenu>
    </section>
  );
};

export default SearchPage;
