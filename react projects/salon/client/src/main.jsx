import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import About from './pages/About.jsx'
import Appointments from './pages/Appointments.jsx'
import Bookings from './pages/Bookings.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Signin from './pages/Signin.jsx'
import Staff from './pages/Staff.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
