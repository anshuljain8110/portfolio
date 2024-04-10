import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

export default function Navbar({re,setre}){
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <nav>
        <div className="logo">
            <Link to='/#home'>Anshul Jain</Link>
        </div>
        <div className='routes'>
          <button onClick={()=>{setre(!re)}}><img src={process.env.PUBLIC_URL + "/svg/menu.svg"} alt='Not Found' height="25px"/></button>
          <div style={re ? { right: "5px", opacity: "1" } : {}}>
            <Link to="/portfolio" onClick={() => scrollToSection('home')}>Home</Link>
            <Link to="/portfolio" onClick={() => scrollToSection('projects')}>Projects</Link>
            <Link to="/portfolio" onClick={() => scrollToSection('contact')}>Contact</Link>
            <Link to="/blog">Blogs</Link>
          </div>
        </div>  
      </nav>
  )
}
