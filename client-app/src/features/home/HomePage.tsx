import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="overflow-auto bg-stone-100">
      <main className="mx-auto max-w-5xl">
        <div className="min-h-dvh items-start justify-between text-center">
          <h1>Hello Routing</h1>
          <h1>
            Go to{' '}
            <Link to={`/activities`} className="text-blue-500 underline">
              Activities
            </Link>{' '}
          </h1>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
