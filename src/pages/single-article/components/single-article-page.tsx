import { Button, Separator } from '@/components';
import { formatArticleDate } from '@/utils';
import {
  AuthorInfo,
  MayLikeArticles,
  SingleArticleContent,
  SingleArticleHeader,
  SingleArticleHeading,
} from '.';
import { useSingleArticle, useAuthorById } from '@/hooks';
import { useParams } from 'react-router';

const SingleArticlePage: React.FC = () => {
  const { category, articleSlug } = useParams();

  const {
    id,
    title_en,
    cover_image,
    author_id,
    created_at,
    content,
    category_id,
  } = useSingleArticle(articleSlug!)?.data || {};

  const { first_name, last_name } =
    useAuthorById(author_id as string)?.data || {};

  return (
    <article>
      <SingleArticleHeader>
        <SingleArticleHeading>
          <Button className='h-6 rounded-none border-2 border-background bg-foreground px-2 text-xs font-bold uppercase tracking-widest text-primary-foreground hover:bg-background hover:text-foreground'>
            {category}
          </Button>
          <h1 className='text-3xl font-bold md:text-4xl'>{title_en}</h1>
        </SingleArticleHeading>

        <img
          src={cover_image}
          alt={title_en}
          className='m-0 h-full w-full object-cover p-0 lg:row-span-full'
        />

        <AuthorInfo>
          <div className='space-y-1'>
            <div className='text-slate-900'>
              By {`${first_name} ${last_name}`}
            </div>
            <div className='text-xs text-gray-600'>
              {formatArticleDate(formatArticleDate(created_at!))}
            </div>
          </div>
        </AuthorInfo>
        <Separator className='mx-auto max-w-xl bg-chart-2 lg:hidden' />
      </SingleArticleHeader>

      <SingleArticleContent content={content || ''} />
      <MayLikeArticles
        currentArticleId={id!}
        currentCategoryId={category_id!}
        currentAuthorId={author_id!}
      />
    </article>
  );
};

export default SingleArticlePage;
