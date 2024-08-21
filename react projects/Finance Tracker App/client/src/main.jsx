import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home.jsx'
import Analysis from './components/Analysis.jsx'
import Data from './components/Data.jsx'
import Navbar from './components/Navbar.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path='/' element={<App/>}>
          <Route index element={<Home/>}/>
          <Route path='navbar' element={<Navbar/>}/>
          <Route path='analysis' element={<Analysis/>}/>
          <Route path='data' element={<Data/>}/>
      </Route>
    </Routes>
  </Router>
)