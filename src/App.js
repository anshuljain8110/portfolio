import './App.css';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';
import Portfolio from './components/portfolio/Portfolio';
function App() {
  return (
    <>
    <Navbar/>
    <Main/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
