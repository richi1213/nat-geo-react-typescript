import { UnderlinedButton } from '@/components';
import { DEFAULT_LAYOUT_PATHS } from '@/routes';
import { useTranslation } from 'react-i18next';

export const NotFound: React.FC = () => {
  const { t } = useTranslation('notFound');

  return (
    <div className='flex min-h-screen flex-col items-center justify-center px-4'>
      <h2 className='mb-6 text-center text-3xl font-bold tracking-wider md:text-5xl'>
        {t('title')}
      </h2>
      <p className='text-lg'>
        {t('description')}{' '}
        <UnderlinedButton size='sm' to={DEFAULT_LAYOUT_PATHS.HOME}>
          {t('returnHome')}
        </UnderlinedButton>
        .
      </p>
    </div>
  );
};
