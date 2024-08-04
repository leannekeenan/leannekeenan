import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Staff from './pages/Staff.jsx'
import Services from './pages/Services.jsx'
import Appointments from './pages/Appointments.jsx'
import Admin from './pages/Admin.jsx'
import Bookings from './pages/Bookings.jsx'
import Login from './pages/Login.jsx'
import Create from './pages/Create.jsx'




import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path='/' element={<App/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='staff' element={<Staff/>}/>
          <Route path='services' element={<Services/>}/>
          <Route path='appointments' element={<Appointments/>}/>
          <Route path='admin' element={<Admin/>}/>
          <Route path='bookings' element={<Bookings/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='create' element={<Create/>}/>
      </Route>
    </Routes>
  </Router>
)