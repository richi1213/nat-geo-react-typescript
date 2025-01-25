import { Loading, MiniArticleCard, UnderlinedButton } from '@/components';
import { useRandomArticles } from '@/hooks';
import { ArticleCategories } from '@/supabase';
import { useTranslation } from 'react-i18next';

export const TravelArticlesList: React.FC = () => {
  const { t } = useTranslation('common');

  const { data, isLoading } = useRandomArticles('travel', 5);

  if (isLoading) return <Loading />;

  if (!data) return <div>No data</div>;

  return (
    <div className='space-y-4'>
      <div className='grid sm:grid-cols-2 lg:grid-cols-1'>
        {data.map((article) => (
          <MiniArticleCard key={article.id} article={article} />
        ))}
      </div>
      <div className='text-center lg:text-left xl:text-left'>
        <UnderlinedButton
          to={`/${ArticleCategories.TRAVEL}`}
          size='sm'
          className='bg-inherit font-semibold uppercase tracking-widest text-foreground hover:text-background'
        >
          {t('see_more')}
        </UnderlinedButton>
      </div>
    </div>
  );
};
