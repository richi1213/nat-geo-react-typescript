import { HeadingLine } from '@/components';
import { useTranslation } from 'react-i18next';

export const MyArticlesHeading: React.FC = () => {
  const { t } = useTranslation('common');
  return (
    <div className='text-center'>
      <h1 className='md:7xl text-5xl font-bold uppercase'>
        {t('my_articles')}
      </h1>
      <HeadingLine />
    </div>
  );
};
