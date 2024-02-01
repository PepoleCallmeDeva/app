import React from 'react'
import { useParams } from 'react-router-dom'
import data from './subPolity.json'
import sty
const Polity = () => {
  let obj=useParams()
  console.log(obj);
  return (
    <div>
    Polity
      
    </div>
  )
}

export default Polity