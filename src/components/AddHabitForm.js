import React, {useState, useRef, useEffect} from 'react'
import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.css'
import './Form.css'
import sampleImg from '../media/sample.svg'
import sampleImg1 from '../media/sample1.svg'
import sampleImg2 from '../media/sample2.svg'

function AddHabitForm(props){

  const [form,setForm] = useState({
      icon:'',
      habit:'',
      description:''
    })
  const [swiper, setSwiper] = useState(null)
  
  const formRef = useRef()
  

  useEffect(()=>{
      if(formRef.current){
        

      }
  },[swiper])
  

  const swiperParams = {
    slidesPerView:3,
    spaceBetween: 30,
    loop:true,
    centeredSlides:true,
    on:{
      'init':function(){
        setForm((prevState) =>{
          return {
            ...prevState,
            'icon':this.slides[this.activeIndex].src
          }
        })
      },
      'slideChange':function(){
        setForm((prevState) =>{
          return {
            ...prevState,
            'icon':this.slides[this.activeIndex].src
          }
        })
      }
    }
  }

  const changeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const addHabit = () => {
    if(form.habit !== ''){
      props.createHabit(form)
      setForm({
        habit:'',
        description:''
      })
    }
  }

  return(
    <form ref={formRef} style={props.style} onSubmit={(e) => e.preventDefault()} className='form' method='POST' action={props.action || "#"}>
      <Swiper {...swiperParams} getSwiper={setSwiper}>
        <img src={sampleImg}/>
        <img src={sampleImg1}/>
        <img src={sampleImg2}/>
      </Swiper>
      <input type='text' name='habit'  placeholder='Habit' value={form.habit} onChange={changeHandler}/>
      <textarea name='description' value={form.description} onChange={changeHandler} placeholder='Description'></textarea>
      <button type='submit' onMouseDown={addHabit}>Add</button>
    </form>
  )
}

export default AddHabitForm