import { observer } from 'mobx-react-lite';
import NavBar from './NavBar';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import { ToastContainer } from 'react-toastify';
import { useStore } from '../stores/store';
import { useEffect } from 'react';
import Loader from '../../ui/Loader';
import ModalContainer from '../common/modals/ModalContainer';

function App() {
  const location = useLocation();
  const { commonStore, userStore } = useStore();
  useEffect(() => {
    if (commonStore.token) {
      userStore.getUser().finally(() => commonStore.setAppLoaded());
    } else {
      commonStore.setAppLoaded();
    }
  }, [commonStore, userStore]);

  if (!commonStore.appLoaded) return <Loader />;
  return (
    <>
      <ScrollRestoration />
      <ModalContainer />
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
