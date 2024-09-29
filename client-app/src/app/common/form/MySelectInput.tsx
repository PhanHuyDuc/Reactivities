import { useField } from 'formik';

interface Props {
  placeholder: string;
  name: string;
  options: { text: string; value: string }[];
  label?: string;
}

function MySelectInput(props: Props) {
  const [field, meta] = useField(props.name);
  const error = meta.touched && !!meta.error;
  return (
    <>
      <div className="gap-2 sm:flex-row sm:items-center">
        <div className="py-2 sm:flex-row sm:items-center">
          <label className="">{props.label}</label>
          <select
            {...field}
            className="block w-full border border-gray-300 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="" disabled>
              {props.placeholder}
            </option>
            {props.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
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

export default MySelectInput;
