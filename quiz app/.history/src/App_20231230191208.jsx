import React from 'react'
import Home from './components/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Home/>
     <Routes>
      <Route />
     </Routes>
     </BrowserRouter>
      </div>
  )

}

export default App