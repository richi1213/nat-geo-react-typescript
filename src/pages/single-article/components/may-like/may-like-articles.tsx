import { ArticlesGridLayout, Loading, MayLikeCard } from '@/components';
import { MayLikeArticleProps } from './types';
import { useMayLikeArticles } from '@/hooks';
import { useTranslation } from 'react-i18next';

export const MayLikeArticles: React.FC<MayLikeArticleProps> = ({
  currentArticleId,
  currentCategoryId,
  currentAuthorId,
}) => {
  const { t } = useTranslation('common');

  const { data, isLoading } = useMayLikeArticles({
    currentArticleId,
    currentCategoryId,
    currentAuthorId,
  });

  const mayLikeArticles = data || [];

  if (isLoading) return <Loading />;

  return (
    <div className='mx-auto mt-24 max-w-6xl px-4'>
      <h2 className='text-2xl font-bold capitalize lg:text-3xl'>
        {t('may_like')}
      </h2>
      <ArticlesGridLayout>
        {mayLikeArticles?.map((article, index) => (
          <MayLikeCard
            key={article.id}
            article={article}
            variant={index === 0 ? 'hero' : 'standard'}
          />
        ))}
      </ArticlesGridLayout>
    </div>
  );
};
