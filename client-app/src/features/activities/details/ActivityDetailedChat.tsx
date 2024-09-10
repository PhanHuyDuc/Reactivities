import { observer } from 'mobx-react-lite';
import React from 'react';
import Button from '../../../ui/Button';
import { PencilSquareIcon } from '@heroicons/react/24/outline';

function ActivityDetailedChat() {
  return (
    <>
      <div className="mt-5 bg-white">
        <div className="bg-cyan-500 py-4 text-center font-bold text-white">
          Chat about this event
        </div>
        <div className="flex space-x-3 px-3 py-4">
          <div className="size-16">
            <img src="../assets/user.png" className="flex rounded-md" />
          </div>
          <div className="flex flex-1 flex-col">
            <div>
              <strong>Matt</strong>{' '}
              <span className="text-stone-400">Today at 22:00</span>
            </div>
            <div>How artistic!</div>
            <div className="py-2 text-sm font-semibold text-stone-500">
              Reply
            </div>
          </div>
        </div>
        <div className="flex space-x-3 px-3 py-4">
          <div className="size-16">
            <img src="../assets/user.png" className="flex rounded-md" />
          </div>
          <div className="flex flex-1 flex-col">
            <div>
              <strong>Matt</strong>{' '}
              <span className="text-stone-400">Today at 22:00</span>
            </div>
            <div>How artistic!</div>
            <div className="py-2 text-sm font-semibold text-stone-500">
              Reply
            </div>
          </div>
        </div>
        <form className="px-3">
          <textarea className="mb-2 h-52 w-full border p-2"></textarea>

          <Button type="primary">
            <div className="flex items-center justify-between text-center">
              <div>
                <PencilSquareIcon className="size-6 text-white" />
              </div>
              <span className="text-lg font-semibold text-white">
                {' '}
                Add Reply
              </span>
            </div>
          </Button>
        </form>
      </div>
    </>
  );
}

export default observer(ActivityDetailedChat);
