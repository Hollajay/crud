import React from 'react';
import './Task.css';
import { MdOutlineDeleteForever, MdEditNote } from 'react-icons/md';

const Task = ({ todo, index, delTaskHandler ,updateTaskHandler}) => {
  return (
    <div className='task'>
      <p>{index + 1} <b>{todo}</b> <b>{new Date(todo).toLocaleString()}</b></p>
      <div className='task-icons'>
        <MdEditNote onClick={updateTaskHandler}/>
        <MdOutlineDeleteForever onClick={ delTaskHandler} />
      </div>
    </div>
  );
};

export default Task;
