import React, { useEffect, useState } from 'react';
import Form from './Form';
import Task from './Task';
import axios from 'axios';

const TaskList = () => {
  const [todo, setTodo] = useState([]);
  const URL = 'http://localhost:5000';

  const getToDoAll = async () => {
    try {
      const response = await axios.get(URL);
      setTodo(response.data);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getToDoAll();
  }, []);

  const totalTasks = todo.length;
  const completedTasks = todo.filter(task => task.completed).length;

  return (
    <div>
      <h1 className='--center-all --text-purple'>MANAGER</h1>
      <div className="--flex-between --pb">
        <h3>
          <b>Total Tasks:</b> {totalTasks}
        </h3>
        <h3>
          <b>Completed Tasks:</b> {completedTasks}
        </h3>
      </div>

      {todo.map(data => (
        <Task key={data._id} name={data.name} completed={data.completed} />
      ))}

      <Form />
    </div>
  );
};

export default TaskList;
