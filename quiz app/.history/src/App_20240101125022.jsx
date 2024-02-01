import React from 'react'
import Home from './components/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Polity from './components/Polity'
import Physics from './components/Physics'
import Chemistry from './components/Chemistry'
const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<Polity/>} path='/Polity/:id'/>
      <Route element={<Physics/>} path='/Physics/:id'/>
      <Route element={<Chemistry/>} path='/Chemistry/:id'/>
      <Route element={<Physics/>} path='/Physics/:id'/>
      <Route element={<Physics/>} path='/Physics/:id'/>
      <Route element={<Physics/>} path='/Physics/:id'/>
     </Routes>
     </BrowserRouter>
      </div>
  )

}

export default App