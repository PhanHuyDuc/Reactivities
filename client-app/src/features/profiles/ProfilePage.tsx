import React, { useEffect } from 'react';
import ProfileHeader from './ProfileHeader';
import ProfileContent from './ProfileContent';
import { useParams } from 'react-router-dom';
import { useStore } from '../../app/stores/store';
import Loader from '../../ui/Loader';
import { observer } from 'mobx-react-lite';

function ProfilePage() {
  const { username } = useParams<{ username: string }>();
  const { profileStore } = useStore();
  const { loadingProfile, loadProfile, profile } = profileStore;

  useEffect(() => {
    if (username) loadProfile(username);
  }, [loadProfile, username]);
  if (loadingProfile) return <Loader />;
  return (
    <div className="my-4 h-screen space-y-4 border-2">
      {profile && (
        <>
          <ProfileHeader profile={profile} />
          <ProfileContent profile={profile} />
        </>
      )}
    </div>
  );
}

export default observer(ProfilePage);
