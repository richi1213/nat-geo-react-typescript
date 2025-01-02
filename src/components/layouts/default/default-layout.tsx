import { Header, Navbar } from '@/components';

export const DefaultLayout = () => {
  return (
    <div className='flex min-h-screen flex-col bg-background font-natGeo text-accent-foreground'>
      <Header>
        <Navbar />
      </Header>
      {/* <ColorPalette /> */}
      {/* <Main>
        <PageContainer>
          <Outlet />
        </PageContainer>
      </Main>
      <Footer /> */}
    </div>
  );
};
