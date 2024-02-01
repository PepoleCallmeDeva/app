import React from 'react'
import data from './polity.json'
const Polity = () => {
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