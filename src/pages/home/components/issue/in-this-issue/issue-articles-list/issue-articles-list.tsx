import { Loading, MiniArticleCard, UnderlinedButton } from '@/components';
import { useRandomArticles } from '@/hooks';
import { useTranslation } from 'react-i18next';

export const IssueArticlesList: React.FC = () => {
  const { t } = useTranslation('common');

  const { data, isLoading } = useRandomArticles(undefined, 6);

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
          size='sm'
          className='bg-inherit font-semibold uppercase tracking-widest text-foreground hover:text-background'
        >
          <a
            href='https://www.nationalgeographic.com/magazine/issue/february-2025'
            target='_blank'
            rel='noopener noreferrer'
            className='no-underline'
          >
            {t('see_all')}
          </a>
        </UnderlinedButton>
      </div>
    </div>
  );
};
