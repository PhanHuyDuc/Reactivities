import { observer } from 'mobx-react-lite';
import NavBar from './NavBar';
import { Outlet, useLocation } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname === '/' ? (
        <HomePage />
      ) : (
        <>
          <div className="overflow-auto bg-stone-100">
            <NavBar />
            <main className="mx-auto max-w-5xl">
              <Outlet />
            </main>
          </div>
        </>
      )}
    </>
  );
}

export default observer(App);
