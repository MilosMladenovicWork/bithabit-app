import React, {useRef, useEffect, useState} from 'react'
import {motion} from "framer-motion"
import './DragPage.css'

function DragPage(props){

  const [topConstraint, setTopConstraint] = useState(0)
  const [bottomConstraint, setBottomConstraint] = useState(0)
  const [dragY, setDragY] = useState(0)

  const dragPage = useRef()

  useEffect(() => {
    if(dragY > -20){
      setTopConstraint(0)
    }else if(dragY < (- window.innerHeight + (window.innerHeight - dragPage.current.offsetTop + props.headerHeight)) + 20){
      setBottomConstraint(- window.innerHeight + (window.innerHeight - dragPage.current.offsetTop + props.headerHeight))
    }else{
      setBottomConstraint(0)
      setTopConstraint( - window.innerHeight + (window.innerHeight - dragPage.current.offsetTop + props.headerHeight))
    }

  }, [props.headerHeight, topConstraint, bottomConstraint, dragY])


  return(
    <motion.div 
      className='drag-page'
      style={props.style}
      ref={dragPage}
      drag="y"
      dragConstraints={{top:topConstraint, bottom:bottomConstraint}}
      onDrag={
        (event, info) => setDragY(info.point.y)
      }
    >
      {props.children}
    </motion.div>
  )
}

export default DragPage