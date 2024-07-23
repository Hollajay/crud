import React from 'react'
import './Task.css'

const Form = ({name,handleInput,createTask,handleEditClick,isEditing}) => {

  
  return (
    <form className='task-form' onSubmit={isEditing ? handleEditClick : createTask}>
        <input
        type='text'
        placeholder="Add a Task"
        name="name"
        value={name}
        onChange={handleInput}
        
        />
        <button   className='--btn --btn-primary' type='submit'>Submit</button>
    </form>
  )
}

export default Form