import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  const [name, setName] = useState(name)

  return (
    <>
    <header>
      <h1>Welcome to your template booking react project</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/staff">Staff</a>
        <a href="/services">Services</a>
        <a href="/booking">Booking</a>
        <a href="/admin">Admin</a>
      </nav>
    </header>

    <main>
      <Outlet/> 
    </main>
      
    </>
  )
}

export default App
