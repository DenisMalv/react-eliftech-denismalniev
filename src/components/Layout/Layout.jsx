import { Container } from 'components/App.styled';
import { AppBar } from 'components/AppBar/AppBar';
import { Header, Footer, MainContent } from './Layout.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';

const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <AppBar />
        </Container>
      </Header>
      <MainContent>
        <Container>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </MainContent>
      <Footer>
        <Container></Container>
      </Footer>
    </>
  );
};

export default Layout;
