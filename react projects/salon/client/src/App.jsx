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

      <footer>
        <div className="social">
          <img src="../public/facebook [white].png" alt="" />
          <img src="../public/instagram [white].png" alt="" />
          <img src="../public/snapchat [white].png" alt="" />
          <img src="../public/threads [white].png" alt="" />
          <img src="../public/twitter [white].png" alt="" />
        </div>
        <div className="details"></div>
      </footer>
      
    </div>
  )
}

export default App