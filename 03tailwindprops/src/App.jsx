import './App.css'
import Card from './components/card.jsx'; // Corrected import statement to match the file name casing
import React from 'react';  // Import React to use JSX syntax     

function App() {
  // Removed unused state variable 'count'

  return (
    <>
        <h1 className='bg-green-400 text-black p-4 rounded-xl' >TailWind Test</h1>
        <Card channel="chai aur code" />
        <Card />
    </>
  )
}

export default App
