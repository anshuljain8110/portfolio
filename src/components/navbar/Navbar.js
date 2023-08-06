import React from 'react'
import "./Navbar.css"
export default function Navbar({re,setre}) {
  // const [ref,setref]=useState(false)

  return (
    <nav>
        <div className="logo">
            <a href='#home'>Anshul Jain</a>
        </div>
        <div className='routes'>
          <button onClick={()=>{setre(!re)}}><img src='svg/menu.svg' alt='Not Found' height="25px"/></button>
          <div style={re?{right:"5px",opacity:"1"}:{}}>
            <a href="#home">Home</a>
            <a href="/#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
    </nav>
  )
}
