import { ImpactStatement } from '@/pages';

export const ImpactHero: React.FC = () => {
  return (
    <section>
      <div
        className='flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: 'url("/images/impact-hero.avif")',
        }}
      >
        <div className='mx-auto w-full max-w-5xl text-foreground'>
          <ImpactStatement />
        </div>
      </div>
    </section>
  );
};
