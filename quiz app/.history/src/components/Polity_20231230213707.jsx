import React from 'react'
import style from './polity.module.css'
const Polity = () => {
  return (
    <div className={style.container}>
      <h1>quiz</h1>
      <h2>question</h2>
      <ul>
        <li>option1</li>
        <li>option2</li>
        <li>option3</li>
        <li>option4</li>
        <button>next</button>
        <div className={style.index}>
           
        </div>
      </ul>
    </div>
  )
}

export default Polity