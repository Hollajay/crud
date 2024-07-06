import React, { useEffect, useState } from 'react';
import Form from './Form';
import Task from './Task';
import axios from 'axios';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [formData, setformData] = useState({name:''})
  const {name} = formData


  const API = 'http://localhost:5000';
  
  const checkServer = async () => {
    try {
      const data = await axios.get(`${API}`);
      setTasks(data.data);
      console.log(data);
    } catch (error) {
      alert(error.message);
    }
  };
  
  useEffect(() => {
    checkServer();
  }, []);
  
//handle input change 
const handleInput = (e) =>{
  const {name,value} = e.target
  setformData({...formData,[name]:value})

}
  //create task
  const createTask = async(e)=>{
    e.preventDefault()
    try {
      await axios.post(`${API}/save`,formData)
     setformData({name:''}) 
     checkServer()
    } catch (error) {
      console.log(error.message)
    }

  }


  //update task
  const updateTaskHandler = async()=>{
    await axios.patch(`${API}`)

  }


  const deleteTask = async(id)=>{
    try {
      await axios.delete(`${API}/delete/${id}`)
      checkServer()
    } catch (error) {
   console.log(error.message);
    }
  }
  return (
    <div>
      <h1 className='--center-all --text-purple'>MANAGER</h1>
      <div className="--flex-between --pb">
        <h3>
          <b>Total Tasks:</b> 
        </h3>
        <h3>
          <b>Completed Tasks:</b> 
        </h3>
      </div>

      {
        tasks.map((task, index) => (
          <Task 
            key={task._id}
            _id={task._id}
            name={task.name} 
            index={index}
            createdAt={task.createdAt}
            delTaskHandler={deleteTask}
            updateTaskHandler={updateTaskHandler}
            
          />
        ))
      }

      <Form  createTask={createTask}  handleInput={handleInput} name={name}/>
    </div>
  );
};

export default TaskList;
