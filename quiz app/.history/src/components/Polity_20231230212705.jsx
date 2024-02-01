import React from 'react'
import ques from './subPolity.json'
const Polity = () => {
console.log(ques)
  return (
    <div>
       {ques.map((x)=>{
        return(
            <div>
               <h1>{x.}</h1>
            </div>
        )
       })}
    </div>
  )
}

export default Polity