import { ArticleHorizontalCard } from '@/components';

const articleData = [
  {
    category: 'Technology',
    title: 'The Rise of AI in Everyday Life',
    imageUrl: '/images/placeholder.svg',
    href: '/impact',
  },
  {
    category: 'Health',
    title: 'The Importance of Mental Wellness',
    imageUrl: '/images/placeholder.svg',
    href: '/impact',
  },
  {
    category: 'Environment',
    title: 'How Climate Change Affects Us All',
    imageUrl: '/images/placeholder.svg',
    href: '/impact',
  },
  {
    category: 'Business',
    title: 'The Future of Remote Work',
    imageUrl: '/images/placeholder.svg',
    href: '/impact',
  },
  {
    category: 'Lifestyle',
    title: 'Minimalism: A Guide to Simple Living',
    imageUrl: '/images/placeholder.svg',
    href: '/impact',
  },
];

export const ImpactArticlesRow: React.FC = () => {
  return (
    <div className='mt-6 space-x-4'>
      {articleData.map((article, index) => (
        <ArticleHorizontalCard key={index} {...article} />
      ))}
    </div>
  );
};
