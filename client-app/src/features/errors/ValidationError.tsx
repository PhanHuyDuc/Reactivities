import { PlayCircleIcon } from '@heroicons/react/16/solid';
import { PlusIcon } from '@heroicons/react/20/solid';
import { CircleStackIcon } from '@heroicons/react/24/outline';

interface Props {
  errors: string[];
}

function ValidationError({ errors }: Props) {
  return (
    <>
      <div className="bg-red-100 p-4">
        {errors && (
          <ul className="space-y-2">
            {errors.map((err: string, i) => (
              <li className="flex text-xs text-red-700" key={i}>
                <PlusIcon className="size-4" /> {err}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default ValidationError;
