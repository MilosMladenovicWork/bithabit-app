import React from 'react';
import Header from './components/Header'
import DragPage from './components/DragPage'
import LogInForm from './components/LogInForm'
import SignUpForm from './components/SignUpForm'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <DragPage 
        style={{
          top:"72.5vh"
        }}
      >
        <p style={{borderTop:"3px solid white",paddingTop:"10px"}}>
          Log&nbsp;In
        </p>
        <LogInForm/>
      </DragPage>
      <DragPage 
        style={{
          top:"85vh",
          backgroundColor:"#052137"
        }}
      >
        <p style={{borderTop:"3px solid white",paddingTop:"10px"}}>
          Sign&nbsp;Up
        </p>
        <SignUpForm/>
      </DragPage>
    </div>
  );
}

export default App;
