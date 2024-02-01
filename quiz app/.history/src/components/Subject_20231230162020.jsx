import React from 'react'
import style from './subject.module.css'
const Subject = () => {
    let subjects=["Physics","Chemistry","Ancient India","Medival India","Modern India","Geography","Geography static","Economics","Polity","Appointments"]
  return (
    <div>
        {subjects.map((x)=>{
            return(
                <div id={style.sub}>
                     <h1>
                        {x}
                        bu
                     </h1>
                </div>
            )
        })}
    </div>
  )
}

export default Subject