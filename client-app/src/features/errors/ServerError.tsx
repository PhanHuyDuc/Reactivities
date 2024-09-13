import React from 'react';
import { useStore } from '../../app/stores/store';
import { observer } from 'mobx-react-lite';

function ServerError() {
  const { commonStore } = useStore();
  return (
    <>
      <div>
        <h1 className="text-4xl font-bold">Server Error</h1>
        <h5 className="py-4 font-semibold text-red-600">
          {commonStore.error?.message}
        </h5>
        <div className="bg-white">
          {commonStore.error?.details && (
            <>
              <div className="space-y-4 px-3">
                <h4 className="py-4 font-bold text-green-700">Stack tracke</h4>
                <code className="">{commonStore.error.details}</code>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default observer(ServerError);
