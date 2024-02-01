import React from 'react'
import style from './nav.module.css'
const Nav = () => {
  return (
    <nav>
        <div id={style.left}>
            <img src="./img/logo.png" alt="this is logo" />
            <h1>Test You</h1>
        </div>

        <div id='right'>
            <button>Sign up</button>
            <button>Login In</button>
        </div>
    </nav>
  )
}

export default Nav