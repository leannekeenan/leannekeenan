import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Admin from './pages/Admin.jsx'
import Booking from './pages/Booking.jsx'
import Services from './pages/Services.jsx'
import Staff from './pages/Staff.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path='/' element={<App/>}>
      
      {/*Navigation Routes*/}
        <Route index element={<Home/>}/>
        <Route path='staff' element={<Staff/>}/>
        <Route path='services' element={<Services/>}/>
        <Route path='booking' element={<Booking/>}/>
        <Route path='admin' element={<Admin/>}/>

        {/*Button Routes*/}
      </Route>
    </Routes>
  </Router>
)
