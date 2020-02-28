import React, {useState} from 'react'
import './Form.css'

function AddDeleteHabitForm(props){

  const form = useState({})


  const changeHandler = (e) => {
    form[e.target.name] = e.target.value
  }

  return(
    <form onSubmit={(e) => e.preventDefault()} className='form' method='POST' action={props.action || "#"}>
      <input type='text' name='habit'  placeholder='Habit' value={form.habit} onChange={changeHandler}/>
      <textarea name='description' value={form.description} onChange={changeHandler} placeholder='Description'></textarea>
      <button type='submit'>Add</button>
    </form>
  )
}

export default AddDeleteHabitForm