import React, { useEffect, useState } from 'react';
import PhotoWidgetDropzone from './PhotoWidgetDropzone';
import PhotoWidgetCropper from './PhotoWidgetCropper';
import Button from '../../../ui/Button';
import { CheckBadgeIcon, CheckIcon } from '@heroicons/react/20/solid';
import { CursorArrowRaysIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Loading from '../../../ui/Loading';

interface Props {
  loading: boolean;
  uploadPhoto: (file: Blob) => void;
}

function PhotoUploadWidget({ loading, uploadPhoto }: Props) {
  const [files, setFiles] = useState<any>([]);
  const [cropper, setCropper] = useState<Cropper>();
  function onCrop() {
    if (cropper) {
      cropper.getCroppedCanvas().toBlob((blob) => uploadPhoto(blob!));
    }
  }
  useEffect(() => {
    return () =>
      files.forEach((file: object & { preview?: string }) =>
        URL.revokeObjectURL(file.preview!),
      );
  }, [files]);
  return (
    <>
      <div className="flex w-full items-center justify-between space-x-3 p-2 text-center text-sm font-semibold text-cyan-500">
        <div>
          <p>Step 1 - Add Photo</p> <PhotoWidgetDropzone setFiles={setFiles} />
        </div>
        <div>
          <p>Step 2 - Resize image</p>
          {files && files.length > 0 && (
            <PhotoWidgetCropper
              setCropper={setCropper}
              imagePreview={files[0].preview}
            />
          )}
        </div>
        <div className="">
          <p>Step 3 - Preview & Upload</p>{' '}
          {files && files.length > 0 && (
            <>
              <div className="img-preview h-52 overflow-hidden" />
              <Button onClick={onCrop} type="primary">
                {loading ? (
                  <Loading />
                ) : (
                  <CheckIcon className="size-6 text-white" />
                )}
              </Button>
              <Button
                disabled={loading}
                onClick={() => setFiles([])}
                type="secondary"
              >
                <XMarkIcon className="size-6 text-white" />
              </Button>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default PhotoUploadWidget;
