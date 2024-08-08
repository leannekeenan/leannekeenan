import React from 'react'
import { Outlet } from 'react-router-dom'



const App = () => {
  

  return (
    <div>
      
      <header>
        <h1><img src="../public/istockphoto-2158631426-612x612 -2.png" alt="" /> Beaute Salon</h1>
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