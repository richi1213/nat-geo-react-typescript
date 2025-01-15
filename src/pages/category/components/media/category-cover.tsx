export const CategoryCover: React.FC<{ imageUrl: string }> = ({ imageUrl }) => {
  return (
    <div
      className='absolute inset-0 h-full w-full bg-cover bg-center transition-opacity duration-500'
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
  );
};
