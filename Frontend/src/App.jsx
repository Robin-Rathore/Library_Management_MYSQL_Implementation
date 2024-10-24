import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './Components/Authpages/Register'
import Login from './Components/Authpages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Login/>
      {/* <Register/>   */}
    </>
  )
}

export default App
