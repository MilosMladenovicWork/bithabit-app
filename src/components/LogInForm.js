import React, {useState} from 'react'
import {Link} from 'react-router-dom'
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
      <Link to='/home'>
        <button type='submit'>Log In</button>
      </Link>
    </form>
  )
}

export default Form