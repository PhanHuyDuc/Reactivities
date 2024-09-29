import { ErrorMessage, Form, Formik } from 'formik';
import MyTextInput from '../../app/common/form/MyTextInput';
import Button from '../../ui/Button';
import { useStore } from '../../app/stores/store';
import { observer } from 'mobx-react-lite';

function LoginForm() {
  const { userStore } = useStore();
  return (
    <Formik
      initialValues={{ email: '', password: '', error: null }}
      onSubmit={(values, { setErrors }) =>
        userStore
          .login(values)
          .catch(() => setErrors({ error: 'Invalid email or password' }))
      }
    >
      {({ handleSubmit, isSubmitting, errors }) => (
        <Form className="ui form px-3" onSubmit={handleSubmit}>
          <div className="text-center">
            <span className="text-xl font-bold text-cyan-500">
              Login to Reactivities
            </span>
          </div>
          <MyTextInput placeholder="Email" name="email" />
          <MyTextInput placeholder="Password" name="password" type="password" />
          <ErrorMessage
            name="error"
            render={() => (
              <div className="py-4">
                <label className="text-red-600">{errors.error}</label>
              </div>
            )}
          />
          <Button type="primary">
            {isSubmitting ? 'Submitting' : 'Login'}
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default observer(LoginForm);
