import { Navbar } from '@/components/layouts/default/navbar';

export const DefaultLayout = () => {
  return (
    <div className='flex min-h-screen flex-col bg-background text-foreground'>
      <Navbar />
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
