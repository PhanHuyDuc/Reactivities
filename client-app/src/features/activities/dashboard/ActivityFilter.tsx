import { FunnelIcon } from '@heroicons/react/20/solid';
import { observer } from 'mobx-react-lite';
import Calendar from 'react-calendar';
import { useStore } from '../../../app/stores/store';

function ActivityFilter() {
  const {
    activityStore: { predicate, setPredicate },
  } = useStore();
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
          <span
            onClick={() => setPredicate('all', 'true')}
            className={`cursor-pointer ${predicate.has('all') ? 'bg-stone-500' : ''}`}
          >
            All Activities
          </span>
        </div>
        <div className="py-3 text-lg font-semibold">
          <span
            onClick={() => setPredicate('isGoing', 'true')}
            className={`cursor-pointer ${predicate.has('isGoing') ? 'bg-stone-500' : ''}`}
          >
            I'm going
          </span>
        </div>
        <div className="py-3 text-lg font-semibold">
          <span
            onClick={() => setPredicate('isHost', 'true')}
            className={`cursor-pointer ${predicate.has('isHost') ? 'bg-stone-500' : ''}`}
          >
            I'm hosting
          </span>
        </div>
      </div>
      <div className={`w-full py-4`}>
        <Calendar
          onChange={(date) => setPredicate('startDate', date as Date)}
          value={predicate.get('startDate') || new Date()}
        />
      </div>
    </>
  );
}

export default observer(ActivityFilter);
