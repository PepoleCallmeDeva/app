import React from 'react'
import ques from './subPolity.json'
const Polity = () => {
console.log(ques)
  return (
    <div>
       {ques.map((x)=>{
        return(
            <div>

            </div>
        )
       })}
    </div>
  )
}

export default Polity