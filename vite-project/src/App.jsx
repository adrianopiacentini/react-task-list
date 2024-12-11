import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import tasksList from '../../tasks'



function App() {
  let notCompleted = tasksList.filter((task) => task.state === 'backlog' || task.state === 'in_progress')
  let completed = tasksList.filter((task) => task.state === 'completed')
  
  return (
    <>
    <header><h1>Task Manager</h1></header>
      <div className= "container">
      <h2>Current Tasks ({notCompleted.length})</h2>
      <ul>
        {notCompleted.map((task) => (
          <li key={task.id}> <span className="title">{task.title}</span> <span className="priority">Priority: {task.priority}</span> <span className="time">Est. time: {task.estimatedTime}mins</span></li>
        ))}
      </ul>
      <hr></hr>
      <h2>Completed Tasks ({completed.length})</h2>
      <ul>
        {completed.map((task) => (
          <li key={task.id}> <span className="title">{task.title}</span> <span className="priority">Priority: {task.priority}</span> <span className="time">Est. time: {task.estimatedTime}mins</span></li>
        ))}
      </ul>
      </div>
    </>
  )
}

export default App
