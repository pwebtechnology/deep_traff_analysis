import { Outlet } from 'react-router-dom';

import { Footer } from './pages/shared/components/Footer';
import { Header } from './pages/shared/components/Header';

import './assets/styles/index.scss';

export const Layout = () => {
  return (
    <>
      <Header />
      <main className='App__main'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
