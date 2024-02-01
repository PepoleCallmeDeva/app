import React from 'react'
import data from './polity.json'
const Polity = () => {
    console.log()
  return (
    <div>
        {data.map((x)=>{
            return(
                <div>
                   <h1>hi</h1>
                </div>
            )
        })}
    </div>
  )
}

export default Polity