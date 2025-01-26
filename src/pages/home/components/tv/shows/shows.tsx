import { ShowCard } from '@/components';
import { StackedCarousel } from '@/components/ui/nat-geo/carousels/stacked-carousel';
import { useShowImageLinks } from '@/hooks/react-query/queries/storage/use-show-images-from-folder';

export const Shows: React.FC = () => {
  const { data } = useShowImageLinks('shows-2');

  if (!data) <div>not data found</div>;

  return (
    <div>
      <StackedCarousel>
        {data?.map((show) => <ShowCard key={show} imageUrl={show} />)}
      </StackedCarousel>
    </div>
  );
};
