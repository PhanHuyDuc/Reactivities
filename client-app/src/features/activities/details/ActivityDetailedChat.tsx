import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useStore } from '../../../app/stores/store';
import { Link } from 'react-router-dom';
import { Field, FieldProps, Form, Formik } from 'formik';
import Loading from '../../../ui/Loading';
import * as Yup from 'yup';
import { formatDistanceToNow } from 'date-fns/formatDistanceToNow';

interface Props {
  activityId: string;
}

function ActivityDetailedChat({ activityId }: Props) {
  const { commentStore } = useStore();
  useEffect(() => {
    if (activityId) {
      commentStore.createHubConnection(activityId);
    }
    return () => {
      commentStore.clearComments();
    };
  }, [commentStore, activityId]);
  return (
    <>
      <div className="mt-5 bg-white">
        <div className="bg-cyan-500 py-4 text-center font-bold text-white">
          Chat about this event
        </div>
        <Formik
          initialValues={{ body: '' }}
          onSubmit={(values, { resetForm }) =>
            commentStore.addComment(values).then(() => resetForm())
          }
          validationSchema={Yup.object({
            body: Yup.string().required(),
          })}
        >
          {({ isSubmitting, isValid, handleSubmit }) => (
            <Form className="px-3 py-4">
              <Field name="body">
                {(props: FieldProps) => (
                  <div className="relative">
                    {isSubmitting && <Loading />}
                    <textarea
                      className="h-40 w-full grow border p-2"
                      placeholder="Add comment"
                      {...props.field}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && e.shiftKey) {
                          return;
                        }
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                          isValid && handleSubmit();
                        }
                      }}
                    ></textarea>
                  </div>
                )}
              </Field>
            </Form>
          )}
        </Formik>
        {commentStore.comments.map((comment) => (
          <div key={comment.id} className="flex space-x-3 px-3 py-4">
            <div className="size-16">
              <img
                src={comment.image || '../assets/user.png'}
                className="flex rounded-md"
              />
            </div>
            <div className="flex flex-1 flex-col">
              <Link to={`/profiles/${comment.username}`}>
                <strong>{comment.displayName}</strong>{' '}
                <span className="text-stone-400">
                  {formatDistanceToNow(comment.createdAt)} ago
                </span>
              </Link>
              <div className="whitespace-pre-wrap">{comment.body}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default observer(ActivityDetailedChat);
