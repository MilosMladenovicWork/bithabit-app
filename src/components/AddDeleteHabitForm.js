import React, {useState} from 'react'
import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.css'
import './Form.css'
import sampleImg from '../media/sample.svg'

function AddDeleteHabitForm(props){

  const form = useState({})

  const swiperParams = {
    slidesPerView:3,
    spaceBetween: 30,
    loop:true,
    centeredSlides:true
  }


  const changeHandler = (e) => {
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
      <button type='submit'>Add</button>
    </form>
  )
}

export default AddDeleteHabitForm