import { Link } from 'react-router-dom';

function HomePage() {
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
          <div className="my-4 text-xl font-bold">Welcome to Reactivities</div>
          <div className="my-6">
            <Link to={`/activities`} className="border-2 p-4 text-xl font-bold">
              Take me to the Activities
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
