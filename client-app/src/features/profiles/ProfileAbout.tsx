import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { useStore } from '../../app/stores/store';
import Button from '../../ui/Button';
import ProfileEditForm from './ProfileEditForm';

function ProfileAbout() {
  const { profileStore } = useStore();
  const { isCurrentUser, profile } = profileStore;
  const [editMode, setEditMode] = useState(false);
  return (
    <>
      <div className="space-y-3">
        <div className="flex w-full items-center justify-between text-center">
          <div>About {profile?.displayName}</div>
          <div>
            {isCurrentUser && (
              <Button type="primary" onClick={() => setEditMode(!editMode)}>
                {editMode ? 'Cancel' : 'Edit'}
              </Button>
            )}
          </div>
        </div>
        <div className="w-full items-center justify-between text-center">
          {editMode ? (
            <ProfileEditForm setEditMode={setEditMode} />
          ) : (
            <span className="whitespace-pre-wrap text-justify">
              {profile?.bio}
            </span>
          )}
        </div>
      </div>
    </>
  );
}

export default observer(ProfileAbout);
