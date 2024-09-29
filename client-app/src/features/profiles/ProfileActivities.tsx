import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you use react-router
import { observer } from 'mobx-react-lite';
import { format } from 'date-fns';
import { UserActivity } from '../../app/models/profile';
import { useStore } from '../../app/stores/store';
import { CalendarIcon } from '@heroicons/react/24/outline';

const panes = [
  { menuItem: 'Future Events', pane: { key: 'future' } },
  { menuItem: 'Past Events', pane: { key: 'past' } },
  { menuItem: 'Hosting', pane: { key: 'hosting' } },
];

const ProfileActivities = observer(() => {
  const { profileStore } = useStore();
  const { loadUserActivities, profile, loadingActivities, userActivities } =
    profileStore;

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    loadUserActivities(profile!.username);
  }, [loadUserActivities, profile]);

  const handleTabChange = (index: number) => {
    setActiveIndex(index);
    loadUserActivities(profile!.username, panes[index].pane.key);
  };

  return (
    <div className={`p-4 ${loadingActivities ? 'animate-pulse' : ''}`}>
      {/* Header */}
      <div className="mb-6">
        <h2 className="flex items-center text-xl font-semibold text-gray-800">
          <span className="material-icons-outlined mr-2">
            <CalendarIcon className="size-12" />
          </span>
          Activities
        </h2>
      </div>

      {/* Tab Menu */}
      <div className="mb-6 flex space-x-4 border-b">
        {panes.map((pane, index) => (
          <button
            key={index}
            className={`px-4 py-2 ${
              activeIndex === index
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'border-b-2 border-transparent text-gray-600 hover:border-blue-400'
            }`}
            onClick={() => handleTabChange(index)}
          >
            {pane.menuItem}
          </button>
        ))}
      </div>

      {/* Activities Grid */}
      {loadingActivities ? (
        <div className="py-6 text-center">Loading Activities...</div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {userActivities.map((activity: UserActivity) => (
            <Link
              to={`/activities/${activity.id}`}
              key={activity.id}
              className="block overflow-hidden rounded-lg bg-white shadow transition-shadow hover:shadow-md"
            >
              <img
                src={`/assets/categoryImages/${activity.category}.jpg`}
                alt={activity.title}
                className="h-32 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-center font-bold text-gray-700">
                  {activity.title}
                </h3>
                <p className="text-center text-sm text-gray-500">
                  {format(new Date(activity.date), 'do LLL')}
                </p>
                <p className="text-center text-sm text-gray-500">
                  {format(new Date(activity.date), 'h:mm a')}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
});

export default ProfileActivities;
