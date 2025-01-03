import { MiniArticleCard, UnderlinedButton } from '@/components';

const articles = [
  {
    category: 'Science',
    title: 'How your body changes in the first 10 minutes of exercise',
    imageUrl: '/images/placeholder.svg',
    href: '/articles/exercise-changes',
    isPremium: true,
  },
  {
    category: 'Science',
    title: 'What are stars made of? She found out and changed physics forever',
    imageUrl: '/images/placeholder.svg',
    href: '/articles/stars-physics',
    isPremium: false,
  },
  {
    category: 'History & Culture',
    title: 'A look inside Ellis Island during its heyday',
    imageUrl: '/images/placeholder.svg',
    href: '/articles/ellis-island',
    isPremium: true,
  },
  {
    category: 'History & Culture',
    title: "7 New Year's food traditions that will bring good luck",
    imageUrl: '/images/placeholder.svg',
    href: '/articles/new-year-food',
    isPremium: false,
  },
  {
    category: 'Lifestyle',
    title: "Running in the winter? Here's the workout gear you'll need.",
    imageUrl: '/images/placeholder.svg',
    href: '/articles/winter-running',
    isPremium: false,
  },
  {
    category: 'Travel',
    title: 'Why Mongolia should be your next wellness escape',
    imageUrl: '/images/placeholder.svg',
    href: '/articles/mongolia-wellness',
    isPremium: false,
  },
];

export const ArticlesList: React.FC = () => {
  return (
    <div className='space-y-4'>
      <div className='grid sm:grid-cols-2 lg:grid-cols-1'>
        {articles.map((article, index) => (
          <MiniArticleCard key={index} {...article} />
        ))}
      </div>
      <div className='text-center xl:text-left'>
        <UnderlinedButton
          size='sm'
          className='bg-inherit font-semibold uppercase tracking-widest text-foreground hover:text-background'
        >
          see more
        </UnderlinedButton>
      </div>
    </div>
  );
};
