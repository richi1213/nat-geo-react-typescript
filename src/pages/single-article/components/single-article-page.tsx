import { Button, Separator } from '@/components';
import { formatArticleDate, getLocalizedString } from '@/utils';
import {
  AuthorInfo,
  MayLikeArticles,
  SingleArticleContent,
  SingleArticleHeader,
  SingleArticleHeading,
} from '.';
import { useSingleArticle, useAuthorById, useCategoryById } from '@/hooks';
import { Link, useParams } from 'react-router';
import { useTranslation } from 'react-i18next';

const SingleArticlePage: React.FC = () => {
  const { i18n, t } = useTranslation('common');
  const currentLanguage = i18n.language;

  const { articleSlug, category } = useParams();

  const {
    id,
    title_en,
    title_ka,
    cover_image,
    author_id,
    created_at,
    content,
    category_id,
  } = useSingleArticle(articleSlug!)?.data || {};

  const { data: articleCategory } = useCategoryById(category_id!);

  const { first_name, last_name, email } =
    useAuthorById(author_id as string)?.data || {};

  const categoryName = articleCategory
    ? getLocalizedString(
        articleCategory as Record<string, string | null>,
        'name',
        currentLanguage,
      )
    : category;

  const title = getLocalizedString(
    { title_en, title_ka } as Record<string, string | null>,
    'title',
    currentLanguage,
  );

  return (
    <article>
      <SingleArticleHeader>
        <SingleArticleHeading>
          <Button className='h-6 rounded-none border-2 border-background bg-foreground px-2 text-xs font-bold uppercase tracking-widest text-primary-foreground hover:bg-background hover:text-foreground'>
            <Link to={`/${articleCategory?.slug}`}>{categoryName}</Link>
          </Button>
          <h1 className='text-3xl font-bold md:text-4xl'>{title}</h1>
        </SingleArticleHeading>

        <img
          src={cover_image}
          alt={title_en}
          className='m-0 h-full w-full object-cover p-0 lg:row-span-full'
        />

        <AuthorInfo email={email!}>
          <div className='space-y-1'>
            <div className='text-slate-900'>
              {t('by')} {`${first_name} ${last_name}`}
            </div>

            <div className='text-xs text-gray-600'>
              {formatArticleDate(created_at!, currentLanguage)}
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
