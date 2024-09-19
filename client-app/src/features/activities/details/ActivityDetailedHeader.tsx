import React from 'react';
import { Activity } from '../../../app/models/activity';
import { observer } from 'mobx-react-lite';
import Button from '../../../ui/Button';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { useStore } from '../../../app/stores/store';
import Loading from '../../../ui/Loading';

interface Props {
  activity: Activity;
}
function ActivityDetailedHeader({ activity }: Props) {
  const {
    activityStore: { updateAttendance, loading, cancelActivityToggle },
  } = useStore();
  return (
    <>
      <div className="bg-white">
        <div className="relative">
          {activity.isCancelled && (
            <div className="absolute z-20 w-full items-center justify-between bg-red-600 text-center sm:w-9/12">
              <label className="text-white">Cancelled</label>
            </div>
          )}
          <div className="w-full">
            <img
              className="object-fill brightness-50"
              src={`/assets/categoryImages/${activity.category}.jpg`}
            />
          </div>
          <div className="absolute bottom-5 left-0 ml-5 flex flex-col text-white">
            <span className="text-3xl font-semibold">{activity.title}</span>
            <span>{format(activity.date!, 'dd MMM yyyy h:mm aa')}</span>
            <span className="pt-2">
              Hosted by{' '}
              <strong>
                <Link to={`/profile/${activity.host?.username}`}>
                  {activity.host?.displayName}
                </Link>
              </strong>
            </span>
          </div>
        </div>
        <div className="flex px-4 py-4">
          <div className="flex-1 items-center justify-between space-x-4 text-start">
            {activity.isHost ? (
              <>
                <button
                  onClick={cancelActivityToggle}
                  className={`inline-flex items-center gap-2 rounded-md ${activity.isCancelled ? 'bg-green-700' : 'bg-red-700'} px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none ${activity.isCancelled ? 'data-[hover]:bg-green-500' : 'data-[hover]:bg-red-500'} data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white`}
                >
                  {activity.isCancelled ? 'Re-activity' : 'Cancel Activity'}
                  {loading ? <Loading /> : null}
                </button>{' '}
                <Button to={`/manage/${activity.id}`} type="event">
                  Manage Event
                </Button>
              </>
            ) : activity.isGoing ? (
              <Button
                type="secondary"
                onClick={updateAttendance}
                disabled={activity.isCancelled}
              >
                {loading ? <Loading /> : 'Cancel attendance'}
              </Button>
            ) : (
              <Button
                disabled={activity.isCancelled}
                type="primary"
                onClick={updateAttendance}
              >
                {loading ? <Loading /> : 'Join Activity'}
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default observer(ActivityDetailedHeader);
