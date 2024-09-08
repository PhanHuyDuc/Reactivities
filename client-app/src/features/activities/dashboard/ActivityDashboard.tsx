import ActivityList from './ActivityList';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../app/stores/store';
import { useEffect } from 'react';
import Loader from '../../../ui/Loader';

function ActivityDashboard() {
  const { activityStore } = useStore();
  const { loadActivities, activityRegistry } = activityStore;
  useEffect(() => {
    if (activityRegistry.size === 0) loadActivities();
  }, [activityRegistry.size, loadActivities]);

  if (activityStore.loadingInitial) return <Loader />;
  return (
    <div className="min-h-dvh items-start justify-between text-center">
      <div className="mx-2 my-10 flex-auto border bg-white p-2 text-left sm:my-16">
        <h1 className="mb-8 text-center text-2xl font-semibold text-stone-700 md:text-3xl">
          <br />
          <span className="text-yellow-500">
            Straight out of the oven, straight to you.
          </span>
        </h1>

        <ActivityList />
      </div>
    </div>
  );
}

export default observer(ActivityDashboard);
