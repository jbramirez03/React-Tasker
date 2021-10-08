import "./App.css";
import Header from "./components/Header";
import Tasks from './components/Tasks';
import { useState } from 'react';


function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Dentist appointment',
      day: 'Feb 12th at 12:00pm',
      reminder: true
    },
    {
      id: 2,
      text: 'Change car oil',
      day: 'Apr 9th at 2:00pm',
      reminder: false
    },
    {
      id: 3,
      text: 'Saturday class',
      day: 'Mar 1st at 11:00am',
      reminder: false
    }
  ]);

  return (
    <div className="container col-lg-6 mt-3 bg-light">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
