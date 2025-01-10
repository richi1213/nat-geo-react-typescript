export const Loading: React.FC = () => {
  return (
    <div className='fixed inset-0 z-[150] flex items-center justify-center bg-transparent bg-opacity-50'>
      <div className='relative h-24 w-24'>
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className={`absolute h-full w-full animate-spin rounded-full border-4 border-transparent border-t-accent`}
            style={{
              animationDuration: '1.5s',
              animationDelay: `${index * 0.2}s`,
              animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};
