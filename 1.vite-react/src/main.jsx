import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'


function MyApp() {
  return (
    <h1>I am a custom function</h1>
  )
}

// Rhis is our custom library react does not excepts these props to be in this pattern. --So thi will not work--
// const reactElement = {
//   type:'a',
//   attributes:{
//       href:"https://google.com",
//       target:"_blank"
//   },
//   child:"Click me to visit google"
// }


// React will parse this into an object  --So this will work but still react has to parse it--
// const anotherElement = <a href="https://google.com" target="_blank">Visit Google</a>

// This is how react excepts props to be. This is the correct structure. --This will work perfectly and need no parsing-- !! In this element we will use react's own method React.createElement 

const newElement = " -Inject me into JSX"

const reactElement = React.createElement(
  'a',
  {href:"https://google.com", target:"_blank"},
  "Click me to visit google",
  newElement
)



ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
)
