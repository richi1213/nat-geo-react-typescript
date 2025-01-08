import { Separator } from '@/components';

export const FooterCopyright: React.FC = () => {
  return (
    <div className='p-4 text-chart-3'>
      <div className='flex flex-col gap-5 text-xs lg:flex-row'>
        <p>Copyright © 1996-2015 National Geographic Society</p>
        <Separator
          orientation='vertical'
          className='hidden h-5 bg-foreground/60 lg:block'
        />
        <p>
          Copyright © 2015-2025 National Geographic Partners, LLC. All rights
          reserved
        </p>
      </div>
    </div>
  );
};
