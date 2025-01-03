import { ArticleCard } from '@/components';

const articles = [
  {
    variant: 'hero' as const,
    category: 'Science',
    subcategory: 'Mind, Body, Wonder',
    title: "8 strategies to make your New Year's resolutions stick",
    imageUrl: '/images/placeholder.webp',
    href: '/articles/new-year-resolutions',
    isPremium: true,
  },
  {
    category: 'Science',
    title: 'The key to fitness? Strengthening your joints and tendons',
    imageUrl: '/images/placeholder.webp',
    href: '/articles/fitness-joints',
    isPremium: false,
  },
  {
    category: 'Science',
    title: 'How going sober for even a month can improve your health',
    imageUrl: '/placeholder.svg?height=400&width=400',
    href: '/articles/sober-health',
    isPremium: true,
  },
];

export const ArticlesGrid: React.FC = () => {
  return (
    <div className='col-span-8 space-y-6 p-6'>
      <ArticleCard {...articles[0]} />
      <div className='grid gap-4 md:grid-cols-2'>
        {articles.slice(1).map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
    </div>
  );
};
