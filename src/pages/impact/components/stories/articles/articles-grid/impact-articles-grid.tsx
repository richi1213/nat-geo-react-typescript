import { ArticlesGridLayout, ArticleCard } from '@/components';

const staticArticles = [
  {
    variant: 'hero' as const,
    category: 'Science',
    subcategory: 'Mind, Body, Wonder',
    title: "8 strategies to make your New Year's resolutions stick",
    imageUrl: '/images/placeholder.svg',
    href: '/impact',
    isPremium: true,
  },
  {
    category: 'Science',
    title: 'The key to fitness? Strengthening your joints and tendons',
    imageUrl: '/images/placeholder.svg',
    href: '/impact',
    isPremium: false,
  },
  {
    category: 'Science',
    title: 'How going sober for even a month can improve your health',
    imageUrl: '/images/placeholder.svg',
    href: '/impact',
    isPremium: true,
  },
  {
    category: 'Science',
    title: 'The key to fitness? Strengthening your joints and tendons',
    imageUrl: '/images/placeholder.svg',
    href: '/impact',
    isPremium: false,
  },
  {
    category: 'Science',
    title: 'How going sober for even a month can improve your health',
    imageUrl: '/images/placeholder.svg',
    href: '/impact',
    isPremium: true,
  },
];

export const ImpactArticlesGrid: React.FC = () => {
  return (
    <ArticlesGridLayout>
      {staticArticles.map((article, index) => (
        <ArticleCard key={index} {...article} />
      ))}
    </ArticlesGridLayout>
  );
};
