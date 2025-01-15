import { CategoryArticlesGrid, CategoryArticlesRow } from '.';

export const CategoryArticles: React.FC = () => {
  return (
    <section>
      <div className='mx-auto w-full max-w-5xl space-y-16 px-8'>
        <CategoryArticlesGrid />
        <CategoryArticlesRow />
      </div>
    </section>
  );
};
