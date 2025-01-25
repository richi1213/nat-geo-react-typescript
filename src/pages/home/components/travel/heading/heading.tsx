import { HeadingLine } from '@/components';
import { useTranslation } from 'react-i18next';

export const Heading: React.FC = () => {
  const { t } = useTranslation('home');

  return (
    <div className='text-center'>
      <h2 className='md:7xl text-5xl font-bold uppercase'>{t('travel')}</h2>
      <HeadingLine />
    </div>
  );
};
