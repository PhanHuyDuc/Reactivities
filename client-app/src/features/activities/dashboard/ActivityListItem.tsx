import React, { SyntheticEvent, useState } from 'react';
import Button from '../../../ui/Button';
import { Activity } from '../../../app/models/activity';
import { useStore } from '../../../app/stores/store';
import { Link } from 'react-router-dom';
import { ClockIcon, MapPinIcon } from '@heroicons/react/16/solid';
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
      <div className="flex space-x-4 border-b-2 px-2 py-4">
        <img className="w-16 rounded-full" src="../assets/user.png" />
        <div className="flex flex-col">
          <Link
            to={`/activities/${activity.id}`}
            className="text-xl font-medium hover:font-extrabold"
          >
            {activity.title}
          </Link>
          <span className="text-sm">Hosted by Phate</span>
        </div>
      </div>
      <div className="flex space-x-2 border-b-2 px-2 py-2">
        <div className="flex">
          <ClockIcon className="size-6 text-stone-700" /> {activity.date}
        </div>
        <div className="flex">
          <MapPinIcon className="size-6 text-stone-700" /> {activity.category}
        </div>
      </div>
      <div className="border-2 bg-stone-100 px-2 py-4 font-semibold text-stone-500">
        Attendees go here
      </div>
      <div className="mx-4 flex items-center justify-between py-3">
        <span>{activity.description}</span>
        <Button type="primary" to={`/activities/${activity.id}`}>
          <span className="font-semibold text-white">View</span>
        </Button>
      </div>
    </div>
  );
}

export default ActivityListItem;
