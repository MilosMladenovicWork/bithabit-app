import React from 'react'
import DragPage from '../components/DragPage'
import LogInForm from '../components/LogInForm'
import SignUpForm from '../components/SignUpForm'

function StartPage(props){

  return(
    <div class='page'>
      <DragPage 
        headerHeight={props.topConstraint && props.topConstraint.offsetHeight}
        style={{
          top:"67.5vh"
        }}
      >
        <p style={{borderTop:"3px solid white",paddingTop:"10px"}}>
          Log&nbsp;In
        </p>
        <LogInForm/>
      </DragPage>
      <DragPage
        headerHeight={props.topConstraint && props.topConstraint.offsetHeight} 
        style={{
          top:"80vh",
          background:"linear-gradient(#052137, #000C16)"
        }}
      >
        <p style={{borderTop:"3px solid white",paddingTop:"10px"}}>
          Sign&nbsp;Up
        </p>
        <SignUpForm/>
      </DragPage>
    </div>
  )
}

export default StartPage