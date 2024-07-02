import React, { useEffect, useState } from 'react';
import Form from './Form';
import Task from './Task';
import axios from 'axios';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const URL = 'http://localhost:8500';

  const checkServer = async () => {
    try {
      const data = await axios.get(`${URL}/api/task`);
      setTasks(data.data);
      console.log(data);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    checkServer();
  }, []);

  // const delTaskHandler = async (id) => {
  //   try {
  //     await axios.delete(`${URL}/api/task/${id}`);
  //     setTasks(tasks.filter(task => task._id !== id));
  //   } catch (error) {
  //     alert('Error deleting task: ' + error.message);
  //   }
  // };

  return (
    <div>
      <h1 className='--center-all --text-purple'>MANAGER</h1>
      <div className="--flex-between --pb">
        <h3>
          <b>Total Tasks:</b> {tasks.length}
        </h3>
        <h3>
          <b>Completed Tasks:</b> {tasks.filter(task => task.completed).length}
        </h3>
      </div>
      {tasks.map((task, index) => (
        <Task key={task._id} task={task} index={index}  />
      ))}
      <Form />
    </div>
  );
};

export default TaskList;
