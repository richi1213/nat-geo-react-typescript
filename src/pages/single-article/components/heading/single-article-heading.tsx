import { Button } from '@/components';
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
    <div className='lg:grid lg:grid-cols-2 lg:grid-rows-4'>
      <div className='mx-auto w-full max-w-lg px-1 lg:col-start-2 lg:row-span-1 lg:row-start-2'>
        <Button className='h-6 w-28 rounded-none border-2 border-background bg-foreground text-xs font-bold uppercase tracking-widest text-primary-foreground hover:bg-background hover:text-foreground'>
          {category}
        </Button>
        <h1 className='text-3xl font-bold md:text-4xl'>{title_en}</h1>
      </div>

      <img
        src={cover_image}
        alt={title_en}
        className='w-full lg:row-span-full'
      />

      <AuthorInfo>
        <div className='mx-auto flex w-full max-w-lg flex-col items-center justify-between px-10 md:flex-row lg:flex-col lg:items-start'>
          <div>
            <div className='text-slate-900'>
              By {`${first_name} ${last_name}`}
            </div>
            <div className='text-xs text-gray-600'>
              {formatArticleDate(formatArticleDate(created_at!))}
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <Button
              variant='ghost'
              className='size-10 rounded-full hover:bg-gray-100'
            >
              <FaFacebook style={{ width: 20, height: 20 }} />
            </Button>
            <Button variant='ghost' className='rounded-full hover:bg-gray-100'>
              <Mail style={{ width: 20, height: 20 }} />
            </Button>
            <Button variant='ghost' className='rounded-full hover:bg-gray-100'>
              <Link style={{ width: 20, height: 20 }} />
            </Button>
          </div>
        </div>
      </AuthorInfo>
    </div>
  );
};
