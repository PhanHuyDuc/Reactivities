import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../app/stores/store';

function ActivityDashboard() {
  const { activityStore } = useStore();
  const { editMode, selectedActivity } = activityStore;
  return (
    <div className="flex items-start">
      <div className="mx-4 my-10 w-96 flex-auto border bg-white p-2 text-left sm:my-16">
        <h1 className="mb-8 text-center text-2xl font-semibold text-stone-700 md:text-3xl">
          <br />
          <span className="text-yellow-500">
            Straight out of the oven, straight to you.
          </span>
        </h1>

        <ActivityList />
      </div>
      <div className="my-10 w-64 flex-auto space-y-4 sm:my-16">
        {selectedActivity && !editMode && <ActivityDetails />}
        {editMode && <ActivityForm />}
      </div>
    </div>
  );
}

export default observer(ActivityDashboard);
