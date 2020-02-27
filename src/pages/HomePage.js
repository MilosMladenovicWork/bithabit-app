import React, {useState} from 'react'
import {motion} from 'framer-motion'
import DragPage from '../components/DragPage'
import AddHabitForm from '../components/AddHabitForm'
import './HomePage.css'

function HomePage(props){

  const onTapStart = () => {
    let dateClickStart = Date.now()
    const checkTime = setInterval(() => {
      if(Date.now() - dateClickStart > 1000){
        window.alert('long press')
        return clearInterval(checkTime)
      }
    }, 100)
  }

  let habits = [
    {
      icon:'brackets',
      habit:'Refactor Code',
      description:'Clean code for 15 minutes a day',
      done:'false'
    },
    {
      icon:'brackets',
      habit:'Refactor Code',
      description:'Clean code for 15 minutes a day',
      done:'true'
    }
  ]

  const habitsArr = habits.map((habit, index) => {
    return <motion.div onTapStart={onTapStart} whileTap={{scale:1.1}} key={index} className='habit' style={{opacity:habit.done === 'true' ? 0.4 : 1}}>
      <p>{habit.icon}</p>
      <p>{habit.habit}</p>
      <p>{habit.done}</p>
    </motion.div>
  })

  return(
    <div className='home-page'>
      <h1 style={{color:"white"}}>Welcome, User!</h1>
      {habitsArr}
      <DragPage 
        style={{
          top:"82.5vh",
          borderRadius:"10px"
        }}
      >
        <p>plus button</p>
        <AddHabitForm/>
      </DragPage>
    </div>
  )
}

export default HomePage