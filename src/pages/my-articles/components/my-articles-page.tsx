import { useLocation, useNavigate } from 'react-router';
import { useDebounce, useSearchState, useSearchedArticles } from '@/hooks';
import {
  handleSearchChange,
  handleSortDateChange,
  handleCategoryChange,
  MyArticlesHeading,
} from '@/pages';
import {
  ArticleHorizontalCard,
  FlexibleDropdown,
  LinkButton,
  Searchbar,
  VirtualizedList,
  Loading,
  SearchMenu,
  SearchedArticles,
} from '@/components';
import { sortDateOptions, categoryOptions, estimateRowHeight } from '@/utils';
import { type ArticleCategory } from '@/supabase';
import { RefreshCcw } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';

const MyArticlesPage: React.FC = () => {
  const { t } = useTranslation('common');

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

  const debouncedSearchKeyword = useDebounce(searchKeyword, 400);

  const sortOptions = selectedSortDate
    ? { column: 'created_at', ascending: false }
    : undefined;

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
    isLoading,
  } = useSearchedArticles(
    debouncedSearchKeyword,
    sortOptions,
    selectedSortDate,
    selectedCategories as ArticleCategory[],
    5,
    true,
  );

  const articles = data ? data.pages.flatMap((page) => page.articles) : [];

  const handleDelete = (id: string) => {
    console.log(`Delete item with ID: ${id}`);
  };

  const renderContent = () => {
    if (isLoading) return <Loading />;

    if (articles.length === 0) {
      return (
        <div className='text-center text-gray-500'>{t('No data found')}</div>
      );
    }

    return (
      <div>
        <VirtualizedList
          items={articles}
          CardComponent={(props) => (
            <ArticleHorizontalCard
              {...props}
              variant='withActions'
              onDelete={handleDelete}
            />
          )}
          itemCount={hasNextPage ? articles.length + 1 : articles.length}
          estimateSize={estimateRowHeight}
          overscan={5}
          paddingEnd={-500}
        />
        <div className='mt-8 text-center'>
          <LinkButton
            variant='penguin'
            onClick={() => fetchNextPage()}
            disabled={isFetching && !isFetchingNextPage}
            className={cn('mt-0', {
              hidden: !hasNextPage,
            })}
          >
            <RefreshCcw />
            {t('load more')}
          </LinkButton>
        </div>
      </div>
    );
  };

  return (
    <section className='mx-auto mt-6 max-w-6xl space-y-6 px-6'>
      <MyArticlesHeading />

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

      <SearchedArticles>{renderContent()}</SearchedArticles>
    </section>
  );
};

export default MyArticlesPage;
