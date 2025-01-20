import { ArticleForm, CreateArticleHeading } from '.';

const WriteArticlePage: React.FC = () => {
  return (
    <div className='mx-auto max-w-3xl space-y-8 py-20'>
      <CreateArticleHeading />
      <ArticleForm />
    </div>
  );
};

export default WriteArticlePage;
