import { ImpactCard, TwoDimensionalCarousel } from '@/components';

const demoItems = [
  {
    id: '1',
    image: 'images/placeholder.svg',
    category: 'IMPACT',
    title:
      "The ecologist and photographer examines nature's rhythms in the world's harshest environments.",
    href: '#',
  },
  {
    id: '2',
    image: 'images/placeholder.svg',
    category: 'IMPACT',
    subcategory: 'PERPETUAL PLANET',
    title: "Josh West on water's life-sustaining contribution in the Amazon",
    href: '#',
  },
  {
    id: '3',
    image: 'images/placeholder.svg',
    category: 'IMPACT',
    title: 'Kerllen Costa amplifies community-led conservation across Africa',
    href: '#',
  },
  {
    id: '4',
    image: 'images/placeholder.svg',
    category: 'IMPACT',
    title:
      "The ecologist and photographer examines nature's rhythms in the world's harshest environments.",
    href: '#',
  },
  {
    id: '5',
    image: 'images/placeholder.svg',
    category: 'IMPACT',
    subcategory: 'PERPETUAL PLANET',
    title: "Josh West on water's life-sustaining contribution in the Amazon",
    href: '#',
  },
  {
    id: '6',
    image: 'images/placeholder.svg',
    category: 'IMPACT',
    title: 'Kerllen Costa amplifies community-led conservation across Africa',
    href: '#',
  },
];

export const ImpactCarousel: React.FC = () => {
  return (
    // <Carousel className='mt-14 w-full'>
    //   <CarouselContent className='sm:-ml-20'>
    //     {demoItems.map(({ id, ...item }) => (
    //       <CarouselItem
    //         key={id}
    //         className='pl-0 sm:ml-20 sm:basis-1/3 lg:basis-1/4'
    //       >
    //         <ImpactCard {...item} />
    //       </CarouselItem>
    //     ))}
    //   </CarouselContent>
    //   <CarouselPrevious />
    //   <CarouselNext />
    // </Carousel>
    <TwoDimensionalCarousel>
      {demoItems.map((item) => (
        <ImpactCard {...item} />
      ))}
    </TwoDimensionalCarousel>
  );
};
