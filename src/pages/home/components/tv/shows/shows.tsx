import { MovieCard } from '@/components';
import { StackedCarousel } from '@/components/ui/nat-geo/carousels/stacked-carousel';

const placeholderShows = [
  {
    id: 1,
    title: 'Shark show',
    imageUrl: 'images/placeholder.svg',
    href: '/',
  },
  {
    id: 2,
    title: 'Mountain show',
    imageUrl: 'images/placeholder.svg',
    href: '/',
  },
  {
    id: 3,
    title: 'Adventure show',
    imageUrl: 'images/placeholder.svg',
    href: '/',
  },
  {
    id: 4,
    title: 'Shark show',
    imageUrl: 'images/placeholder.svg',
    href: '/',
  },
  {
    id: 5,
    title: 'Mountain show',
    imageUrl: 'images/placeholder.svg',
    href: '/',
  },
  {
    id: 6,
    title: 'Adventure show',
    imageUrl: 'images/placeholder.svg',
    href: '/',
  },
  {
    id: 7,
    title: 'Shark show',
    imageUrl: 'images/placeholder.svg',
    href: '/',
  },
  {
    id: 8,
    title: 'Mountain show',
    imageUrl: 'images/placeholder.svg',
    href: '/',
  },
  {
    id: 9,
    title: 'Adventure show',
    imageUrl: 'images/placeholder.svg',
    href: '/',
  },
];

export const Shows: React.FC = () => {
  return (
    <div>
      <StackedCarousel>
        {placeholderShows.map((show) => (
          <MovieCard
            key={show.id}
            href={show.href}
            title={show.title}
            imageUrl={show.imageUrl}
          />
        ))}
      </StackedCarousel>
    </div>
  );
};
