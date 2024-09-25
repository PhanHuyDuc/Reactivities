import { ChatBubbleLeftIcon } from '@heroicons/react/16/solid';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { Activity } from '../../../app/models/activity';

interface Props {
  activity: Activity;
}
function ActivityDetailedSidebar({ activity: { attendees, host } }: Props) {
  if (!attendees) return null;
  return (
    <>
      <div className="bg-white">
        <div className="items-center bg-cyan-500 p-4 text-center font-semibold text-white">
          {attendees.length} {attendees.length === 1 ? 'Person' : 'People'}{' '}
          going
        </div>
        {attendees.map((attendee) => (
          <div className="relative" key={attendee.username}>
            {attendee.username === host?.username && (
              <div className="absolute right-16 py-3 font-bold text-white">
                <div className="absolute">
                  <span className="absolute ml-3 mt-3">Host</span>
                  <ChatBubbleLeftIcon className="size-16 text-orange-600" />
                </div>
              </div>
            )}
            <div className="divide-y divide-stone-300">
              <div className="flex space-x-3 px-3 py-4">
                <div className="size-24 items-end justify-end text-right">
                  <img
                    src={attendee.image || '../assets/user.png'}
                    className="flex rounded-md"
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <Link
                    to={`/profiles/${attendee.username}`}
                    className="text-2xl text-cyan-700"
                  >
                    <strong>{attendee.displayName}</strong>{' '}
                  </Link>
                  {attendee.following && (
                    <div className="font-semibold text-yellow-400">
                      Following
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default observer(ActivityDetailedSidebar);
