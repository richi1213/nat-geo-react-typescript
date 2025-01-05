import { Heading } from '.';

export const Travel: React.FC = () => {
  return (
    <section className='relative aspect-[16/9]'>
      <div
        className='absolute inset-0 bg-cover bg-center opacity-60'
        style={{
          backgroundImage: 'url("/images/natgeo-travel.avif")',
        }}
      ></div>

      {/* Dark Overlay */}
      <div className='absolute inset-0 bg-black opacity-50'></div>

      {/* Content */}
      <div className='relative z-10 flex h-full items-center justify-center text-white'>
        <Heading />
      </div>
    </section>
  );
};
