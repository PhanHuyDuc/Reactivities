import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import React from 'react';
import ProfilePhotos from './profilePhotos';
import { observer } from 'mobx-react-lite';
import { Profile } from '../../app/models/profile';

interface Props {
  profile: Profile;
}

function ProfileContent({ profile }: Props) {
  const panes = [
    {
      name: 'About',
    },
    {
      name: 'Photos',
    },
    {
      name: 'Events',
    },
    {
      name: 'Followers',
    },
    {
      name: 'Following',
    },
  ];
  return (
    <>
      <div className="flex w-full">
        <TabGroup className="flex w-full space-x-3">
          <TabPanels className="w-3/4 bg-white">
            {panes.map(({ name }) => (
              <TabPanel key={name} className="rounded-xl bg-white/5 p-3">
                <ul>
                  <ProfilePhotos profile={profile} />
                </ul>
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
