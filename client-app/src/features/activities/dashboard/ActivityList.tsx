import { SyntheticEvent, useState } from 'react';
import Button from '../../../ui/Button';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';

function ActivityList() {
  const { activityStore } = useStore();
  const { deleteActivity, activitiesByDate, loading } = activityStore;
  const [target, setTarget] = useState('');

  function handleActivityDelete(
    e: SyntheticEvent<HTMLButtonElement>,
    id: string,
  ) {
    setTarget(e.currentTarget.name);
    deleteActivity(id);
  }

  return (
    <>
      <ul className="divide-y divide-stone-200 px-2">
        {activitiesByDate.map((activity) => (
          <li className="flex gap-4 py-2" key={activity.id}>
            <div className="flex grow flex-col pt-0.5">
              <p className="font-medium">{activity.title}</p>
              <p className="text-sm capitalize italic text-stone-500">
                {/* {ingredients.join(', ')} */}
                {activity.date}
              </p>
              <div className="mt-auto flex items-center justify-between">
                <p className="font-medium uppercase text-stone-500">
                  {activity.description}
                </p>
              </div>
              <p className="font-medium uppercase text-stone-500">
                {activity.city}, {activity.venue}
              </p>
              <div className="mt-auto flex items-center justify-between">
                <Button type="cate">{activity.category}</Button>
                <div className="space-x-1">
                  <button
                    className="inline-block rounded-md bg-red-500 px-1 py-2 text-xs font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-red-300 focus:bg-red-300 focus:outline-none focus:ring focus:ring-red-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-5 sm:py-2.5"
                    onClick={(e) => handleActivityDelete(e, activity.id)}
                    name={activity.id}
                  >
                    {' '}
                    {loading && target === activity.id ? `Deleting` : `Delete`}
                  </button>
                  <Button to={`/activities/${activity.id}`} type="small">
                    View
                  </Button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default observer(ActivityList);
