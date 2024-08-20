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
      <div className='font-mono transition-all' onClick={()=>{toggle()}}>
      <Navbar/>
      <Main/>
      <hr className='h-px border-0 bg-orangePrimary' />
      <Portfolio/>
      <hr className='h-px border-0 bg-orangePrimary' />
      <Contact/>
      <hr className='h-px border-0 bg-orangePrimary' />
      <Footer/>
      </div>
    );
}
