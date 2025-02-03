import { Card, CardContent, LinkButton } from '@/components';
import type { ShowCardProps } from './types';
import { useTranslation } from 'react-i18next';

export const ShowCard: React.FC<ShowCardProps> = ({ imageUrl }) => {
  const { t } = useTranslation('home');
  return (
    <Card className='rounded-none border-none'>
      <CardContent className='relative text-center'>
        <div className='h-[403px]'>
          <img
            src={imageUrl}
            alt='show'
            className='h-full w-full object-cover'
          />
        </div>
        <div className='flex justify-center'>
          <div className='absolute top-[16rem] translate-y-12 transform'>
            <LinkButton variant='alternate'>{t('watch_now')}</LinkButton>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
