import type { TravelLayoutProps } from './types';

export const TravelLayout: React.FC<TravelLayoutProps> = ({
  children,
  className,
}) => {
  return (
    <section className={`relative w-full ${className}`}>
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{
          backgroundImage: 'url("/images/natgeo-travel.avif")',
        }}
      />

      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-black/85 to-black' />

      {/* Content */}
      <div className='relative z-10 flex flex-col items-center justify-center pt-16 text-foreground'>
        {children}
      </div>
    </section>
  );
};
