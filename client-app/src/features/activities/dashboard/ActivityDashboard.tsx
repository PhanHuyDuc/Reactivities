import ActivityList from './ActivityList';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../app/stores/store';
import { useEffect, useState } from 'react';
import Loader from '../../../ui/Loader';
import ActivityFilter from './ActivityFilter';
import { PagingParams } from '../../../app/models/pagination';
import Loading from '../../../ui/Loading';
import InfiniteScroll from 'react-infinite-scroller';

function ActivityDashboard() {
  const { activityStore } = useStore();
  const { loadActivities, activityRegistry, setPagingParams, pagination } =
    activityStore;
  const [loadingNext, setLoadingNext] = useState(false);
  function handleGetNext() {
    setLoadingNext(true);
    setPagingParams(new PagingParams(pagination!.currentPage + 1));
    loadActivities().then(() => setLoadingNext(false));
  }
  useEffect(() => {
    if (activityRegistry.size === 0) loadActivities();
  }, [activityRegistry.size, loadActivities]);

  if (
    activityStore.loadingInitial &&
    activityRegistry.size === 0 &&
    !loadingNext
  )
    return <Loader />;
  return (
    <div className="flex min-h-dvh items-start justify-between text-center">
      <div className="mx-2 my-10 w-[768px] flex-auto p-2 text-left sm:my-16">
        <h1 className="mb-8 text-center text-2xl font-semibold text-stone-700 md:text-3xl">
          <br />
          <span className="text-yellow-500">
            Straight out of the oven, straight to you.
          </span>
        </h1>
        <InfiniteScroll
          pageStart={0}
          loadMore={handleGetNext}
          hasMore={
            !loadingNext &&
            !!pagination &&
            pagination.currentPage < pagination.totalPages
          }
          initialLoad={false}
        >
          <ActivityList />
        </InfiniteScroll>
        {loadingNext && <div className="py-6 text-center">Loading...</div>}
      </div>
      <div className="mx-2 mt-56 w-96 flex-auto p-2 text-left sm:mt-48">
        <ActivityFilter />
      </div>
    </div>
  );
}

export default observer(ActivityDashboard);
