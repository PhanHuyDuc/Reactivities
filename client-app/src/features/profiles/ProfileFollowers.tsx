import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useStore } from '../../app/stores/store';
import { UserIcon } from '@heroicons/react/24/outline';
import ProfileCard from './ProfileCard';
import Loading from '../../ui/Loading';

function ProfileFollowers() {
  const { profileStore } = useStore();
  const { profile, followers, loadFollowers, loadingFollowers } = profileStore;
  useEffect(() => {
    loadFollowers('followers');
  }, [loadFollowers]);
  return (
    <>
      <div className="flex flex-col">
        <div className="flex items-center">
          <UserIcon className="size-12 text-stone-600" />
          <span className="font-semibold">
            People following {profile?.displayName}
          </span>
        </div>
        <div className="flex">
          {loadingFollowers ? (
            <Loading />
          ) : (
            followers.map((profile) => (
              <ProfileCard key={profile.username} profile={profile} />
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default observer(ProfileFollowers);
