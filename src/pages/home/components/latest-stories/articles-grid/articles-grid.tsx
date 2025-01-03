import { ArticleCard } from '@/components';

const articles = [
  {
    variant: 'hero' as const,
    category: 'Science',
    subcategory: 'Mind, Body, Wonder',
    title: "8 strategies to make your New Year's resolutions stick",
    imageUrl: '/images/placeholder.svg',
    href: '/articles/new-year-resolutions',
    isPremium: true,
  },
  {
    category: 'Science',
    title: 'The key to fitness? Strengthening your joints and tendons',
    imageUrl: '/images/placeholder.svg',
    href: '/articles/fitness-joints',
    isPremium: false,
  },
  {
    category: 'Science',
    title: 'How going sober for even a month can improve your health',
    imageUrl: '/images/placeholder.svg',
    href: '/articles/sober-health',
    isPremium: true,
  },
];

export const ArticlesGrid: React.FC = () => {
  return (
    <div className='order-1 lg:order-2 lg:col-span-8'>
      <div className='space-y-6'>
        <ArticleCard {...articles[0]} />
        <div className='grid gap-4 sm:grid-cols-2'>
          {articles.slice(1).map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
      </div>
    </div>
  );
};

{
  /* <div className='grid gap-4 sm:grid-cols-2'> */
}
