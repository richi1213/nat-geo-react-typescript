import { ArticleCard } from '@/components';

const issues = [
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

export const IssueGrid: React.FC = () => {
  return (
    <div className='mt-6 lg:col-span-8'>
      {/* <div className='space-y-6'>
        <ArticleCard {...issues[0]} />
        <div className='grid gap-4 sm:grid-cols-2'>
          {issues.slice(1).map((issue, index) => (
            <ArticleCard key={index} {...issue} />
          ))}
        </div>
      </div> */}
    </div>
  );
};
