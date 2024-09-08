import React from 'react';
import { Activity } from '../../../app/models/activity';
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';

interface Props {
  activities: Activity[];
  selectedActivity: Activity | undefined;
  selectActivity: (id: string) => void;
  cancelSelectActivity: () => void;
  editMode: boolean;
  openForm: (id: string) => void;
  closeForm: () => void;
  createOrEdit: (activity: Activity) => void;
  deleteActivity: (id: string) => void;
  submitting: boolean;
}

function ActivityDashboard({
  activities,
  selectActivity,
  selectedActivity,
  cancelSelectActivity,
  editMode,
  openForm,
  closeForm,
  createOrEdit,
  deleteActivity,
  submitting,
}: Props) {
  return (
    <div className="flex items-start">
      <div className="mx-4 my-10 w-96 flex-auto border bg-white p-2 text-left sm:my-16">
        <h1 className="mb-8 text-center text-2xl font-semibold text-stone-700 md:text-3xl">
          The best Reactivities.
          <br />
          <span className="text-yellow-500">
            Straight out of the oven, straight to you.
          </span>
        </h1>
        <ActivityList
          activities={activities}
          selectActivity={selectActivity}
          deleteActivity={deleteActivity}
          submitting={submitting}
        />
      </div>
      <div className="my-10 w-64 flex-auto space-y-4 sm:my-16">
        {selectedActivity && !editMode && (
          <ActivityDetails
            activity={selectedActivity}
            cancelSelectActivity={cancelSelectActivity}
            openForm={openForm}
            closeForm={closeForm}
          />
        )}
        {editMode && (
          <ActivityForm
            closeForm={closeForm}
            activity={selectedActivity}
            createOrEdit={createOrEdit}
            submitting={submitting}
          />
        )}
      </div>
    </div>
  );
}

export default ActivityDashboard;
