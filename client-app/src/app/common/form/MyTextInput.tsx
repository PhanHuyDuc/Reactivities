import { useField } from 'formik';

interface Props {
  placeholder: string;
  name: string;
  label?: string;
  type?: string;
}

function MyTextInput(props: Props) {
  const [field, meta] = useField(props.name);
  const error = meta.touched && !!meta.error;
  return (
    <>
      <div className="gap-2 sm:flex-row sm:items-center">
        <div className="py-2 sm:flex-row sm:items-center">
          <label className="">{props.label}</label>
          <input
            className="h-10 w-full grow border p-2"
            {...field}
            {...props}
          />
        </div>

        {error ? (
          <div className="border-2 border-red-500 py-2">
            <label className="px-2 text-red-600">{meta.error}</label>{' '}
          </div>
        ) : null}
      </div>
    </>
  );
}

export default MyTextInput;
