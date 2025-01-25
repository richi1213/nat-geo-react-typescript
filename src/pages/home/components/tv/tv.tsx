import { useTranslation } from 'react-i18next';
import { VideoPromo, DiscoverMore, NatGeoTvHeading, Shows } from '.';

export const Tv: React.FC = () => {
  const { t } = useTranslation('home');
  return (
    <section className='flex flex-col justify-center bg-background py-8 text-foreground'>
      <VideoPromo
        title={t('oceanxplorers')}
        description={t('oceanxplorers_description')}
        videoUrl='/videos/ocean-x-plorers.mp4'
      />
      <DiscoverMore />
      <NatGeoTvHeading />
      <Shows />
    </section>
  );
};
