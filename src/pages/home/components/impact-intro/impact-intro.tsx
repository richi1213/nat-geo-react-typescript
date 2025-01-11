import { LinkButton } from '@/components';
import { ImpactIntroGeneralHeading, ImpactPromo } from '.';

export const ImpactIntro: React.FC = () => {
  return (
    <section className='flex justify-center px-8 py-14 text-foreground'>
      <div className='w-full max-w-5xl'>
        <ImpactIntroGeneralHeading />
        <ImpactPromo />
        {/* <ImpactCarousel /> */}
        <div className='mt-16 text-center'>
          <LinkButton variant='alternate' to='impact'>
            discover more
          </LinkButton>
        </div>
      </div>
    </section>
  );
};
