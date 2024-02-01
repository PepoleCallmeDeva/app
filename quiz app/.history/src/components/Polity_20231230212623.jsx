import React from 'react'
import ques from './subPolity.json'
const Polity = () => {
console.log(ques)
  return (
    <div>
       {ques.map(())}
    </div>
  )
}

export default Polity