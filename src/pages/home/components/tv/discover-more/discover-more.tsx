import {
  MovieCard,
  TwoDimensionalCarousel,
  UnderlinedButton,
} from '@/components';
import { useTranslation } from 'react-i18next';

export const movies = [
  {
    id: 1,
    href: '/movie/1',
    title: 'Inception',
    imageUrl: '/images/placeholder.svg',
  },
  {
    id: 2,
    href: '/movie/2',
    title: 'The Dark Knight',
    imageUrl: '/images/placeholder.svg',
  },
  {
    id: 3,
    href: '/movie/3',
    title: 'Interstellar',
    imageUrl: '/images/placeholder.svg',
  },
  {
    id: 4,
    href: '/movie/4',
    title: 'The Matrix',
    imageUrl: '/images/placeholder.svg',
  },
  {
    id: 5,
    href: '/movie/5',
    title: 'The Shawshank Redemption',
    imageUrl: '/images/placeholder.svg',
  },
  {
    id: 6,
    href: '/movie/6',
    title: 'The Godfather',
    imageUrl: '/images/placeholder.svg',
  },
  {
    id: 7,
    href: '/movie/7',
    title: 'Forrest Gump',
    imageUrl: '/images/placeholder.svg',
  },
];

export const DiscoverMore: React.FC = () => {
  const { t } = useTranslation('home');
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
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            href={movie.href}
            title={movie.title}
            imageUrl={movie.imageUrl}
          />
        ))}
      </TwoDimensionalCarousel>
    </section>
  );
};
