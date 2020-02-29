import React from 'react'
import './DarkOverlay.css'

function DarkOverlay(props){
  return(
    <div class='dark-overlay' style={props.style} onMouseDown={() => 
      props.setSelected(false)}>
    </div>
  )
}

export default DarkOverlay