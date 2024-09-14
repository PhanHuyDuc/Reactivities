import React from 'react';
import { Activity } from '../../../app/models/activity';
import { observer } from 'mobx-react-lite';
import { InformationCircleIcon } from '@heroicons/react/16/solid';
import { CalendarDateRangeIcon } from '@heroicons/react/24/outline';
import { MapPinIcon } from '@heroicons/react/20/solid';
import { format } from 'date-fns';

interface Props {
  activity: Activity;
}
function ActivityDetailedInfo({ activity }: Props) {
  return (
    <>
      <div className="mt-5 divide-y divide-stone-300 bg-white">
        <div className="flex space-x-4 px-3 py-4">
          <div>
            {' '}
            <InformationCircleIcon className="size-6 text-green-500" />
          </div>
          <div> {activity.description}</div>
        </div>
        <div className="flex space-x-4 px-3 py-4">
          <div>
            {' '}
            <CalendarDateRangeIcon className="size-6 text-green-500" />{' '}
          </div>
          <div> {format(activity.date!, 'dd MMM yyyy h:mm aa')}</div>
        </div>
        <div className="flex space-x-4 px-3 py-4">
          <div>
            <MapPinIcon className="size-6 text-green-500" />
          </div>
          <div>
            {activity.venue}, {activity.city}
          </div>
        </div>
      </div>
    </>
  );
}

export default observer(ActivityDetailedInfo);
