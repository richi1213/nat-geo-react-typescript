import { useTranslation } from 'react-i18next';

export const ImpactText: React.FC = () => {
  const { t } = useTranslation('impact');
  return (
    <div className='text space-y-6 px-4 text-primary-foreground md:max-w-sm'>
      <p className='tracking-wide text-slate-950'>
        {t('supported_work_since_1890')}
      </p>
    </div>
  );
};
