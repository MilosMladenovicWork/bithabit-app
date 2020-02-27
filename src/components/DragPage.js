import React from 'react'
import {motion} from "framer-motion"
import './DragPage.css'

function DragPage(props){

  const topConstraint = - (window.innerHeight - (window.innerHeight * 0.4))

  return(
    <motion.div 
      className='drag-page'
      style={props.style}
      drag="y"
      dragConstraints={{top:topConstraint, bottom:0}}
    >
      {props.children}
    </motion.div>
  )
}

export default DragPage