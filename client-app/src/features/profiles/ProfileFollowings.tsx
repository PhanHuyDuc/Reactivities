import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useStore } from '../../app/stores/store';
import { UserIcon } from '@heroicons/react/24/outline';
import ProfileCard from './ProfileCard';
import Loading from '../../ui/Loading';

function ProfileFollowings() {
  const { profileStore } = useStore();
  const { profile, followings, loadFollowings, loadingFollowings } =
    profileStore;
  useEffect(() => {
    loadFollowings('following');
  }, [loadFollowings]);
  return (
    <>
      <div className="flex flex-col">
        <div className="flex items-center">
          <UserIcon className="size-12 text-stone-600" />
          <span className="font-semibold">
            People {profile?.displayName} is following
          </span>
        </div>
        <div className="flex">
          {loadingFollowings ? (
            <Loading />
          ) : (
            followings.map((profile) => (
              <ProfileCard key={profile.username} profile={profile} />
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default observer(ProfileFollowings);
