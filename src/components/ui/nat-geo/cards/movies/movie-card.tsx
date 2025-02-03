import { Card, CardContent } from '@/components';
import type { ShowCardProps } from './types';

export const MovieCard: React.FC<ShowCardProps> = ({ imageUrl }) => {
  return (
    <Card className='h-full overflow-hidden border-none'>
      <CardContent className='h-full'>
        <div className='relative'>
          <a
            href='https://www.natgeotv.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src={imageUrl}
              alt='show'
              className='h-full w-full object-cover transition-transform duration-300 hover:scale-105'
            />
          </a>
        </div>
      </CardContent>
    </Card>
  );
};
