import React from 'react';
import SearchOrder from './SearchOrder';
import Logo from '../../../public/assets/logo.png';
import { useStore } from '../stores/store';

function NavBar() {
  const { activityStore } = useStore();
  return (
    <header className="flex items-center justify-between border-b border-stone-300 bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400 px-4 py-3 uppercase sm:px-6">
      <div className="tracking-widest">
        <img src={Logo} alt="Reactivities" className="h-6 w-6 text-white" />
      </div>
      <a className="text-white">Activities</a>
      <button
        onClick={() => activityStore.openForm()}
        className="inline-block rounded-full bg-green-400 px-4 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors duration-300 hover:bg-green-300 focus:bg-green-300 focus:outline-none focus:ring focus:ring-green-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4"
      >
        Create Activity
      </button>
      <SearchOrder />
    </header>
  );
}

export default NavBar;
