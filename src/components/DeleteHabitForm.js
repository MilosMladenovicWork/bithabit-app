import React from 'react'
import './Form.css'

function DeleteHabitForm(props){
    return(
        <form style={props.style} onSubmit={(e) => e.preventDefault()} className='form' method='POST' action={props.action || "#"}>
            <p>Are you sure you want to delete {props.selectedNote} habit?</p>
            <button type='submit' onClick={() => {console.log('hey');props.deleteHabit(props.selectedNote)}}>Confirm</button>
        </form>
    )
}

export default DeleteHabitForm