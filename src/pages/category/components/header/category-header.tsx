import { CategoryVideo, CategoryCover } from '@/pages';
import type { CategoryHeaderProps } from './types';
import { HeadingLine } from '@/components';
import { getLocalizedString } from '@/utils';
import { useTranslation } from 'react-i18next';

export const CategoryHeader: React.FC<CategoryHeaderProps> = ({ category }) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const categoryName = getLocalizedString(
    category as Record<string, string | null>,
    'name',
    currentLanguage,
  );

  return (
    <div className='relative h-[295px] w-full overflow-hidden'>
      {category.has_video ? (
        <CategoryVideo videoUrl={category.media_url as string} />
      ) : (
        <CategoryCover imageUrl={category.media_url as string} />
      )}

      <div className='absolute inset-0 z-10 bg-black/60' />

      <div className='relative z-40 flex h-full items-center px-8 pt-28 md:px-12'>
        <h2 className='flex items-center gap-5 text-4xl font-bold uppercase tracking-wider text-foreground md:text-5xl lg:text-6xl'>
          <HeadingLine orientation='vertical' className='w-1.5' />
          {categoryName}
        </h2>
      </div>
    </div>
  );
};
