import { useStore } from '../stores/store';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

function RequireAuth() {
  const {
    userStore: { isLoggedIn },
  } = useStore();
  const location = useLocation();
  if (!isLoggedIn)
    return <Navigate to={`/`} state={{ from: location }}></Navigate>;
  return <Outlet />;
}

export default RequireAuth;
