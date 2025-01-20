import { DEFAULT_LAYOUT_PATHS } from '@/routes';
import { Link } from 'react-router';

export const Logos: React.FC = () => {
  return (
    <Link to={DEFAULT_LAYOUT_PATHS.HOME}>
      <picture className='hidden cursor-pointer md:block'>
        <source srcSet='/images/natgeo-logo.svg' type='image/svg+xml' />
        <img
          src='/images/natgeo-logo.webp'
          alt='National Full Geographic Logo'
          width={109}
          height={32}
        />
      </picture>
      <picture className='cursor-pointer md:hidden'>
        <source srcSet='/images/ng-border.svg' type='image/svg+xml' />
        <img
          src='/images/ng-border.avif'
          alt='National Geographic Logo'
          width={22}
          height={32}
        />
      </picture>
    </Link>
  );
};
