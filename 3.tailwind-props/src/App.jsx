import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)
  const myInfo={age:10, email:"h@h.com",pass:123}
  const myArr = [1,2,3]
  return (
   <div>
    <h1 className='bg-green-400 text-black p-5 rounded-lg capitalize font-semibold mb-3'>Backbone of PCT</h1>
    <h3 className='m-4 bg-slate-600 text-white p-3 rounded-full'>Below card's name, description(desc), role, and url are passed through props</h3>
    <Card url = "https://www.pngguru.in/storage/uploads/images/babar-azam-new-jersey-free-png-photo_1717411213_1755023614.webp" name="Babar Azam" desc = "Rign handed opening batsman with elegant style and stylish strokes" role ="Batsman"/>
    <Card url ="https://www.pngguru.in/storage/uploads/images/Shaheen%20Afridi%20Pakistani%20cricketer%20free%20HD%20PNG%20Image_1696787243_632614253.webp" name="Shaheen Afridi" desc="Left arm fast bowler brilliant in the first over can swing the ball both ways" role="Bowler"/>
    <Card url="https://static.cricketaddictor.com/wp-content/uploads/2023/08/Naseem-Shah.png?q=80" name="Naseem Shah" desc ="Star boy of pakitsan cricket team economical bowler brilliant in pressure situations can hit the bowl as well " role="Bowler"/>
    <h4 className='text-black bg-slate-400'>Passed Default props</h4>
    <Card/>
   </div>
  )
}

export default App
