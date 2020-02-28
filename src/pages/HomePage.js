import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import DragPage from '../components/DragPage'
import AddDeleteHabitForm from '../components/AddDeleteHabitForm'
import DarkOverlay from '../components/DarkOverlay'
import './HomePage.css'

function HomePage(props){
  
  const [startLongPress, setStartLongPress] = useState(false)
  const [selected, setSelected] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  
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
  
  useEffect(() => {
    let timer;
    if(startLongPress){
      if(selectedItem){
        selectedItem.classList.remove('scaled')
      }
      timer = setTimeout(() =>{selectedItem.classList.add('scaled') ;setSelected(true);}, 300)
    }else{
      clearTimeout(timer)
    }

    return () => {
      clearTimeout(timer);
    };
  }, [startLongPress, selectedItem])

  useEffect(() => {
    if(!selected && selectedItem){
      selectedItem.classList.remove('scaled')
    }
  }, [selected])



  const habitsArr = habits.map((habit, index) => {
    return <motion.div data-num={index} whileTap={{scale:1.1}} onTap={()=>setStartLongPress(false)} onTapStart={(e)=>{setStartLongPress(true);setSelectedItem(e.currentTarget)}} key={index} className='habit' style={{opacity:habit.done === 'true' ? 0.4 : 1}}>
      <p>{habit.icon}</p>
      <p>{habit.habit}</p>
      <p>{habit.done}</p>
    </motion.div>
  })

  return(
    <div className='home-page' onClick={() => 
      setSelected(false)}>
      <h1 style={{color:"white"}}>Welcome, User!</h1>
      {habitsArr}
      <DarkOverlay style={{display:selected ? 'block' : 'none'}}/>
      <DragPage 
        style={{
          top:"82.5vh",
          borderRadius:"10px"
        }}
      >
        <p>plus button</p>
        <AddDeleteHabitForm/>
      </DragPage>
    </div>
  )
}

export default HomePage