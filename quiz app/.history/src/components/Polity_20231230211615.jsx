import React from 'react'
import data from './polity.json'
const Polity = () => {
  return (
    <div>
        {data.map((x)=>{
            return(
                <div>

                </div>
            )
        })}
    </div>
  )
}

export default Polity