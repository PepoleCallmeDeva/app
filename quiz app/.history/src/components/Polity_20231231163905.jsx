import React from 'react'
import { useParams } from 'react-router-dom'

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