import { FunnelIcon } from '@heroicons/react/20/solid';
import { observer } from 'mobx-react-lite';
import Calendar from 'react-calendar';

function ActivityFilter() {
  return (
    <>
      <div className="divide-y divide-stone-300 bg-white px-3">
        <div className="flex gap-3 py-3">
          <div>
            <FunnelIcon className="size-8 text-cyan-500" />
          </div>
          <span className="text-lg font-semibold text-cyan-500">Filters</span>
        </div>
        <div className="py-3 text-lg font-semibold">
          <span>All Activities</span>
        </div>
        <div className="py-3 text-lg font-semibold">
          <span>I'm going</span>
        </div>
        <div className="py-3 text-lg font-semibold">
          <span>I'm hosting</span>
        </div>
      </div>
      <div className={`w-full py-4`}>
        <Calendar />
      </div>
    </>
  );
}

export default observer(ActivityFilter);
