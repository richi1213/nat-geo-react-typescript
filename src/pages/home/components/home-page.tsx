import { LastestStories, Travel, Tv, Issue } from '@/pages';

const HomePage: React.FC = () => {
  return (
    <div>
      <LastestStories />
      <Tv />
      <Travel />
      <Issue />
    </div>
  );
};

export default HomePage;
