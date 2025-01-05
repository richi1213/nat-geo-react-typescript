import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import type { StackedCarouselProps } from './types';
import React from 'react';

export const StackedCarousel: React.FC<StackedCarouselProps> = ({
  children,
  slidesPerView = 3,
  spaceBetween = -120,
  loop = true,
  className = '',
}) => {
  return (
    <div className={`relative w-full ${className}`}>
      <Swiper
        modules={[EffectCoverflow, Navigation, Pagination]}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        centeredSlides
        loop={loop}
        effect={'coverflow'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ clickable: true }}
        className='h-96'
      >
        {React.Children.map(children, (child) => (
          <SwiperSlide>{child}</SwiperSlide>
        ))}
      </Swiper>

      <div className='swiper-button-prev absolute left-0 top-1/2 z-10 -translate-y-1/2 text-foreground'>
        <ChevronLeft className='h-8 w-8' />
      </div>
      <div className='swiper-button-next absolute right-0 top-1/2 z-10 -translate-y-1/2 text-foreground'>
        <ChevronRight className='h-8 w-8' />
      </div>
    </div>
  );
};
