import { UnderlinedButton, HeadingLine } from '@/components';
import { useTranslation } from 'react-i18next';

export const GeneralHeading: React.FC = () => {
  const { t } = useTranslation('home');
  return (
    <div className='text-center'>
      <h2 className='md:7xl text-5xl font-bold uppercase'>
        {t('latest_stories')}
      </h2>
      <p className='my-4 text-lg'>
        <UnderlinedButton
          className='bg-inherit text-lg text-foreground hover:text-background'
          size='sm'
        >
          {t('subscribe')}
        </UnderlinedButton>{' '}
        {t('for_full_access')}
      </p>
      <HeadingLine />
    </div>
  );
};
