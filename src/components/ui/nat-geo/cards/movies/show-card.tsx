import { Card, CardContent, LinkButton } from '@/components';
import type { ShowCardProps } from './types';

export const ShowCard: React.FC<ShowCardProps> = ({
  href,
  title,
  imageUrl,
}) => {
  return (
    <Card className='rounded-none border-none'>
      <CardContent className='relative aspect-[3/4] text-center'>
        <div className='absolute inset-0'>
          <img
            src={imageUrl}
            alt={title}
            className='h-full w-full object-cover'
          />
        </div>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='translate-y-12 transform'>
            <LinkButton variant='alternate' to={href}>
              watch now
            </LinkButton>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
