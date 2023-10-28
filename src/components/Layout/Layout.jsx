import { Loader } from 'components/Loader/Loader';
import { Navigation } from 'components/Navigation/Navigation';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Container>
        <main>
          <Suspense fallback={<Loader loading={true} />}>
            <Outlet />
          </Suspense>
        </main>
      </Container>
    </>
  );
};
