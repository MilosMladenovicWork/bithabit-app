import React from 'react'
import DragPage from '../components/DragPage'
import LogInForm from '../components/LogInForm'
import SignUpForm from '../components/SignUpForm'

function StartPage(props){
  return(
    <div class='page'>
      <DragPage 
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
          style={{
            top:"80vh",
            backgroundColor:"#052137"
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