import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
  

const addValue = ()=>{
  if (counter < 20){
  counter+=1
  setCounter(counter)
  console.log("value added",counter);
  }
}

const removeValue = () =>{
  if (counter > 0){
  counter -= 1
  setCounter(counter)
  console.log("value removed:",counter);
  }
}

  return (
    <>
    <h1>Huzair JSX</h1>
    <h2>Counter: {counter}</h2>
    <button onClick={addValue}>Add Value</button>
    <br />
    <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
