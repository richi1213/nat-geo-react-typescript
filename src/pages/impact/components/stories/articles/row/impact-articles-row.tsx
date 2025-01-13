import { ArticleHorizontalCard } from '@/components';
import { useArticlesByCategory } from '@/hooks';

// const articleData = [
//   {
//     category: 'Technology',
//     title: 'The Rise of AI in Everyday Life',
//     imageUrl: '/images/placeholder.svg',
//     href: '/impact',
//   },
//   {
//     category: 'Health',
//     title: 'The Importance of Mental Wellness',
//     imageUrl: '/images/placeholder.svg',
//     href: '/impact',
//   },
//   {
//     category: 'Environment',
//     title: 'How Climate Change Affects Us All',
//     imageUrl: '/images/placeholder.svg',
//     href: '/impact',
//   },
//   {
//     category: 'Business',
//     title: 'The Future of Remote Work',
//     imageUrl: '/images/placeholder.svg',
//     href: '/impact',
//   },
//   {
//     category: 'Lifestyle',
//     title: 'Minimalism: A Guide to Simple Living',
//     imageUrl: '/images/placeholder.svg',
//     href: '/impact',
//   },
// ];

export const ImpactArticlesRow: React.FC = () => {
  const { data } = useArticlesByCategory('impact');

  console.log(data);

  const articles = data?.pages.flatMap((page) => page.articles);

  return (
    <div className='mt-6 space-x-4'>
      {articles?.map((article) => (
        <ArticleHorizontalCard
          key={article.id}
          imageUrl={article.cover_image}
          category={article.category}
          title={article.title_en}
          href='/'
        />
      ))}
    </div>
  );
};
