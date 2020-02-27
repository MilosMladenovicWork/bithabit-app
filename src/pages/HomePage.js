import React from 'react'
import DragPage from '../components/DragPage'

function HomePage(props){
  return(
    <div className='HomePage'>
      <DragPage 
        style={{
          top:"80vh",
        }}
      >
        Hey
      </DragPage>
    </div>
  )
}

export default HomePage