import { CategoryVideo, CategoryCover } from '@/pages';
import type { CategoryHeaderProps } from './types';
import { HeadingLine } from '@/components';

export const CategoryHeader: React.FC<CategoryHeaderProps> = ({ category }) => {
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
          {category.name_en}
        </h2>
      </div>
    </div>
  );
};
