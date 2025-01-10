import React, { type PropsWithChildren } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components';

export const TwoDimensionalCarousel: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className='relative'>
      <Carousel
        opts={{
          align: 'start',
        }}
        className='relative overflow-hidden px-6'
      >
        <CarouselContent>
          {React.Children.map(children, (child, index) => (
            <CarouselItem
              key={index}
              className='basis-1/3 overflow-hidden pl-0.5 md:basis-1/4 xl:basis-1/5 2xl:basis-1/6'
            >
              <div className='px-0 py-2'>{child}</div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className='hidden sm:block'>
          <CarouselPrevious
            variant='ghost'
            className='hover:bg-transparent hover:text-gray-500'
          />
          <CarouselNext
            variant='ghost'
            className='hover:bg-transparent hover:text-gray-500'
          />
        </div>
      </Carousel>
    </div>
  );
};
