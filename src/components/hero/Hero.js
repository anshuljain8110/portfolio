import React,{useState} from 'react'
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import Main from '../main/Main';
import Navbar from '../navbar/Navbar';
import Portfolio from '../portfolio/Portfolio';

export default function Hero() {
  const [ref,setref]=useState(false)
  const toggle=()=>{
    if(ref===true){
      setref(false)
    }
  }
    return (
      <div onClick={()=>{toggle()}}>
      <Navbar re={ref} setre={setref}/>
      <Main/>
      <Portfolio/>
      <Contact/>
      <Footer/>
      {/* <Chatbox/> */}
      </div>
    );
}
