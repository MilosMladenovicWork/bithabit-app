import React, {useState} from 'react';
import {Switch, Route} from 'react-router-dom'
import Header from './components/Header'
import StartPage from './pages/StartPage'
import HomePage from './pages/HomePage'
import './App.css';

function App() {

  const [headerRef, setHeaderRef] = useState()


  function header(headerRef){
    setHeaderRef(headerRef.current)
    console.log(headerRef)
  }

  return (
    <div className="App">
      <Header header={header}/>
      <Switch>
        <Route exact path='/' component={() => <StartPage topConstraint={headerRef}/>}/>
        <Route exact path='/home' component={() => <HomePage topConstraint={headerRef}/>}/>
      </Switch>
    </div>
  );
}

export default App;
