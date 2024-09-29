import { Profile } from '../../app/models/profile';
import { observer } from 'mobx-react-lite';
import FollowButton from './FollowButton';
interface Props {
  profile: Profile;
}
function ProfileHeader({ profile }: Props) {
  return (
    <>
      <div className="flex items-center justify-between border-2 bg-white text-center">
        <div className="flex items-center justify-center space-x-3 px-3 text-center">
          <div className="">
            <img
              className="size-20 rounded-full"
              src={profile.image || '../assets/user.png'}
            />
          </div>
          <div className="font-bold">{profile.displayName}</div>
        </div>
        <div className="px-3">
          <div className="flex space-x-4 border-b-2 font-bold uppercase">
            <div className="">
              <div className="text-4xl">{profile.followersCount}</div>
              <div>followers</div>
            </div>
            <div>
              <div className="text-4xl">{profile.followingCount}</div>
              <div>following</div>
            </div>
          </div>
          <div className="py-3">
            <FollowButton profile={profile} />
          </div>
        </div>
      </div>
    </>
  );
}

export default observer(ProfileHeader);
