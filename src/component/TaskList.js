import React from 'react'
import Form from './Form'
import Task from './Task'

const TaskList = () => {
  return (
    <div>
       <h1>Task Manager</h1> 
       
       <Task/>
       <div className="--flex-between --pb">
          <h3>
            <b>Total Tasks:</b> 0
          </h3>
          <h3>
            <b>Completed Tasks:</b> 0
          </h3>
        </div>
       <Form/>
    </div>
  )
}

export default TaskList