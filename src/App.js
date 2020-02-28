import React, {useState} from 'react';
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
      <HomePage topConstraint={headerRef}/>
      {/* <StartPage topConstraint={headerRef}/> */}
    </div>
  );
}

export default App;
