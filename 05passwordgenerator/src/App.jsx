import { useState, useCallback, useEffect, useRef } from 'react'



function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook(we have to make varibale)
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1) // yeh toh array ka index aaya h
      pass += str.charAt(char) //pass m add krdenge
      
    }

    setPassword(pass) // password jo aaya h usko read kiay 


  }, [length, numberAllowed, charAllowed, setPassword])
// to copy but only password we use useRef hook
  const copyPasswordToClipboard = useCallback(() => {
    //work of passRef ?.select() --> optional select
    passwordRef.current?.select();
    //Range bhi bta skte hoo
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password) //kyoki yeh browser p render hoga uske pass window object hota h
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input //input in react 
            type="text"
            value={password} //jo state k andhar set kr rkhi h vhi hm yha p le lenge
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef} // for reference -- useRef
        />
        <button // adding button
        // copyPasswordToClipboard --> it is a method  
        onClick={copyPasswordToClipboard} //botton ko functionable bnnane k liye// to make button working we using onClick
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}} // onChange event to link length to scrolling
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => { // same onChange event prev ko reverse kr diya
              setNumberAllowed((prev) => !prev); //(true or false ko reverse krta rhega)
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )//setCharAllowed(true), agr aise true kr diya toh voh true hi rhega
              }}// same for setCharAllowed
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    
  )
}

export default App