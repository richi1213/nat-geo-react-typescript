import { ThreeDimensionalCarousel } from '@/components';

const shows = [
  {
    id: 1,
    title: 'Shark Movie',
    imageUrl: 'images/placeholder.svg',
  },
  {
    id: 2,
    title: 'Mountain Movie',
    imageUrl: 'images/placeholder.svg',
  },
  {
    id: 3,
    title: 'Adventure Movie',
    imageUrl: 'images/placeholder.svg',
  },
];

export const Shows: React.FC = () => {
  return (
    <div>
      <ThreeDimensionalCarousel shows={shows} />
    </div>
  );
};
