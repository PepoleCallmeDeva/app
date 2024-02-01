import React from 'react'
import style from './nav.module.css'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div id={style.navbody}>
        <nav>
        <div id={style.left}>
            <Link></Link><h1>T<span>est</span>Y<span>ou</span></h1>
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