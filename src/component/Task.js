import React from 'react'
import './Task.css';

import {MdOutlineDeleteForever,MdEditNote} from 'react-icons/md';


const Task = ({task,index}) => {
  return (
    <div className='task'>
        <p>{index +1}<b>{task.name}</b> <b>{task.createdAt}</b></p>
        <div className='task-icons'>
            
            <MdEditNote />
            <MdOutlineDeleteForever/>
        </div>
       
    </div>
  )
}

export default Task