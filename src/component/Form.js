import React from 'react'
import './Task.css'

const Form = ({name,handleInput,createTask}) => {
  return (
    <form className='task-form'>
        <input
        type='text'
        placeholder="Add a Task"
        name="name"
        value={name}
        onChange={handleInput}
        
        />
        <button onClick={createTask} className='--btn --btn-primary' type='submit'>Submit</button>
    </form>
  )
}

export default Form