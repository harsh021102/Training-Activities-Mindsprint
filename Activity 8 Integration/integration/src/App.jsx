import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Register from './Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <Link className='nav-link' to="login">Login</Link>
        <Link className='nav-link' to="register">Register</Link>

        <Routes>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
