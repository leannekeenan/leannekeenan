import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import Home from './assets/pages/Home.jsx'
import Admin from './assets/pages/Admin.jsx'
import Booking from './assets/pages/Booking.jsx'
import Services from './assets/pages/Services.jsx'
import Staff from './assets/pages/Staff.jsx'
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
