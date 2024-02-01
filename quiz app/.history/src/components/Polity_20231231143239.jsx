import React, { useState } from 'react'
import style from './polity.module.css'
import data from './subPolity.json'
import { useParams } from 'react-router-dom'
const Polity = () => {
    let obj=useParams()
    console.log(obj.id)
    let [index,setindex]=useState(0)
    let [ques,setques]=useState(data[index])
    let[lock,setLock]=useState(false)
    if(lock==false){
    
    }
    
  return (
    <div className={style.container}>
      <h1>{obj.id}</h1>
      <h2>{index+1}.{ques.Questions}- <span>{ques['asked in']}</span></h2>
      <ul>
        <li onClick={(e)=>{checkAns(e,ques.A)}} >{ques.A}</li>
        <li onClick={(e)=>{checkAns(e,ques.B)}} >{ques.B}</li>
        <li onClick={(e)=>{checkAns(e,ques.C)}} >{ques.C}</li>
        <li onClick={(e)=>{checkAns(e,ques.D)}} >{ques.D}</li>
        <button>next</button>
      </ul>
      <div className={style.index}>
           {index+1} to {data.length} questions
        </div>
    </div>
  )
}

export default Polity