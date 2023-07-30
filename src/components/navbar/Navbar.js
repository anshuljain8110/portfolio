import React, { useState } from 'react'
import "./Navbar.css"
export default function Navbar() {
  const [ref,setref]=useState(false)

  return (
    <nav>
        <div className="logo">
            <a href='#home'>Anshul Jain</a>
        </div>
        <div className='routes'>
          <button onClick={()=>{setref(!ref)}}><img src='svg/menu.svg' alt='Not Found' height="25px"/></button>
          <div style={ref?{right:"20px",opacity:"1"}:{}}>
            <a href="#home">Home</a>
            <a href="/#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
    </nav>
  )
}
