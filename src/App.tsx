import { Header } from './components/Header/Header';
import './App.scss';
import { Footer } from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <div className="App">
      <Header />

      <main className='App__main'>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default App;
