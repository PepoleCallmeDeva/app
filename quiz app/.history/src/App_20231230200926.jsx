import React from 'react'
import Home from './components/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Polity from './components/Polity'
import Physics from './components/Physics'
const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route element={<Home/>} path='/'/>
      r
      <Route element={<Physics/>} path='/Physics'/>
     </Routes>
     </BrowserRouter>
      </div>
  )

}

export default App