import { HeadingLine } from '@/components';
import { useTranslation } from 'react-i18next';

export const ImpactGeneralHeading: React.FC = () => {
  const { t } = useTranslation('impact');
  return (
    <div className='text-center'>
      <h2 className='md:5xl text-3xl font-bold uppercase text-primary-foreground'>
        {t('invest_in_people')}
      </h2>
      <HeadingLine />
    </div>
  );
};
