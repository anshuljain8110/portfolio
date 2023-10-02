import './App.css';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';
import Portfolio from './components/portfolio/Portfolio';
// import Chatbox from './components/chatbox/Chatbox'
import { useState } from 'react';
function App() {
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

export default App;
