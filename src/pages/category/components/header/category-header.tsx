import type { CategoryHeaderProps } from './types';

export const CategoryHeader: React.FC<CategoryHeaderProps> = ({ category }) => {
  return (
    <div className='relative h-[295px] w-full overflow-hidden'>
      {category.has_video ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className='absolute inset-0 h-full w-full object-cover'
        >
          <source
            src={category.media_url as string}
            type='application/x-mpegURL'
          />
        </video>
      ) : (
        <div
          className='absolute inset-0 h-full w-full bg-cover bg-center transition-opacity duration-500'
          style={{ backgroundImage: `url(${category.media_url})` }}
        />
      )}
      {/* Dark overlay */}
      <div className='absolute inset-0 bg-black/40' />

      {/* Content */}
      <div className='relative flex h-full items-center px-8 md:px-12'>
        <h1 className='text-4xl font-bold uppercase tracking-wider text-white md:text-5xl lg:text-6xl'>
          <span className='border-l-4 border-yellow-400 pl-4'>
            {category.name_en}
          </span>
        </h1>
      </div>
    </div>
  );
};
