import { useEffect, useState } from 'react';
import './index.css';
import axios from 'axios';

function App() {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/activities')
      .then((res) => setActivities(res.data));
  }, []);
  return (
    <>
      <h1 className="text-4xl text-yellow-700">🤺 Reactivities</h1>
      <ul className="text-stone-900">
        {activities.map((activity: any) => (
          <li className="px-3 py-4" key={activity.id}>
            ⚫{activity.title}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
