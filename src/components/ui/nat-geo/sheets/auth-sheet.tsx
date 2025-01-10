import {
  Card,
  CardContent,
  EnterEmailForm,
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components';
import type { PropsWithChildren } from 'react';

export const AuthSheet: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent
        side='top'
        className='z-[100] flex h-[100vh] w-full items-center justify-center bg-cover bg-center text-primary-foreground'
        style={{
          backgroundImage: "url('/images/natgeo-background.webp')",
        }}
      >
        <Card className='rounded-2xl bg-foreground text-background'>
          <CardContent>
            <EnterEmailForm />
          </CardContent>
        </Card>
      </SheetContent>
    </Sheet>
  );
};
