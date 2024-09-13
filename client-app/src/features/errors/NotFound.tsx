import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import Button from '../../ui/Button';
function NotFound() {
  return (
    <>
      <div className="min-h-dvh items-center justify-between space-y-5 bg-white py-5 text-center">
        <div className="flex items-center justify-center text-center">
          <MagnifyingGlassIcon className="size-20" />
        </div>
        <div className="font-bold">
          OOps- we've looked everwhere but could not find what you are looking
          for!
        </div>
        <div>
          <Button type="secondary" to="/activities">
            Return to activities page
          </Button>
        </div>
      </div>
    </>
  );
}

export default NotFound;
