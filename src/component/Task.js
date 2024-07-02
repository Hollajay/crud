import React from 'react';
import './Task.css';
import { MdOutlineDeleteForever, MdEditNote } from 'react-icons/md';

const Task = ({ task, index, delTaskHandler }) => {
  return (
    <div className='task'>
      <p>{index + 1} <b>{task.name}</b> <b>{new Date(task.createdAt).toLocaleString()}</b></p>
      <div className='task-icons'>
        <MdEditNote />
        <MdOutlineDeleteForever onClick={() => delTaskHandler(task._id)} />
      </div>
    </div>
  );
};

export default Task;
