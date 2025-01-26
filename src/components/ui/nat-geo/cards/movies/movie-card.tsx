import { Card, CardContent } from '@/components';
import type { ShowCardProps } from './types';

export const MovieCard: React.FC<ShowCardProps> = ({ imageUrl }) => {
  return (
    <Card className='overflow-hidden border-none'>
      <CardContent>
        <div className='relative overflow-hidden'>
          <a
            href='https://www.natgeotv.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src={imageUrl}
              alt='show'
              className='object-cover transition-transform duration-300 hover:scale-105'
            />
          </a>
        </div>
      </CardContent>
    </Card>
  );
};
