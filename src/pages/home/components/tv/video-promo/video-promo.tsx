import { Play, Pause } from 'lucide-react';
import { Button, UnderlinedButton } from '@/components';
import type { VideoPromoProps } from './types';
import { useVideoPlayer } from '@/hooks';

export const VideoPromo: React.FC<VideoPromoProps> = ({
  title,
  description,
  videoUrl,
}) => {
  const { isPlaying, videoRef, togglePlay } = useVideoPlayer();

  return (
    <div className='relative h-[948px] w-full'>
      <video
        ref={videoRef}
        className='absolute left-0 top-0 h-full w-full object-cover'
        playsInline
        loop
        muted
        autoPlay
      >
        <source src={videoUrl} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className='absolute inset-0 bg-gradient-to-b from-black/30 via-black/65 to-black' />

      <Button
        onClick={togglePlay}
        variant='ghost'
        size='icon'
        className='absolute left-6 top-6 z-10 size-14 rounded-full hover:bg-background/30 hover:text-foreground'
        aria-label={isPlaying ? 'Pause video' : 'Play video'}
      >
        {isPlaying ? <Pause fill='white' /> : <Play fill='white' />}
      </Button>

      <div className='relative z-10 mx-auto mt-36 flex h-full max-w-4xl flex-col items-center justify-center px-4 pb-8 text-center md:px-8 md:pb-16'>
        <h2 className='mb-4 text-2xl font-bold tracking-widest text-foreground md:text-3xl'>
          {title}
        </h2>
        <p className='mb-4 mt-8 leading-relaxed text-foreground md:text-xl'>
          {description}
        </p>
        <UnderlinedButton
          size='sm'
          className='mt-4 bg-transparent bg-[0_120%] font-semibold uppercase tracking-[0.2rem] text-foreground hover:text-primary-foreground'
        >
          stream now
        </UnderlinedButton>
      </div>
    </div>
  );
};
