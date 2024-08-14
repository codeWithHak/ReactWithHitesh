import { useState } from "react"

function App() {
 
const [count, setCount] = useState(0)
const addValue = ()=>{
  if (count < 20) {
  setCount(count+1)
}}

const subtractValue = ()=>{
  if(count > 0) {
  setCount(count - 1)
}}
  return (
   <div className=" text-white grid place-items-center w-full h-screen bg-slate-700">
    <div className="space-y-4 text-center">
   <h1 className="font-semibold text-5xl bg-slate-900 p-5 rounded-xl">Count: {count}</h1>
   <button onClick={addValue} className="font-medium py-2 px-5 rounded-full bg-white text-slate-900 m-5" >Add +</button>
   <br />
   <button onClick={subtractValue} className="font-medium  py-2 px-5 rounded-full bg-white text-slate-900 m-5">Subtract -</button>
   </div>
   </div>
  )
}

export default App
