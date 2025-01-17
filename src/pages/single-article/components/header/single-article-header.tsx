import { Button, Separator } from '@/components';
import { useAuthorById, useSingleArticle } from '@/hooks';
import { AuthorInfo, SingleArticleHeading } from '.';
import { useParams } from 'react-router';
import { formatArticleDate } from '@/utils';

export const SingleArticleHeader: React.FC = () => {
  const { category, articleSlug } = useParams();

  const { title_en, cover_image, author_id, created_at } =
    useSingleArticle(articleSlug!)?.data || {};

  const { first_name, last_name } =
    useAuthorById(author_id as string)?.data || {};

  return (
    <div className='space-y-6 pb-8 pt-8 lg:grid lg:grid-cols-2 lg:grid-rows-4'>
      <SingleArticleHeading>
        <Button className='h-6 rounded-none border-2 border-background bg-foreground px-2 text-xs font-bold uppercase tracking-widest text-primary-foreground hover:bg-background hover:text-foreground'>
          {category}
        </Button>
        <h1 className='text-3xl font-bold md:text-4xl'>{title_en}</h1>
      </SingleArticleHeading>

      <img
        src={cover_image}
        alt={title_en}
        className='h-full w-full object-cover lg:row-span-full'
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
    </div>
  );
};
