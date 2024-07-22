import React from 'react'
import { Outlet } from 'react-router-dom'


import './App.css'

function App() {
  

  return (
    <div>
      <header>
        <h1>Header</h1>
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
      
    </div>
  )
}

export default App
