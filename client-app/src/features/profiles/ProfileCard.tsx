import React from 'react';
import { Profile } from '../../app/models/profile';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { UserCircleIcon } from '@heroicons/react/20/solid';
import FollowButton from './FollowButton';

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
            <div className="w-52 overflow-hidden text-ellipsis whitespace-nowrap">
              <span>{profile.bio}</span>
            </div>
          </div>
          <div className="flex py-2">
            <UserCircleIcon className="size-6 text-blue-600" />
            {profile.followersCount} followers
          </div>
        </div>
        <FollowButton profile={profile} />
      </div>
    </>
  );
}

export default observer(ProfileCard);
