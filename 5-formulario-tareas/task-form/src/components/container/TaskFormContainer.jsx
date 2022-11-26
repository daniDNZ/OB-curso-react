import { idGenerator } from "../../utils/functions";
import TaskForm from "../pure/TaskForm";

export default function TaskFormContainer({ tasksState: { tasks, setTasks } }) {
  const addTask = ({desc}) => {
    const newTask = {
      id: idGenerator(tasks),
      desc,
      completed: false
    }
    setTasks(oldTasks => [...oldTasks, newTask])
  }
  return (
    <div>
      <TaskForm addTask={addTask}/>
    </div>
  )
}