import { SyntheticEvent, useState } from 'react';
import { Activity } from '../../../app/models/activity';
import { useStore } from '../../../app/stores/store';
import { Link } from 'react-router-dom';
import { ClockIcon, MapPinIcon } from '@heroicons/react/16/solid';
import { format } from 'date-fns';
import ActivityListItemAttendee from './ActivityListItemAttendee';
interface Props {
  activity: Activity;
}

function ActivityListItem({ activity }: Props) {
  const { activityStore } = useStore();
  const { deleteActivity, loading } = activityStore;
  const [target, setTarget] = useState('');

  function handleActivityDelete(
    e: SyntheticEvent<HTMLButtonElement>,
    id: string,
  ) {
    setTarget(e.currentTarget.name);
    deleteActivity(id);
  }

  return (
    <div className="grow gap-4 py-2" key={activity.id}>
      {activity.isCancelled && (
        <div className="items-center justify-between bg-red-600 text-center">
          <label className="text-white">Cancelled</label>
        </div>
      )}
      <div className="flex space-x-4 border-b-2 px-2 py-4">
        <img className="w-16 rounded-full" src="../assets/user.png" />
        <div className="flex flex-col">
          <Link
            to={`/activities/${activity.id}`}
            className="text-xl font-medium hover:font-extrabold"
          >
            {activity.title}
          </Link>
          <span className="text-sm">
            Hosted by {activity.host?.displayName}
          </span>
          {activity.isHost && (
            <span className="text-orange-500">
              You are hosting this activity
            </span>
          )}
          {activity.isGoing && !activity.isHost && (
            <span className="text-green-500">
              You are going to this activity
            </span>
          )}
        </div>
      </div>
      <div className="flex space-x-2 border-b-2 px-2 py-2">
        <div className="flex">
          <ClockIcon className="size-6 text-stone-700" />{' '}
          {format(activity.date!, 'dd MMM yyyy h:mm aa')}
        </div>
        <div className="flex">
          <MapPinIcon className="size-6 text-stone-700" /> {activity.category}
        </div>
      </div>
      <div className="border-2 bg-stone-100 px-2 py-4 font-semibold text-stone-500">
        <ActivityListItemAttendee attendees={activity.attendees!} />
      </div>
      <div className="mx-4 flex items-center justify-between py-3">
        <span>{activity.description}</span>
        <Link
          to={`/activities/${activity.id}`}
          className="inline-flex items-center gap-2 rounded-md bg-cyan-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-cyan-500 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
        >
          View
        </Link>
      </div>
    </div>
  );
}

export default ActivityListItem;
