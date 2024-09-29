import { ErrorMessage, Form, Formik } from 'formik';
import MyTextInput from '../../app/common/form/MyTextInput';
import Button from '../../ui/Button';
import { useStore } from '../../app/stores/store';
import { observer } from 'mobx-react-lite';
import * as Yup from 'yup';
import ValidationError from '../errors/ValidationError';

function RegisterForm() {
  const { userStore } = useStore();
  return (
    <Formik
      initialValues={{
        displayName: '',
        username: '',
        email: '',
        password: '',
        error: null,
      }}
      onSubmit={(values, { setErrors }) =>
        userStore.register(values).catch((error) => setErrors({ error }))
      }
      validateYupSchema={Yup.object({
        displayName: Yup.string().required(),
        username: Yup.string().required(),
        email: Yup.string().required(),
        password: Yup.string().required(),
      })}
    >
      {({ handleSubmit, isSubmitting, errors, isValid, dirty }) => (
        <Form className="ui form error px-3" onSubmit={handleSubmit}>
          <div className="text-center">
            <span className="text-xl font-bold text-cyan-500">
              Sign up to Reactivities
            </span>
          </div>
          <MyTextInput placeholder="DisplayName" name="displayName" />
          <MyTextInput placeholder="Username" name="username" />
          <MyTextInput placeholder="Email" name="email" />
          <MyTextInput placeholder="Password" name="password" type="password" />
          <ErrorMessage
            name="error"
            render={() => (
              <div className="py-4">
                <ValidationError errors={errors.error as unknown as string[]} />
              </div>
            )}
          />
          <Button type="primary" disabled={!isValid || !dirty || isSubmitting}>
            {isSubmitting ? 'Submitting' : 'Register'}
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default observer(RegisterForm);
