import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import ActivityListItem from './ActivityListItem';

function ActivityList() {
  const { activityStore } = useStore();
  const { groupedActivities } = activityStore;

  return (
    <>
      {groupedActivities.map(([group, activities]) => (
        <div key={group} className="my-8">
          <div className="divide-y divide-stone-300 border-b font-semibold">
            <span className="text-cyan-600">{group}</span>
          </div>
          <div className="bg-white">
            <ul className="divide-y divide-stone-300">
              {activities.map((activity) => (
                <ActivityListItem activity={activity} key={activity.id} />
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
}

export default observer(ActivityList);
