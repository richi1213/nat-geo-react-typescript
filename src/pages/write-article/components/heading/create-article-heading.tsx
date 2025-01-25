import { HeadingLine } from '@/components';
import { useTranslation } from 'react-i18next';

export const CreateArticleHeading: React.FC = () => {
  const { t } = useTranslation('writeArticle');

  return (
    <div className='text-center'>
      <h2 className='md:6xl text-4xl font-bold uppercase'>
        {t('create_article')}
      </h2>
      <HeadingLine />
    </div>
  );
};
