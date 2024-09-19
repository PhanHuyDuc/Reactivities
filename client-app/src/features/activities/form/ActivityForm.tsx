import { useEffect, useState } from 'react';
import Button from '../../../ui/Button';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import { useNavigate, useParams } from 'react-router-dom';
import { Activity, ActivityFormValues } from '../../../app/models/activity';
import Loader from '../../../ui/Loader';
import { v4 as uuid } from 'uuid';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../../app/common/form/MyTextInput';
import MyTextArea from '../../../app/common/form/MyTextArea';
import MySelectInput from '../../../app/common/form/MySelectInput';
import { categoryOptions } from '../../../app/common/options/categoryOptions';
import MyDateInput from '../../../app/common/form/MyDateInput';

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

  function handleFormSubmit(activity: ActivityFormValues) {
    if (!activity.id) {
      const newActivity = {
        ...activity,
        id: uuid(),
      };
      activity.id = uuid();
      createActivity(newActivity).then(() =>
        navigate(`/activities/${newActivity.id}`),
      );
    } else {
      updateActivity(activity).then(() =>
        navigate(`/activities/${activity.id}`),
      );
    }
  }
  const [activity, setActivity] = useState<ActivityFormValues>(
    new ActivityFormValues(),
  );

  const validationSchema = Yup.object({
    title: Yup.string().required('The activity title is required'),
    description: Yup.string().required('The activity description is required'),
    category: Yup.string().required('The activity category is required'),
    date: Yup.string().required('The activity date is required'),
    city: Yup.string().required('The activity city is required'),
    venue: Yup.string().required('The activity venue is required'),
  });

  useEffect(() => {
    if (id)
      loadActivity(id).then((activity) =>
        setActivity(new ActivityFormValues(activity)),
      );
  }, [id, loadActivity]);

  if (loadingInitial) return <Loader />;

  return (
    <Formik
      validationSchema={validationSchema}
      enableReinitialize
      initialValues={activity}
      onSubmit={(values) => handleFormSubmit(values)}
    >
      {({ handleSubmit, isSubmitting, dirty, isValid }) => (
        <Form onSubmit={handleSubmit} autoComplete="off">
          {' '}
          <div className="min-h-dvh border bg-white p-2">
            <MyTextInput name="title" placeholder="Title" />
            <MyTextArea name="description" placeholder="Description" />
            <MySelectInput
              options={categoryOptions}
              name="category"
              placeholder="--Choose category--"
            />
            <MyDateInput
              showTimeSelect
              timeCaption="time"
              name="date"
              placeholderText="Date"
              dateFormat="dd/MM/yyyy, h:mm aa"
            />
            <MyTextInput name="city" placeholder="City" />
            <MyTextInput name="venue" placeholder="Venue" />

            <div className="flex flex-col justify-end sm:flex-row sm:items-center">
              <div className="items-center justify-between space-x-2 text-center sm:top-0 md:top-1">
                <Button to="/activities" type="secondary">
                  Cancel
                </Button>
                <Button
                  disabled={isSubmitting || !dirty || !isValid}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}
                  type="primary"
                >
                  {isSubmitting ? `Submitting...` : `Submit`}
                </Button>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default observer(ActivityForm);
