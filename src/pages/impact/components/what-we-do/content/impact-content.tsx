import { Link } from 'react-router';
import { ImpactFigure, ImpactText } from '.';

export const ImpactContent: React.FC = () => {
  return (
    <Link
      className='mt-16 flex flex-col gap-4 space-y-5 px-6 md:flex-row md:items-center md:space-y-0'
      to='/'
    >
      <ImpactFigure />
      <ImpactText />
    </Link>
  );
};
