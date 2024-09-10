import React from 'react';
import { Activity } from '../../../app/models/activity';
import { observer } from 'mobx-react-lite';
import Button from '../../../ui/Button';

interface Props {
  activity: Activity;
}
function ActivityDetailedHeader({ activity }: Props) {
  return (
    <>
      <div className="bg-white">
        <div className="relative">
          <img
            className="brightness-50"
            src={`/assets/categoryImages/${activity.category}.jpg`}
          />
          <div className="absolute bottom-5 left-0 ml-5 flex flex-col text-white">
            <span className="text-3xl font-semibold">{activity.title}</span>
            <span>{activity.date}</span>
            <span className="pt-2">
              Hosted by <strong>Phate</strong>
            </span>
          </div>
        </div>
        <div className="flex px-4 py-4">
          <div className="flex-1 items-center justify-between space-x-4">
            <Button type="primary">Join Activity</Button>
            <Button type="secondary">Cancel attendance</Button>
          </div>
          <Button type="event">Manage Event</Button>
        </div>
      </div>
    </>
  );
}

export default observer(ActivityDetailedHeader);
