import React, { useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from './subPolity.json'
import style from './polity.module.css'
const Polity = () => {
  let obj=useParams()
  let [index, setindex] = useState(0)
  let [ques, setques] = useState(data[index])
  let [lock, setLock] = useState(false)
  let A=useRef(null)
  let B=useRef(null)
  let C=useRef(null)
  let D=useRef(null)
  let correct_option=[A>B<C<D]
  console.log(obj);
  let checkAns=(e,ans)=>{
    if (lock === false) {
      if (ans === ques.answer) {
        console.log('correct');
        e.target.style.backgroundColor = "green"
        lock = true;
      }
      else {
        console.log('wrong');
        e.target.style.backgroundColor = "red"
        lock = true;
      }
    }
  }
  return (
    <div className={style.container}>
        <h1>{obj.id}</h1>
        <h2>{index + 1}.{ques.Questions}- <span>{ques['asked in']}</span></h2>
        <ul>
          <li onClick={(e) => { checkAns(e, 1) }} >{ques.A}</li>
          <li onClick={(e) => { checkAns(e, 2) }} >{ques.B}</li>
          <li onClick={(e) => { checkAns(e, 3) }} >{ques.C}</li>
          <li onClick={(e) => { checkAns(e, 4) }} >{ques.D}</li>
          <button>next</button>
        </ul>
        <div className={style.index}>
          {index + 1} to {data.length} questions
        </div>
      </div>
  )
}

export default Polity