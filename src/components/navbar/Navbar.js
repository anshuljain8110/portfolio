import React, { useContext, useState } from "react";
import { Data } from "../../context/Userdata";
import { Link } from "react-router-dom";

export default function Navbar() {
  const data = useContext(Data);
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
    <div className="sticky top-1 z-20">
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
      <div
        className={`fixed text-white bg-yellowPrimary rounded-bl-full h-[40vh] w-[40vh] lg:h-[30vw] lg:w-[30vw] duration-500 transition-all ${
          burger ? " right-0 top-0 " : " -right-full "
        }`}
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
          <Link className={links} to="/blog">
            Blogs
          </Link>
          {/* <button className={links} onClick={() => data.setTheme(!data.theme)}>
            Theme
          </button> */}
        </div>
      </div>
    </div>
  );
}
