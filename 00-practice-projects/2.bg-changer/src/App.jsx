import { useState } from "react"

function App() {

  const [color,setColor] = useState("green")


  return (
  <div className= "w-full h-screen" style={{backgroundColor:color}}>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0  px-2">
      <div className="flex flex-wrap gap-3 justify-center px-4 py-3 shadow-2xl bg-white rounded-3xl font-normal text-xl text-white">
        <button onClick={()=>setColor("black")} style={{backgroundColor:"black"}} className=" py-2 px-4 rounded-full">Black</button>
        <button onClick={()=>setColor("red")} style={{backgroundColor:"red"}} className=" py-2 px-4 rounded-full">Red</button>
        <button onClick={()=>setColor("blue")} style={{backgroundColor:"blue"}} className=" py-2 px-4 rounded-full">Blue</button>
        <button onClick={()=>setColor("green")} style={{backgroundColor:"green"}} className=" py-2 px-4 rounded-full">Green</button>
          </div>
        </div>
  </div>

  )
}

export default App
