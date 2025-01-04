import {
  Card,
  CardContent,
  TwoDimensionalCarousel,
  UnderlinedButton,
} from '@/components';

export const DiscoverMore: React.FC = () => {
  return (
    <section className='mx-auto w-full max-w-5xl px-6'>
      <div className='flex flex-col items-center justify-between gap-3 sm:flex-row'>
        <div className='font-bold uppercase tracking-[0.2rem]'>
          discover more on disney+
        </div>
        <UnderlinedButton className='h-5 bg-transparent text-xs font-bold uppercase tracking-widest text-foreground hover:text-primary-foreground sm:text-center'>
          see shows
        </UnderlinedButton>
      </div>
      <TwoDimensionalCarousel>
        {Array.from({ length: 5 }).map((_, index) => (
          <Card key={index}>
            <CardContent className='flex aspect-[1/1.3] items-center justify-center p-6'>
              <span className='text-3xl font-semibold'>{index + 1}</span>
            </CardContent>
          </Card>
        ))}
      </TwoDimensionalCarousel>
    </section>
  );
};
