import {
  Card,
  CardContent,
  EnterEmailForm,
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components';
import { DialogTitle } from '@radix-ui/react-dialog';
import { useRef, type PropsWithChildren } from 'react';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';

export const AuthSheet: React.FC<PropsWithChildren> = ({ children }) => {
  const sheetRef = useRef<HTMLDivElement>(null);
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent
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
      </SheetContent>
    </Sheet>
  );
};
