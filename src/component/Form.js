import React from 'react'
import './Task.css'

const Form = () => {
  return (
    <form className='task-form'>
        <input
        type='text'
        placeholder="Add a Task"
        name="name"

        />
        <button className='--btn' type='submit'>Submit</button>

    </form>
  )
}

export default Form