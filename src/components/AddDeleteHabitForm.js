import React, {useState} from 'react'
import './Form.css'

function AddDeleteHabitForm(props){

  const form = useState({})


  const changeHandler = (e) => {
    form[e.target.name] = e.target.value
  }

  return(
    <form onSubmit={(e) => e.preventDefault()} className='form' method='POST' action={props.action || "#"}>
      <input type='text' name='username'  placeholder='Username' value={props.username} onChange={changeHandler}/>
      <input type='email' name='email'  placeholder='Email' value={props.email} onChange={changeHandler}/>
      <input type='password' name='password'  placeholder='Password' value={props.password} onChange={changeHandler}/>
      <button type='submit'>Add</button>
    </form>
  )
}

export default AddDeleteHabitForm