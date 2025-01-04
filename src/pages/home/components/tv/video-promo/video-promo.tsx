import { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';
import { Button, UnderlinedButton } from '@/components';
import type { VideoPromoProps } from './types';

export const VideoPromo: React.FC<VideoPromoProps> = ({
  title,
  description,
  videoUrl,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className='relative h-screen w-full'>
      {/* Video Background */}
      <video
        ref={videoRef}
        className='absolute left-0 top-0 h-full w-full object-cover'
        playsInline
        loop
        muted
        autoPlay
        // poster='/images/placeholder.svg'
      >
        <source src={videoUrl} type='video/mp4' />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      {/* Gradient Overlay */}
      <div className='absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black' />

      {/* Play/Pause Button */}
      <Button
        onClick={togglePlay}
        variant='ghost'
        size='icon'
        className='z-14 hover: absolute left-6 top-6 size-14 rounded-full hover:bg-background/30 hover:text-foreground'
        aria-label={isPlaying ? 'Pause video' : 'Play video'}
      >
        {isPlaying ? <Pause fill='white' /> : <Play fill='white' />}
      </Button>

      {/* Content */}
      <div className='relative z-10 mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-4 text-center md:px-8'>
        <h2 className='mb-8 text-2xl font-bold tracking-widest text-foreground md:text-3xl'>
          {title}
        </h2>
        <p className='mb-8 leading-relaxed text-foreground md:text-xl'>
          {description}
        </p>
        <UnderlinedButton
          size='sm'
          className='bg-transparent bg-[0_120%] font-semibold uppercase tracking-[0.2rem] text-foreground hover:text-primary-foreground'
        >
          stream now
        </UnderlinedButton>
      </div>
    </div>
  );
};
