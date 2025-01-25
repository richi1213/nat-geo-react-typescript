import { useTranslation } from 'react-i18next';
import { StatementTitle } from '.';

export const ImpactStatement: React.FC = () => {
  const { t } = useTranslation('impact');
  return (
    <div className='flex flex-col items-center space-y-5'>
      <StatementTitle />
      <h1 className='text-3xl font-bold tracking-wide sm:text-5xl'>
        {t('national_geographic_society')}
      </h1>
      <p className='max-w-3xl text-center text-lg leading-loose'>
        {t('support_diverse_community')}
      </p>
      <img src='/images/small_ngseal_east.avif' alt='nat geo society logo' />
    </div>
  );
};
