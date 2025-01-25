import { HeadingLine } from '@/components';
import { useTranslation } from 'react-i18next';

export const ImpactIntroGeneralHeading: React.FC = () => {
  const { t } = useTranslation('home');
  return (
    <div className='text-center'>
      <h2 className='md:5xl text-3xl font-bold uppercase text-primary-foreground'>
        {t('national_geographic_society_mission')}
      </h2>
      <HeadingLine />
    </div>
  );
};
