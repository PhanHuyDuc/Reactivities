import Button from '../../../ui/Button';
import { useStore } from '../../../app/stores/store';
import Loader from '../../../ui/Loader';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import ActivityDetailedHeader from './ActivityDetailedHeader';
import ActivityDetailedInfo from './ActivityDetailedInfo';
import ActivityDetailedChat from './ActivityDetailedChat';
import ActivityDetailedSidebar from './ActivityDetailedSidebar';

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
    <div className="grid min-h-dvh grid-cols-3 gap-4 py-4">
      <div className="col-span-2">
        <ActivityDetailedHeader activity={activity} />
        <ActivityDetailedInfo activity={activity} />
        <ActivityDetailedChat />
      </div>
      <div>
        <ActivityDetailedSidebar activity={activity} />
      </div>
    </div>
  );
}

export default observer(ActivityDetails);
