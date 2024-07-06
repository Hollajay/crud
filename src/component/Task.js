import React from 'react';
import './Task.css';
import { MdOutlineDeleteForever, MdEditNote } from 'react-icons/md';

const Task = ({_id
  , name, index, delTaskHandler, updateTaskHandler, createdAt }) => {
  return (
    <div className='task'>
      <p>{index + 1}. <b>{name}</b> <b>{new Date(createdAt).toLocaleString()}</b></p>
      <div className='task-icons'>
        <MdEditNote onClick={updateTaskHandler}/>
   
        <MdOutlineDeleteForever onClick={()=> delTaskHandler(_id)}/>
      </div>
    </div>
  );
};

export default Task;
