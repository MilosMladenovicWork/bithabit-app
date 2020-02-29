import React, {useState} from 'react'
import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.css'
import './Form.css'
import sampleImg from '../media/sample.svg'

function AddDeleteHabitForm(props){

  const [form,setForm] = useState({
      habit:'',
      description:''
    })

  const swiperParams = {
    slidesPerView:3,
    spaceBetween: 30,
    loop:true,
    centeredSlides:true
  }

  const changeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
    form[e.target.name] = e.target.value
  }

  return(
    <form onSubmit={(e) => e.preventDefault()} className='form' method='POST' action={props.action || "#"}>
      <Swiper {...swiperParams}>
        <img src={sampleImg}/>
        <img src={sampleImg}/>
        <img src={sampleImg}/>
        <img src={sampleImg}/>
      </Swiper>
      <input type='text' name='habit'  placeholder='Habit' value={form.habit} onChange={changeHandler}/>
      <textarea name='description' value={form.description} onChange={changeHandler} placeholder='Description'></textarea>
      <button type='submit' onMouseDown={() => {props.createHabit(form);setForm({
        habit:'',
        description:''
      })}}>Add</button>
    </form>
  )
}

export default AddDeleteHabitForm