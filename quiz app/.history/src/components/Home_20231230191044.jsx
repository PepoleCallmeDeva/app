import React from 'react'
import Nav from './Nav'
import style from './home.module.css'
import Subject from './Subject'
import
const Home = () => {
  return (
    <div id={style.main}>
        <Nav/>
        <Subject/>
    </div>
  )
}

export default Home