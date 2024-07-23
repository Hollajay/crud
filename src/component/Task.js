import React from 'react';
import './Task.css';
import { MdOutlineDeleteForever, MdEditNote } from 'react-icons/md';

const Task = ({_id
  , name, index, delTaskHandler, createdAt,handleEditClick,handleInput,editedPost, handleEditInput }) => {

  return (
    <div className='task'>
      <p>{index + 1}. <b>{name}</b> <b>{new Date(createdAt).toLocaleString()}</b></p>
      <div className='task-icons'>
      <MdEditNote onClick={() => handleEditInput(name,_id)} />
   
        <MdOutlineDeleteForever onClick={()=> delTaskHandler(_id)}/>
      </div>
    </div>
  );
};

export default Task;
