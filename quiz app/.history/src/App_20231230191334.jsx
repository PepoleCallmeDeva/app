import React from 'react'
import Home from './components/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Polity from './components/Polity'
const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Home/>
     <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<Polity/>} path/>
     </Routes>
     </BrowserRouter>
      </div>
  )

}

export default App