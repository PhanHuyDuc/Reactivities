import Button from '../../../ui/Button';
import { useStore } from '../../../app/stores/store';
import Loader from '../../../ui/Loader';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

function ActivityDetails() {
  const { activityStore } = useStore();
  const {
    selectedActivity: activity,
    loadActivity,
    loadingInitial,
  } = activityStore;
  const { id } = useParams();

  useEffect(() => {
    if (id) loadActivity(id);
  }, [id, loadActivity]);

  if (loadingInitial || !activity) return <Loader />;
  return (
    <div className="min-h-dvh border bg-white p-2 text-left">
      <img
        className="px-4 py-2"
        src={`/assets/categoryImages/${activity.category}.jpg`}
        alt={activity.title}
      />
      <div className="border-b">
        <h1 className="font-semibold">{activity.title}</h1>
        <span className="text-[11px] text-stone-400 sm:text-sm">
          {activity.date}
        </span>
        <p className="text-[12px] text-stone-700 sm:text-sm">
          {activity.description}
        </p>
      </div>

      <div className="flex justify-end space-x-2 py-2">
        <Button to="/activities" type="secondary">
          Cancel
        </Button>
        <Button to={`/manage/${activity.id}`} type="primary">
          Edit
        </Button>
      </div>
    </div>
  );
}

export default observer(ActivityDetails);
