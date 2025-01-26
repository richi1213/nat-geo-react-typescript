import { Input } from '@/components';
import { Search } from 'lucide-react';
import type { SearchbarProps } from './types';
import { useTranslation } from 'react-i18next';

export const Searchbar: React.FC<SearchbarProps> = ({
  keyword,
  onKeywordChange,
}) => {
  const { t } = useTranslation('common');
  return (
    <div className='relative'>
      <Search className='absolute left-3 top-1/2 size-6 -translate-y-1/2 text-primary-foreground' />
      <Input
        type='search'
        value={keyword}
        onChange={onKeywordChange}
        placeholder={t('search')}
        className='h-12 rounded-none bg-gray-50 pl-11 text-2xl font-semibold placeholder:text-lg placeholder:font-bold placeholder:tracking-wide placeholder:text-gray-400'
      />
    </div>
  );
};
