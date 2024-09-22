import { Button } from '@headlessui/react';
import React, { useState } from 'react';
import { Profile } from '../../app/models/profile';
import { observer } from 'mobx-react-lite';
interface Props {
  profile: Profile;
}
function ProfileHeader({ profile }: Props) {
  const [follow, setFollow] = useState(false);
  function handleClickFollow() {
    setFollow((prevFollow) => !prevFollow); // Toggle between true and false
  }

  return (
    <>
      <div className="flex items-center justify-between border-2 bg-white text-center">
        <div className="flex items-center justify-center space-x-3 px-3 text-center">
          <div className="">
            <img
              className="size-20 rounded-full"
              src={profile.image || '../assets/user.png'}
            />
          </div>
          <div className="font-bold">{profile.displayName}</div>
        </div>
        <div className="px-3">
          <div className="flex space-x-4 border-b-2 font-bold uppercase">
            <div className="">
              <div className="text-4xl">5</div>
              <div>followers</div>
            </div>
            <div>
              <div className="text-4xl">42</div>
              <div>following</div>
            </div>
          </div>
          <div className="py-3">
            <Button
              className={`w-full items-center gap-2 rounded-md transition ${follow ? '[hover]:bg-cyan-600 bg-cyan-500 data-[open]:bg-cyan-600' : '[hover]:bg-red-600 bg-red-500 data-[open]:bg-red-600'} data- px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white`}
              onClick={handleClickFollow}
            >
              <span className="text-center">
                {' '}
                {follow ? 'Following' : 'UnFollow'}
              </span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default observer(ProfileHeader);
