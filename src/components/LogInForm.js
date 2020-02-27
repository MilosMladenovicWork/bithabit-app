import React, {useState} from 'react'
import './Form.css'

function Form(props){

  const form = useState({})

  const changeHandler = (e) => {
    form[e.target.name] = e.target.value
  }

  return(
    <form className='form' onSubmit={(e) => e.preventDefault()} method='POST' action={props.action || "#"}>
      <input type='email' name='email'  placeholder='Email' value={form.email} onChange={changeHandler}/>
      <input type='password' name='password'  placeholder='Password' value={form.password} onChange={changeHandler}/>
      <button type='submit'>Log In</button>
    </form>
  )
}

export default Form