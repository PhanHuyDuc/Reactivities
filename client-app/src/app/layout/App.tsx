import { observer } from 'mobx-react-lite';
import NavBar from './NavBar';
import { Outlet, useLocation } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import { ToastContainer } from 'react-toastify';

function App() {
  const location = useLocation();
  return (
    <>
      <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
      {location.pathname === '/' ? (
        <HomePage />
      ) : (
        <>
          <div className="overflow-auto bg-stone-100">
            <NavBar />
            <main className="mx-auto max-w-7xl">
              <Outlet />
            </main>
          </div>
        </>
      )}
    </>
  );
}

export default observer(App);
