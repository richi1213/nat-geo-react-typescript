import { HeadingLine } from '@/components';
import { useTranslation } from 'react-i18next';

export const NatGeoTvHeading: React.FC = () => {
  const { t } = useTranslation('home');
  return (
    <div className='my-36 text-center text-5xl font-bold'>
      <h2 className='uppercase'>{t('nat_geo_tv')}</h2>
      <HeadingLine className='mt-6 w-12' />
    </div>
  );
};
