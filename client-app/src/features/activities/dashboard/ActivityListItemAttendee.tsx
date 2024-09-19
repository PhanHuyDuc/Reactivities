import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { Profile } from '../../../app/models/profile';
import { Link } from 'react-router-dom';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import ProfileCard from '../../profiles/ProfileCard';
interface Props {
  attendees: Profile[];
}
function ActivityListItemAttendee({ attendees }: Props) {
  return (
    <div className="space-x-3">
      <ul className="flex space-x-3">
        {attendees.map((attendee) => (
          <Popover className="relative" key={attendee.username}>
            <PopoverButton className="block text-sm/6 font-semibold text-white/50 focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white">
              <li>
                <img
                  className="size-12 rounded-full"
                  src={attendee.image || `/assets/user.png`}
                />
              </li>
            </PopoverButton>
            <PopoverPanel
              transition
              anchor="top start"
              className="absolute divide-y divide-white/5 rounded-xl bg-white/5 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
            >
              <div className="p-3">
                <ProfileCard profile={attendee} />
              </div>
            </PopoverPanel>
          </Popover>
        ))}
      </ul>
    </div>
  );
}

export default observer(ActivityListItemAttendee);
