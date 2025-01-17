import { ArticlesGridLayout, MayLikeCard } from '@/components';
import { MayLikeArticleProps } from './types';
import { useMayLikeArticles } from '@/hooks';

export const MayLikeArticles: React.FC<MayLikeArticleProps> = ({
  currentCategoryId,
  currentArticleId,
  currentAuthorId,
}) => {
  const { data } = useMayLikeArticles({
    currentArticleId,
    currentCategoryId,
    currentAuthorId,
  });

  const mayLikeArticles = data || [];

  return (
    <div>
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
