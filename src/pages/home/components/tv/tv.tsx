import { VideoPromo, DiscoverMore } from '.';

export const Tv: React.FC = () => {
  return (
    <section className='flex flex-col justify-center bg-background py-8 text-foreground'>
      <VideoPromo
        title='OCEANXPLORERS'
        description="In this series from James Cameron, go aboard the OceanXplorer—the most advanced research vessel ever built—to investigate the farthest frontiers of the world's oceans. Armed with advanced technology, a handpicked team of intrepid explorers and scientists embark on a global odyssey to solve some of the ocean's greatest mysteries through the lives of its animals and their ecosystems."
        videoUrl='/videos/ocean-x-plorers.mp4'
      />
      <DiscoverMore />
    </section>
  );
};
