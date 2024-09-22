import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from '../../app/stores/store';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import MyTextInput from '../../app/common/form/MyTextInput';
import MyTextArea from '../../app/common/form/MyTextArea';
import Button from '../../ui/Button';
import Loading from '../../ui/Loading';

interface Props {
  setEditMode: (editMode: boolean) => void;
}

function ProfileEditForm({ setEditMode }: Props) {
  const {
    profileStore: { profile, updateProfile },
  } = useStore();
  return (
    <Formik
      initialValues={{ displayName: profile?.displayName, bio: profile?.bio }}
      onSubmit={(values) => {
        updateProfile(values).then(() => {
          setEditMode(false);
        });
      }}
      validationSchema={Yup.object({
        displayName: Yup.string().required(),
      })}
    >
      {({ isSubmitting, dirty, isValid }) => (
        <Form>
          <MyTextInput name="displayName" placeholder="DisplayName" />
          <MyTextArea placeholder="Add your Bio" name="bio" />
          <Button type="primary" disabled={!isValid || !dirty}>
            {isSubmitting ? <Loading /> : 'Update'}
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default observer(ProfileEditForm);
