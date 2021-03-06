import "./App.css";
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState } from 'react';
import TaskContainer from "./components/TaskContainer";
import Nav from './components/Nav';


function App() {
  const [showAdd, setShowAdd] = useState(false);
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

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const setReminder = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, reminder: !task.reminder } : task))
  };

  return (
    <>
      <Nav />
      <div className="container col-lg-6 mt-3 bg-light">
        <TaskContainer onAdd={() => setShowAdd(!showAdd)} currentShow={showAdd} />
        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={setReminder} /> : <h3 className='text-center mt-3'>No tasks</h3>}
        {showAdd && <AddTask onAdd={addTask} />}
      </div>
    </>
  );
}

export default App;
