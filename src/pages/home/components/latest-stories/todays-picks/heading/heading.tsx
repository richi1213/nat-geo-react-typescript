import { HeadingLine } from '@/components';
import { useTranslation } from 'react-i18next';

export const Heading: React.FC = () => {
  const { t } = useTranslation('home');
  return (
    <div className='flex items-center gap-4'>
      <HeadingLine orientation='vertical' />
      <h2 className='text-3xl uppercase'>{t('todays_picks')}</h2>
    </div>
  );
};
