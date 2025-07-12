import './App.css'
import Card from './components/card.jsx'; // Corrected import statement to match the file name casing
import React from 'react';  // Import React to use JSX syntax     

function App() {
  // Removed unused state variable 'count'

  // let myObj = {
    // name:"Harshit",
  //   age:21
  // }
  // agr hmm object pass kr skte h toh kya arr bhi pass kr skte h kya props m

  // let newArr = [1,2,3]

  return (
    <>
        <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4' >TailWind Test </h1>
        {/* props-> jo bhi value hmm <Card /> m pass krenge vhi vha props m show hoo jayegi */}
        {/* jo phle object khali tha ab usme value chai aur code aa jayegi, iske saath koi array or koi object pass nhi kr skte saath m  */}
        {/* We have to pass as a variable */}
        {/* <Card channel="chai aur code" someObje = {myObj} secondObje = {newArr} />  */}
        {/* now card have to use this username so, --> props.username or directley destructuring krdo --> function Card(props) k jghe function Card({username}) */}
        <Card username="chai aur code" /> 
        <Card usernam="Harshit"/>
    </>
  )
}

export default App
