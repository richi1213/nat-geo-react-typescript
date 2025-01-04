import { Card, CardContent } from '@/components';
import { Link } from 'react-router';
import type { MovieProps } from './types';

export const MovieCard: React.FC<MovieProps> = ({ href, title, imageUrl }) => {
  return (
    <Card className='overflow-hidden border-none'>
      <Link to={href}>
        <CardContent>
          <div className='relative overflow-hidden'>
            <img
              src={imageUrl}
              alt={title}
              className='object-cover transition-transform duration-300 hover:scale-105'
            />
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};
