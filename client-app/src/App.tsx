import { useEffect, useState } from "react";
import "./App.css";
import Demo from "./demo";
import axios from "axios";

function App() {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/activities")
      .then((res) => setActivities(res.data));
  }, []);
  return (
    <>
      <h1>Reactivities</h1>
      <ul>
        {activities.map((activity: any) => (
          <li key={activity.id}>{activity.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
