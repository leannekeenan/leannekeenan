import React from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'


const App = () => {
  

  return (
    <div>
      
      <header>
        <h1>Beaute Salon</h1>
        <nav>
          
          <a href="/">Home</a>
          <a href="/staff">Staff</a>
          <a href="/services">Services</a>
          <a href="/about">About</a>
          <a href="/appointments">Appointments</a>
        
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default App