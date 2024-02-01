import React from 'react'
import Home from './components/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Polity from './components/Polity'
import Physics from './components/Physics'
import Chemistry from './components/Chemistry'
import Economics from './components/Economics'
import Appointments from './components/Appointments'
import Geography from './components/Geography'
import MedivalIndia from './components/MedivalIndia'
const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<Polity/>} path='/Polity/:id'/>
      <Route element={<Physics/>} path='/Physics/:id'/>
      <Route element={<Chemistry/>} path='/Chemistry/:id'/>
      <Route element={<Economics/>} path='/Economics/:id'/>
      <Route element={<Appointments/>} path='/Appointments/:id'/>
      <Route element={<Geography/>} path='/Geography/:id'/>
      <Route element={<MedivalIndia/>} path='/MedivalIndia/:id'/>
      <Route element={<Mo/>} path='/Geography/:id'/>
     </Routes>
     </BrowserRouter>
      </div>
  )

}

export default App