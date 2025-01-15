import { useVideoPlayer } from '@/hooks';
import { Play, Pause } from 'lucide-react';

export const CategoryVideo: React.FC<{ videoUrl: string }> = ({ videoUrl }) => {
  const { isPlaying, videoRef, togglePlay } = useVideoPlayer();

  return (
    <div className='absolute inset-0 h-full w-full'>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className='absolute inset-0 h-full w-full object-cover'
      >
        <source src={videoUrl} type='video/mp4' />
      </video>

      <button
        onClick={togglePlay}
        className='absolute left-6 top-6 z-50 rounded-full bg-black/50 p-2 text-white hover:bg-black/30'
        aria-label={isPlaying ? 'Pause video' : 'Play video'}
      >
        {isPlaying ? <Pause fill='white' /> : <Play fill='white' />}
      </button>
    </div>
  );
};
