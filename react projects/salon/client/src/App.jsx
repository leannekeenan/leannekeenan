import React from 'react'
import { Outlet } from 'react-router-dom'



const App = () => {
  const style = {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '100px',
  };

  return (
    <div>
      
      <header>
        <img src="../public/istockphoto-2158631426-612x612 -2.png" alt="" /> 
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

      <footer style={style}>
        <div className="social">

          <a href="">
            <img src="../public/facebook [white].png" alt="" />
          </a>
          
          <a>
            <img src="../public/instagram [white].png" alt="" />
          </a>

          <a>
            <img src="../public/snapchat [white].png" alt="" />
          </a>

          <a>
            <img src="../public/threads [white].png" alt="" />
          </a>

          <a>
            <img src="../public/twitter [white].png" alt="" />
          </a>

        </div>
        <div className="details">
          <p className="address">737 Jefferson Ave, Suite 316</p>
          <p>Redwood City California, 94202</p>
        </div>
      </footer>
      
    </div>
  )
}

export default App