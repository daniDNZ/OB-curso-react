import { useState } from "react";
import TaskFormContainer from "./components/container/TaskFormContainer";
import TasksContainer from "./components/container/TasksContainer";

function App() {
  const initialState = [
    {
      id: '1',
      desc: 'Task de ejemplo',
      completed: false
    }
  ]
  const [tasks, setTasks] = useState(initialState)
  return (
    <div className="App">
      <TasksContainer tasksState={{ tasks, setTasks }} />
      <TaskFormContainer tasksState={{ tasks, setTasks }} />
    </div>
  );
}

export default App;
