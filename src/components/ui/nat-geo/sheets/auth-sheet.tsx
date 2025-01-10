import {
  Card,
  CardContent,
  EnterEmailForm,
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components';
import { DialogTitle } from '@radix-ui/react-dialog';
import { useRef, type PropsWithChildren } from 'react';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { X } from 'lucide-react';

export const AuthSheet: React.FC<PropsWithChildren> = ({ children }) => {
  const sheetRef = useRef<HTMLDivElement>(null);
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent
        showClose={false}
        ref={sheetRef}
        side='top'
        className='z-[100] flex h-[100vh] w-full items-center justify-center bg-cover bg-center text-primary-foreground'
        style={{
          backgroundImage: "url('/images/natgeo-background.webp')",
        }}
      >
        <DialogTitle>
          <VisuallyHidden.Root>Navigation menu</VisuallyHidden.Root>
        </DialogTitle>
        <Card className='rounded-2xl bg-foreground text-background'>
          <CardContent>
            <EnterEmailForm sheetRef={sheetRef} />
          </CardContent>
        </Card>
        <SheetClose className='absolute right-4 top-4 rounded-full bg-foreground p-2 text-secondary transition-colors hover:bg-chart-2'>
          <X className='size-5' />
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};
