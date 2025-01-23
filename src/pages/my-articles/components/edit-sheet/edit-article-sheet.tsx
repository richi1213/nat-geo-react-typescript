import { activeArticleIdAtom, isSheetOpenAtom } from '@/atoms';
import { Sheet, SheetContent, SheetClose } from '@/components';
import { DialogTitle } from '@radix-ui/react-dialog';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { useAtom, useAtomValue } from 'jotai';
import { X } from 'lucide-react';

export const EditArticleSheet: React.FC = () => {
  const [isSheetOpen, setIsSheetOpen] = useAtom(isSheetOpenAtom);
  const articleId = useAtomValue(activeArticleIdAtom);

  console.log(articleId);

  if (!isSheetOpen) return null;

  return (
    <Sheet open={isSheetOpen} onOpenChange={() => setIsSheetOpen(false)}>
      <SheetContent
        side='bottom'
        className='z-[500] h-screen w-full overflow-y-auto bg-foreground text-primary-foreground'
        showClose={false}
      >
        <DialogTitle>
          <VisuallyHidden.Root>Edit Article Sheet</VisuallyHidden.Root>
        </DialogTitle>

        <div>
          <h2 className='mb-10 flex items-center font-natGeo2 text-base text-chart-4'>
            Edit an article
          </h2>
        </div>

        <SheetClose className='absolute right-1 top-1 rounded-none bg-transparent p-1 transition-colors'>
          <X className='size-7' />
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};
