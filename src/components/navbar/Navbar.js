import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'

export default function Navbar() {
  // const data = useContext(Data);
  const [burger, setBurger] = useState(false);

  const links =
    "text-center px-4 py-1  text-white text-2xl hover:text-orangePrimary duration-300 font-bold";

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
    
    className="sticky top-1 z-20">
      <nav className="absolute text-white top-4 right-4 ">
        <button
          className="bbttnn rounded-full bg-yellowPrimary p-2 h-20 w-20 relative"
          onClick={() => {
            setBurger(!burger);
          }}
        >
          <span
            className={`
        before:content-[''] before:h-1 before:w-10 before:bg-white before:absolute  before:left-0 before:rounded-full before:duration-200
        
        h-1 w-10 rounded-full block bg-white top-4 absolute ml-3 mt-2 duration-200
        
        after:content-[''] after:h-1 after:w-10 after:bg-white after:absolute after:duration-200 after:left-0 after:rounded-full

        ${
          burger
            ? "after:top-0 top-8 before:top-0 after:rotate-45 before:-rotate-45 bg-yellowPrimary"
            : "before:top-3 after:top-6"
        }
        `}
          ></span>
        </button>
      </nav>
      
      <motion.div
      initial={{x:500,y:500}}
      animate={{x:burger?0:500,y:burger?0:-500}} 
        className={`fixed right-0 top-0 text-white bg-yellowPrimary rounded-bl-full h-[40vh] w-[40vh] lg:h-[30vw] lg:w-[30vw]`}
      >
        <div className=" flex flex-col align-center justify-center pl-16 pt-16 xl:pl-32 xl:pt-32">
          <Link
            className={links}
            to="/portfolio"
            onClick={() => {scrollToSection("home"); setBurger(!burger)}}
          >
            Home
          </Link>
          <Link
            className={links}
            to="/portfolio"
            onClick={() => {scrollToSection("projects"); setBurger(!burger)}}
          >
            Projects
          </Link>
          <Link
            className={links}
            to="/portfolio"
            onClick={() => {scrollToSection("contact"); setBurger(!burger)}}
          >
            Contact
          </Link>
          {/* <Link className={links} to="/blog">
            Blogs
          </Link> */}
          <Link className={links} target="_blank" to="https://drive.google.com/drive/folders/1DYOKra4gmNS1mdTE0TpPoPF4dQqLssNP?usp=sharing">
            Resume
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
