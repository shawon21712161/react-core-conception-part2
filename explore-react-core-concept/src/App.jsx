import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './Actor'
import Singers from './Singers'

function App() {

const actors =['Sakib Khan', 'Salman Sha', 'Salman Khan', 'Shahruk Khan', 'Anil Kapoor', 'Shahid Kapoor']

const singers = [
  {id : 1, name:'Shraya Ghosal', age : 38},
  {id : 2, name:'Arjit Singh', age :48},
  {id : 3, name:'Atif Aslam', age : 46},
  {id : 4, name:'Honey Sing', age : 45},
  {id : 5, name:'Pritom Hasan', age : 30},
  {id : 6, name:'Shiton Ahmed', age : 29},
]
  

  return (
    <>
      <h1>Vite + React</h1>
      <Actor></Actor>
      <Singers></Singers>

      {
        actors.map(actor=><Actor name={actor}></Actor>)
      }

      {
        singers.map(singer=><Singers singer={singer}></Singers>)
      }
     

      {/* <Todo task='Learn HTML'
       isDone ={true}></Todo>

       <Todo task='Try JSX' 
      isDone ={false}></Todo>

      <Todo task='Learn CSS'
       isDone ={true}></Todo>

       <Todo task='Explore Core Concepts'
       isDone ={false}></Todo>

      <Todo task='Learn JS'
       isDone ={true}></Todo>

      <Todo task='Learn React'
       isDone ={false}></Todo> */}

      
      {/* <Person></Person>
      <Student></Student>
      <Developer></Developer>
      <Mydevices></Mydevices>
      <MyDeviceList name="Laptop" price="35000"></MyDeviceList>
      <MyDeviceList name="Mobile" price="25000"></MyDeviceList>
      <MyDeviceList name="Watch" price="5000"></MyDeviceList> */}
      

    </>
  )
}

function Person(){
  const age = 22
  const money = 2200
  const name= 'Sakib'
  const name1={
    name :'rakib',
    age:23,
    money:2000
  }
  return (

    <div>
      <h3>Hey {name}. I'm a student and my age:{age}. i have{money} money.</h3>
      <h3>Hey {name1.name}. I'm a student and my age:{name1.age}. i have{name1.money} money.</h3>
    </div>
  )
}

function Student(){
  const Person = {
    name:'Shawon',
    age: 23,
    class: 'Honours 3rd Year'
  }
  return(
    <div className='student'>
      <h4>This is a student</h4>
      <p>Name: {Person.name} </p>
      <p>Age: {Person.age}</p>
      <p>Class: {Person.class}</p>
    </div>
  )
}

function Developer(){
  const developerStyle ={
    border: '2px solid purple',
  padding: '20px',
  margin: '20px',
  borderRadius: '10px'
  }
  return(
    <div style={developerStyle}>
      <h4>devo devo</h4>
      coding:
    </div>
  )
}

function Mydevices (){
  const phone={
    name:'Poco F3',
    ram:'6gb',
    rom:'128gb'
  }
  const laptop={
    name:'Toshiba',
    ram:'6gb',
    rom:'1TB'
  }
  const myPhoneStyle ={
  border: '2px solid skyblue',
  padding: '20px',
  margin: '20px',
  borderRadius: '10px'
  }

  return(
    <>
    <div style={myPhoneStyle}>
      I have a {phone.name}. It's have{phone.ram}also have {phone.rom}.
    </div>
    <div style={{
  border: '2px solid rgb(116, 91, 255)',
  padding: '20px',
  margin: '20px',
  borderRadius: '10px'
  }}>
      I have a {laptop.name}. It's have{laptop.ram}also have {laptop.rom}.
    </div>
    </>
    
  )
}


function MyDeviceList(props){
  return <h4>This is {props.name} and price {props.price}</h4>
}


export default App
