import React from 'react';
import Header from './components/Header'
import StartPage from './pages/StartPage'
import HomePage from './pages/HomePage'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <HomePage/>
      {/* <StartPage/> */}
    </div>
  );
}

export default App;
