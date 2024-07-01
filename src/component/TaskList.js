import React, { useEffect, useRef, useState } from 'react'
import Form from './Form'
import Task from './Task'
import axios from 'axios'
const TaskList = () => {
const [task, setTask] = useState([])

  const URL = 'http://localhost:8500'
  const checkServer = async()=>{
  try {
    const data = await axios.get(`${URL}/api/task`)
     setTask(data.data)
    console.log(data);

   
  } catch (error) {
    alert(error.message)
  }
  }




useEffect(() => {
   checkServer()
}, [])

  return (
    <div>
       <h1 className='--center-all --text-purple'>MANAGER</h1> 
       <div className="--flex-between --pb">
          <h3>
            <b>Total Tasks:</b> 0
          </h3>
          <h3>
            <b>Completed Tasks:</b> 0
          </h3>
        </div>
    {
      task.map((task, index) =>{
return(
  <Task task={task} index={index} />
)
      })
    }
      
       <Form/>
       
    </div>
  )
}

export default TaskList