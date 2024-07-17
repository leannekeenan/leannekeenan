import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//place in the order you want the nav elements
import Home from './assets/pages/Home.jsx'
import Staff from './assets/pages/Staff.jsx'
import Services from './assets/pages/Services.jsx'
import Booking from './assets/pages/Booking.jsx'
import Admin from './assets/pages/Admin.jsx'
import Terms from './assets/pages/Terms.jsx'


import './assets/css/index.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
//place in the order you want the nav elements


ReactDOM.createRoot(document.getElementById('root')).render(
  //building a router for nav functionality
  <Router>
    <Routes>
      <Route  path='/' element={<App/>}>
        <Route index element={<Home/>}/>
        <Route path="staff" element={<Staff/>}/>
        <Route path="services" element={<Services/>}/>
        <Route path="booking" element={<Booking/>}/>
        <Route path="admin" element={<Admin/>}/>
        <Route path="terms" element={<Terms/>}/>
      </Route>
    </Routes>
  </Router>
)

