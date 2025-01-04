import * as React from 'react';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

interface Show {
  id: number;
  title: string;
  imageUrl: string;
}

interface ShowCarouselProps {
  shows: Show[];
  className?: string;
}

export function ThreeDimensionalCarousel({
  shows,
  className,
}: ShowCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const placeholderShows = [
    {
      id: 1,
      title: 'Shark Movie',
      imageUrl: '/placeholder.svg?height=600&width=400',
    },
    {
      id: 2,
      title: 'Mountain Movie',
      imageUrl: '/placeholder.svg?height=600&width=400',
    },
    {
      id: 3,
      title: 'Adventure Movie',
      imageUrl: '/placeholder.svg?height=600&width=400',
    },
  ];

  const dataToDisplay = shows.length > 0 ? shows : placeholderShows;

  return (
    <div className={cn('relative mx-auto w-full max-w-5xl', className)}>
      <Carousel setApi={setApi} className='w-full'>
        <CarouselContent>
          {dataToDisplay.map((show) => (
            <CarouselItem key={show.id}>
              <div className='relative aspect-[16/9] w-full overflow-hidden rounded-lg'>
                <img
                  src={show.imageUrl}
                  alt={show.title}
                  className='object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
                <div className='absolute bottom-4 left-4 right-4 flex items-center justify-between'>
                  <h3 className='text-xl font-bold text-white'>{show.title}</h3>
                  <Button className='bg-yellow-400 text-black hover:bg-yellow-500'>
                    WATCH NOW
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='absolute left-4 top-1/2 -translate-y-1/2 border-none bg-black/50 text-white hover:bg-black/70'>
          <ChevronLeft className='h-6 w-6' />
        </CarouselPrevious>
        <CarouselNext className='absolute right-4 top-1/2 -translate-y-1/2 border-none bg-black/50 text-white hover:bg-black/70'>
          <ChevronRight className='h-6 w-6' />
        </CarouselNext>
      </Carousel>
      <div className='absolute -bottom-6 flex w-full justify-center gap-2 py-4'>
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            className={cn(
              'h-2 w-2 rounded-full transition-all',
              index === current ? 'w-4 bg-white' : 'bg-white/50',
            )}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
