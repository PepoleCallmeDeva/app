import React, { useState } from 'react'
import style from './polity.module.css'
import data from './subPolity.json'
import { useParams } from 'react-router-dom'
const Polity = () => {
    let obj=useParams()
    console.log(obj.id)
    let [index,setindex]=useState(0)
    let [ques,setques]=useState(data[index])
  return (
    <div className={style.container}>
      <h1>{obj.id}</h1>
      <h2>{index+1}.{ques.Questions}- <span>{ques['asked in']}</span></h2>
      <ul>
        <li>{}</li>
        <li>{}</li>
        <li>{}</li>
        <li>{}</li>
        <button>next</button>
      </ul>
      <div className={style.index}>
           1 to 5 questions
        </div>
    </div>
  )
}

export default Polity