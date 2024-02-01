import React from 'react'
import style from './nav.module.css'
const Nav = () => {
  return (
    <div id={style.navbody}>
        <nav>
        <div id={style.left}>
            <h1><a href=""></a></h1>
        </div>

        <div id={style.right}>
            <button id={style.sign}>Sign up</button>
            <button id={style.login}>Login</button>
        </div>
    </nav>
    </div>
    
  )
}

export default Nav