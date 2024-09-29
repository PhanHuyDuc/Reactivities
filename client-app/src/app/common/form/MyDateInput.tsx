import { useField } from 'formik';
import DatePicker, { DatePickerProps } from 'react-datepicker';

function MyDateInput(props: Partial<DatePickerProps>) {
  const [field, meta, helpers] = useField(props.name!);
  const error = meta.touched && !!meta.error;
  return (
    <>
      <div className="gap-2 sm:flex-row sm:items-center">
        <div className="py-2 sm:flex-row sm:items-center">
          {/* @ts-ignore */}
          <DatePicker
            {...field}
            {...props}
            selected={field.value ? new Date(field.value as string) : null} // Ensure value is Date or null
            onChange={(date: Date | [Date | null, Date | null] | null) =>
              helpers.setValue(date)
            } // Handle selectsRange type
            selectsRange={true}
            className="h-10 w-full grow border p-2"
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

export default MyDateInput;
