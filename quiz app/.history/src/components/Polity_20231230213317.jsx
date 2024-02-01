import React from 'react'

const Polity = () => {
console.log(ques)
  return (
    <div>
       {ques.map((x)=>{
        return(
            <div>
               <h1>{x.Questions}</h1>
            </div>
        )
       })}
    </div>
  )
}

export default Polity