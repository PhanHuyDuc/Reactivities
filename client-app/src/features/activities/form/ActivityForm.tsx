import { ChangeEvent, useEffect, useState } from 'react';
import Button from '../../../ui/Button';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import { useNavigate, useParams } from 'react-router-dom';
import { Activity } from '../../../app/models/activity';
import Loader from '../../../ui/Loader';
import { v4 as uuid } from 'uuid';

function ActivityForm() {
  const { activityStore } = useStore();
  const navigate = useNavigate();
  const {
    createActivity,
    updateActivity,
    loading,
    loadActivity,
    loadingInitial,
  } = activityStore;

  const { id } = useParams();

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  }
  function handleSubmit() {
    if (!activity.id) {
      activity.id = uuid();
      createActivity(activity).then(() =>
        navigate(`/activities/${activity.id}`),
      );
    } else {
      updateActivity(activity).then(() =>
        navigate(`/activities/${activity.id}`),
      );
    }
  }
  const [activity, setActivity] = useState<Activity>({
    id: '',
    title: '',
    category: '',
    description: '',
    date: '',
    city: '',
    venue: '',
  });
  useEffect(() => {
    if (id) loadActivity(id).then((activity) => setActivity(activity!));
  }, [id, loadActivity]);

  if (loadingInitial) return <Loader />;

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      {' '}
      <div className="min-h-dvh border bg-white p-2">
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
            <Button to="/activities" type="secondary">
              Cancel
            </Button>
            <Button
              onClick={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              type="primary"
            >
              {loading ? `Loading` : `Submit`}
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default observer(ActivityForm);
