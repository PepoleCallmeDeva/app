import React, { useState } from 'react'
import style from './polity.module.css'
import data from './subPolity.json'
import { useParams } from 'react-router-dom'
const Polity = () => {
    let obj=useParams()
    console.log(obj.id)
    let [index,setindex]=useState(0)
    let [ques,setques]=useState(data[index])
    const checkAns=(e)=>{
      if(e.target.value===ques.answer){
        console.log('correct');
      }
      else{
        console.log('wrong');
      }
      console.log(e.target.value);
      console.log(ques.answer);
    }
  return (
    <div className={style.container}>
      <h1>{obj.id}</h1>
      <h2>{index+1}.{ques.Questions}- <span>{ques['asked in']}</span></h2>
      <ul>
        <li onClick={(e)=>{ch}} >{ques.A}</li>
        <li onClick={(e)=>{ch}} >{ques.B}</li>
        <li onClick={(e)=>{ch}} >{ques.C}</li>
        <li onClick={(e)=>{ch}} >{ques.D}</li>
        <button>next</button>
      </ul>
      <div className={style.index}>
           {index+1} to {data.length} questions
        </div>
    </div>
  )
}

export default Polity