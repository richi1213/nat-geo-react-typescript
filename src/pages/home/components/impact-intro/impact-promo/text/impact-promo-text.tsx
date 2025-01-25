import { useTranslation } from 'react-i18next';

export const ImpactPromoText: React.FC = () => {
  const { t } = useTranslation('home');

  return (
    <div className='space-y-6 px-4 text-primary-foreground md:w-[42%]'>
      <h3 className='text-2xl font-semibold'>
        {t('national_geographic_nonprofit_work')}
      </h3>
      <p className='tracking-wide text-slate-950'>
        {t('national_geographic_society_description')}
      </p>
    </div>
  );
};
