import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent, useState } from 'react';
import { Photo, Profile } from '../../app/models/profile';
import { PhotoIcon } from '@heroicons/react/20/solid';
import { useStore } from '../../app/stores/store';
import Button from '../../ui/Button';
import PhotoUploadWidget from '../../app/common/imageUpload/PhotoUploadWidget';
import Loading from '../../ui/Loading';
import { TrashIcon } from '@heroicons/react/24/outline';

interface Props {
  profile: Profile;
}

function ProfilePhotos({ profile }: Props) {
  const {
    profileStore: {
      isCurrentUser,
      uploadPhoto,
      uploading,
      loading,
      setMainPhoto,
      deletePhoto,
    },
  } = useStore();
  const [addPhotoMode, setAddPhotoMode] = useState(false);

  const [tartget, setTartget] = useState('');

  function handleSetMainPhoto(
    photo: Photo,
    e: SyntheticEvent<HTMLButtonElement>,
  ) {
    setTartget(e.currentTarget.name);
    setMainPhoto(photo);
  }

  function handlePhotoUpload(file: Blob) {
    uploadPhoto(file).then(() => setAddPhotoMode(false));
  }
  function handleDeletePhoto(
    photo: Photo,
    e: SyntheticEvent<HTMLButtonElement>,
  ) {
    setTartget(e.currentTarget.name);
    deletePhoto(photo);
  }
  return (
    <>
      <div className="flex items-center justify-between py-3 text-center">
        <div className="flex items-center space-x-2">
          <PhotoIcon className="size-8" />
          <span className="font-bold">Photos</span>
        </div>
        {isCurrentUser && (
          <div>
            <Button
              type="secondary"
              onClick={(e) => {
                e.preventDefault();
                setAddPhotoMode(!addPhotoMode);
              }}
            >
              {addPhotoMode ? 'Cancel' : 'Add Photo'}
            </Button>
          </div>
        )}
      </div>
      <div className="flex space-x-3">
        {addPhotoMode ? (
          <div className="flex">
            <PhotoUploadWidget
              uploadPhoto={handlePhotoUpload}
              loading={uploading}
            />
          </div>
        ) : (
          profile.photos?.map((photo) => (
            <div key={photo.id} className="flex-col">
              {' '}
              <img src={photo.url} className="size-28 sm:size-40" />
              {isCurrentUser && (
                <>
                  <button
                    name={'main' + photo.id}
                    disabled={photo.isMain}
                    onClick={(e) => handleSetMainPhoto(photo, e)}
                    className="items-center gap-2 rounded-md bg-green-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none disabled:cursor-not-allowed data-[hover]:bg-green-600 data-[open]:bg-green-700 data-[focus]:outline-1 data-[focus]:outline-white"
                  >
                    {loading && tartget === 'main' + photo.id ? (
                      <Loading />
                    ) : (
                      'Main'
                    )}
                  </button>
                  <button
                    onClick={(e) => handleDeletePhoto(photo, e)}
                    disabled={photo.isMain}
                    name={photo.id}
                    className="items-center gap-2 rounded-md bg-red-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none disabled:cursor-not-allowed data-[hover]:bg-red-600 data-[open]:bg-red-700 data-[focus]:outline-1 data-[focus]:outline-white"
                  >
                    {loading && tartget === photo.id ? (
                      <Loading />
                    ) : (
                      <TrashIcon className="size-5 text-white" />
                    )}
                  </button>
                </>
              )}
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default observer(ProfilePhotos);
