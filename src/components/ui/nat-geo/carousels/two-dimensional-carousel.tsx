import React, { PropsWithChildren } from 'react';
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
    <Carousel
      opts={{
        align: 'start',
      }}
    >
      <CarouselContent>
        {React.Children.map(children, (child, index) => (
          <CarouselItem
            key={index}
            className='basis-1/3 md:basis-1/4 xl:basis-1/5 2xl:basis-1/6'
          >
            <div className='mx-0 px-0 py-2'>{child}</div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        variant='ghost'
        className='hover:bg-transparent hover:text-gray-500'
      />
      <CarouselNext
        variant='ghost'
        className='hover:bg-transparent hover:text-gray-500'
      />
    </Carousel>
  );
};
