import { Button, Separator } from '@/components';
import { useAuthorById, useSingleArticle } from '@/hooks';
import { AuthorInfo } from '.';
import { useParams } from 'react-router';
import { formatArticleDate } from '@/utils';
import { FaFacebook } from 'react-icons/fa';
import { Link, Mail } from 'lucide-react';

export const SingleArticleHeading: React.FC = () => {
  const { category, articleSlug } = useParams();

  const { title_en, cover_image, author_id, created_at } =
    useSingleArticle(articleSlug!)?.data || {};

  const { first_name, last_name } =
    useAuthorById(author_id as string)?.data || {};

  return (
    <div className='space-y-6 pb-8 pt-8 lg:grid lg:grid-cols-2 lg:grid-rows-4'>
      <div className='mx-auto w-full max-w-lg space-y-4 px-5 lg:col-start-2 lg:row-span-1 lg:row-start-2'>
        <Button className='h-6 rounded-none border-2 border-background bg-foreground px-2 text-xs font-bold uppercase tracking-widest text-primary-foreground hover:bg-background hover:text-foreground'>
          {category}
        </Button>
        <h1 className='text-3xl font-bold md:text-4xl'>{title_en}</h1>
      </div>

      <img
        src={cover_image}
        alt={title_en}
        className='h-full w-full object-cover lg:row-span-full'
      />

      <AuthorInfo>
        <div className='mx-auto flex w-full max-w-lg flex-col justify-between space-y-3 px-6 md:flex-row lg:flex-col lg:items-start'>
          <div className='space-y-1'>
            <div className='text-slate-900'>
              By {`${first_name} ${last_name}`}
            </div>
            <div className='text-xs text-gray-600'>
              {formatArticleDate(formatArticleDate(created_at!))}
            </div>
          </div>
          <div className='flex items-center gap-5'>
            <Button
              variant='ghost'
              className='size-7 rounded-full hover:bg-gray-100'
            >
              <FaFacebook style={{ width: 20, height: 20 }} />
            </Button>
            <Button
              variant='ghost'
              className='size-7 rounded-full hover:bg-gray-100'
            >
              <Mail style={{ width: 20, height: 20 }} />
            </Button>
            <Button
              variant='ghost'
              className='size-7 rounded-full hover:bg-gray-100'
            >
              <Link style={{ width: 20, height: 20 }} />
            </Button>
          </div>
        </div>
      </AuthorInfo>
      <Separator className='mx-auto max-w-xl bg-chart-2 lg:hidden' />
    </div>
  );
};
