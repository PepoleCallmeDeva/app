import React from 'react'
import style from ''
const Nav = () => {
  return (
    <nav>
        <div id='left'>
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