import {useState, useCallback,useEffect,useRef} from "react"
function App() {

  let [numLength, setNumLength] = useState(8)
  let [numAllowed, setNumAllowed] = useState(false)
  let [charAllowed, setCharAllowed] = useState(false)
  let [password, setPassword] = useState("")

  let passRef = useRef(null)

  let passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!@_#$%^&*-"

    for (let i = 1; i < numLength; i++) {
      let char = Math.floor(Math.random()*str.length) + 1 
      pass += str.charAt(char)
      
    }
setPassword(pass) 
    
  },[ numLength,numAllowed,charAllowed,setPassword])

  const copyPassToClip = useCallback(()=>{
    passRef.current?.select()
    passRef.current?.setSelectionRange(0,18)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{passwordGenerator()},[numLength,numAllowed,charAllowed,passwordGenerator])

return(
  <>
  <div className="w-2/4 mx-auto shadow-md rounded-lg px-8 py-6 my-10 text-orange-500 bg-gray-800 text-center text-3xl">
    <h1 className="text-center text-white my-3 pb-2 w">Password Generator</h1>
    <div className="flex shadow-lg overflow-hidden mb-4">
      <input type="text"
             value={password}
             placeholder="password"
             className="outline-none w-full pt-2 pb-4 px-3 rounded-lg pl-4"
             ref={passRef}
             readOnly />
    <button className="bg-green-600 px-3 pb-2 py-0.5 rounded-lg shrink-0 text-white ml-2" onClick={copyPassToClip}>copy</button>
    </div>
    <div className="flex text-sm gap-x-2">
      <div className="flex items-center gap-x-1">
        <input 
        type="range"
        min={6}
        max={18}
        value={numLength}
        className="cursor-pointer"
        onChange={(e)=>{setNumLength(e.target.value)}}/>
      </div>
        <label className="text-xl">Length: {numLength}</label>
      <div className="flex items-center gap-x-1.5 px-2">
        <input 
        className=""
        type="checkbox"
        defaultChecked={numAllowed}
        onChange={(e)=>{setNumAllowed((prev)=>!prev)}}
        id="numberInput"/>
      </div>
        <label className="text-xl " htmlFor="numberInput">Numbers</label>
        <div className="flex items-center gap-x-1.5 px-2">
        <input 
        className=""
        type="checkbox"
        defaultChecked={numAllowed}
        onChange={(e)=>{setCharAllowed( (prev)=>!prev)}}
        id="charInput"/>
      </div>
        <label className="text-xl " htmlFor="charInput">Characters</label>
    </div>
  </div>
  </>
  
)  
}

export default App
