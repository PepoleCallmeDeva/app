import React from 'react'
import list from './Polity.json'
const Polity = () => {
  return (
    <div>
       {list.map((x)=>{
        return(
            <div>
               
            </div>
        )
       })}
    </div>
  )
}

export default Polity