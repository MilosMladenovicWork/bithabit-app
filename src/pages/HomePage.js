import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import DragPage from '../components/DragPage'
import AddHabitForm from '../components/AddHabitForm'
import DeleteHabitForm from '../components/DeleteHabitForm'
import DarkOverlay from '../components/DarkOverlay'
import './HomePage.css'

function HomePage(props){
  
  const [startLongPress, setStartLongPress] = useState(false)
  const [selected, setSelected] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  const [habits, setHabits] = useState([
    {
      icon:'brackets',
      habit:'Refactor Code',
      description:'Clean code for 15 minutes a day',
      done:false
    },
    {
      icon:'brackets',
      habit:'Write Code',
      description:'Clean code for 15 minutes a day',
      done:true
    }
  ])
  const [habitsArr, setHabitsArr] = useState()
  const [newHabit, setNewHabit] = useState()

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

  const doHandler = (index) => {
    setHabits( function(prevState) {
      let newArr = [...prevState]
      newArr[index].done = !prevState[index].done  
      return newArr
    }  
    )
  }

  const createHabit = (form) => {
    setHabits(function(prevState){
      return [
        ...prevState,
        {
          icon:'hey',
          habit:form.habit,
          description:form.description,
          completed:false
        }
      ]      
    })
  }

  const deleteHabit = (title) => {
    setHabits(function(prevState){
      let newArr = prevState.filter((habit) => habit.habit !== title)
      console.log(newArr)
      return newArr;
    })
  } 
  
  useEffect(() => {
    setHabitsArr(habits.map((habit, index) => {
      return <motion.div whileTap={{scale:1.1}} onTap={()=>setStartLongPress(false)} onTapStart={(e)=>{setStartLongPress(true);setSelectedItem(e.currentTarget)}} key={index} className='habit' style={{opacity:habit.done ? 0.4 : 1}}>
        <p>{habit.icon}</p>
        <p class='habit-name'>{habit.habit}</p>
        <p onMouseDown={() => doHandler(index)}>{habit.done ? 'true' : 'false'}</p>
      </motion.div>
    }))
  }, [habits])


  return(
    <div className='home-page'>
      <h1 style={{color:"white"}}>Welcome, User!</h1>
      {habitsArr}
      <DarkOverlay setSelected={setSelected} style={{display:selected ? 'block' : 'none'}}/>
      <DragPage 
        headerHeight={props.topConstraint && props.topConstraint.offsetHeight}
        style={{
          top:"82.5vh"
        }}
      >
        <p>{selected ? 'x' : 'plus'} button</p>
        <AddHabitForm style={{display: selected ? 'none':'flex'}} createHabit={createHabit}/>
        <DeleteHabitForm style={{display: selected ? 'flex':'none'}} selectedNote={selectedItem && selectedItem.querySelector('.habit-name').innerText} deleteHabit={deleteHabit}/>
      </DragPage>
    </div>
  )
}

export default HomePage