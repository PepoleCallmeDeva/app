import React from 'react'
import style from './subject.module.css'
import {Li}
const Subject = () => {
    let subjects=["Physics","Chemistry","Ancient India","Medival India","Modern India","Geography","Geography static","Economics","Polity","Appointments"]
  return (
    <div id={style.sbody}>
        {subjects.map((x)=>{
            return(
                <div id={style.sub}>
                     <h1>{x}</h1>
                     <a href="">Take Quiz</a>
                </div>
            )
        })}
    </div>
  )
}

export default Subject