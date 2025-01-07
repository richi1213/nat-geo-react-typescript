import { Link } from 'react-router';
import { ImpactPromoFigure, ImpactPromoText } from '.';

export const ImpactPromo: React.FC = () => {
  return (
    <Link
      className='mt-16 flex flex-col gap-4 md:flex-row md:items-center'
      to='/'
    >
      <ImpactPromoFigure />
      <ImpactPromoText />
    </Link>
  );
};
