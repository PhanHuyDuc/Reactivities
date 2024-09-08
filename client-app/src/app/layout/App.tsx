import { useEffect } from 'react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import Loader from '../../ui/Loader';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

function App() {
  const { activityStore } = useStore();
  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  if (activityStore.loadingInitial) return <Loader />;
  return (
    <>
      <div className="overflow-auto bg-stone-100">
        <NavBar />
        <main className="mx-auto max-w-5xl">
          <ActivityDashboard />
        </main>
      </div>
    </>
  );
}

export default observer(App);
