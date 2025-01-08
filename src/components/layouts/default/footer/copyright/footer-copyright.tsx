import { Separator } from '@/components';
import { useTranslation } from 'react-i18next';

export const FooterCopyright: React.FC = () => {
  const { t } = useTranslation('footer');
  return (
    <div className='col-span-full row-start-12 row-end-12 p-4 text-chart-3 md:col-start-4 md:col-end-12 md:row-start-11 md:row-end-12'>
      <div className='flex flex-col gap-5 text-xs lg:flex-row'>
        <p>{t('copyright_1')}</p>
        <Separator
          orientation='vertical'
          className='hidden h-5 bg-foreground/60 lg:block'
        />
        <p>{t('copyright_2')}</p>
      </div>
    </div>
  );
};
