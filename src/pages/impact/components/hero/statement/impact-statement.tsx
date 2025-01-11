import { StatementTitle } from '.';

export const ImpactStatement: React.FC = () => {
  return (
    <div className='flex flex-col items-center space-y-5'>
      <StatementTitle />
      <h1 className='text-5xl font-bold tracking-wide'>
        National Geographic Society
      </h1>
      <p className='text-center text-lg leading-loose'>
        We support a diverse, international community of changemakers — National
        Geographic Explorers — who use the power of science, exploration,
        education, and storytelling to illuminate and protect the wonder of our
        world.
      </p>
      <img src='/images/small_ngseal_east.avif' alt='nat geo society logo' />
    </div>
  );
};
