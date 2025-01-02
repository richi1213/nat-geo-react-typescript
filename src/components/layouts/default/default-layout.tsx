import { Header, Main, Navbar, PageContainer } from '@/components';
import { Outlet } from 'react-router';

export const DefaultLayout: React.FC = () => {
  return (
    <div className='flex min-h-screen flex-col bg-background font-natGeo text-accent-foreground'>
      <Header>
        <Navbar />
      </Header>
      <Main>
        <PageContainer>
          <Outlet />
        </PageContainer>
      </Main>
    </div>
  );
};
