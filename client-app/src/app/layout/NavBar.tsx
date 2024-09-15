import SearchOrder from './SearchOrder';
import Logo from '../../../public/assets/logo.png';
import { Link, NavLink, useNavigate, useNavigation } from 'react-router-dom';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import {
  ArchiveBoxXMarkIcon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from '@heroicons/react/16/solid';

function NavBar() {
  const {
    userStore: { user, logout },
  } = useStore();
  return (
    <header className="flex items-center justify-between border-b border-stone-300 bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400 px-4 py-3 uppercase sm:px-6">
      <NavLink to={`/`} className="tracking-widest">
        <img src={Logo} alt="Reactivities" className="h-10 w-10 text-white" />
      </NavLink>
      <NavLink to={`/activities`} className="text-white">
        Activities
      </NavLink>
      <NavLink to={`/errors`} className="text-white">
        Error
      </NavLink>
      <NavLink
        to={`/createActivity`}
        className="inline-block rounded-full bg-green-400 px-4 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors duration-300 hover:bg-green-300 focus:bg-green-300 focus:outline-none focus:ring focus:ring-green-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4"
      >
        Create Activity
      </NavLink>
      <SearchOrder />
      <div className="">
        <Menu>
          <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
            <img src={user?.image || '/assets/user.png'} className="size-6" />
            <span className="uppercase">{user?.username}</span>
            <ChevronDownIcon className="size-4 fill-white/60" />
          </MenuButton>

          <MenuItems
            transition
            anchor="bottom end"
            className="w-52 origin-top-right rounded-xl border border-white/5 bg-gray-800 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
          >
            <MenuItem>
              <Link
                to={`/profile/${user?.username}`}
                className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-white/10"
              >
                <PencilIcon className="size-4 fill-white/30" />
                Profile
                <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                  ⌘E
                </kbd>
              </Link>
            </MenuItem>
            <MenuItem>
              <button
                onClick={logout}
                className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-white/10"
              >
                <Square2StackIcon className="size-4 fill-white/30" />
                Logout
                <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                  ⌘D
                </kbd>
              </button>
            </MenuItem>
            <div className="my-1 h-px bg-white/5" />
          </MenuItems>
        </Menu>
      </div>
    </header>
  );
}

export default observer(NavBar);
