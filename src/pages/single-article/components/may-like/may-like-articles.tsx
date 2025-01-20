import { ArticlesGridLayout, MayLikeCard } from '@/components';
import { MayLikeArticleProps } from './types';
import { useMayLikeArticles } from '@/hooks';

export const MayLikeArticles: React.FC<MayLikeArticleProps> = ({
  currentArticleId,
  currentCategoryId,
  currentAuthorId,
}) => {
  const { data } = useMayLikeArticles({
    currentArticleId,
    currentCategoryId,
    currentAuthorId,
  });

  console.log('curren article id', currentArticleId);

  console.log('maylikearticles', data);

  const mayLikeArticles = data || [];

  return (
    <div className='mx-auto mt-24 max-w-6xl px-4'>
      <h2 className='text-2xl font-bold capitalize lg:text-3xl'>
        you may also like
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
