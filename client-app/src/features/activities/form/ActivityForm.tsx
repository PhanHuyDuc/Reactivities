import React, { ChangeEvent, useState } from 'react';
import Button from '../../../ui/Button';
import { Activity } from '../../../app/models/activity';

interface Props {
  activity: Activity | undefined;
  closeForm: () => void;
  createOrEdit: (activity: Activity) => void;
  submitting: boolean;
}
function ActivityForm({
  closeForm,
  activity: selectedActivity,
  createOrEdit,
  submitting,
}: Props) {
  const initialState = selectedActivity ?? {
    id: '',
    title: '',
    category: '',
    description: '',
    date: '',
    city: '',
    venue: '',
  };
  const [activity, setActivity] = useState(initialState);

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  }
  function handleSubmit() {
    createOrEdit(activity);
  }
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      {' '}
      <div className="border bg-white p-2">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          {/* <label className="sm:basis-40">Title</label> */}
          <input
            className="h-10 grow border p-2"
            type="text"
            name="title"
            placeholder="title"
            value={activity.title}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          {/* <label className="sm:basis-40">Description</label> */}
          <div className="grow border">
            <textarea
              name="description"
              placeholder="Description"
              className="h-10 w-full grow p-2"
              value={activity.description}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          {/* <label className="sm:basis-40">Category</label> */}
          <input
            className="h-10 grow border p-2"
            type="text"
            name="category"
            placeholder="Category"
            value={activity.category}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          {/* <label className="sm:basis-40">Date</label> */}
          <input
            className="h-10 grow border p-2"
            type="date"
            name="date"
            placeholder="Date"
            value={activity.date}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          {/* <label className="sm:basis-40">City</label> */}
          <input
            className="h-10 grow border p-2"
            type="text"
            name="city"
            placeholder="City"
            value={activity.city}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          {/* <label className="sm:basis-40">Venue</label> */}
          <input
            className="h-10 grow border p-2"
            type="text"
            name="venue"
            placeholder="Venue"
            value={activity.venue}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="flex flex-col justify-end sm:flex-row sm:items-center">
          <div className="z-50 items-center justify-between space-x-2 text-center sm:top-0 md:top-1">
            <Button
              type="secondary"
              onClick={(e) => {
                e.preventDefault();
                closeForm();
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              type="primary"
            >
              {submitting ? `Loading` : `Submit`}
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ActivityForm;
