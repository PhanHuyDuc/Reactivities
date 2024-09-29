import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import ProfilePhotos from './ProfilePhotos';
import { observer } from 'mobx-react-lite';
import { Profile } from '../../app/models/profile';
import ProfileAbout from './ProfileAbout';
import ProfileFollowings from './ProfileFollowings';
import ProfileFollowers from './ProfileFollowers';
import ProfileActivities from './ProfileActivities';

interface Props {
  profile: Profile;
}

function ProfileContent({ profile }: Props) {
  const panes = [
    {
      name: 'About',
      content: <ProfileAbout />,
    },
    {
      name: 'Photos',
      content: <ProfilePhotos profile={profile} />,
    },
    {
      name: 'Events',
      content: <ProfileActivities />,
    },
    {
      name: 'Followers',
      content: <ProfileFollowers />,
    },
    {
      name: 'Following',
      content: <ProfileFollowings />,
    },
  ];
  return (
    <>
      <div className="flex w-full">
        <TabGroup className="flex w-full space-x-3">
          <TabPanels className="w-3/4 bg-white">
            {panes.map(({ name, content }) => (
              <TabPanel key={name} className="rounded-xl bg-white/5 p-3">
                <div>{content}</div>
              </TabPanel>
            ))}
          </TabPanels>
          <div className="w-1/4 items-center justify-center bg-white text-center">
            <TabList className="flex w-full flex-col gap-2 divide-y">
              {panes.map(({ name }) => (
                <Tab key={name} className="py-1 text-sm/6 font-semibold">
                  {name}
                </Tab>
              ))}
            </TabList>
          </div>
        </TabGroup>
      </div>
    </>
  );
}

export default observer(ProfileContent);
