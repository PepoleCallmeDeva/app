import React, { useState } from 'react'
import style from './polity.module.css'
import data from './subPolity.json'
import { useParams } from 'react-router-dom'
const Polity = () => {
    let obj=useParams()
    co
    let [index,setindex]=useState(0)
    let [ques,setques]=useState(data[index])
  return (
    <div className={style.container}>
      <h1>quiz</h1>
      <h2>{ques.Questions}</h2>
      <ul>
        <li>option1</li>
        <li>option2</li>
        <li>option3</li>
        <li>option4</li>
        <button>next</button>
        <div className={style.index}>
           1 to 5 questions
        </div>
      </ul>
    </div>
  )
}

export default Polity