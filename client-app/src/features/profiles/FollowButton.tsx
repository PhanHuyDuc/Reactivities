import React, { SyntheticEvent } from 'react';
import { Profile } from '../../app/models/profile';
import { observer } from 'mobx-react-lite';
import { Button } from '@headlessui/react';
import { useStore } from '../../app/stores/store';
import Loading from '../../ui/Loading';

interface Props {
  profile: Profile;
}

function FollowButton({ profile }: Props) {
  const { profileStore, userStore } = useStore();
  const { updateFollowing, loading } = profileStore;
  if (userStore.user?.username === profile.username) return null;
  function handleFollow(e: SyntheticEvent, username: string) {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    profile.following
      ? updateFollowing(username, false)
      : updateFollowing(username, true);
  }
  return (
    <Button
      disabled={loading}
      className={`w-full items-center gap-2 rounded-md transition ${profile.following ? '[hover]:bg-cyan-600 bg-cyan-500 data-[open]:bg-cyan-600' : '[hover]:bg-red-600 bg-red-500 data-[open]:bg-red-600'} data- px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none disabled:cursor-not-allowed data-[focus]:outline-1 data-[focus]:outline-white`}
      onClick={(e) => handleFollow(e, profile.username)}
    >
      <span className="text-center">
        {' '}
        {loading ? 'loading...' : profile.following ? 'Following' : 'UnFollow'}
      </span>
    </Button>
  );
}

export default observer(FollowButton);
