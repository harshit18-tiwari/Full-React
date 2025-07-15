import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

// useState hook is used to propagate the change in UI(DOM k andhar)

  const [counter, setCounter]=useState(15) // default value m kuch bhi dijiye, abhi 15 h
  // counter -- ek variable h aur setCounter counter ko control krne k liye

  // let counter = 5 
  const addValue = () => {
   
    // counter+=1
    setCounter(counter+1)
    //  console.log("clicked", counter);
  }

  const removeValue = () =>{
    setCounter(counter-1)
  }
  return (
    <>
      
      <h1>Chai aur react</h1>
      <h2>Counter Vlue:{counter} </h2>

      <button // on button we are using onClick method in which we are passing {addvalue} only reference of the function, kyoki we want k click krne p cahnge hoo 
      onClick={addValue}>Add value{counter}</button>
      <br/>
      <button
      onClick={removeValue}>Decrease value {counter}</button>
      {/* agr UI m change krna h toh react change krega, waise toh hm js s kr hi lenge, but UI m krna h toh yha p hmme hooks k need pdti h, UI updation ko hooks control krta h */}
    
    </>
  )
}

export default App
