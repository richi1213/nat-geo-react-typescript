import { Navbar } from '@/components/layouts/default/navbar';

export const DefaultLayout = () => {
  return (
    <div className='flex min-h-screen flex-col bg-background font-custom text-accent-foreground'>
      <Navbar />
      {/* <ColorPalette /> */}
      {/* <Main>
        <PageContainer>
          <Outlet />
        </PageContainer>
      </Main>
      <Toaster />
      <Footer /> */}
    </div>
  );
};
