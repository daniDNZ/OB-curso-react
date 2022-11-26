import { useRef } from "react";

export default function Task({ task, toggleComplete, deleteTask }) {
  const taskStyle = {
    maxWidth: '320px',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0 auto'
  }

  const buttonStyle = {
    height: 'fit-content',
  }

  const buttonsContainerStyle = {
    display: 'flex',
    gap: '10px',
    alignItems: 'center'
  }

  const descRef = useRef(null);
  return (
    <div style={taskStyle}>
      <p ref={descRef}>{task.desc}</p>
      <div style={buttonsContainerStyle}>
        <input type="checkbox" onClick={() => toggleComplete(task.id, descRef)}></input>
        <button type="button" style={buttonStyle} onClick={() => deleteTask(task.id)}> X </button>
      </div>
    </div>
  )
}