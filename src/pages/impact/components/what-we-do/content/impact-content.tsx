import { Link } from 'react-router';
import { ImpactFigure, ImpactText } from '.';
import { DEFAULT_LAYOUT_PATHS } from '@/routes';

export const ImpactContent: React.FC = () => {
  return (
    <Link
      className='mt-16 flex flex-col gap-4 space-y-5 px-6 md:flex-row md:items-center md:space-y-0'
      to={DEFAULT_LAYOUT_PATHS.HOME}
    >
      <ImpactFigure />
      <ImpactText />
    </Link>
  );
};
