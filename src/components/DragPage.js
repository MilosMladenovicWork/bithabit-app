import React, {useRef, useEffect, useState} from 'react'
import {motion} from "framer-motion"
import './DragPage.css'

function DragPage(props){

  const [topConstraint, setTopConstraint] = useState(0)

  const dragPage = useRef()

  
  useEffect(() => {
    if(props.headerHeight){
      console.log(props.headerHeight)
    }
    setTopConstraint( - window.innerHeight + (window.innerHeight - dragPage.current.offsetTop + props.headerHeight))
  }, [props.headerHeight])


  return(
    <motion.div 
      className='drag-page'
      style={props.style}
      ref={dragPage}
      drag="y"
      dragConstraints={{top:topConstraint, bottom:0}}
    >
      {props.children}
    </motion.div>
  )
}

export default DragPage