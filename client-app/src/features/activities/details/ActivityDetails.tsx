import Button from '../../../ui/Button';
import { useStore } from '../../../app/stores/store';
import Loader from '../../../ui/Loader';

function ActivityDetails() {
  const { activityStore } = useStore();
  const {
    selectedActivity: activity,
    openForm,
    cancelSelectedActivity,
  } = activityStore;
  if (!activity) return <Loader />;
  return (
    <div className="border bg-white p-2 text-left">
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
        <Button
          type="secondary"
          onClick={() => {
            cancelSelectedActivity();
          }}
        >
          Cancel
        </Button>
        <Button
          type="primary"
          onClick={(e) => {
            e.preventDefault();
            openForm(activity.id);
          }}
        >
          Edit
        </Button>
      </div>
    </div>
  );
}

export default ActivityDetails;
