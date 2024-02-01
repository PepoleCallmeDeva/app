import React, { useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from './subPolity.json'
import style from './polity.module.css'
import a from './useCountDown'
const Polity = () => {
  const[secondsLeft,start]=useCountDown()
  
  let obj=useParams()
  let [index, setindex] = useState(0)
  let [ques, setques] = useState(data[index])
  let [lock, setLock] = useState(false)
  let [score,setscore]=useState(0)
  let A=useRef(null)
  let B=useRef(null)
  let C=useRef(null)
  let D=useRef(null)
  let correct_option=[A,B,C,D]
  let[res,setres]=useState(false)
  // console.log(obj);
  let checkAns=(e,ans)=>{
    if (lock === false) {
      if (ans === ques.answer) {
        e.target.style.backgroundColor = "green"
        setLock(true)
        setscore(prev=>prev+1)
      }
      else {
        e.target.style.backgroundColor = "red"
        setLock(true)
        correct_option[ques.answer-1].current.style.backgroundColor='green'
      }
    }
  }

  let next=(e)=>{
    if(lock===true){
      if(index===data.length-1){
        setres(true)
        setindex(0)
        return 0

      }
       setindex(++index) 
       setques(data[index])
       setLock(false)
       correct_option.map((x)=>{
        return(
          x.current.style.backgroundColor='transparent'
        )
       })
    }
  }

  let reset_btn=()=>{
    setques(data[index])
    setLock(false)
    setres(false)
    setscore(0)
    console.log(ques);
    console.log(index);
  }
  return (
    <div className={style.container}>
        <h1>{obj.id}  <span>{start(60)}{secondsLeft>0 && `(${secondsLeft})`}</span></h1> 
        {res?<><h2>you had {score} out of {data.length}</h2><button onClick={reset_btn}>reset</button></>:<><h2>{index + 1}.{ques.Questions}- <span>{ques['asked in']}</span></h2>
        <ul>
          <li ref={A} onClick={(e) => { checkAns(e, 1) }} >{ques.A}</li>
          <li ref={B} onClick={(e) => { checkAns(e, 2) }} >{ques.B}</li>
          <li ref={C} onClick={(e) => { checkAns(e, 3) }} >{ques.C}</li>
          <li ref={D} onClick={(e) => { checkAns(e, 4) }} >{ques.D}</li>
          <button onClick={next}>next</button>
        </ul>
        <div className={style.index}>
          {index + 1} to {data.length} questions
        </div></>}
      </div>
  )
}

export default Polity