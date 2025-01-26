import {
  MovieCard,
  TwoDimensionalCarousel,
  UnderlinedButton,
} from '@/components';
import { useShowImageLinks } from '@/hooks/react-query/queries/storage/use-show-images-from-folder';
import { useTranslation } from 'react-i18next';

export const DiscoverMore: React.FC = () => {
  const { t } = useTranslation('home');

  const { data } = useShowImageLinks('shows-1');

  if (!data) <div>not data found</div>;

  return (
    <section className='mx-auto w-full max-w-5xl px-8'>
      <div className='mb-6 flex flex-col items-center justify-between gap-3 sm:mb-5 sm:flex-row'>
        <div className='font-bold uppercase tracking-[0.2rem]'>
          {t('discover_more_disney')}
        </div>
        <UnderlinedButton className='h-5 bg-transparent text-xs font-bold uppercase tracking-widest text-foreground hover:text-primary-foreground sm:text-center'>
          <a
            href='https://www.disneyplus.com/welcome/'
            target='_blank'
            rel='noopener noreferrer'
            className='no-underline'
          >
            {t('see_shows')}
          </a>
        </UnderlinedButton>
      </div>
      <TwoDimensionalCarousel>
        {data?.map((show) => <MovieCard key={show} imageUrl={show} />)}
      </TwoDimensionalCarousel>
    </section>
  );
};
