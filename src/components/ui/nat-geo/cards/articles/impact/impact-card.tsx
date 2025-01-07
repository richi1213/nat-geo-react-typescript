import { Card, CardContent, CardDescription, CardTitle } from '@/components';
import type { ImpactCardProps } from './types';
import { Link } from 'react-router';

export const ImpactCard: React.FC<ImpactCardProps> = ({
  image,
  category,
  subcategory,
  title,
  href,
}) => {
  return (
    <Link to={href}>
      <Card className='group h-[329px] w-[313px] overflow-hidden rounded-none shadow-none'>
        <CardContent className='relative flex h-full w-full flex-col px-0'>
          <div className='relative w-full flex-[2] overflow-hidden'>
            <img
              src={image}
              alt={title}
              className='h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105'
            />
          </div>

          <div className='mt-4 flex-[1] text-center'>
            <CardTitle>
              <span>{category}</span>
              {subcategory && <span> {subcategory}</span>}
            </CardTitle>
            <CardDescription>{title}</CardDescription>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
