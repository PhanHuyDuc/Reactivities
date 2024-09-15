import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { useStore } from '../../app/stores/store';
import Button from '../../ui/Button';

function HomePage() {
  const { userStore } = useStore();
  return (
    <div className="flex min-h-screen items-center justify-center overflow-auto bg-gradient-to-r from-blue-800 via-blue-600 to-cyan-500">
      <main className="mx-auto max-w-5xl text-center">
        <div className="text-white">
          <div className="flex items-center justify-center">
            <img
              src="../assets/logo.png"
              className="mr-4 h-[150px] w-[150px]"
            />
            <span className="text-[100px]">Reactivities</span>
          </div>
          {userStore.isLogedIn ? (
            <>
              {' '}
              <div className="my-4 text-xl font-bold">
                Welcome to Reactivities
              </div>
              <div className="my-6">
                <Link
                  to={`/activities`}
                  className="border-2 p-4 text-xl font-bold"
                >
                  Go to Activities!
                </Link>
              </div>
            </>
          ) : (
            <Button to={`/login`} type="secondary">
              Login!
            </Button>
          )}
        </div>
      </main>
    </div>
  );
}

export default observer(HomePage);
