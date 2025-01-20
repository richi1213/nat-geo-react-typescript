import { Link } from 'react-router';
import { ImpactPromoFigure, ImpactPromoText } from '.';
import { DEFAULT_LAYOUT_PATHS } from '@/routes';

export const ImpactPromo: React.FC = () => {
  return (
    <Link
      className='mt-16 flex flex-col gap-4 md:flex-row md:items-center'
      to={DEFAULT_LAYOUT_PATHS.HOME}
    >
      <ImpactPromoFigure />
      <ImpactPromoText />
    </Link>
  );
};
