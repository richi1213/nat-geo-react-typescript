import { Button } from '@/components';
import { useAuthorById, useSingleArticle } from '@/hooks';
import { AuthorInfo } from '.';
import { useParams } from 'react-router';
import { formatArticleDate } from '@/utils';

export const SingleArticleHeading: React.FC = () => {
  const { category, articleSlug } = useParams();

  const { title_en, cover_image, author_id, created_at } =
    useSingleArticle(articleSlug!)?.data || {};

  const { first_name, last_name } = useAuthorById(author_id!)?.data || {};

  return (
    <div className='mx-auto max-w-5xl space-y-4 px-12'>
      <Button className='h-6 rounded-none border-2 border-background bg-foreground px-2.5 text-xs uppercase tracking-widest text-primary-foreground hover:bg-background hover:text-foreground'>
        {category}
      </Button>
      <h1 className='text-3xl font-bold md:text-4xl'>{title_en}</h1>
      <img src={cover_image} alt='' />
      <AuthorInfo>
        <div className='flex flex-col md:flex-row'>
          <div>By {`${first_name} ${last_name}`}</div>
          <div>{formatArticleDate(created_at!)}</div>
        </div>
      </AuthorInfo>
    </div>
  );
};
