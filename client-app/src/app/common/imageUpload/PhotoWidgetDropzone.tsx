import { ArrowUpTrayIcon } from '@heroicons/react/24/outline';
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

interface Props {
  setFiles: (files: any) => void;
}

function PhotoWidgetDropzone({ setFiles }: Props) {
  const dzStyles = {
    border: 'dashed 3px #eee',
    borderColor: '#eee',
    borderRadius: '5px',
    paddingTop: '30px',
    textAlign: 'center' as const,
    height: '200 px',
  };
  const dzActive = {
    borderColor: 'green',
  };
  const onDrop = useCallback(
    (acceptedFiles: object[]) => {
      setFiles(
        acceptedFiles.map((file: any) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      );
    },
    [setFiles],
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      style={isDragActive ? { ...dzStyles, ...dzActive } : dzStyles}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <div className="flex flex-col items-center justify-between text-center">
          <ArrowUpTrayIcon className="size-20" />
          <p>Drop image here</p>
        </div>
      )}
    </div>
  );
}

export default PhotoWidgetDropzone;
