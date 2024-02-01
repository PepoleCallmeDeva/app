import React from 'react'
import style from './nav.module.css'
const Nav = () => {
  return (
    <nav>
        <div id={style.left}>
            <h1>T  U</h1>
        </div>

        <div id={style.right}>
            <button>Sign up</button>
            <button>Login In</button>
        </div>
    </nav>
  )
}

export default Nav