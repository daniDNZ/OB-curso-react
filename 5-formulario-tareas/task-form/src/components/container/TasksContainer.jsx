import Task from "../pure/Task";

export default function TasksContainer({ tasksState: { tasks, setTasks } }) {
  
  const toggleComplete = (taskId, descRef) => {
    
    setTasks(
      tasks.map((oldTask) =>
        oldTask.id === taskId
        ? {...oldTask, completed: !oldTask.completed}
        : oldTask
      )
    )

    descRef.current.style.textDecorationLine === 'line-through'
    ? descRef.current.style.textDecorationLine = 'none'
    : descRef.current.style.textDecorationLine = 'line-through'
  }

  const deleteTask = (taskId) => {
    setTasks(oldTasks =>
      oldTasks.filter(oldTask => oldTask.id !== taskId)
      )
  }

  return (
    <div>
      {
        tasks.length === 0
        ? <p style={{width:'fit-content', margin:'0 auto'}}>No Tasks</p>
        : tasks.map((task) =>
            <Task
              key={task.id}
              task={task}
              toggleComplete={toggleComplete}
              deleteTask={deleteTask}
            />
          )
      }
    </div>
  )
}