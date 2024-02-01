import React, { useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from './subPolity.json'
import style from './polity.module.css'
const Polity = () => {
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
        console.log('correct');
        e.target.style.backgroundColor = "green"
        setLock(true)
        setscore(prev=>prev+1)
      }
      else {
        console.log('wrong');
        e.target.style.backgroundColor = "red"
        setLock(true)
        correct_option[ques.answer-1].current.style.backgroundColor='green'
      }
    }
  }

  let next=(e)=>{
    if(lock===true){
      if(index===data.length){
        setres(true)
        return 0
      }
       setindex(++index) 
       setques(data[index])
       setLock(false)
       console.log(data[index]);
       correct_option.map((x)=>{
        return(
          x.current.style.backgroundColor='transparent'
        )
       })
    }
  }
console.log(data[index]);
  return (
    <div className={style.container}>
        <h1>{obj.id}</h1>
        {res?<></>:<></>}
        
      </div>
  )
}

export default Polity