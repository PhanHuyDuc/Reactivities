import { ChatBubbleLeftIcon } from '@heroicons/react/16/solid';
import { observer } from 'mobx-react-lite';

function ActivityDetailedSidebar() {
  return (
    <>
      <div className="bg-white">
        <div className="items-center bg-cyan-500 p-4 text-center font-semibold text-white">
          3 people going
        </div>
        <div className="relative">
          <div className="absolute right-16 py-3 font-bold text-white">
            <div className="absolute">
              <ChatBubbleLeftIcon className="size-16 text-orange-600" />
            </div>
            <div className="absolute z-50 ml-3 mt-3">Host</div>
          </div>
          <div className="relative divide-y divide-stone-300">
            <div className="flex space-x-3 px-3 py-4">
              <div className="size-24">
                <img src="../assets/user.png" className="flex rounded-md" />
              </div>
              <div className="flex flex-1 flex-col">
                <div className="text-2xl text-cyan-700">
                  <strong>Bao</strong>{' '}
                </div>
                <div className="font-semibold text-yellow-400">Following</div>
              </div>
            </div>
            <div className="flex space-x-3 px-3 py-4">
              <div className="size-24">
                <img src="../assets/user.png" className="flex rounded-md" />
              </div>
              <div className="flex flex-1 flex-col">
                <div className="text-2xl text-cyan-700">
                  <strong>Duc</strong>{' '}
                </div>
                <div className="font-semibold text-yellow-400">Following</div>
              </div>
            </div>
            <div className="flex space-x-3 px-3 py-4">
              <div className="size-24">
                <img src="../assets/user.png" className="flex rounded-md" />
              </div>
              <div className="flex flex-1 flex-col">
                <div className="text-2xl text-cyan-700">
                  <strong>Huy</strong>{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default observer(ActivityDetailedSidebar);
