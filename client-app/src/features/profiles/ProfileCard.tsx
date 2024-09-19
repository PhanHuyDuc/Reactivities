import React from 'react';
import { Profile } from '../../app/models/profile';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { UserCircleIcon } from '@heroicons/react/20/solid';

interface Props {
  profile: Profile;
}
function ProfileCard({ profile }: Props) {
  return (
    <>
      <div className="bg-white">
        <div className="bg-stone-100 px-3 py-4">
          <Link to={`/profiles/${profile.username}`}>
            <img
              src={profile.image || '/assets/user.png'}
              className="size-48"
            />
          </Link>
          <div className="border-b">
            <div className="font-bold">{profile.displayName}</div>
            <div>Bio goes here</div>
          </div>
          <div className="flex py-2">
            <UserCircleIcon className="size-6 text-blue-600" />
            20 followers
          </div>
        </div>
      </div>
    </>
  );
}

export default observer(ProfileCard);
