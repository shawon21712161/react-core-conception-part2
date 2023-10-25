import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
// import Team from './team'
import User from './user'
// import Friends from './Friends'
// import Friend from './friend'


function App() {
  function handleClick(){
    alert ('Button 1 Clicked')
  }
  const handleClick2=()=>{
    alert ('Button 2 clicked')
  }

  // Vejailla process
  const vejaillaButton =(num) =>{
    alert ('Pechainna Kaj kam')
  }

  return (
    <>
      
      <h1>React Core Concepts 2</h1>
      <User></User>
      {/* <Friends></Friends>
      <Friend></Friend> */}
      
      
      {/* <Counter></Counter> */}
      {/* <Team></Team> */}
      
      
      {/* <button onClick={handleClick}>First Button</button>
      <button onClick={handleClick2}>Secound Button</button>
      <button onClick={()=>{alert('Button 3 Clicked')}}>Third Button</button> */}

      {/* Vejailla process */}
      {/* <button onClick={()=>vejaillaButton(5)}>Vejailla Button</button> */}
      
      

    </>
  )
}

export default App
