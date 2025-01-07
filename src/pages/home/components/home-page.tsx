import { LastestStories, Travel, Tv, Issue, ImpactIntro } from '@/pages';

const HomePage: React.FC = () => {
  return (
    <div>
      <LastestStories />
      <Tv />
      <Travel />
      <Issue />
      <ImpactIntro />
    </div>
  );
};

export default HomePage;
