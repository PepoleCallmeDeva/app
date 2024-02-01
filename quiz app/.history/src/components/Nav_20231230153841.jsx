import React from 'react'
import style from './nav.module.css'
const Nav = () => {
  return (
    <nav>
        <div id={style.left}>
            <h1>T<span>est</span>Y<span>ou</span></h1>
        </div>

        <div id={style.right}>
            <button id={style.}>Sign up</button>
            <button id={}>Login In</button>
        </div>
    </nav>
  )
}

export default Nav